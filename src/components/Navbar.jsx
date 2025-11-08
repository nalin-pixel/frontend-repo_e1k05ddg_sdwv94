import React from 'react';
import { Wind, Shield, Leaf } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-emerald-500 flex items-center justify-center shadow-sm">
              <Wind className="h-5 w-5 text-white" />
            </div>
            <div className="font-semibold text-gray-900 text-lg">PrāṇaAir</div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#products" className="hover:text-gray-900">Products</a>
            <a href="#usecases" className="hover:text-gray-900">Use cases</a>
            <a href="#why-us" className="hover:text-gray-900">Why us</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Shield className="h-4 w-4" />
              Quality First
            </button>
            <a href="#products" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 shadow-sm">
              <Leaf className="h-4 w-4" />
              Shop now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
