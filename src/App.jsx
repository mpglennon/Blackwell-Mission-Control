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
  ChevronRight,
  PenTool,
  BadgeDollarSign,
  ListTodo,
  ExternalLink
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
      id: 'feb-17',
      date: 'Feb 17, 06:00 AM',
      title: 'The Great Repricing',
      summary: 'Market jitter ahead of NVIDIA earnings. AMD MI455X delayed to 2027. Anthropic Opus 4.6 takes leaderboard #1. Peter Steinberger (OpenClaw) joins OpenAI.',
      full: `**EXECUTIVE SUMMARY: The Great Repricing**
The honeymoon is over. Investors are recalibrating the difference between "decorative moats" and defensive technology.

**1. The Silicon Throne**
NVIDIA Blackwell B200 efficiency is 25x over H100. Stock jittery before Feb 25 earnings. AMD failure to launch: MI455X delayed to Q2 2027.

**2. The OpenClaw Factor**
OpenAI hired Peter Steinberger. Our orchestration layer now has OpenAI-level backing and scrutiny.

**THE PITM ANGLE**
AMD's delay creates a 12-18 month monopoly. Our "Hard Asset" circularity is the antidote to the circular flow of AI money.`
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-blackwell-900 text-neutral-100">
      <header className="h-14 border-b border-neutral-800 flex items-center justify-between px-6 bg-blackwell-900/80 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blackwell-gold rounded-lg flex items-center justify-center font-bold text-blackwell-900 text-sm italic">B</div>
          <h1 className="text-sm font-bold tracking-tight uppercase">Blackwell Mission Control</h1>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium text-neutral-400">
          <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Kate Active</span>
          <span className="text-neutral-700">|</span>
          <span>PST 07:55</span>
        </div>
      </header>

      <main className="flex-1 p-6 grid grid-cols-12 gap-6 max-w-[1600px] mx-auto w-full">
        {/* Column 1: Fleet & Tasks */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
          <div className="glass-card p-4">
            <h3 className="text-xs font-bold uppercase text-neutral-500 mb-4 flex items-center gap-2">
              <ShieldCheck size={14} className="text-blackwell-gold" /> Agent Fleet
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Kate', role: 'Orchestrator', status: 'Active', pulse: 'bg-green-500' },
                { name: 'The Writer', role: 'Manuscript/Essays', status: 'Seeding', pulse: 'bg-purple-500' },
                { name: 'Financier', role: 'Financial Models', status: 'Standby', pulse: 'bg-emerald-500' },
                { name: 'Strategist', role: 'Deep Analysis', status: 'Standby', pulse: 'bg-blue-500' },
                { name: 'Engineer', role: 'Vercel/GitHub Ops', status: 'Idle', pulse: 'bg-cyan-500' },
                { name: 'Researcher', role: 'HSI Intelligence', status: 'Idle', pulse: 'bg-yellow-500' }
              ].map(agent => (
                <div key={agent.name} className="flex items-center justify-between p-2 rounded-lg border border-transparent hover:border-neutral-800 hover:bg-white/5 transition-all">
                  <div>
                    <div className="text-xs font-bold">{agent.name}</div>
                    <div className="text-[10px] text-neutral-500">{agent.role}</div>
                  </div>
                  <div className={`w-1.5 h-1.5 rounded-full ${agent.pulse}`}></div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-4 flex-1">
            <h3 className="text-xs font-bold uppercase text-neutral-500 mb-4 flex items-center gap-2">
              <ListTodo size={14} className="text-blackwell-gold" /> Google Tasks (Priority)
            </h3>
            <div className="space-y-3">
              <div className="p-2 border border-blackwell-gold/20 bg-blackwell-gold/5 rounded flex items-start gap-3">
                <div className="mt-1 w-3 h-3 rounded-sm border border-blackwell-gold"></div>
                <div>
                  <div className="text-xs font-bold text-blackwell-gold">Call Passport Office</div>
                  <div className="text-[10px] text-neutral-500">Scheduled: 08:30 AM PST</div>
                </div>
              </div>
              <div className="p-2 border border-neutral-800 rounded flex items-start gap-3 opacity-50">
                <div className="mt-1 w-3 h-3 rounded-sm border border-neutral-700"></div>
                <div className="text-xs text-neutral-400">Sync NLBCash Deployments</div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Intelligence & HSI */}
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
          <div className="glass-card flex-1 p-0 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-neutral-800 flex justify-between items-center bg-blackwell-800/20">
              <h3 className="text-xs font-bold uppercase text-neutral-500 flex items-center gap-2">
                <Globe size={14} className="text-blackwell-gold" /> HSI Intelligence Library
              </h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              {selectedReport ? (
                <div>
                  <button onClick={() => setSelectedReport(null)} className="text-[10px] mb-4 text-blackwell-gold font-bold flex items-center gap-1 uppercase hover:underline">
                    ← Back to Library
                  </button>
                  <div className="text-[10px] font-bold text-blackwell-gold uppercase mb-2">{selectedReport.date}</div>
                  <h2 className="text-2xl font-bold italic mb-6 tracking-tight">{selectedReport.title}</h2>
                  <div className="text-sm text-neutral-300 leading-relaxed whitespace-pre-wrap font-serif">
                    {selectedReport.full}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {reports.map(report => (
                    <div key={report.id} onClick={() => setSelectedReport(report)} className="p-4 border border-neutral-800 rounded-xl hover:bg-white/5 transition-all cursor-pointer group">
                      <div className="flex justify-between items-start mb-2">
                        <div className="text-[10px] font-bold text-neutral-500 uppercase">{report.date}</div>
                        <ExternalLink size={12} className="text-neutral-700 group-hover:text-blackwell-gold" />
                      </div>
                      <h4 className="text-lg font-bold tracking-tight italic mb-2">{report.title}</h4>
                      <p className="text-sm text-neutral-400 line-clamp-2">{report.summary}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Column 3: Strategist & PitM */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
          <div className="glass-card p-4">
            <h3 className="text-xs font-bold uppercase text-neutral-500 mb-4 flex items-center gap-2">
              <PenTool size={14} className="text-blackwell-gold" /> The Writer
            </h3>
            <div className="text-[10px] text-neutral-400 bg-black p-3 rounded-lg border border-neutral-800">
              <p className="mb-2 italic text-neutral-300">Drafting: "The Sovereignty Trap"</p>
              <div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 w-1/3"></div>
              </div>
            </div>
          </div>

          <div className="glass-card p-4">
            <h3 className="text-xs font-bold uppercase text-neutral-500 mb-4 flex items-center gap-2">
              <BadgeDollarSign size={14} className="text-blackwell-gold" /> Financier
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-500">Runway</span>
                <span className="text-green-400 font-mono">365+ Days</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-500">Compute Cost</span>
                <span className="text-white font-mono">$0.45/day</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-4 flex-1">
            <h3 className="text-xs font-bold uppercase text-neutral-500 mb-4 flex items-center gap-2">
              <Zap size={14} className="text-blackwell-gold" /> Decision Log
            </h3>
            <div className="text-[10px] space-y-4">
              <div className="border-l border-blackwell-gold pl-3">
                <div className="text-neutral-500 font-mono">2026.02.17</div>
                <div className="font-bold">HSI v2.1 Protocol Adopted</div>
              </div>
              <div className="border-l border-neutral-800 pl-3">
                <div className="text-neutral-500 font-mono">2026.02.17</div>
                <div className="font-bold">Fleet Expansion: Writer & Financier</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MissionControl;