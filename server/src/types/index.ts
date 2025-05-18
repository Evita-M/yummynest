interface ProductDatabaseRow {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  price: number;
  offerPrice: number;
  createdAt: string;
  updatedAt: string;
  inStock: boolean;
  reviews: string;
  categoryName?: string;
}

interface CategoryDatabaseRow {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface Review {
  rating: number;
  count: number;
}

interface ProductCategory {
  id: string;
  name: string;
}

type ProductFromDB = Omit<ProductDatabaseRow, 'description' | 'reviews'> & {
  description: string[];
  reviews: Review | null;
};

type ProductInput = {
  name: string;
  categoryId: string;
  description: string;
  price: number;
  offerPrice: number;
  inStock: boolean;
  reviews: Review;
};

type Product = {
  id: string;
  name: string;
  categoryName: string;
  categoryId: string;
  price: number;
  offerPrice: number;
  description: string[];
  reviews: Review | null;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
};

const transformDbRowToProduct = (row: ProductDatabaseRow): Product => ({
  id: row.id,
  name: row.name,
  categoryName: row.categoryName || '',
  categoryId: row.categoryId,
  price: row.price,
  offerPrice: row.offerPrice,
  description: row.description ? JSON.parse(row.description) : [],
  reviews: row.reviews ? JSON.parse(row.reviews) : null,
  inStock: row.inStock,
  createdAt: row.createdAt,
  updatedAt: row.updatedAt,
});

export {
  Review,
  ProductInput,
  ProductFromDB,
  ProductCategory,
  ProductDatabaseRow,
  transformDbRowToProduct,
  CategoryDatabaseRow,
  Product,
};
