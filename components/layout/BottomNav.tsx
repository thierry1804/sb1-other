'use client';

import { Home, Search, ShoppingCart, Heart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Search, label: 'Search', href: '/search' },
    { icon: ShoppingCart, label: 'Cart', href: '/cart' },
    { icon: Heart, label: 'Favorites', href: '/favorites' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t z-50">
      <div className="max-w-lg mx-auto px-4 h-full flex items-center justify-around">
        {navItems.map(({ icon: Icon, label, href }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex flex-col items-center gap-1',
              pathname === href ? 'text-[#F47B4D]' : 'text-gray-500'
            )}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}