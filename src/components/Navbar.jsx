import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', id: 'hero' },
    { label: 'LETTER', id: 'letter' },
    { label: 'MOMENTS', id: 'moments' },
    { label: 'WHY YOU', id: 'why-you' },
    { label: 'CELEBRATE', id: 'celebrate' },
    { label: 'FINALE', id: 'finale' }
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] py-4 px-6 md:px-14 flex items-center justify-between bg-petal/90 backdrop-blur-[24px] border-b border-rose/15 transition-all duration-300 shadow-[0_4px_25px_rgba(232,84,122,0.06)]">
      
      {/* Brand Logo */}
      <div 
        onClick={() => handleNavClick('hero')}
        className="font-greatvibes text-3xl sm:text-4xl text-rose cursor-pointer hover:scale-105 transition-transform"
      >
        For You ✦
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className="text-[11px] font-montserrat font-bold tracking-[0.28em] text-ink/70 hover:text-rose transition-colors uppercase"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-rose hover:text-rose-dark transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-petal/98 border-b border-rose/20 p-6 flex flex-col gap-4 md:hidden shadow-xl backdrop-blur-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-left text-xs font-montserrat font-bold tracking-[0.25em] text-ink py-2 border-b border-rose/10 hover:text-rose uppercase"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

    </header>
  );
}
export default Navbar;
