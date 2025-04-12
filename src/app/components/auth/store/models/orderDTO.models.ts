// Enums
export enum AddressType {
  SHIPPING = 'SHIPPING',
  BILLING = 'BILLING',
}

export enum BusinessOrderStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REFUSED = 'REFUSED',
  SHIPPED = 'SHIPPED',
  CANCELLED = 'CANCELLED',
  RETURNED = 'RETURNED',
}

export enum OrderState {
  CREATED = 'CREATED',
  FAILED = 'FAILED',
}

export enum PaymentMethod {
  STRIPE = 'STRIPE',
  PAYPAL = 'PAYPAL',
}

export enum Currency {
  EUR = 'EUR',
  USD = 'USD',
}

// AddressDTO
export interface AddressDTO {
  addressId?: string; // Optional since it can be null
  type: AddressType;
  street: string;
  zipCode: string;
  city: string;
  country: string;
}

// OrderDetailDTO
export interface OrderDetailDTO {
  orderDetailId?: string; // Optional since it can be null
  productId: string;
  productFeatureId: number;
  price: number;
  quantity: number;
  discount: number;
}

// OrderDTO
export interface OrderDTO {
  orderId?: string; // Optional since it can be null
  companyId: string;
  clientId: string;
  businessStatus: string;
  state?: string; // Optional since it can be null
  paymentMethod: string;
  currency: string;
  shippingAddress: AddressDTO;
  billingAddress: AddressDTO;
  servicePrice: number;
  discount: number;
  comment: string;
  orderDetails: OrderDetailDTO[];
}
