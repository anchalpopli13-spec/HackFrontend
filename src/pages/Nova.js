import React from 'react';

const Nova = () => {
  return (
    <div className="flex-1 flex flex-col max-w-6xl mx-auto w-full h-full lg:px-8 lg:py-6">
      <div className="flex-1 flex flex-col bg-nova-surface/40 backdrop-blur-xl lg:rounded-3xl lg:border lg:border-nova-border/30 overflow-hidden shadow-2xl relative">
        <div className="h-20 border-b border-nova-border/30 flex items-center justify-between px-8 bg-nova-surface/60 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-nova-primary to-purple-500 rounded-full blur opacity-40 animate-pulse"></div>
              <div className="relative size-12 rounded-full bg-gradient-to-tr from-nova-element to-nova-surface p-0.5 ring-1 ring-white/10">
                <div className="size-full rounded-full bg-nova-bg flex items-center justify-center overflow-hidden">
                  <div className="relative flex items-center justify-center size-full bg-gradient-to-b from-indigo-900/50 to-transparent">
                    <span className="material-symbols-outlined text-nova-accent text-2xl drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]">smart_toy</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 size-3.5 bg-green-500 border-[3px] border-nova-surface rounded-full shadow-sm"></div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                NOVA Assistant
                <span className="px-2 py-0.5 rounded-full bg-nova-primary/10 text-[10px] text-nova-accent font-bold uppercase tracking-wide border border-nova-primary/20">Beta</span>
              </h2>
              <div className="flex items-center gap-2 text-xs text-nova-muted">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Online &amp; Ready to help
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="size-10 flex items-center justify-center rounded-xl hover:bg-nova-element text-nova-muted hover:text-white transition-all" title="Clear Chat">
              <span className="material-symbols-outlined">restart_alt</span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-xl hover:bg-nova-element text-nova-muted hover:text-white transition-all" title="Settings">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-8" id="chat-messages">
          <div className="flex justify-center my-4">
            <span className="text-[11px] font-semibold text-nova-muted/70 bg-nova-element/50 px-4 py-1.5 rounded-full border border-nova-border/30 backdrop-blur-sm">Today, 9:41 AM</span>
          </div>
          <div className="flex gap-5 max-w-4xl animate-slide-up">
            <div className="size-10 shrink-0 rounded-full bg-gradient-to-br from-nova-primary to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 mt-1">
              <span className="material-symbols-outlined text-white text-lg">smart_toy</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-nova-element/80 backdrop-blur-sm border border-nova-border/50 p-6 rounded-3xl rounded-tl-none shadow-sm text-gray-200 text-[15px] leading-relaxed relative group">
                <div className="absolute top-0 left-0 w-2 h-2 bg-nova-primary rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="font-medium text-white mb-2">Good morning, Sarah! Welcome to the team. 🌟</p>
                <p className="text-nova-muted/90">I noticed you haven't completed your <strong className="text-white font-semibold">benefits enrollment</strong> yet. Would you like help with that, or is there something else on your mind today?</p>
              </div>
              <div className="flex flex-wrap gap-2.5 ml-1">
                <button className="px-5 py-2.5 bg-nova-element/40 border border-nova-primary/30 hover:border-nova-primary/60 hover:bg-nova-primary/10 text-nova-accent text-sm font-medium rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                  Start Benefits Enrollment
                </button>
                <button className="px-5 py-2.5 bg-nova-element/40 border border-nova-border/50 hover:border-nova-muted/50 hover:bg-nova-element/60 text-nova-muted hover:text-white text-sm font-medium rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                  Connect to printer
                </button>
                <button className="px-5 py-2.5 bg-nova-element/40 border border-nova-border/50 hover:border-nova-muted/50 hover:bg-nova-element/60 text-nova-muted hover:text-white text-sm font-medium rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                  Find cafeteria
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nova;
