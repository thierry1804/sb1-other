'use client';

import { Category } from '@/lib/types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto py-4 px-4 -mx-4">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-full whitespace-nowrap ${
          selectedCategory === null
            ? 'bg-[#F47B4D] text-white'
            : 'bg-gray-100 text-gray-700'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            selectedCategory === category.id
              ? 'bg-[#F47B4D] text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}