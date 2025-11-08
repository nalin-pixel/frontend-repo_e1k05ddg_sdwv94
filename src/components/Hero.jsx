import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5" />
            Made for Indian homes & workspaces
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Breathe easy. Live better.
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            Advanced air purification and real-time air quality monitoring designed for Indian families and offices. Quiet, powerful and energy-efficient.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700 shadow">
              Explore products
            </a>
            <a href="#usecases" className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-gray-700 font-medium hover:bg-gray-50">
              See it in action
            </a>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-700">
            <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />HEPA H13 + Activated Carbon</li>
            <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />PM2.5, PM10, CO2, TVOC sensors</li>
            <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />Whisper quiet for bedrooms</li>
            <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />Smart app & voice control</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 bg-white">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1920&auto=format&fit=crop"
              alt="Modern Indian living room with air purifier"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg ring-1 ring-gray-200 p-4">
            <p className="text-sm font-semibold text-gray-900">Delhi, India</p>
            <p className="text-xs text-gray-600">Clean air for your loved ones</p>
          </div>
        </div>
      </div>
    </section>
  );
}
