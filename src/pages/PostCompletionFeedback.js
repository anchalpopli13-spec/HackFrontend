import React from 'react';

const PostCompletionFeedback = () => {
  return (
    <main className="flex-grow flex flex-col items-center justify-center p-6 relative">
      <div className="w-full max-w-6xl flex flex-col gap-10">
        <div className="text-center space-y-4 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-[0_0_15px_-5px_rgba(52,211,153,0.3)]">
            <span className="material-symbols-outlined text-sm">check_circle</span>
            Reflection Completed
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-lg">
            Outstanding work, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">Alex!</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            NOVA has analyzed your submission. Your strategic thinking is impressive, and you've earned some well-deserved velocity points.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-slide-up" style={{animationDelay: '0.1s'}}>
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent rounded-full blur-3xl opacity-50 transform translate-y-20"></div>
            <div className="relative w-full max-w-[380px] aspect-square animate-float z-10">
              <div className="w-full h-full bg-contain bg-center bg-no-repeat drop-shadow-[0_20px_50px_rgba(79,133,248,0.3)]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoaBIWDpuGmMtuumfdeMP2A87midZk7OUUQqGWvq3iRwT9SxtSHUqrB4cw8pYgctGe-kBCIDUsW-6LUUWUlFDBSz-RGq3c2KgiHtnihZ-I1JVr1WiXSa1ytdc1PzE7uwmcpJaavNCrlmYjTh3ldO0_YCtPtnehzsTTKRwAm0ev0nJngpBQgDsqt9DcAQA0WSfC_5LQRxBVEAxJciL5iU2Aie3dwGCrD8h5SVQGS_2ixTisJQdGjgWu2K1G_tYawfVsqlKwm_Qeyt8")'}}></div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6 justify-center">
            <div className="bg-gradient-to-r from-surface-highlight to-surface border border-white/5 rounded-3xl p-1 relative overflow-hidden group shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="bg-surface rounded-[20px] p-6 relative flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="size-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 shadow-[0_0_20px_-5px_rgba(234,179,8,0.3)]">
                    <span className="material-symbols-outlined text-3xl">emoji_events</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Velocity Points</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-white tracking-tight">150</span>
                      <span className="text-sm font-bold text-green-400 animate-pulse">+50 Bonus XP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface/80 backdrop-blur-xl border border-primary/30 rounded-3xl p-8 relative overflow-hidden shadow-glass animate-scale-in">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                    <span className="material-symbols-outlined text-2xl">smart_toy</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">AI Analysis</h2>
                    <p className="text-xs text-primary/80 font-medium uppercase tracking-wider mt-0.5">Personalized Feedback</p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 bg-surface-highlight/50 rounded-2xl p-6 border border-white/5">
                <p className="text-slate-200 text-lg leading-relaxed font-light">
                  Your insight on the marketing strategy showed <span className="text-white font-semibold">great depth</span>, Alex. The way you connected <span className="text-primary font-bold bg-primary/10 px-1 py-0.5 rounded">customer velocity</span> to onboarding metrics was particularly sharp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PostCompletionFeedback;
