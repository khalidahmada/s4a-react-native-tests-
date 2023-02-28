export type ExternalCustomer = {
  Id: string;
  PersonalInfos: {
    FirstName: string;
    LastName: string;
    Birthday?: string;
  };
  ContactInfos: {
    Address?: {
      Street: string;
      City: string;
      Zip: string;
    };
    Email: null;
    Phone: null;
  };
};

export type ExternalCustomerDetails = ExternalCustomer & {
  Loyalty: {
    Status: 'Gold' | 'Black' | 'White';
    Points: number;
  };
};

export type ExternalCustomerResponse = {
  Data: ExternalCustomer[];
};

export type ExternalCustomerDetailsResponse = ExternalCustomerDetails;
