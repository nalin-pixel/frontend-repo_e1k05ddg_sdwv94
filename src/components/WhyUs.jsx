import React from 'react';
import { ShieldCheck, Leaf, Clock, Sparkles } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Certified Filtration',
    text: 'True HEPA H13 and activated carbon tested for Indian pollution levels.',
  },
  {
    icon: Leaf,
    title: 'Energy Smart',
    text: 'Low power consumption with auto mode to save electricity during long summers.',
  },
  {
    icon: Clock,
    title: 'Built for India',
    text: 'Handles voltage fluctuations and high dust loads with long-life filters.',
  },
  {
    icon: Sparkles,
    title: 'Quiet & Elegant',
    text: 'Designed to blend into Indian homes, schools and offices without noise.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 bg-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Why choose PrāṇaAir</h2>
          <p className="text-gray-600 mt-1">Reliable purification backed by science and local support</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl p-5 ring-1 ring-gray-200 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <p.icon className="h-5 w-5 text-emerald-700" />
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
