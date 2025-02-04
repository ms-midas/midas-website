/*
  # Create training sessions table

  1. New Tables
    - `training_sessions`
      - `id` (uuid, primary key)
      - `course_name` (text)
      - `start_date` (date)
      - `end_date` (date)
      - `timezone` (text)
      - `time` (text)
      - `price` (numeric)

  2. Security
    - Enable RLS on `training_sessions` table
    - Add policy for public read access
    - Add policy for authenticated users to manage sessions
*/

CREATE TABLE IF NOT EXISTS training_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_name text NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  timezone text NOT NULL,
  time text NOT NULL,
  price numeric NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE training_sessions ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Allow public to view training sessions"
  ON training_sessions
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage training sessions"
  ON training_sessions
  USING (auth.role() = 'authenticated');

-- Add updated_at trigger
CREATE TRIGGER update_training_sessions_updated_at
  BEFORE UPDATE ON training_sessions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();