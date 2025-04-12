import { AddressType } from "./addres-type.models";

export class Address {
  addressId?: string;
  type?: AddressType;
  street?: string;
  zipCode?: string;
  city?: string;
  country?: string;
}
