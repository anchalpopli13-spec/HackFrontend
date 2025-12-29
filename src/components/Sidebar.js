import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="flex w-[280px] flex-col border-r border-white/5 bg-surface-dark/95 backdrop-blur-md transition-all duration-300">
      <div className="flex h-24 items-center gap-4 px-8 border-b border-white/5">
        <div className="size-10 text-primary flex items-center justify-center relative">
          <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full"></div>
          <svg className="w-full h-full relative z-10" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="url(#logo-grad)"></path>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="logo-grad" x1="0" x2="48" y1="0" y2="48">
                <stop stopColor="#818cf8"></stop>
                <stop offset="1" stopColor="#6366f1"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h2 className="text-white text-2xl font-black tracking-[-0.015em]">NOVA</h2>
      </div>
      <div className="flex flex-col flex-1 gap-2 p-4 overflow-y-auto">
        <div className="mt-4 mb-2 px-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Journey</div>
        <NavLink to="/" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-400 hover:bg-white/5 hover:text-white transition-all group">
          <span className="material-symbols-outlined icon-filled group-hover:scale-110 transition-transform">dashboard</span>
          <span className="text-sm font-bold tracking-wide">Dashboard</span>
        </NavLink>
        <NavLink to="/journey" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-400 hover:bg-white/5 hover:text-white transition-all group">
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">map</span>
          <span className="text-sm font-medium">My Path</span>
        </NavLink>
        <NavLink to="/tasks" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-400 hover:bg-white/5 hover:text-white transition-all justify-between group">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">check_box</span>
            <span className="text-sm font-medium">Quests</span>
          </div>
          <span className="bg-accent-pink/20 text-accent-pink text-[10px] font-bold px-2 py-0.5 rounded-full border border-accent-pink/20 group-hover:scale-110 transition-transform">3</span>
        </NavLink>
        <NavLink to="/rewards" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-400 hover:bg-white/5 hover:text-white transition-all group">
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform">redeem</span>
          <span className="text-sm font-medium">Rewards Store</span>
        </NavLink>
        <NavLink to="/nova" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-400 hover:bg-white/5 hover:text-white transition-all group">
          <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform">menu_book</span>
          <span className="text-sm font-medium">Knowledge</span>
        </NavLink>
      </div>
      <div className="p-4 border-t border-white/5">
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 cursor-pointer transition-colors border border-white/5">
          <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-primary/30" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRgifRGTkYat3J9IHCtrlxCku3zIj2dYUmdxAd8jiLbNxZmliOSaZp6WuraNJ7FFZ5ZessBejqCqZHPyKOIp-6YkM_trrIwYfn5H5znnbF_At7JeyUdGTJVJ5IXUF4JH9ZRNZWpLpxlia0FYqIq11uAC7AaGGUnN16RdQpYjY60PTjgge5BHQQ549hycyPII4tlaYhM5Z2qr1UM7snyToOZ02ZrTRQD8fD5lpnhGF3uxwv6Sujaxp29jBfRdgWWKYuoquOrc8cc_8")'}}></div>
          <div className="flex flex-col overflow-hidden">
            <p className="text-white text-sm font-bold truncate">Sarah Jenkins</p>
            <p className="text-gray-400 text-xs truncate">Lvl 2 Explorer</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
