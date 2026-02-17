import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Terminal, 
  MessageSquare,
  Globe,
  Settings,
  BookOpen,
  ChevronRight
} from 'lucide-react';

const StatCard = ({ title, value, detail, color = "text-white" }) => (
  <div className="glass-card p-4 flex flex-col gap-1">
    <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">{title}</span>
    <div className={`text-2xl font-bold ${color}`}>{value}</div>
    <span className="text-[10px] text-neutral-400">{detail}</span>
  </div>
);

const MissionControl = () => {
  const [selectedReport, setSelectedReport] = useState(null);

  const reports = [
    {
      id: 'feb-16',
      date: 'Feb 16, 06:00 AM',
      title: 'The Moat is Leaking',
      summary: 'Inference Economics shifting. Anthropic facing regulatory heat from Pentagon. Google/Gemini TPUs winning on cost-per-token. Blackwell Engineering pivot to Gemini-native is confirmed alpha.',
      full: `**EXECUTIVE SUMMARY**
The "NVIDIA Tax" is officially under siege. While the retail market hypes training clusters, the real war has shifted to Inference Economics, and Google/Microsoft are winning.

**The Blackwell Take:** Our pivot to Gemini (TPU-native) yesterday wasn't just a stability fix—it was a strategic alignment with the most cost-efficient inference stack on the market.

**1. The Silicon War: Inference is Forever**
NVIDIA's architectural moat for inference is collapsing. Midjourney cut costs by 65% by optimizing away from standard GPU clusters. Specialized silicon (ASICs/TPUs) is where the margin lives.

**2. LLM Frontier: Supply Chain Shocks**
Anthropic is facing heat from the Pentagon. If labeled a "supply-chain risk," this complicates their enterprise adoption curve significantly.

**3. Software Stack: Interoperability Wins**
LangChain launched "Polly" and Vercel released AI SDK 6. The walls between frameworks are thinning.

**THE PITM ANGLE**
We dodged a bullet. Our move to a Gemini-Only stack is alpha. We are insulated from the Anthropic/Gov fallout and aligned with the hardware winner for inference cost.`
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-blackwell-900 text-neutral-100">
      {/* Top Header */}
      <header className="h-14 border-b border-neutral-800 flex items-center justify-between px-6 bg-blackwell-900/80 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blackwell-gold rounded-lg flex items-center justify-center font-bold text-blackwell-900 text-sm italic">B</div>
          <h1 className="text-sm font-bold tracking-tight uppercase">Blackwell Mission Control</h1>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium text-neutral-400">
          <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Kate Active</span>
          <span className="text-neutral-700">|</span>
          <span>America/Vancouver 19:05</span>
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
                { name: 'Kate', role: 'Orchestrator', status: 'Active', pulse: 'bg-green-500' },
                { name: 'Strategist', role: 'Manuscript Analysis', status: 'Standby', pulse: 'bg-blue-500' },
                { name: 'Engineer', role: 'Vercel/GitHub Ops', status: 'Idle', pulse: 'bg-neutral-600' },
                { name: 'Researcher', role: 'Morning Intelligence', status: 'Scheduled', pulse: 'bg-yellow-500' }
              ].map(agent => (
                <div key={agent.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                  <div>
                    <div className="text-xs font-bold">{agent.name}</div>
                    <div className="text-[10px] text-neutral-500">{agent.role}</div>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${agent.pulse}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Live Intelligence Feed */}
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
          <div className="glass-card flex-1 p-0 overflow-hidden flex flex-col relative">
            <div className="p-4 border-b border-neutral-800 flex justify-between items-center bg-blackwell-800/20">
              <h3 className="text-xs font-bold uppercase text-neutral-500 flex items-center gap-2">
                <Globe size={14} className="text-blackwell-gold" /> Intelligence Feed
              </h3>
              {selectedReport && (
                <button 
                  onClick={() => setSelectedReport(null)}
                  className="text-[10px] font-bold text-neutral-500 uppercase hover:text-white"
                >
                  Back to Feed
                </button>
              )}
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              {selectedReport ? (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="text-[10px] font-bold text-blackwell-gold uppercase mb-2">{selectedReport.date}</div>
                  <h2 className="text-2xl font-bold italic mb-6 tracking-tight">{selectedReport.title}</h2>
                  <div className="text-sm text-neutral-300 leading-relaxed whitespace-pre-wrap font-serif">
                    {selectedReport.full}
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  {reports.map(report => (
                    <div 
                      key={report.id}
                      onClick={() => setSelectedReport(report)}
                      className="group border-l-2 border-blackwell-gold pl-4 py-1 cursor-pointer hover:bg-white/5 transition-colors pr-4"
                    >
                      <div className="flex justify-between items-start">
                        <div className="text-[10px] font-bold text-neutral-500 uppercase">{report.date}</div>
                        <ChevronRight size={14} className="text-neutral-700 group-hover:text-blackwell-gold transition-colors" />
                      </div>
                      <h4 className="text-lg font-bold mt-1 tracking-tight italic group-hover:text-blackwell-gold transition-colors">{report.title}</h4>
                      <p className="text-sm text-neutral-400 mt-2 leading-relaxed line-clamp-2">
                        {report.summary}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Decisions & Strategist */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
          <div className="glass-card p-4">
            <h3 className="text-xs font-bold uppercase text-neutral-500 mb-4 flex items-center gap-2">
              <BookOpen size={14} className="text-blackwell-gold" /> Strategist Corner
            </h3>
            <div className="bg-blackwell-900/50 p-3 rounded-lg border border-neutral-800 italic">
              <p className="text-xs text-neutral-300 leading-relaxed">
                "The moat is not a wall; it is the distance between your cost of curiosity and your competitor's cost of execution."
              </p>
              <div className="text-[10px] text-blackwell-gold mt-2 font-bold uppercase">— Hard Asset, Ch. 1</div>
            </div>
          </div>

          <div className="glass-card p-4 flex-1">
            <h3 className="text-xs font-bold uppercase text-neutral-500 mb-4 flex items-center gap-2">
              <Zap size={14} className="text-blackwell-gold" /> PITM Decision Log
            </h3>
            <div className="space-y-4">
              <div className="text-xs">
                <div className="text-neutral-500 mb-1 font-mono">2026.02.16</div>
                <div className="font-bold border-b border-neutral-800 pb-2">"Autonomous Orchestrator Migration"</div>
                <div className="text-[10px] text-neutral-400 mt-2 leading-tight italic">
                  Deployed Mission Control v1.0. Shifted deployment pipeline to GitHub/Vercel CI.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MissionControl;