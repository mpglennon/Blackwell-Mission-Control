import React from 'react';
import { 
  LayoutDashboard, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Terminal, 
  MessageSquare,
  Globe,
  Settings
} from 'lucide-react';

const StatCard = ({ title, value, detail, color = "text-white" }) => (
  <div className="glass-card p-4 flex flex-col gap-1">
    <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">{title}</span>
    <div className={`text-2xl font-bold ${color}`}>{value}</div>
    <span className="text-[10px] text-neutral-400">{detail}</span>
  </div>
);

const MissionControl = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Header */}
      <header className="h-14 border-b border-neutral-800 flex items-center justify-between px-6 bg-blackwell-900/80 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blackwell-gold rounded-lg flex items-center justify-center font-bold text-blackwell-900 text-sm italic">B</div>
          <h1 className="text-sm font-bold tracking-tight uppercase">Blackwell Mission Control</h1>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium text-neutral-400">
          <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Kate Active</span>
          <span className="text-neutral-700">|</span>
          <span>America/Vancouver 18:40</span>
        </div>
      </header>

      <main className="flex-1 p-6 grid grid-cols-12 gap-6 max-w-[1600px] mx-auto w-full">
        {/* Left Column: Stats & Fleet */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-4">
            <StatCard title="System Model" value="Gemini 3 Flash" detail="Stability: 100% | Latency: 45ms" color="text-blackwell-gold" />
            <StatCard title="NLBCash Status" value="Production" detail="Vercel Sync: fe3df32 (Just now)" color="text-green-400" />
            <StatCard title="Hard Asset" value="Ready" detail="Full Manuscript Ingested" color="text-blue-400" />
          </div>

          <div className="glass-card p-4">
            <h3 className="text-xs font-bold uppercase text-neutral-500 mb-4 flex items-center gap-2">
              <ShieldCheck size={14} className="text-blackwell-gold" /> Agent Fleet status
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Kate', role: 'Orchestrator', status: 'Active', pulse: 'green' },
                { name: 'Strategist', role: 'Manuscript Analysis', status: 'Standby', pulse: 'blue' },
                { name: 'Engineer', role: 'Vercel/GitHub Ops', status: 'Idle', pulse: 'neutral-500' },
                { name: 'Researcher', role: 'Morning Intelligence', status: 'Scheduled', pulse: 'yellow-500' }
              ].map(agent => (
                <div key={agent.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                  <div>
                    <div className="text-xs font-bold">{agent.name}</div>
                    <div className="text-[10px] text-neutral-500">{agent.role}</div>
                  </div>
                  <div className={`w-2 h-2 rounded-full bg-${agent.pulse}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Live Intelligence Feed */}
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
          <div className="glass-card flex-1 p-0 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-neutral-800 flex justify-between items-center bg-blackwell-800/20">
              <h3 className="text-xs font-bold uppercase text-neutral-500 flex items-center gap-2">
                <Globe size={14} className="text-blackwell-gold" /> Intelligence Feed
              </h3>
              <button className="text-[10px] font-bold text-blackwell-gold uppercase tracking-widest hover:underline">Refresh</button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="border-l-2 border-blackwell-gold pl-4 py-1">
                <div className="text-[10px] font-bold text-neutral-500 uppercase">Feb 16, 06:00 AM • Report</div>
                <h4 className="text-lg font-bold mt-1 tracking-tight italic">The Moat is Leaking</h4>
                <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                  Inference Economics shifting. Anthropic facing regulatory heat from Pentagon. Google/Gemini TPUs winning on cost-per-token. Blackwell Engineering pivot to Gemini-native is confirmed alpha.
                </p>
              </div>
              
              <div className="border-l-2 border-neutral-700 pl-4 py-1">
                <div className="text-[10px] font-bold text-neutral-500 uppercase">System Alert</div>
                <h4 className="text-sm font-bold mt-1 italic">Sprint 5 Deploy Complete</h4>
                <p className="text-xs text-neutral-500 mt-1">NLBCash build fe3df32 verified on Vercel production edge.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Decisions & Trajectory */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
          <div className="glass-card p-4">
            <h3 className="text-xs font-bold uppercase text-neutral-500 mb-4 flex items-center gap-2">
              <Zap size={14} className="text-blackwell-gold" /> PITM Decision Log
            </h3>
            <div className="space-y-4">
              <div className="text-xs">
                <div className="text-neutral-500 mb-1">Feb 15</div>
                <div className="font-bold border-b border-neutral-800 pb-2">"Gemini Today, Anthropic Tomorrow"</div>
                <div className="text-[10px] text-neutral-400 mt-2 leading-tight italic">
                  Resolution of configuration death loop. Forced pivot to Google stack for reliability.
                </div>
              </div>
              <div className="text-xs">
                <div className="text-neutral-500 mb-1">Feb 16</div>
                <div className="font-bold border-b border-neutral-800 pb-2">"Mission Control Scaffolding"</div>
                <div className="text-[10px] text-neutral-400 mt-2 leading-tight italic">
                  Transition from task-based work to autonomous orchestrator infrastructure.
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-4 flex-1">
            <h3 className="text-xs font-bold uppercase text-neutral-500 mb-4 flex items-center gap-2">
              <Terminal size={14} className="text-blackwell-gold" /> Command Radar
            </h3>
            <div className="text-xs font-mono text-blackwell-gold/80 bg-black p-3 rounded-lg h-48 overflow-hidden">
              <div className="animate-pulse underline decoration-blackwell-gold">Ready for next command...</div>
              <div className="text-neutral-700 mt-2">// Waiting for Michael input</div>
              <div className="text-neutral-700 mt-1">// Pipeline: IDLE</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MissionControl;