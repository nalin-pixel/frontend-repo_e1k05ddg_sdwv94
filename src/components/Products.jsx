import React from 'react';
import { Wind, Gauge, Wifi, Volume2, Battery } from 'lucide-react';

function Feature({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-700">
      <Icon className="h-4 w-4 text-emerald-600" />
      <span>{label}</span>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Products</h2>
            <p className="text-gray-600 mt-1">Purpose-built for Indian conditions</p>
          </div>
          <a href="#why-us" className="text-emerald-700 hover:text-emerald-800 font-medium">Why choose us →</a>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {/* Air Purifier */}
          <div className="bg-white rounded-2xl p-6 ring-1 ring-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Wind className="h-5 w-5 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">PrāṇaAir Purifier</h3>
                <p className="text-sm text-gray-600">For homes, bedrooms and classrooms</p>
              </div>
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1612198187882-3e06b0f8f52b?q=80&w=1920&auto=format&fit=crop"
                alt="Air purifier in Indian home"
                className="rounded-xl w-full h-44 object-cover"
              />
              <div className="space-y-2">
                <Feature icon={Gauge} label="CADR 350 m³/h" />
                <Feature icon={Volume2} label="Whisper quiet 24 dB" />
                <Feature icon={Wifi} label="Wi‑Fi + Voice Assistants" />
                <Feature icon={Battery} label="Low power 35W" />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">₹12,999</div>
                <div className="text-xs text-gray-600">Incl. GST & 1-year warranty</div>
              </div>
              <a href="#cta" className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700">Buy now</a>
            </div>
          </div>

          {/* Air Quality Monitor */}
          <div className="bg-white rounded-2xl p-6 ring-1 ring-gray-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Gauge className="h-5 w-5 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">PrāṇaAQ Monitor</h3>
                <p className="text-sm text-gray-600">Real-time insight for offices & clinics</p>
              </div>
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1920&auto=format&fit=crop"
                alt="Indian workspace with air quality monitor"
                className="rounded-xl w-full h-44 object-cover"
              />
              <div className="space-y-2">
                <Feature icon={Gauge} label="PM2.5, PM10, CO₂, TVOC" />
                <Feature icon={Wifi} label="Cloud dashboard + alerts" />
                <Feature icon={Battery} label="Built-in battery backup" />
                <Feature icon={Volume2} label="Silent operation" />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">₹7,499</div>
                <div className="text-xs text-gray-600">Incl. GST & 1-year warranty</div>
              </div>
              <a href="#cta" className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700">Buy now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
