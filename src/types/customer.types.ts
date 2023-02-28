export type LoyaltyStatus = 'Gold' | 'Black' | 'White';

export type Customer = {
  id: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    birthday?: Date;
  };
  info: {
    address?: {
      street: string;
      city: string;
      zip: string;
    };
    email?: string;
    phone?: string;
  };
};

export type CustomerDetails = Customer & {
  loyalty: {
    status: LoyaltyStatus;
    points: number;
  };
};
