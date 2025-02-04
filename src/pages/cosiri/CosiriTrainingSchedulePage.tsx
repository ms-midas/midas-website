import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CosiriTrainingSchedulePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to training page with COSIRI filter
    navigate('/training', { state: { courseTypeFilter: 'COSIRI' } });
  }, [navigate]);

  return null;
};

export default CosiriTrainingSchedulePage;