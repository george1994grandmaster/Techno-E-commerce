
export interface Condition {
  loading?: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error?: string | null;
} 

export interface ProductsState extends Condition {
  allProducts: Product[],
  productQuantities: { [key: number]: number };
  products: Product[];
  searchedProducts: Product[];
  cartItems: Product[];
  translated: boolean
}

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  src: string;
  variations: Variation[];
}

export interface Variation {
  src: string;
}

export interface Form extends Condition {
  formType: string;
}

export interface ContentValue extends Condition {
  contentValue: string;
}

export interface SliderProps {
  sliderParams: Variation[] | [];
  sliderName?: string;
}

export interface CurrentSlideIndex {
 slideIndex: number | null;
}





