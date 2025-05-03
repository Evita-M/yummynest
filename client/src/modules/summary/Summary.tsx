import { FC } from 'react'
import { Button } from '@/components/button/Button'
import { LuPlus } from 'react-icons/lu'

interface SummaryProps {
  subtotal: number
  tax: number
  total: number
  onCheckout: () => void
}

export const Summary: FC<SummaryProps> = ({
  subtotal,
  tax,
  total,
  onCheckout
}) => {
  return (
    <div className="bg-light-green p-[1.8rem] rounded-xl">
      <h2>Order Summary</h2>

      <div className="flex flex-col gap-[1.8rem]">
        <div>
          <h3 className="uppercase">Delivery Address</h3>
          <div className="flex justify-between items-center">
            <p className="text-gray-500">No address found</p>
            <button className="flex items-center gap-[0.8rem] text-green-600 hover:text-green-700 cursor-pointer"><LuPlus /> Add address</button>
          </div>
        </div>
        <div>
          <h3 className="uppercase">Payment Method</h3>
          <select className="w-full p-2 border border-gray-200 rounded bg-white">
          <option>Online Payment</option>
          <option>Cash on Delivery</option>
        </select>
        </div>
         <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Price</span>
          <span>€ {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping Fee</span>
          <span className="text-green-600">Free</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (2%)</span>
          <span>€ {tax.toFixed(2)}</span>
        </div>
      </div>
      </div>
      <div className="flex justify-between font-semibold text-lg pt-4">
        <span>Total Amount:</span>
        <span>€ {total.toFixed(2)}</span>
      </div>
      <Button
        onClick={onCheckout}
        variant="tertiary"
        size="lg"
      >
        Proceed to Checkout
      </Button>
    </div>
  )
}
