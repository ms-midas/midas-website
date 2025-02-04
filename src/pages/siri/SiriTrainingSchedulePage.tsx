import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SiriTrainingSchedulePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to training page with SIRI filter
    navigate('/training', { state: { courseTypeFilter: 'SIRI' } });
  }, [navigate]);

  return null;
};

export default SiriTrainingSchedulePage;