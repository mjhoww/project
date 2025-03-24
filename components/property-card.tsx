"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";

export function PropertyCard({ property, onSelect }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2">{property.title}</h3>
        <p className="text-2xl font-bold text-green-700 mb-2">
          {formatCurrency(property.price)}
        </p>
        <p className="text-gray-600">{property.location}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={onSelect} className="w-full bg-green-700 hover:bg-green-800">
          Ver Detalhes
        </Button>
      </CardFooter>
    </Card>
  );
}