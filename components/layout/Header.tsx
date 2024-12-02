'use client';

import { Menu, ShoppingCart, User } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const title = pathname === '/cart' ? 'Shopping Cart' : 'Discover';

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b z-50">
      <div className="max-w-lg mx-auto px-4 h-full flex items-center justify-between">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold">{title}</h1>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <User className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </header>
  );
}