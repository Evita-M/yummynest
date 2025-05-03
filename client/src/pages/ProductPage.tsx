import React, { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/store';
import { fetchProductById } from '../features/products/productsSlice';
import { ProductDetail } from '../modules/product-detail/ProductDetail';

interface Product {
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

const ProductPage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch()
  const [product, setProduct] = React.useState<Product | null>(null)
  const { status } = useAppSelector(state => state.products)


  useEffect(() => {
    const fetchProduct = async () => {
      const product = await dispatch(fetchProductById(id!)).unwrap()
      if (product) {
        setProduct(product);
      }
    };
    fetchProduct();
  }, [dispatch, id]);

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'failed' || !product) {
    return <div>Error</div>
  }


//  const handleIncrement = (id: string) => {
//     dispatch(incrementQuantity(id))
//   }

//   const handleDecrement = (id: string) => {
//     dispatch(decrementQuantity(id))
//   }

//   const getCartItemInfo = (id: string) => {
//     const item = cartItems.find((item) => item.id === id);
//     return {
//       inCart: !!item,
//       quantity: item?.quantity || 0
//     };
//   }
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm mb-8">
        <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link to="/products" className="text-gray-500 hover:text-gray-700 transition-colors">Products</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link
          to={`/products/${product?.category.toLowerCase()}`}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          {product?.category}
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700">{product?.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
          </div>
          <div className="flex-1 relative aspect-square bg-blue-light rounded-[2rem] overflow-hidden">
            {/* <img
              src="#"
              alt="Product Image"
              className="w-full h-full object-cover transition-opacity duration-300"
            /> */}
          </div>
        </div>
        <ProductDetail name={product.name} price={product.price} offerPrice={product.offerPrice} description={product.description} inStock={product.inStock}/>
      </div>
    </div>
  );
};

export default ProductPage;
