
export interface Condition {
  loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
} 


export interface ProductsState extends Condition {
  allProducts: Product[],
  productQuantities: { [key: number]: number };
  products: Product[];
  searchedProducts: Product[];
  cartItems: Product[]
}

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  src: string;
}

export interface Form extends Condition {
  formType: string;
}

export interface ContentValue extends Condition {
  contentValue: string;
}