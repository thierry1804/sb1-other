'use client';

import { CartItem as CartItemType } from '@/lib/types';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  return (
    <div className="flex gap-4 py-4 border-b">
      <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-medium text-gray-900">{item.name}</h3>
          <button
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-red-500"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
        <p className="text-[#F47B4D] font-semibold mt-1">
          ${item.price.toFixed(2)}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="p-1 rounded-full bg-gray-100"
            disabled={item.quantity <= 1}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-8 text-center">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="p-1 rounded-full bg-gray-100"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}