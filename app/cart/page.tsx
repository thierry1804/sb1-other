'use client';

import { useState } from 'react';
import CartItem from '@/components/features/CartItem';
import { CartItem as CartItemType } from '@/lib/types';

// Sample cart data
const initialCart: CartItemType[] = [
  {
    id: '1',
    name: 'Classic Sneakers',
    price: 89.99,
    category: 'sneakers',
    image: 'https://picsum.photos/seed/sneakers1/400',
    quantity: 1,
  },
  {
    id: '2',
    name: 'Sport Watch',
    price: 199.99,
    category: 'watches',
    image: 'https://picsum.photos/seed/watch1/400',
    quantity: 2,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItemType[]>(initialCart);

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <div className="space-y-2">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={updateQuantity}
            onRemove={removeItem}
          />
        ))}
      </div>
      <div className="mt-6 bg-white rounded-lg p-4 shadow-md">
        <div className="flex justify-between mb-4">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-[#F47B4D] text-white py-3 rounded-lg font-medium">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}