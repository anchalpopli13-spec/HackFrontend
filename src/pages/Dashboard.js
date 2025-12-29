import React from 'react';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 relative">
      <div className="flex justify-between items-end mb-2">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight mb-2 flex items-center gap-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Mentee Dashboard</span>
          </h1>
          <p className="text-gray-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            Day 3 • <span className="text-primary-glow font-medium">Momentum building...</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        <div className="lg:col-span-8 bg-gradient-to-br from-[#1E2030] to-[#13141F] rounded-3xl p-1 relative overflow-hidden group shadow-2xl shadow-black/50 rotate-[-0.5deg] hover:rotate-0 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent-purple/20 to-transparent opacity-50 rounded-3xl"></div>
          <div className="bg-[#13141F] rounded-[22px] h-full p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 border border-white/5">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-glow text-xs font-bold mb-4 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <span className="material-symbols-outlined text-sm icon-filled animate-pulse">smart_toy</span>
                AI Insight
              </div>
              <h2 className="text-3xl font-bold text-white leading-tight mb-3">
                Good morning, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-accent-cyan">Sarah.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                You're on a roll! Completing the "First Week Essentials" today will unlock the <strong className="text-white">Engineering Pod</strong> access.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary hover:bg-primary-glow text-white px-8 py-3.5 rounded-2xl text-sm font-bold shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all flex items-center gap-2 group/btn">
                  <span>Continue Journey</span>
                  <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all backdrop-blur-sm">
                  Ask NOVA
                </button>
              </div>
            </div>
            <div className="w-full md:w-[240px] aspect-square relative z-10 flex-shrink-0 animate-float">
              <div className="absolute bottom-4 left-[-20px] right-[-20px] h-24 bg-surface-glass rounded-xl border border-white/10 backdrop-blur-md transform rotate-[-3deg] shadow-lg flex items-center justify-center gap-4 z-0">
                <div className="w-2/3 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-accent-cyan w-2/3"></div>
                </div>
                <div className="size-8 rounded-full bg-accent-purple/20 flex items-center justify-center text-accent-purple">
                  <span className="material-symbols-outlined text-sm">trophy</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-contain bg-center bg-no-repeat drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOq8Yk-xzmnCwenJiT56fAXdVInjs6b5VY8VQrUu6Q_y-ZQbq37Rd4UBPEIUL74xVi3Uu5mwebWu-iccb6et5aaSfEcavHPc4WTtrwoOYCj6lbalea56yBsCa2AXAi94xFd_qRlcNvag-AOdsXDhCDe8b8h6TZroLuaQPDdO1MYIW1pJKAUEqlI4VIixXqaCjF3coHfXVBQWlLLl0E6Psl7uKdYIs8LaS785dc2jXmT2z9ZLUXqietKzLs6W7R7uTgl1EFcXA4aGI")'}}>
              </div>
              <svg className="absolute -top-4 -right-4 size-12 text-accent-cyan opacity-80 animate-spin" fill="none" style={{animationDuration: '10s'}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" fill="currentColor"></path>
              </svg>
              <div className="absolute top-1/2 -left-8 size-3 rounded-full bg-accent-pink shadow-[0_0_10px_#ec4899] animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="glass-panel rounded-3xl p-6 relative flex flex-col rotate-[1deg] hover:rotate-0 transition-transform duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
            <div className="flex justify-between items-start mb-2 z-10">
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-white">Your Path</h3>
                <p className="text-xs text-gray-400 font-medium">Lvl 2 Explorer</p>
              </div>
              <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Map View</span>
            </div>
            <div className="flex-1 relative w-full flex items-center justify-center min-h-[160px]">
              <svg className="w-full h-full absolute inset-0 opacity-80" preserveAspectRatio="none" viewBox="0 0 300 200">
                <path d="M50 180 C 50 100, 150 150, 150 80 S 250 50, 250 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeDasharray="8 8" strokeWidth="4"></path>
                <path d="M50 180 C 50 100, 150 150, 150 80" fill="none" stroke="#6366f1" strokeLinecap="round" strokeWidth="4"></path>
              </svg>
              <div className="absolute bottom-[20%] left-[15%] flex flex-col items-center gap-1 group/node">
                <div className="size-3 rounded-full bg-primary shadow-[0_0_10px_#6366f1]"></div>
              </div>
              <div className="absolute top-[35%] left-[48%] flex flex-col items-center z-10">
                <div className="relative size-14 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 border-2 border-primary rounded-full"></div>
                  <div className="bg-surface-dark rounded-full size-10 border border-white/20 flex items-center justify-center shadow-lg relative z-10">
                    <span className="text-lg font-black text-white">2</span>
                  </div>
                </div>
                <span className="mt-2 text-xs font-bold text-white px-2 py-0.5 rounded-md bg-surface-dark/80 backdrop-blur-sm border border-white/10">Explorer</span>
              </div>
              <div className="absolute top-[10%] right-[15%] opacity-50">
                <div className="size-3 rounded-full bg-gray-700 border border-gray-600"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 z-10 mt-2">
              <div className="bg-surface-dark/60 rounded-xl p-3 border border-white/5 flex flex-col justify-between group/stat hover:border-primary/30 transition-colors">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider group-hover/stat:text-primary transition-colors">Points</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xl font-black text-white">1,400</span>
                  <span className="text-[10px] font-bold text-green-400">+20</span>
                </div>
              </div>
              <div className="bg-surface-dark/60 rounded-xl p-3 border border-white/5 flex flex-col justify-between group/stat hover:border-accent-cyan/30 transition-colors">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider group-hover/stat:text-accent-cyan transition-colors">Rank</span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-xl font-black text-white">#4</span>
                  <span className="text-[10px] font-bold text-gray-400">of 42</span>
                </div>
              </div>
            </div>
            <div className="mt-3 z-10 bg-white/5 rounded-xl p-3 border border-white/5 backdrop-blur-sm">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400 font-bold">XP Progress</span>
                <span className="text-white font-bold">1,400 / 2,000</span>
              </div>
              <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-accent-cyan h-full w-[70%] rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
              </div>
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-6 relative flex flex-col rotate-[-1deg] hover:rotate-0 transition-transform duration-300 group">
            <div className="flex justify-between items-center mb-6">
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-white">Growth Leaders</h3>
                <p className="text-xs text-gray-400 font-medium">Weekly Leaderboard</p>
              </div>
              <button className="size-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all border border-white/5">
                <span className="material-symbols-outlined text-sm">more_horiz</span>
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 p-2 pr-3 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group/item">
                <div className="size-8 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-black text-sm border border-yellow-500/20 shadow-[0_0_10px_rgba(234,179,8,0.1)]">1</div>
                <div className="size-8 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center text-[10px] font-bold text-gray-400">MC</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-200 truncate">Michael Chen</p>
                  <p className="text-[10px] text-gray-500">2,450 XP</p>
                </div>
                <span className="material-symbols-outlined text-yellow-500 text-lg icon-filled">emoji_events</span>
              </div>
              <div className="flex items-center gap-3 p-2 pr-3 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group/item">
                <div className="size-8 rounded-xl bg-gray-400/10 text-gray-400 flex items-center justify-center font-black text-sm border border-gray-400/20">2</div>
                <div className="size-8 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center text-[10px] font-bold text-gray-400">JA</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-200 truncate">Jessica Alba</p>
                  <p className="text-[10px] text-gray-500">2,300 XP</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 pr-3 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group/item">
                <div className="size-8 rounded-xl bg-orange-700/10 text-orange-700 flex items-center justify-center font-black text-sm border border-orange-700/20">3</div>
                <div className="size-8 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center text-[10px] font-bold text-gray-400">DK</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-200 truncate">David Kim</p>
                  <p className="text-[10px] text-gray-500">2,150 XP</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 pr-3 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 relative overflow-hidden group/me">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"></div>
                <div className="size-8 rounded-xl bg-primary text-white flex items-center justify-center font-black text-sm shadow-lg shadow-primary/40">4</div>
                <div className="size-8 rounded-full bg-cover bg-center ring-2 ring-primary/40" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRgifRGTkYat3J9IHCtrlxCku3zIj2dYUmdxAd8jiLbNxZmliOSaZp6WuraNJ7FFZ5ZessBejqCqZHPyKOIp-6YkM_trrIwYfn5H5znnbF_At7JeyUdGTJVJ5IXUF4JH9ZRNZWpLpxlia0FYqIq11uAC7AaGGUnN16RdQpYjY60PTjgge5BHQQ549hycyPII4tlaYhM5Z2qr1UM7snyToOZ02ZrTRQD8fD5lpnhGF3uxwv6Sujaxp29jBfRdgWWKYuoquOrc8cc_8")'}}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white truncate">You</p>
                  <p className="text-[10px] text-primary-glow">1,400 XP</p>
                </div>
                <span className="text-[10px] font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-full border border-green-400/20 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">trending_up</span>
                </span>
              </div>
              <div className="flex items-center gap-3 p-2 pr-3 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 opacity-60 hover:opacity-100 group/item">
                <div className="size-8 rounded-xl bg-white/5 text-gray-500 flex items-center justify-center font-black text-sm border border-white/5">5</div>
                <div className="size-8 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center text-[10px] font-bold text-gray-400">AM</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-200 truncate">Alex Morgan</p>
                  <p className="text-[10px] text-gray-500">1,350 XP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
