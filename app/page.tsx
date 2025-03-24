"use client";

import { useState } from "react";
import { PropertyCard } from "@/components/property-card";
import { PropertyModal } from "@/components/property-modal";
import { properties } from "@/data/properties";

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <main>
      <div className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1595356700395-6f14b5c1f33f?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)",
          }}
        />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-white mb-4">Terra Brasil</h1>
          <p className="text-2xl text-white">Sua especialista em imóveis rurais</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Propriedades Disponíveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onSelect={() => setSelectedProperty(property)}
            />
          ))}
        </div>
      </div>

      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </main>
  );
}