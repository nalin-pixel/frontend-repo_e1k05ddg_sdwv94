import React from 'react';

const cases = [
  {
    title: 'Indian Family Home',
    desc: 'Protect children and elders from pollution, allergens and seasonal smog.',
    img: 'https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?q=80&w=1920&auto=format&fit=crop',
  },
  {
    title: 'Open-plan Office',
    desc: 'Monitor air quality across bays and automate purification based on thresholds.',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1920&auto=format&fit=crop',
  },
  {
    title: 'Clinic & Waiting Area',
    desc: 'Create a safer environment for patients with medical-grade filtration.',
    img: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1920&auto=format&fit=crop',
  },
];

export default function UseCases() {
  return (
    <section id="usecases" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Made for Indian homes and workspaces</h2>
        <p className="text-gray-600 mt-1">Engineered for dust, humidity and power conditions across India</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="group bg-white rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{c.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
