'use client';

import { Product } from '@/lib/types';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? 'fill-[#F47B4D] text-[#F47B4D]' : 'text-gray-500'
            }`}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-[#F47B4D] font-semibold">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="px-3 py-1 bg-[#F47B4D] text-white rounded-full text-sm"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}