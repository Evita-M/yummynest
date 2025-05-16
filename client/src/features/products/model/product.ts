export interface Product {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  price: number;
  offerPrice: number;
  description: string[];
  createdAt: string;
  updatedAt: string;
  inStock: boolean;
  reviews: {
    rating: number;
    count: number;
  };
}
