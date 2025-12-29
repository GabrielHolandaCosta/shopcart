export interface Product {
  id: number;
  name: string; // Nome base (português)
  price: number;
  image: string;
  category: 'electronics' | 'games' | 'clothes' | 'all';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Language = 'pt' | 'en' | 'es';

