import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary-dark">
            <span className="material-symbols-outlined text-2xl">face</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-900 leading-tight">Smart AI Access</span>
            <span className="text-[10px] text-slate-400 leading-tight hidden sm:block">Intelligent Access, Ticketing & Service Automation</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium text-slate-600 hover:text-primary-dark transition-colors" href="#features">Features</a>
          <a className="text-sm font-medium text-slate-600 hover:text-primary-dark transition-colors" href="#solutions">Solutions</a>
          <a className="text-sm font-medium text-slate-600 hover:text-primary-dark transition-colors" href="#how-it-works">How It Works</a>
          <a className="text-sm font-medium text-slate-600 hover:text-primary-dark transition-colors" href="#industries">Industries</a>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/233543370183"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Request Demo
          </a>
          <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
          <a className="block text-sm font-medium text-slate-600 hover:text-primary-dark" href="#features" onClick={() => setMobileOpen(false)}>Features</a>
          <a className="block text-sm font-medium text-slate-600 hover:text-primary-dark" href="#solutions" onClick={() => setMobileOpen(false)}>Solutions</a>
          <a className="block text-sm font-medium text-slate-600 hover:text-primary-dark" href="#how-it-works" onClick={() => setMobileOpen(false)}>How It Works</a>
          <a className="block text-sm font-medium text-slate-600 hover:text-primary-dark" href="#industries" onClick={() => setMobileOpen(false)}>Industries</a>
          <a
            href="https://wa.me/233543370183"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-all flex justify-center"
          >
            Request Demo
          </a>
        </div>
      )}
    </header>
  );
}
