
export interface ProductsState {
  allProducts: Product[],
  productQuantities: { [key: number]: number };
  products: Product[];
  cartItems: Product[]
  loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  userId: number;
  quantity: number;
  totalPrice: number;
}