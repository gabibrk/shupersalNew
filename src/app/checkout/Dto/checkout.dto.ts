import { Address } from "./adress.dto";

export interface Product {
    name: string;
    sku: string;
    sizeColor: string;
    imageUrl: string;
    price: number;
    discountedPrice: number;
  }
  
  export interface Item {
    id: string;
    product: Product;
    quantity: number;
  }
  
  export interface OrderDTO {
    id: string;
    subtotal: number;
    shipping: number;
    tax: number;
    total: number;
    discount: number;
    paymentMethod: string | null;
    shippingAddress: Address | null;
    paymentInfo: string | null;
    items: Item[];
    appliedCouponCode: string | null;
  }
  