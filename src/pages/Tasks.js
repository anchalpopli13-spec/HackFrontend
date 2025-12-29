import React from 'react';

const Tasks = () => {
  return (
    <div className="w-full max-w-[1200px] flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <a className="text-text-muted-dark hover:text-primary font-medium" href="#">Level 1: Orientation</a>
        <span className="text-text-muted-dark/50 material-symbols-outlined text-[16px]">chevron_right</span>
        <a className="text-text-muted-dark hover:text-primary font-medium" href="#">Module A: Setup</a>
        <span className="text-text-muted-dark/50 material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="text-primary font-bold">Task Detail</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex flex-col gap-4 bg-card-dark p-6 md:p-8 rounded-2xl shadow-lg shadow-black/20 border border-border-dark">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary/20 px-3 py-1 text-xs font-bold text-secondary">
                    <span className="material-symbols-outlined text-[14px]">schedule</span> 45m Estimate
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-400">
                    In Progress
                  </span>
                </div>
                <h1 className="text-text-light text-3xl md:text-4xl font-extrabold leading-tight tracking-[-0.033em]">Configure Your Development Environment</h1>
                <p className="text-text-muted-dark text-lg font-normal leading-relaxed max-w-2xl">
                  Set up your local machine with the necessary IDEs, Docker containers, and access tokens required for the Engineering team.
                </p>
              </div>
              <div className="w-full md:w-36 h-36 flex-shrink-0 bg-gray-700/50 rounded-lg overflow-hidden border border-border-dark" data-alt="Abstract illustration of code blocks and settings">
                <img alt="Code setup abstract" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu0TUD9D1CpDBIeF4c0nQfAZ_tDrEuYGtTXnFGfe0zfBni3lG9pnpKZ00yvwZUiU072kVLKfE3XkNrI4yjuTpP7_1SJRDql7S-Nak6Wqq9iCRTFxGl0EOeW6PTdS7fh45NaCirV5qcAYSJoQHXUBbib6zw71JK5vj6nLfCK_ep813_w6qrVv_CqIF1f7Kimz_XqJaDlv3G1ebLLnsHun4dCKHrXgyaV6yiT1TTzlY5pybgGzvhcxfPKBeIhODEigl8kaiMcLRo_fc"/>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 pt-4 border-t border-border-dark">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-white text-sm font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all hover:-translate-y-0.5">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                Mark as Complete
              </button>
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 rounded-xl bg-card-dark border border-border-dark px-6 py-3 text-text-light text-sm font-bold hover:bg-border-dark transition-colors shadow-md shadow-black/10">
                <span className="material-symbols-outlined text-[20px]">send</span>
                Submit for Review
              </button>
              <button className="ml-auto flex items-center justify-center size-12 rounded-xl text-text-muted-dark hover:text-primary hover:bg-border-dark transition-colors" title="Save for later">
                <span className="material-symbols-outlined text-[24px]">bookmark</span>
              </button>
            </div>
          </div>
          <div className="bg-card-dark p-6 md:p-8 rounded-2xl shadow-lg shadow-black/20 border border-border-dark flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-text-light text-xl font-bold">Objectives</h3>
              <span className="text-sm font-medium text-text-muted-dark">
                <span className="text-progress-fill font-bold">0</span>/<span className="text-text-muted-dark">3</span> Completed
              </span>
            </div>
            <div className="w-full bg-progress-bg rounded-full h-2.5 relative overflow-hidden mt-2">
              <div className="bg-progress-fill h-2.5 rounded-full animate-charging" style={{width: '0%'}}></div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="group flex gap-x-4 py-4 px-4 -mx-4 rounded-xl hover:bg-border-dark cursor-pointer transition-colors items-start">
                <div className="relative flex items-center mt-1">
                  <input className="peer hidden" type="checkbox"/>
                  <div className="custom-checkbox-visual"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-text-light text-base font-semibold leading-normal peer-checked:line-through peer-checked:text-text-muted-dark">Install VS Code and Extensions</p>
                  <p className="text-text-muted-dark text-sm leading-normal">Ensure you have the 'ESLint' and 'Prettier' extensions enabled globally.</p>
                </div>
              </label>
              <label className="group flex gap-x-4 py-4 px-4 -mx-4 rounded-xl hover:bg-border-dark cursor-pointer transition-colors items-start border-t border-border-dark">
                <div className="relative flex items-center mt-1">
                  <input className="peer hidden" type="checkbox"/>
                  <div className="custom-checkbox-visual"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-text-light text-base font-semibold leading-normal">Pull Main Repository</p>
                  <p className="text-text-muted-dark text-sm leading-normal">Clone <code className="bg-border-dark px-1 py-0.5 rounded text-xs text-primary font-mono">git@github.com:nova/core-platform.git</code> to your workspace.</p>
                </div>
              </label>
              <label className="group flex gap-x-4 py-4 px-4 -mx-4 rounded-xl hover:bg-border-dark cursor-pointer transition-colors items-start border-t border-border-dark">
                <div className="relative flex items-center mt-1">
                  <input className="peer hidden" type="checkbox"/>
                  <div className="custom-checkbox-visual"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-text-light text-base font-semibold leading-normal">Run Initial Setup Script</p>
                  <p className="text-text-muted-dark text-sm leading-normal">Run <code className="bg-border-dark px-1 py-0.5 rounded text-xs text-primary font-mono">npm run setup:init</code> and ensure all tests pass.</p>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-6 sticky top-24">
          <div className="nova-gradient-border shadow-lg shadow-primary/20 p-0.5 rounded-3xl">
            <div className="bg-nova-ai-bg rounded-[1.4rem] p-6 flex flex-col items-center text-center gap-4 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 size-16 rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-background-dark flex items-center justify-center overflow-hidden">
                  <img alt="NOVA AI Assistant" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgerm0TeSi8NnUxfAvPpVZT2ToiyDyiJiAGnI-9g7UUW1VQx3lUTzrt2bHL5ByLX9cJd4c4NIaX96ETAPJ2dRi0_4PmS5CpNUXmY63vpLk56-_uVHpXvqzWX2JbW1P_5hMSERsEi20BebYYmMKIh8A6Ed5sdVkAN9AiExgLNHnOmABy7nOQXcW1Sy8V2PB80Evy_YDD1UcI7-CbyuJ5Wf6PJOgzMal6wwdNXgBNahqqAnmnI1zoyjnwetmkHOYbxP1tPmlHnSUmGw"/>
                </div>
                <div className="absolute bottom-0 right-0 size-4 bg-green-500 border-2 border-background-dark rounded-full"></div>
              </div>
              <div className="flex flex-col gap-2 relative z-10">
                <h3 className="text-lg font-extrabold text-text-light">NOVA Assistant</h3>
                <p className="text-sm text-text-muted-dark leading-relaxed">
                  "Most new hires pause at the Docker permission step. Ensure you've requested access via <a className="text-primary font-bold underline decoration-2 decoration-primary/30 hover:decoration-primary" href="#">IT-Help</a> before proceeding!"
                </p>
              </div>
              <button className="w-full mt-2 py-2.5 rounded-lg bg-border-dark text-primary text-sm font-bold hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                Ask NOVA for more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
