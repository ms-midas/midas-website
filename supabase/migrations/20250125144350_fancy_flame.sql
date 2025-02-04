/*
  # Add sample training sessions

  1. Changes
    - Add sample SIRI and COSIRI courses
    - Include various dates and timezones
    - Set appropriate display timezones
*/

INSERT INTO training_sessions (
  course_name,
  course_type,
  start_date,
  end_date,
  timezone,
  display_timezone,
  time,
  price
) VALUES
  -- UK Courses
  ('SIRI Assessor Training', 'SIRI', '2024-02-12', '2024-02-16', 'UK', 'UK (GMT) [UTC+0]', '09:00 - 17:00', 2495),
  ('COSIRI Assessor Training', 'COSIRI', '2024-02-19', '2024-02-23', 'UK', 'UK (GMT) [UTC+0]', '09:00 - 17:00', 2695),
  ('SIRI Assessor Training', 'SIRI', '2024-03-11', '2024-03-15', 'UK', 'UK (GMT) [UTC+0]', '09:00 - 17:00', 2495),
  
  -- UAE Courses
  ('SIRI Assessor Training', 'SIRI', '2024-02-26', '2024-03-01', 'UAE', 'UAE (GST) [UTC+4]', '09:00 - 17:00', 2495),
  ('COSIRI Assessor Training', 'COSIRI', '2024-03-18', '2024-03-22', 'UAE', 'UAE (GST) [UTC+4]', '09:00 - 17:00', 2695),
  ('SIRI Assessor Training', 'SIRI', '2024-04-15', '2024-04-19', 'UAE', 'UAE (GST) [UTC+4]', '09:00 - 17:00', 2495),
  
  -- USA Courses
  ('SIRI Assessor Training', 'SIRI', '2024-03-04', '2024-03-08', 'USA', 'USA (EST) [UTC-5]', '09:00 - 17:00', 2495),
  ('COSIRI Assessor Training', 'COSIRI', '2024-03-25', '2024-03-29', 'USA', 'USA (EST) [UTC-5]', '09:00 - 17:00', 2695),
  ('SIRI Assessor Training', 'SIRI', '2024-04-22', '2024-04-26', 'USA', 'USA (EST) [UTC-5]', '09:00 - 17:00', 2495);