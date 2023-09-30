
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
  quantity: Partial<number>;
  totalPrice: Partial<number>;
  src: string;
  category: Partial<string>;
  description: Partial<string>;
  specifications: { [key: string]: string };
  variations: Partial<[]>;
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
  sliderParams: Product[]
  sliderName?: string;
}

export interface CurrentSlideIndex {
 slideIndex: number | null;
}

export interface SidebarCondition {
  isSidebarOpen: boolean;
}

export interface HomePageContent {
  src: string;
  title: string;
  text: string;
}

export interface PresentContent extends Condition {
  content: HomePageContent; // Indicate that content is an object with these properties
}







