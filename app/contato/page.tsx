"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Entre em Contato</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-green-700" />
              <div>
                <p className="font-semibold">Endereço</p>
                <p className="text-gray-600">Rua Maria de Resende, 659</p>
                <p className="text-gray-600">Bairro São José</p>
                <p className="text-gray-600">Bom Despacho - MG</p>
                <p className="text-gray-600">CEP: 35633-098</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-green-700" />
              <div>
                <p className="font-semibold">Telefone</p>
                <p className="text-gray-600">(37) 3333-4444</p>
                <p className="text-gray-600">(37) 99965-8284</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-green-700" />
              <div>
                <p className="font-semibold">E-mail</p>
                <p className="text-gray-600">contato@terrabrasil.com.br</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
            <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
            <p className="text-gray-600">Sábado: 8h às 12h</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">E-mail</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Telefone</label>
              <Input
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Mensagem</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
              />
            </div>

            <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}