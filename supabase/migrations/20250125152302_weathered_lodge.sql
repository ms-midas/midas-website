/*
  # Update bookings table schema and policies

  1. Changes
    - Drop existing bookings table and recreate with new schema
    - Add columns for billing details, certification, and participants
    - Enable RLS and add policies for public access
    - Add data validation constraints

  2. Security
    - Allow public users to create bookings
    - Allow viewing only own bookings
*/

-- Drop existing table and recreate with new schema
DROP TABLE IF EXISTS bookings;

CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES training_sessions(id) ON DELETE CASCADE,
  billing_details JSONB NOT NULL,
  participants JSONB[] NOT NULL,
  include_certification boolean DEFAULT false,
  total_amount numeric NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT billing_details_required_fields CHECK (
    billing_details ? 'firstName' AND
    billing_details ? 'lastName' AND
    billing_details ? 'email' AND
    billing_details ? 'phone' AND
    billing_details ? 'companyName' AND
    billing_details ? 'billingAddress' AND
    billing_details ? 'country'
  ),
  CONSTRAINT participants_not_empty CHECK (array_length(participants, 1) > 0)
);

-- Enable RLS
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Add policies
CREATE POLICY "Allow public to create bookings"
  ON bookings
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public to view own bookings"
  ON bookings
  FOR SELECT
  TO public
  USING (billing_details->>'email' = current_setting('request.jwt.claims', true)::json->>'email');

-- Add updated_at trigger
CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();