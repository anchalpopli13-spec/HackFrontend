import React from 'react';

const Header = () => {
  return (
    <header className="h-24 flex items-center justify-between px-8 z-20">
      <div className="flex items-center gap-4 flex-1">
        <label className="flex items-center w-full max-w-md h-12 bg-surface-dark/50 border border-white/10 rounded-2xl px-5 gap-3 focus-within:ring-2 focus-within:ring-primary/50 focus-within:bg-surface-dark transition-all backdrop-blur-sm group">
          <span className="material-symbols-outlined text-gray-500 group-focus-within:text-primary transition-colors">search</span>
          <input className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-600 text-white focus:ring-0 p-0" placeholder="Ask NOVA anything..."/>
        </label>
      </div>
      <div className="flex items-center gap-4">
        <button className="size-12 flex items-center justify-center rounded-2xl bg-surface-dark/50 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all relative group">
          <span className="material-symbols-outlined group-hover:animate-pulse">notifications</span>
          <span className="absolute top-3 right-3 size-2 bg-accent-pink rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]"></span>
        </button>
        <button className="size-12 flex items-center justify-center rounded-2xl bg-surface-dark/50 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all">
          <span className="material-symbols-outlined">help</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
