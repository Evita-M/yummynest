import { FC } from "react"
import { PageContainer } from "@/layout/PageContainer"
import { CartItem } from "@/components/cart/CartItem"
import { EmptyCart } from "@/components/cart/EmptyCart"
import { CartHeader } from "@/modules/cart-header/CartHeader"
import { useAppDispatch, useAppSelector } from "@/app/store"
import {
  selectAllCartItems,
  selectCartTotalPrice,
  removeFromCart,
  incrementQuantity,
  decrementQuantity
} from "@/features/cart/cartSlice"
import { Summary } from "@/modules/summary/Summary"
import { useNavigate } from "react-router-dom"

const CartPage: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const cartItems = useAppSelector(selectAllCartItems)
  const subtotal = useAppSelector(selectCartTotalPrice)
  const tax = subtotal * 0.02
  const total = subtotal + tax

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id))
  }

  const handleIncrement = (id: string) => {
    dispatch(incrementQuantity(id))
  }

  const handleDecrement = (id: string) => {
    dispatch(decrementQuantity(id))
  }

  const handleCheckout = () => {
    // TODO:Implement checkout logic
    console.log('Proceeding to checkout...')
  }

  if (cartItems.length === 0) {
    return (
      <PageContainer>
        <EmptyCart href="/products" title="Your Cart is Empty" subTitle="Add some items to your cart to get started!" label="Continue Shopping" />
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <CartHeader title="Shopping Cart" info={`${cartItems.length > 1 ? `${cartItems.length} items` : `${cartItems.length} item`}`} link={{ href: "/products", label: "Continue Shopping" }} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[3.2rem]">
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-[1.6rem] rounded-lg">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.offerPrice || item.price}
                quantity={item.quantity}
                onRemove={handleRemove}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onClick={() => navigate(`/products/${item.id}`)}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <Summary
            subtotal={subtotal}
            tax={tax}
            total={total}
            onCheckout={handleCheckout}
          />
        </div>
      </div>
    </PageContainer>
  )
}

export default CartPage
