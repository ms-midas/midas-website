import { BookingFormData, ValidationErrors } from '../types';

export const validateBillingDetails = (billingDetails: BookingFormData['billingDetails']): boolean => {
  const { firstName, lastName, email, phone, companyName, billingAddress, country } = billingDetails;
  return !!(firstName && lastName && email && phone && companyName && billingAddress && country);
};

export const validateParticipants = (participants: BookingFormData['participants']): boolean => {
  return participants.every(p => p.firstName && p.lastName && p.email);
};

export const validateEmail = (email: string): boolean => {
  return /\S+@\S+\.\S+/.test(email);
};