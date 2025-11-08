import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-10 text-white shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold">Ready to breathe better?</h3>
              <p className="text-emerald-100 mt-1">Talk to our Delhi NCR team for a free air quality assessment for your home or office.</p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-lg bg-white text-emerald-700 px-4 py-2 font-medium hover:bg-emerald-50">
                <Phone className="h-4 w-4" /> Call now
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 font-medium hover:bg-white/10">
                <MapPin className="h-4 w-4" /> Find a store
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-3">EMI available • Free delivery in metros • Installation support</p>
      </div>
    </section>
  );
}
