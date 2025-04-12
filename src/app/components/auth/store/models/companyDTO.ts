export interface CompanyDTO {
  companyId: string;
  isAccountActive: boolean;
  phone: string| null;
  email: string| null;
  registrationDate: Date | null;
  name: string| null;
  address: string| null;
  zipcode: string| null;
  city: string| null;
  country: string| null;
  identificationCode: string| null;
  rate: number;

}
