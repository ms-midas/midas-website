interface PriceCalculation {
  subtotal: number;
  vat: number;
  total: number;
}

export const calculateTotal = (
  price: number,
  participantsCount: number,
  includeCertification: boolean,
  country: string,
  hasVatNumber: boolean
): PriceCalculation => {
  const courseFee = price * participantsCount;
  const certificationFee = includeCertification ? (950 * participantsCount) : 0;
  const subtotal = courseFee + certificationFee;
  const vatRate = country === 'United Kingdom' && !hasVatNumber ? 0.2 : 0;
  const vat = subtotal * vatRate;
  
  return {
    subtotal,
    vat,
    total: subtotal + vat
  };
};