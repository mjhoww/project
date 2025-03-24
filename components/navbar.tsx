"use client";

import { Home, Info, Users, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Início", icon: Home },
    { href: "/sobre", label: "Sobre", icon: Info },
    { href: "/socios", label: "Sócios", icon: Users },
    { href: "/contato", label: "Contato", icon: Phone },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-green-800">Terra Brasil</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === link.href
                      ? "bg-green-100 text-green-800"
                      : "text-gray-600 hover:bg-green-50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}