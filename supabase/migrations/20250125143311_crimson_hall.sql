/*
  # Add course type and timezone constraints

  1. Changes
    - Add course_type column with default value
    - Update existing rows to have valid course_type and timezone values
    - Add constraints after data is valid

  2. Security
    - Existing RLS policies remain unchanged
*/

-- First add the course_type column without constraints
ALTER TABLE training_sessions 
ADD COLUMN IF NOT EXISTS course_type text;

-- Update any NULL or invalid course_type values to 'SIRI'
UPDATE training_sessions 
SET course_type = 'SIRI' 
WHERE course_type IS NULL OR course_type NOT IN ('SIRI', 'COSIRI');

-- Update any invalid timezone values to 'UK'
UPDATE training_sessions 
SET timezone = 'UK' 
WHERE timezone NOT IN ('UAE', 'UK', 'USA');

-- Now add NOT NULL constraint and check constraints
ALTER TABLE training_sessions 
ALTER COLUMN course_type SET NOT NULL,
ADD CONSTRAINT valid_course_type CHECK (course_type IN ('SIRI', 'COSIRI')),
ADD CONSTRAINT valid_timezone CHECK (timezone IN ('UAE', 'UK', 'USA'));