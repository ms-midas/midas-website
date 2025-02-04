// Common interfaces
export interface Course {
  id: string;
  course_name: string;
  course_type: 'SIRI' | 'COSIRI';
  start_date: string;
  end_date: string;
  timezone: 'UAE' | 'UK' | 'USA';
  display_timezone: string;
  time: string;
  price: number;
  is_visible: boolean;
}

export interface BookingFormData {
  billingDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    companyName: string;
    billingAddress: string;
    country: string;
    vatNumber: string;
  };
  includeCertification: boolean;
  participants: {
    firstName: string;
    lastName: string;
    email: string;
  }[];
}

export interface ValidationErrors {
  billingDetails: {
    [key: string]: string | undefined;
  };
  participants: {
    [key: string]: string | undefined;
  }[];
}

export interface TouchedFields {
  billingDetails: {
    [key: string]: boolean;
  };
  participants: {
    [key: string]: boolean;
  }[];
}