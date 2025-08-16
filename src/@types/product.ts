export type IProductReview = {
  id: string;
  name: string;
  avatarUrl: string;
  comment: string;
  rating: number;
  isPurchased: boolean;
  helpful: number;
  postedAt: Date | string | number;
};

type IVariant = {
  figureName: string
  color: string
  images: string[]
  price: number
  stock: number
  sku: string
  weight: string
  High: string
  status: string
}

export type IProduct = {
  _id: string;
  images: string[];
  figureName: string;
  brand: string;
  description: string;
  status: string;
  variants: IVariant[]
  // cover: string;
  // name: string;
  // price: number;
  // code: string;
  // sku: string;
  // tags: string[];
  // priceSale: number | null;
  // totalRating: number;
  // totalReview: number;
  // ratings: {
  //   name: string;
  //   starCount: number;
  //   reviewCount: number;
  // }[];
  // reviews: IProductReview[];
  // colors: string[];
  // status: string;
  // inventoryType: string;
  // sizes: string[];
  // available: number;
  // sold: number;
  // createdAt: Date | string | number;
  // category: string;
  // gender: string;
};

export type ICheckoutCartItem = {
  id: string;
  name: string;
  cover: string;
  // available: number;
  price: number;
  // colors: string[];
  // size: string;
  quantity: number;
  total: number;
};

export type ICheckoutDeliveryOption = {
  value: number;
  title: string;
  description: string;
};

export type ICheckoutPaymentOption = {
  value: string;
  title: string;
  description: string;
  icons: string[];
};

export type ICheckoutCardOption = {
  value: string;
  label: string;
};

export enum AddressType {
  home, work
}

export type ICheckoutBillingAddress = {
  email: string;
  companyName: string;
  receiver: string;
  phoneNumber: string;
  fullAddress?: string;
  addressType?: string;
  isDefault?: boolean;
};

export type IProductCheckoutState = {
  activeStep: number;
  cart: ICheckoutCartItem[];
  subtotal: number;
  total: number;
  discount: number;
  shipping: number;
  billing: ICheckoutBillingAddress | null;
  totalItems: number;
};

export type IProductState = {
  isLoading: boolean;
  error: Error | string | null;
  products: IProduct[];
  product: IProduct | null;
  checkout: IProductCheckoutState;
}; 