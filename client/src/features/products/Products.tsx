import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/store"
import { fetchProducts } from "./productsSlice"
import { ProductCard } from "../../components/product-card/ProductCard"
import { addToCart } from "../cart/cartSlice"

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

  useEffect(() => {
      dispatch(fetchProducts())
  }, [dispatch])

  return (
    <section>
      <h2>{title}</h2>
      <div className='flex flex-wrap gap-[3.2rem]'>
        {products.map(({id, name, price, offerPrice}: Product) => (
          <ProductCard key={id} name={name} price={price} onClick={() => dispatch(addToCart({ id, name, price, offerPrice }))} offerPrice={offerPrice}/>
        ))}
      </div>
    </section>
  )
}
