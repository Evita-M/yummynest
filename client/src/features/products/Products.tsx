import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/store"
import { fetchProducts } from "./productsSlice"
import { ProductCard } from "../../components/product-card/ProductCard"
import { addToCart, incrementQuantity, decrementQuantity, selectAllCartItems } from "../cart/cartSlice"

interface Product {
  id: string;
  name: string;
  price: number;
  offerPrice: number;
}

interface ProductsProps {
  title: string;
}

export const Products: FC<ProductsProps> = ({ title }) => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(state => state.products.products)
  const cartItems = useAppSelector(selectAllCartItems)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const getCartItemInfo = (id: string) => {
    const item = cartItems.find((item) => item.id === id);
    return {
      inCart: !!item,
      quantity: item?.quantity || 0
    };
  }

  const handleIncrement = (id: string) => {
    dispatch(incrementQuantity(id))
  }

  const handleDecrement = (id: string) => {
    dispatch(decrementQuantity(id))
  }
  return (
    <section>
      <h1>{title}</h1>
      <div className='flex flex-wrap gap-[3.2rem]'>
        {products.map(({id, name, price, offerPrice}: Product) => {
          const { inCart, quantity } = getCartItemInfo(id);
          return (
            <ProductCard
              key={id}
              name={name}
              price={price}
              offerPrice={offerPrice}
              onClick={() => dispatch(addToCart({ id, name, price, offerPrice }))}
              onIncrement={() => handleIncrement(id)}
              onDecrement={() => handleDecrement(id)}
              inCart={inCart}
              inCartQuantity={quantity}
            />
          );
        })}
      </div>
    </section>
  )
}
