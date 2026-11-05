"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Compass, 
  Target, 
  Eye, 
  RefreshCw, 
  ShieldAlert, 
  Clock, 
  Lightbulb, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  TrendingUp, 
  Rocket, 
  HeartHandshake, 
  Facebook, 
  PlayCircle, 
  ExternalLink
} from "lucide-react";

export default function ChessRealLifeSkills() {
  const transferableSkills = [
    {
      title: "Strategic Thinking",
      desc: "Seeing the bigger picture rather than focusing only on immediate gains.",
      icon: Compass,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200/70"
    },
    {
      title: "Decision-Making",
      desc: "Evaluating different options and their potential consequences before acting.",
      icon: Target,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200/70"
    },
    {
      title: "Anticipation",
      desc: "Predicting how others may respond and preparing appropriate countermeasures.",
      icon: Eye,
      color: "text-teal-600",
      bg: "bg-teal-50",
      border: "border-teal-200/70"
    },
    {
      title: "Adaptability",
      desc: "Responding creatively to unexpected situations instead of relying on fixed plans.",
      icon: RefreshCw,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200/70"
    },
    {
      title: "Risk Assessment",
      desc: "Making informed decisions even when information is incomplete.",
      icon: ShieldAlert,
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-200/70"
    },
    {
      title: "Time Management",
      desc: "Prioritising important decisions and acting effectively under pressure.",
      icon: Clock,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      border: "border-cyan-200/70"
    },
    {
      title: "Problem-Solving",
      desc: "Identifying weaknesses, exploring alternatives and developing practical solutions.",
      icon: Lightbulb,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200/70"
    }
  ];

  const practicalApplications = [
    { skill: "Calculating moves ahead", realWorld: "Evaluating business, career and financial decisions" },
    { skill: "Handling uncertainty", realWorld: "Making decisions with incomplete information" },
    { skill: "Anticipating opponents", realWorld: "Understanding competitors and stakeholders" },
    { skill: "Planning countermeasures", realWorld: "Preparing contingency plans" },
    { skill: "Responding to unexpected moves", realWorld: "Adapting to changing circumstances" },
    { skill: "Understanding the whole board", realWorld: "Balancing immediate needs with long-term objectives" },
    { skill: "Managing the clock", realWorld: "Prioritising tasks under time constraints" }
  ];

  const broaderHabits = [
    {
      number: "01",
      title: "Think Before Acting",
      desc: "Consider possible consequences rather than making impulsive decisions. Every move on the board changes reality — just like choices in life.",
      accent: "from-amber-500 to-orange-500"
    },
    {
      number: "02",
      title: "Plan but Remain Flexible",
      desc: "Have a clear overarching strategy, but stay fully prepared to pivot and change direction when circumstances demand it.",
      accent: "from-teal-500 to-blue-500"
    },
    {
      number: "03",
      title: "Learn from Mistakes",
      desc: "Analyse unsuccessful decisions constructively without emotional defeat, extracting direct feedback to elevate future performance.",
      accent: "from-indigo-500 to-purple-500"
    }
  ];

  const domains = [
    {
      name: "Education",
      icon: GraduationCap,
      color: "text-blue-600",
      desc: "Develops logical reasoning, analytical thinking and structured problem-solving for STEM exams."
    },
    {
      name: "Business",
      icon: Briefcase,
      color: "text-amber-600",
      desc: "Strengthens strategic planning, competitive market analysis and confident high-stakes decision-making."
    },
    {
      name: "Finance",
      icon: TrendingUp,
      color: "text-emerald-600",
      desc: "Encourages meticulous risk evaluation, long-term thinking and consideration of alternative scenarios."
    },
    {
      name: "Career Development",
      icon: Rocket,
      color: "text-purple-600",
      desc: "Improves adaptability, prioritisation and decisive performance under time pressure."
    },
    {
      name: "Everyday Life",
      icon: HeartHandshake,
      color: "text-rose-600",
      desc: "Promotes patience, foresight, discipline and thoughtful responses to sudden challenges."
    }
  ];

  return (
    <section className="py-10 sm:py-16 bg-white text-slate-900 relative overflow-hidden font-sans border-t border-slate-100" id="chess-real-life">
      {/* Subtle Dot Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-amber-50 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-50 rounded-full blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        
        {/* --- COMPACT HEADER --- */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-[11px] font-bold uppercase tracking-wider shadow-xs">
            <Sparkles size={13} className="text-amber-600" />
            <span>Real-World Cognitive Transfer</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            How Chess Skills Apply to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">Real Life</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            Chess develops several valuable skills that extend beyond the game. Its greatest contribution is learning to make thoughtful decisions under uncertainty, anticipate challenges and adapt when circumstances change.
          </p>
        </div>


        {/* --- 1. KEY TRANSFERABLE SKILLS --- */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-5 bg-amber-500 rounded-full" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              1. Key Transferable Skills
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {transferableSkills.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-amber-300 hover:bg-white hover:shadow-sm transition-all duration-200 flex flex-col justify-between space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center ${item.color}`}>
                      <Icon size={16} />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      #{idx + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-snug mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- 2. PRACTICAL APPLICATIONS TABLE --- */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-5 bg-teal-500 rounded-full" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              2. Practical Applications
            </h3>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100/90 border-b border-slate-200 text-[11px] uppercase tracking-wider text-slate-700 font-bold">
                    <th className="py-2.5 px-4 sm:w-1/3">Chess Skill</th>
                    <th className="py-2.5 px-4 sm:w-2/3">Real-World Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {practicalApplications.map((row, idx) => (
                    <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                      <td className="py-2.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-amber-600 shrink-0" />
                        <span>{row.skill}</span>
                      </td>
                      <td className="py-2.5 px-4 text-slate-600 font-medium">
                        {row.realWorld}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* --- 3. BROADER LESSONS --- */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-5 bg-indigo-500 rounded-full" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              3. Broader Lessons (Three Core Habits)
            </h3>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm mb-3 font-medium">
            Chess encourages three vital mental habits for life:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {broaderHabits.map((habit, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs flex items-start gap-3.5 hover:border-slate-300 transition-all"
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${habit.accent} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs`}>
                  {habit.number}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">
                    {habit.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {habit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- 4. APPLICATIONS IN EDUCATION & PROFESSIONAL DEVELOPMENT --- */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-5 bg-rose-500 rounded-full" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              4. Applications in Education & Professional Development
            </h3>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm mb-3 font-medium">
            How chess discipline applies across domains:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
            {domains.map((dom, idx) => {
              const Icon = dom.icon;
              return (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-1.5 hover:border-slate-300 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${dom.color}`} />
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                      {dom.name}
                    </h4>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-snug font-medium">
                    {dom.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- CENTRAL TAKEAWAY BOX (COMPACT) --- */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 shadow-xs">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Brain size={18} />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">
                Central Takeaway
              </span>
              <p className="text-slate-900 text-xs sm:text-sm font-semibold leading-relaxed">
                &ldquo;Chess is more than a game of tactics and competition. It provides a practical environment for developing strategic thinking, sound judgement, adaptability and the ability to make decisions under uncertainty. However, these skills must be consciously applied and developed in real-life situations; playing chess alone does not guarantee success.&rdquo;
              </p>
              <p className="text-slate-500 text-[11px] sm:text-xs font-medium pt-0.5">
                At Physics Made Easy, ex-MOE PSC scholar Mr. Chew uses chess as a live cognitive training ground — directly teaching students how to transfer calculation and composure to Physics exams and lifelong decision-making.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
