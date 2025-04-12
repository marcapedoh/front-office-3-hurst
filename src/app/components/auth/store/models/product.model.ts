import { ProductFeature } from "./product.feature.model";

export class product {
  companyId?: string;
  name?: string;
  customId?: string;
  description?: string;
  moreDescription?: string;
  deliveryCountry?: String;
  tags?: String;
  isActive?: boolean;
  creationDate?: Date;
  lastUpdate?: Date;
  rate?: number;
  ratePerson?: number;
  categoryId?: string;
  features?: ProductFeature[]
  status: any;
  regularPrice: any;
  salesPrice: any;
  quantity: any;
  size: any;
  color: any;
  productId: any;
  nom: any;
  deliveryOption: any;
}


export enum ShippingType {
  SELLER = "SELLER",
  COMPANY = "COMPANY"
}
