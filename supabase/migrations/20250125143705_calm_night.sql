/*
  # Add display timezone column

  1. Changes
    - Add display_timezone column for formatted timezone display
    - Set default formatted values based on existing timezone
*/

-- Add display_timezone column
ALTER TABLE training_sessions 
ADD COLUMN IF NOT EXISTS display_timezone text;

-- Update display_timezone values based on timezone
UPDATE training_sessions 
SET display_timezone = 
  CASE timezone
    WHEN 'UK' THEN 'UK (GMT) [UTC+0]'
    WHEN 'UAE' THEN 'UAE (GST) [UTC+4]'
    WHEN 'USA' THEN 'USA (EST) [UTC-5]'
  END;

-- Make display_timezone NOT NULL after setting values
ALTER TABLE training_sessions 
ALTER COLUMN display_timezone SET NOT NULL;