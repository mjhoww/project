"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

export function PropertyModal({ property, onClose }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleScheduleVisit = () => {
    if (!selectedDate) {
      toast({
        title: "Selecione uma data",
        description: "Por favor, selecione uma data para agendar a visita.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Visita agendada!",
      description: `Sua visita foi agendada para ${selectedDate.toLocaleDateString()}. Entraremos em contato para confirmar.`,
    });
    onClose();
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogTitle className="text-2xl font-bold mb-4">
          {property.title}
        </DialogTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="relative h-64 mb-4">
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {property.images.slice(1, 4).map((image, index) => (
                <div key={index} className="relative h-20">
                  <Image
                    src={image}
                    alt={`${property.title} - ${index + 2}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-3xl font-bold text-green-700 mb-4">
              {formatCurrency(property.price)}
            </p>
            <p className="text-gray-600 mb-4">{property.description}</p>
            
            <div className="mb-6">
              <h3 className="font-bold mb-2">Detalhes da Propriedade</h3>
              <ul className="space-y-2">
                <li>Área: {property.area} hectares</li>
                <li>Localização: {property.location}</li>
                {property.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-2">Agendar Visita</h3>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border mb-4"
              />
              <Button
                onClick={handleScheduleVisit}
                className="w-full bg-green-700 hover:bg-green-800"
              >
                Agendar Visita
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}