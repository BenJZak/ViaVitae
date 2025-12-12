import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Services", "Leadership", "Teams", "Contact"];

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2 text-2xl font-bold text-blue-800">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          Via Vitae Partners
        </div>

        <div className="hidden md:flex gap-6 text-lg">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-blue-700 transition-colors">
              {l}
            </a>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-inner p-4 flex flex-col gap-4 text-lg">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="hover:text-blue-700 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

