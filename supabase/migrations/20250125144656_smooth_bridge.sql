/*
  # Add visibility control for training sessions

  1. Changes
    - Add is_visible column with default true
    - Update existing courses to be visible
*/

-- Add is_visible column
ALTER TABLE training_sessions 
ADD COLUMN IF NOT EXISTS is_visible boolean DEFAULT true;

-- Make sure all existing courses are visible
UPDATE training_sessions 
SET is_visible = true 
WHERE is_visible IS NULL;