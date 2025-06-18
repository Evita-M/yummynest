export interface Product {
  id: string;
  name: string;
  categoryId: string;
  price: number;
  offerPrice?: number;
  description?: string;
  imageSrc?: string;
  createdAt?: string;
  updatedAt?: string;
  inStock: boolean;
  category?: {
    id: string;
    name: string;
  };
  reviewTotalCount: number;
  reviewRating: number;
}
