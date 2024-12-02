'use client';

import { useState } from 'react';
import CategoryFilter from '@/components/features/CategoryFilter';
import ProductCard from '@/components/features/ProductCard';
import { Product, Category } from '@/lib/types';

// Sample data
const categories: Category[] = [
  { id: 'sneakers', name: 'Sneakers' },
  { id: 'watches', name: 'Watches' },
  { id: 'jackets', name: 'Jackets' },
];

const products: Product[] = [
  {
    id: '1',
    name: 'Classic Sneakers',
    price: 89.99,
    category: 'sneakers',
    image: 'https://picsum.photos/seed/sneakers1/400',
  },
  {
    id: '2',
    name: 'Sport Watch',
    price: 199.99,
    category: 'watches',
    image: 'https://picsum.photos/seed/watch1/400',
  },
  {
    id: '3',
    name: 'Leather Jacket',
    price: 299.99,
    category: 'jackets',
    image: 'https://picsum.photos/seed/jacket1/400',
  },
  // Add more products as needed
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const handleAddToCart = (product: Product) => {
    // Implement cart functionality
    console.log('Added to cart:', product);
  };

  return (
    <div className="p-4">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-2 gap-4 mt-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}