import React from 'react';

const TaskCompletionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black bg-opacity-50">
      <div className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-nova-card shadow-2xl shadow-black/60 ring-1 ring-white/10 transition-all">
        <button onClick={onClose} className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white transition-all duration-200 backdrop-blur-sm group ring-1 ring-white/5">
          <span className="material-symbols-outlined text-[20px] group-hover:rotate-90 transition-transform duration-300">close</span>
        </button>
        <div className="flex flex-col md:flex-row h-full min-h-[600px]">
          <div className="relative flex w-full md:w-[42%] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1c1f33] to-[#0f111a] p-8 md:p-12 text-center border-b md:border-b-0 md:border-r border-white/5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative mb-8 h-64 w-64 group cursor-default">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl transform scale-90 transition-all duration-700 group-hover:bg-primary/30 group-hover:scale-105"></div>
                <div className="relative h-full w-full bg-contain bg-center bg-no-repeat drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYjcY3iCEUsvtvKMRF8JpfexUttDQYSy_Ij-rMUgYGP4NP3F4bxYgKyiOAsCuyPFYkCy2ciDTiJnq_LlNvOYuEj18yBa9V-olbvNy6WceWA5St61851WQvsx5hmP7J5_erx7w5e6KoECc05F0zpQAYUicrvknaGE4ujPiZvw2lwBelA8RFeuvxwEQO9JzbzrI8nMMFAmtAv_K8m-aSeTd8T0ml9iWdTJxZO57HnS-Rbm9yfkm5cbdMllDTfpoQQd55j55s-9mVams")'}}>
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-md">Task Complete!</h2>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Module 4 / 12</p>
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-[58%] flex-col bg-nova-card">
            <div className="flex-1 overflow-y-auto p-8 md:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Reflective Log</h3>
                <p className="text-slate-400 text-sm">Your honest insights help tailor the NOVA experience for everyone.</p>
              </div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="group relative rounded-2xl bg-[#1a1d2e] p-6 ring-1 ring-white/5 transition-all duration-300 hover:bg-[#1f2236] hover:ring-primary/40 hover:shadow-glow">
                  <div className="mb-3 flex items-center justify-between">
                    <label className="flex items-center gap-3 text-lg font-semibold text-slate-200">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 shadow-inner shadow-orange-500/20 ring-1 ring-orange-500/20">
                        <span className="material-symbols-outlined text-[18px]">warning</span>
                      </span>
                      What hurdles did you face?
                    </label>
                  </div>
                  <div className="relative">
                    <textarea className="peer w-full resize-none rounded-xl border-none bg-nova-input p-4 text-slate-200 placeholder:text-slate-500 focus:bg-[#25293d] focus:ring-1 focus:ring-primary/50 min-h-[100px] transition-all shadow-inner" placeholder="Was the documentation clear? Did any tools fail?"></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex flex-col-reverse gap-4 border-t border-white/5 bg-[#12131f] p-6 sm:px-12 sm:py-8 sm:flex-row sm:items-center sm:justify-end rounded-br-2xl">
              <button className="px-6 py-3 text-sm font-semibold text-slate-500 hover:text-slate-300 transition-colors">
                Skip Reflection
              </button>
              <button className="group relative flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98]">
                <span>Submit &amp; Continue</span>
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCompletionModal;
