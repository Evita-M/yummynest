import { FC } from 'react'
import { Button } from '@/components/button/Button'
import { LuPlus } from 'react-icons/lu'
import { useModal } from '@/hooks/useModal'

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
	const {openModal} = useModal();

  return (
    <div className="bg-light-green p-[1.8rem] rounded-[1.2rem] bg-blue-light">
      <h2>Order Summary</h2>
      <div className="flex flex-col gap-[1.8rem]">
        <div>
          <h3 className="uppercase">Delivery Address</h3>
          <div className="flex justify-between items-center">
            <p className="text-gray-500">No address found</p>
            <Button onClick={()=>openModal(<div>Hello</div>)} variant="secondary" size="sm" preFix={<LuPlus />}>
               Add address
            </Button>
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
        className="w-full"
        variant="secondary"
      >
        Proceed to Checkout
      </Button>
    </div>
  )
}
