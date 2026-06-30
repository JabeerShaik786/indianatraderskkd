'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined 
    ? process.env.NEXT_PUBLIC_BASE_PATH 
    : '/indianatraderskkd';
  const prefix = isHomePage ? '' : basePath;

  const navLinks = [
    { name: 'About', href: `${prefix}#about` },
    { name: 'Services', href: `${prefix}#services` },
    { name: 'Projects', href: `${prefix}#projects` },
    { name: 'Gallery', href: `${prefix}#gallery` },
    { name: 'Connect', href: `${prefix}#connect` },
    { name: 'Testimonials', href: `${prefix}#testimonials` },
  ];

  const isWhiteHeader = isScrolled || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isWhiteHeader
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-[rgba(1,42,74,0.06)] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <a href={isHomePage ? '#hero' : (basePath === '' ? '/' : basePath)} className="flex flex-col group">
          <span className={`font-headings text-2xl font-bold tracking-wider transition-colors duration-300 ${
            isWhiteHeader ? 'text-[#012A4A] group-hover:text-[#2A6F97]' : 'text-white group-hover:text-white/80'
          }`}>
            INDIANA TRADERS
          </span>
          <span className={`text-[9px] uppercase tracking-[0.25em] font-body -mt-1 transition-colors duration-300 ${
            isWhiteHeader ? 'text-[#6B7280] group-hover:text-[#012A4A]' : 'text-white/70 group-hover:text-white'
          }`}>
            Container Solutions
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-8 items-center font-headings">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-[15px] font-medium transition-colors duration-300 py-1 group ${
                isWhiteHeader ? 'text-[#012A4A] hover:text-[#2A6F97]' : 'text-white hover:text-white/80'
              }`}
            >
              <span>{link.name}</span>
              <span className={`absolute bottom-0 left-0 w-full h-[1.5px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                isWhiteHeader ? 'bg-[#01497C]' : 'bg-white'
              }`} />
            </a>
          ))}
        </nav>

        {/* Header Action Button */}
        <div className="hidden md:block">
          <a
            href="tel:+919296553252"
            className={`inline-flex items-center justify-center px-5 py-2.5 border text-[16px] font-semibold tracking-[0.02em] active:scale-[0.98] transition-all duration-150 rounded-none font-headings gap-2 ${
              isWhiteHeader
                ? 'border-[#01497C] text-[#01497C] bg-white hover:bg-[#01497C] hover:text-white'
                : 'border-white text-white bg-transparent hover:bg-white hover:text-[#012A4A]'
            }`}
          >
            <Phone size={14} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${
            isWhiteHeader ? 'text-[#012A4A] hover:text-[#2A6F97]' : 'text-white hover:text-white/80'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[rgba(1,42,74,0.08)] shadow-lg transition-transform duration-300">
          <nav className="flex flex-col px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[15px] font-medium text-[#012A4A] hover:text-[#2A6F97] font-headings"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919296553252"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#01497C] text-[16px] font-semibold tracking-[0.02em] text-[#01497C] bg-white hover:bg-[#01497C] hover:text-white active:scale-[0.98] transition-all duration-150 font-headings"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
