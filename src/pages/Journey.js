import React from 'react';

const Journey = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8 relative">
      <div className="mb-2">
        <div className="flex items-center gap-2 text-xs font-bold text-text-muted mb-2 uppercase tracking-wider">
          <span className="hover:text-white cursor-pointer transition-colors">My Journey</span>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <span className="text-primary">Level Progression</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 tracking-tight">Your Progression Path</h1>
            <p className="text-text-muted mt-2 max-w-xl text-sm leading-relaxed">Complete required tasks to unlock the next level. Your mentor will review your progress at each milestone to ensure you're ready for the next challenge.</p>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-xs text-text-muted font-bold uppercase tracking-widest mb-1">Total Progress</div>
            <div className="text-2xl font-black text-white">Level 2<span className="text-text-muted text-lg font-normal"> / 6</span></div>
          </div>
        </div>
      </div>
      <div className="relative pl-4 md:pl-0 mt-4">
        <div className="absolute left-[24px] md:left-[40px] top-6 bottom-12 w-[2px] bg-gradient-to-b from-success via-primary to-white/5 rounded-full z-0"></div>
        <div className="relative z-10 pl-16 md:pl-24 mb-12 group">
          <div className="absolute left-[10px] md:left-[26px] top-8 -translate-x-1/2 bg-success text-nova-bg rounded-full size-7 md:size-8 flex items-center justify-center border-4 border-nova-bg shadow-[0_0_15px_rgba(52,211,153,0.4)] z-20">
            <span className="material-symbols-outlined text-sm md:text-base font-bold">check</span>
          </div>
          <div className="glass-panel rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-nova-surface-hover hover:border-success/30 transition-all duration-300 shadow-glow-success cursor-pointer group-hover:translate-x-1">
            <div className="flex items-start gap-4 z-10">
              <div className="bg-success/10 p-3 rounded-xl text-success border border-success/20 group-hover:bg-success/20 transition-colors">
                <span className="material-symbols-outlined icon-filled">rocket_launch</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-white/50 line-through decoration-success/50 decoration-2">Level 1: Orientation</h3>
                  <span className="px-2 py-0.5 rounded text-success bg-success/10 border border-success/20 text-[10px] font-black uppercase tracking-wider">Completed</span>
                </div>
                <p className="text-sm text-text-muted/60">Company history, IT setup, and team intros.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-success/5 px-4 py-2 rounded-xl border border-success/10 z-10 w-full md:w-auto justify-between md:justify-start">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-cover bg-center border border-white/20 shadow-sm" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRgifRGTkYat3J9IHCtrlxCku3zIj2dYUmdxAd8jiLbNxZmliOSaZp6WuraNJ7FFZ5ZessBejqCqZHPyKOIp-6YkM_trrIwYfn5H5znnbF_At7JeyUdGTJVJ5IXUF4JH9ZRNZWpLpxlia0FYqIq11uAC7AaGGUnN16RdQpYjY60PTjgge5BHQQ549hycyPII4tlaYhM5Z2qr1UM7snyToOZ02ZrTRQD8fD5lpnhGF3uxwv6Sujaxp29jBfRdgWWKYuoquOrc8cc_8")'}}></div>
                <div className="text-xs">
                  <p className="text-success font-bold">Approved by Mentor</p>
                  <p className="text-success/60">Oct 24, 2023</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-success text-xl">verified</span>
            </div>
          </div>
        </div>
        <div className="relative z-10 pl-12 md:pl-20 mb-16">
          <div className="absolute left-[10px] md:left-[26px] top-10 -translate-x-1/2 bg-nova-bg text-primary rounded-full size-12 flex items-center justify-center border-[4px] border-primary shadow-[0_0_20px_rgba(99,102,241,0.5)] z-20">
            <span className="font-black text-xl animate-pulse">2</span>
          </div>
          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl rounded-[2rem] group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="bg-nova-surface rounded-[2rem] border border-primary/30 shadow-neon p-0 overflow-hidden relative transition-all duration-300 hover:border-primary/50 hover:scale-[1.01] hover:shadow-neon-strong">
              <div className="p-6 md:p-8 pb-6 relative z-10 bg-gradient-to-br from-white/[0.03] to-transparent">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary-glow border border-primary/30 text-[10px] font-bold mb-2 shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                      <span className="material-symbols-outlined text-xs icon-filled animate-pulse">radio_button_checked</span>
                      CURRENT LEVEL
                    </div>
                    <h2 className="text-3xl font-black text-white drop-shadow-lg">Explorer Phase</h2>
                    <p className="text-text-muted font-medium mt-1">Deep dive into your role's core responsibilities and tools.</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 w-full md:w-auto">
                    <div className="flex justify-between w-full md:w-auto md:justify-end gap-4 items-baseline">
                      <span className="text-xs font-bold text-text-muted uppercase tracking-wide">Level Progress</span>
                      <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">65%</span>
                    </div>
                    <div className="h-2 w-full md:w-48 bg-nova-bg rounded-full overflow-hidden border border-white/5">
                      <div className="h-full bg-gradient-to-r from-primary to-accent w-[65%] rounded-full relative overflow-hidden shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                        <div className="absolute inset-0 bg-white/30 w-full h-full animate-[shimmer_2s_infinite] skew-x-[-20deg] translate-x-[-100%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row border-t border-white/5 bg-[#131520] relative">
                <div className="flex-1 p-6 md:p-8 flex flex-col gap-8 z-10">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-2">
                        <span className="material-symbols-outlined text-accent icon-filled text-base">flag</span>
                        Required Tasks
                      </h4>
                      <span className="text-[10px] font-bold bg-white/5 text-text-muted px-2 py-1 rounded border border-white/5">2 Remaining</span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="bg-nova-bg/40 p-4 rounded-xl border border-white/5 flex items-center gap-4 opacity-50 hover:opacity-70 transition-opacity">
                        <span className="material-symbols-outlined text-success text-2xl">check_circle</span>
                        <div className="flex-1">
                          <p className="text-text-muted font-bold line-through decoration-text-muted/50">Complete "Safety First" Module</p>
                        </div>
                      </div>
                      <div className="bg-nova-surface p-4 rounded-xl border-l-4 border-l-primary border-y border-r border-white/10 shadow-lg flex flex-col sm:flex-row items-center gap-4 relative group/task hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                          <button className="size-6 rounded-full border-2 border-text-muted hover:border-primary group-hover/task:scale-110 transition-all flex items-center justify-center shrink-0">
                            <div className="size-3 rounded-full bg-primary opacity-0 group-hover/task:opacity-100 transition-opacity shadow-[0_0_8px_rgba(99,102,241,1)]"></div>
                          </button>
                          <div className="flex-1 sm:hidden">
                            <p className="text-white font-bold text-base">Set up dev environment</p>
                          </div>
                        </div>
                        <div className="flex-1 w-full">
                          <div className="flex justify-between items-start">
                            <p className="hidden sm:block text-white font-bold text-lg group-hover/task:text-primary-glow transition-colors">Set up development environment</p>
                            <span className="text-[10px] font-black text-warning bg-warning/10 border border-warning/20 px-2 py-1 rounded uppercase shrink-0 ml-2">Due Today</span>
                          </div>
                          <p className="text-sm text-text-muted mt-1 group-hover/task:text-gray-300">Follow the wiki guide to install Docker and Node.js.</p>
                        </div>
                        <button className="w-full sm:w-auto mt-2 sm:mt-0 bg-primary hover:bg-primary-glow text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg shadow-primary/30 transition-all transform active:scale-95">Start</button>
                      </div>
                      <div className="bg-nova-bg p-4 rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-colors flex items-center gap-4">
                        <span className="material-symbols-outlined text-text-muted/30 text-2xl">radio_button_unchecked</span>
                        <div className="flex-1">
                          <p className="text-gray-300 font-bold">Schedule 1:1 with Team Lead</p>
                        </div>
                        <span className="text-[10px] font-bold text-text-muted bg-white/5 px-2 py-1 rounded border border-white/5">15m</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-warning text-base">star</span>
                      Optional (Bonus XP)
                    </h4>
                    <div className="flex items-center gap-4 bg-primary/5 p-3 rounded-xl border border-primary/10 border-dashed hover:bg-primary/10 transition-colors cursor-pointer group/bonus">
                      <div className="size-10 rounded-full bg-nova-bg flex items-center justify-center text-primary border border-primary/20 shadow-sm group-hover/bonus:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-lg">play_arrow</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-white group-hover/bonus:text-primary-glow transition-colors">Watch "CEO's Vision" Video</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs text-primary font-bold">+50 XP</span>
                          <span className="size-1 rounded-full bg-text-muted/30"></span>
                          <span className="text-[10px] text-text-muted">5 min watch</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-text-muted/50 group-hover/bonus:text-white transition-colors">arrow_forward</span>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[320px] bg-gradient-to-b from-nova-bg/50 to-nova-bg border-l border-white/5 p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-10 right-10 size-32 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
                  <div className="absolute bottom-10 left-10 size-24 bg-accent/10 rounded-full blur-2xl"></div>
                  <div className="relative h-48 w-full flex items-center justify-center mb-6">
                    <div className="w-48 h-48 bg-contain bg-center bg-no-repeat relative z-10 animate-float" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOq8Yk-xzmnCwenJiT56fAXdVInjs6b5VY8VQrUu6Q_y-ZQbq37Rd4UBPEIUL74xVi3Uu5mwebWu-iccb6et5aaSfEcavHPc4WTtrwoOYCj6lbalea56yBsCa2AXAi94xFd_qRlcNvag-AOdsXDhCDe8b8h6TZroLuaQPDdO1MYIW1pJKAUEqlI4VIixXqaCjF3coHfXVBQWlLLl0E6Psl7uKdYIs8LaS785dc2jXmT2z9ZLUXqietKzLs6W7R7uTgl1EFcXA4aGI")', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))'}}></div>
                  </div>
                  <div className="bg-nova-surface/80 backdrop-blur rounded-xl p-5 border border-white/10 text-center relative z-10 shadow-xl">
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-3">Completion Status</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-warning/50 blur rounded-full"></div>
                        <span className="material-symbols-outlined text-warning relative z-10">pending</span>
                      </div>
                      <span className="text-sm font-bold text-white">In Progress</span>
                    </div>
                    <button className="w-full py-3 rounded-lg bg-white/5 text-text-muted/50 text-xs font-bold cursor-not-allowed flex items-center justify-center gap-2 border border-white/5 hover:border-white/10 transition-all" disabled>
                      <span className="material-symbols-outlined text-sm">lock</span>
                      Request Approval
                    </button>
                    <p className="text-[10px] text-text-muted/50 mt-3">Finish required tasks to unlock approval.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 pl-16 md:pl-24 group">
          <div className="absolute left-[10px] md:left-[26px] top-8 -translate-x-1/2 bg-nova-surface text-text-muted rounded-full size-10 flex items-center justify-center border-4 border-nova-bg z-20 shadow-lg">
            <span className="material-symbols-outlined text-lg">lock</span>
          </div>
          <div className="glass-panel rounded-2xl border-dashed border-white/10 p-6 flex items-center justify-between opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:border-white/20 transition-all duration-500 cursor-not-allowed select-none group-hover:bg-nova-surface">
            <div className="flex items-center gap-5">
              <div className="bg-white/5 p-3 rounded-xl text-text-muted border border-white/5 group-hover:text-white group-hover:border-white/20 transition-colors">
                <span className="material-symbols-outlined text-2xl">engineering</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-primary-glow transition-colors">Level 3: Contributor</h3>
                <p className="text-sm text-text-muted">First project assignment and peer review.</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-text-muted text-xs font-bold border border-white/5">
              <span className="material-symbols-outlined text-sm">lock</span>
              <span>Locked</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
