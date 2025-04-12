import { CompanyDTO } from "./companyDTO";


export interface RegistrationRequest {
  companyDTO: CompanyDTO;
  firstname: string;
  companyLogoPath: string;
  email: string;
  password: string;
}
