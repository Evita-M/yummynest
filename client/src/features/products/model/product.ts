export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  offerPrice: number;
  description: string[];
  createdAt: string;
  updatedAt: string;
  inStock: boolean;
}
