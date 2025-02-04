/*
  # Create courses and bookings tables

  1. New Tables
    - `courses`
      - `id` (uuid, primary key)
      - `type` (text) - SIRI or COSIRI
      - `title` (text)
      - `logo` (text) - URL to logo image
      - `description` (text)
      - `duration` (text)
      - `start_date` (date)
      - `end_date` (date)
      - `time` (text)
      - `timezone` (text)
      - `display_timezone` (text)
      - `location` (text)
      - `price` (numeric)
      - `note` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `bookings`
      - `id` (uuid, primary key)
      - `course_id` (uuid, foreign key)
      - `contact_name` (text)
      - `email` (text)
      - `company` (text)
      - `include_certification` (boolean)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to manage courses
    - Add policies for public users to view courses
    - Add policies for authenticated users to manage bookings
*/

-- Create courses table
CREATE TABLE courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL CHECK (type IN ('SIRI', 'COSIRI')),
  title text NOT NULL,
  logo text NOT NULL,
  description text NOT NULL,
  duration text NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  time text NOT NULL,
  timezone text NOT NULL,
  display_timezone text NOT NULL,
  location text NOT NULL,
  price numeric NOT NULL,
  note text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  contact_name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  include_certification boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Courses policies
CREATE POLICY "Allow public to view courses"
  ON courses
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage courses"
  ON courses
  USING (auth.role() = 'authenticated');

-- Bookings policies
CREATE POLICY "Allow authenticated users to manage bookings"
  ON bookings
  USING (auth.role() = 'authenticated');

-- Add updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
CREATE TRIGGER update_courses_updated_at
  BEFORE UPDATE ON courses
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();