import React from 'react';

const Rewards = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group shadow-card hover:shadow-glow transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50"></div>
          <div className="relative z-10 flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent-blue text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
                <span className="material-symbols-outlined text-[16px]">celebration</span>
                New Perks Unlocked
              </div>
              <h2 className="text-3xl font-black text-white mb-4 leading-tight">Treat yourself, Alex!</h2>
              <p className="text-text-sub text-lg mb-6 leading-relaxed max-w-lg">
                Excellent work completing the Compliance Module. You've unlocked exclusive Professional Development rewards.
              </p>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-95 group/btn">
                <span>View History</span>
                <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
            <div className="shrink-0 relative w-48 h-48 flex items-center justify-center -mr-4">
              <div className="w-full h-full bg-contain bg-center bg-no-repeat drop-shadow-2xl filter contrast-125 hover:scale-105 transition-transform duration-700 animate-[float_6s_ease-in-out_infinite]" data-alt="3D illustration of a friendly flying robot assistant named NOVA with a blue glowing face" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAszOBsiU4HEm1QbKZOR6dzSFjTky3vv1H3IUUIkJdJLVCsij0iSZpeAfXgddjzRhJKnSIK3auko5rHW0BDxqJgnqobtTL5lfW7ntPf-qB983KhFHIeZYDO7frMD7QVaoPrKKvospKRy29NNs71eR_eEimNGbujvUusatPx8uF-bhul9xASRxKeXWgwhaU4wJqzCI8rYkEhAvHTzg3pNj61VBpVjPVbd_LeoAlpAMA-56uRAg6doXiSAikCaiLM_c769g9_Jhe2v8I")'}}></div>
              <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#2e2a5c] to-[#1e1b3a] rounded-2xl p-1 relative overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-purple via-primary to-accent-blue opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="bg-surface-dark h-full w-full rounded-xl relative overflow-hidden flex flex-col p-6">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[140px]">savings</span>
            </div>
            <div className="flex items-center justify-between mb-8">
              <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                <span className="material-symbols-outlined text-accent-blue">account_balance_wallet</span>
              </div>
              <span className="text-xs font-bold text-text-sub uppercase tracking-wider">Available Balance</span>
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="text-5xl font-black text-white tracking-tighter tabular-nums">1,250</h3>
                <span className="text-xl font-bold text-accent-blue">PTS</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium text-green-400 bg-green-400/10 border border-green-400/20 mb-6">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                +150 this week
              </div>
            </div>
            <div className="mt-auto">
              <div className="flex justify-between items-end mb-2 text-sm">
                <span className="font-semibold text-white">Level 3 Mentee</span>
                <span className="text-accent-purple font-medium">75%</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2 mb-2 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-accent-purple h-full rounded-full w-[75%] shadow-[0_0_10px_rgba(168,85,247,0.5)] relative">
                  <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
              <p className="text-xs text-text-sub">Earn 250 more points for Level 4</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-30 pt-4 pb-4 -mx-2 px-2 bg-background-dark/95 backdrop-blur-sm border-b border-white/5 mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full hide-scrollbar pb-1">
            <button className="flex h-10 shrink-0 items-center justify-center gap-2 px-5 rounded-xl bg-white text-background-dark font-bold text-sm shadow-lg shadow-white/10 hover:bg-gray-100 transition-all active:scale-95">
              All Rewards
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-2 px-4 rounded-xl bg-surface-dark border border-white/10 hover:border-white/30 text-text-sub hover:text-white transition-all active:scale-95 text-sm font-medium">
              <span className="material-symbols-outlined text-[18px]">checkroom</span>
              Swag
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-2 px-4 rounded-xl bg-surface-dark border border-white/10 hover:border-white/30 text-text-sub hover:text-white transition-all active:scale-95 text-sm font-medium">
              <span className="material-symbols-outlined text-[18px]">self_improvement</span>
              Wellness
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-2 px-4 rounded-xl bg-surface-dark border border-white/10 hover:border-white/30 text-text-sub hover:text-white transition-all active:scale-95 text-sm font-medium">
              <span className="material-symbols-outlined text-[18px]">school</span>
              Growth
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-2 px-4 rounded-xl bg-surface-dark border border-white/10 hover:border-white/30 text-text-sub hover:text-white transition-all active:scale-95 text-sm font-medium">
              <span className="material-symbols-outlined text-[18px]">volunteer_activism</span>
              Impact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
