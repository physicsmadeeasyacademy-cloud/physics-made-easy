"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Target, 
  ShieldAlert, 
  Eye, 
  Compass, 
  RefreshCw, 
  Lightbulb, 
  Clock, 
  ArrowRight, 
  GraduationCap, 
  Briefcase, 
  TrendingUp, 
  Rocket, 
  HeartHandshake, 
  Facebook, 
  PlayCircle, 
  ExternalLink,
  Download,
  Maximize2,
  X,
  Layers,
  CheckCircle2
} from "lucide-react";

export default function ChessRealLifeSkills() {
  const [activeTab, setActiveTab] = useState<"visual" | "breakdown">("visual");
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const transferPairs = [
    {
      num: "01",
      skill: "Calculating Moves Ahead",
      domain: "Strategic Foresight",
      transfer: "Evaluating business, career & financial decisions before committing capital or effort.",
      icon: Target,
      color: "border-amber-400 bg-amber-50/60 text-amber-900"
    },
    {
      num: "02",
      skill: "Handling Uncertainty",
      domain: "Decision Making",
      transfer: "Making informed, confident decisions even when information is incomplete and stakes are high.",
      icon: ShieldAlert,
      color: "border-blue-400 bg-blue-50/60 text-blue-900"
    },
    {
      num: "03",
      skill: "Anticipating Opponents",
      domain: "Empathy & Negotiation",
      transfer: "Predicting how competitors and stakeholders respond; preparing effective countermeasures.",
      icon: Eye,
      color: "border-teal-400 bg-teal-50/60 text-teal-900"
    },
    {
      num: "04",
      skill: "Planning Countermeasures",
      domain: "Contingency Design",
      transfer: "Preparing robust fallback plans, defense buffers, and multi-layered mitigation strategies.",
      icon: Compass,
      color: "border-indigo-400 bg-indigo-50/60 text-indigo-900"
    },
    {
      num: "05",
      skill: "Responding to Surprises",
      domain: "Agile Adaptability",
      transfer: "Responding creatively to sudden disruptions instead of clinging rigidly to obsolete plans.",
      icon: RefreshCw,
      color: "border-purple-400 bg-purple-50/60 text-purple-900"
    },
    {
      num: "06",
      skill: "Seeing the Whole Board",
      domain: "Systems Thinking",
      transfer: "Balancing immediate tactical gains with overarching long-term objectives without tunnel vision.",
      icon: Lightbulb,
      color: "border-emerald-400 bg-emerald-50/60 text-emerald-900"
    },
    {
      num: "07",
      skill: "Managing the Clock",
      domain: "Execution Under Pressure",
      transfer: "Prioritising high-impact decisions and delivering clear, composed judgment under tight time constraints.",
      icon: Clock,
      color: "border-rose-400 bg-rose-50/60 text-rose-900"
    }
  ];

  const habits = [
    {
      step: "1",
      title: "Think Before Acting",
      lead: "Consequence Mapping",
      desc: "Pause impulses; evaluate 2-3 moves ahead before committing resources or making critical choices."
    },
    {
      step: "2",
      title: "Plan but Pivot",
      lead: "Dynamic Flexibility",
      desc: "Commit to an overarching strategy, but adapt swiftly when external conditions or opponents change."
    },
    {
      step: "3",
      title: "Learn & Iterate",
      lead: "Post-Game Analysis",
      desc: "Deconstruct unsuccessful decisions objectively to transform setbacks into compounding wisdom."
    }
  ];

  const domains = [
    { title: "Education", icon: GraduationCap, tag: "STEM Logic & Rigor", color: "text-blue-700 bg-blue-50 border-blue-200" },
    { title: "Business", icon: Briefcase, tag: "Strategy & Positioning", color: "text-amber-700 bg-amber-50 border-amber-200" },
    { title: "Finance", icon: TrendingUp, tag: "Risk & Scenarios", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
    { title: "Career", icon: Rocket, tag: "Agile Prioritisation", color: "text-purple-700 bg-purple-50 border-purple-200" },
    { title: "Everyday Life", icon: HeartHandshake, tag: "Patience & Composure", color: "text-rose-700 bg-rose-50 border-rose-200" }
  ];

  return (
    <section className="py-12 md:py-16 bg-white text-slate-900 font-sans border-y border-slate-200/80" id="chess-infographic">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* --- MAIN INFOGRAPHIC CARD CONTAINER --- */}
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50/70 via-white to-amber-50/30 p-5 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
          
          {/* Subtle Grid Watermark */}
          <div 
            className="absolute inset-0 opacity-[0.025] pointer-events-none" 
            style={{ backgroundImage: "radial-gradient(#0f172a 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }}
          />

          {/* Top Bar: Pill Tag & Quick Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200/80 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-[11px] font-black uppercase tracking-wider">
              <Sparkles size={12} className="text-amber-700" />
              <span>Cognitive Architecture Infographic</span>
            </div>

            {/* View Switcher / Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("visual")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "visual"
                    ? "bg-amber-600 text-white shadow-xs"
                    : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
                }`}
              >
                🖼️ Visual Infographic
              </button>
              <button
                onClick={() => setActiveTab("breakdown")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "breakdown"
                    ? "bg-amber-600 text-white shadow-xs"
                    : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
                }`}
              >
                🗺️ Detailed Roadmap
              </button>
              <a
                href="/images/chess-skills-real-life-infographic.jpg"
                download="How-Chess-Skills-Apply-To-Real-Life-Infographic.jpg"
                className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-bold transition-colors"
                title="Download Infographic Image"
              >
                <Download size={12} />
                <span>Download Image</span>
              </a>
            </div>
          </div>

          {/* Infographic Title Header */}
          <div className="pt-6 pb-8 text-center max-w-2xl mx-auto space-y-2 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              How Chess Skills Apply to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">Real Life</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Its greatest contribution is learning to make thoughtful decisions under uncertainty, anticipate challenges, and adapt when circumstances change.
            </p>
          </div>

          {/* --- TAB 1: VISUAL INFOGRAPHIC POSTER VIEW --- */}
          {activeTab === "visual" && (
            <div className="space-y-8 relative z-10">
              
              {/* Infographic Poster Container with Zoom / Enlarge Control */}
              <div className="relative mx-auto max-w-md sm:max-w-lg rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl group">
                <div className="relative aspect-[9/16] w-full">
                  <Image
                    src="/images/chess-skills-real-life-infographic.jpg"
                    alt="How Chess Skills Apply to Real Life - Visual Infographic with connected steps, chess knight, and decision roadmap"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-contain cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
                    onClick={() => setLightboxOpen(true)}
                    priority
                  />
                </div>

                {/* Hover overlay with Enlarge button */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-bold flex items-center gap-1.5 shadow-md backdrop-blur-xs transition-transform active:scale-95"
                  >
                    <Maximize2 size={13} />
                    <span>Click to Enlarge</span>
                  </button>
                  <a
                    href="/images/chess-skills-real-life-infographic.jpg"
                    download="How-Chess-Skills-Apply-To-Real-Life-Infographic.jpg"
                    className="p-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-md transition-transform active:scale-95"
                    title="Download Poster Image"
                  >
                    <Download size={15} />
                  </a>
                </div>
              </div>

              {/* Quick summary strip under the poster */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-center">
                  <div className="w-6 h-6 rounded-lg bg-amber-500 text-white font-black text-xs mx-auto flex items-center justify-center mb-1">01-07</div>
                  <h4 className="text-xs font-bold text-slate-900">Connected Roadmap</h4>
                  <p className="text-[11px] text-slate-500">7 Transferable Cognitive Milestones</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-center">
                  <div className="w-6 h-6 rounded-lg bg-teal-600 text-white font-black text-xs mx-auto flex items-center justify-center mb-1">🔄</div>
                  <h4 className="text-xs font-bold text-slate-900">Habit Feedback Loop</h4>
                  <p className="text-[11px] text-slate-500">Think ➔ Plan & Adapt ➔ Learn</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-center">
                  <div className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-black text-xs mx-auto flex items-center justify-center mb-1">🎯</div>
                  <h4 className="text-xs font-bold text-slate-900">Domain Translation</h4>
                  <p className="text-[11px] text-slate-500">Business, Education, Finance & Career</p>
                </div>
              </div>

            </div>
          )}

          {/* --- TAB 2: DETAILED CONNECTED ROADMAP (SVG-LINKED MATRIX) --- */}
          {activeTab === "breakdown" && (
            <div className="space-y-8 relative z-10">
              
              {/* Section 1: The 7 Transferable Skills */}
              <div>
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                    1. 7 Core Cognitive Translators (Board ➔ Real World)
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline">
                    Click any node to highlight
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {transferPairs.map((pair, idx) => {
                    const isSelected = selectedSkill === idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedSkill(isSelected ? null : idx)}
                        className={`cursor-pointer rounded-2xl p-4 border transition-all duration-200 flex items-start gap-3.5 ${
                          isSelected 
                            ? 'bg-amber-50/80 border-amber-400 shadow-sm' 
                            : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
                        }`}
                      >
                        <div className="w-9 h-9 rounded-xl bg-slate-900 text-amber-400 font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                          {pair.num}
                        </div>

                        <div className="space-y-1 flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold text-slate-900">
                            <span className="text-slate-950 font-black">{pair.skill}</span>
                            <ArrowRight size={12} className="text-amber-600 shrink-0" />
                            <span className="text-amber-800 bg-amber-100/70 px-1.5 py-0.2 rounded text-[10px] font-black uppercase tracking-wider">
                              {pair.domain}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-snug font-medium">
                            {pair.transfer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Section 2: 3 Core Habits Cycle */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3 px-1">
                  2. The Strategic Habit Cycle
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {habits.map((habit, idx) => (
                    <div 
                      key={idx} 
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                    >
                      <div className="w-7 h-7 rounded-lg bg-amber-500 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                        {habit.step}
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                          {habit.lead}
                        </p>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          {habit.title}
                        </h4>
                        <p className="text-[11px] text-slate-600 leading-snug">
                          {habit.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Applications Across Fields */}
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3 px-1">
                  3. Applications Across Professional & Educational Fields
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                  {domains.map((dom, idx) => {
                    const Icon = dom.icon;
                    return (
                      <div 
                        key={idx}
                        className={`p-2.5 rounded-xl border ${dom.color} flex flex-col justify-between space-y-1 shadow-2xs`}
                      >
                        <div className="flex items-center gap-1.5 font-bold text-xs">
                          <Icon size={14} className="shrink-0" />
                          <span className="truncate">{dom.title}</span>
                        </div>
                        <span className="text-[10px] text-slate-600 font-medium leading-tight">
                          {dom.tag}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

          {/* --- WEF VIDEO SPOTLIGHT MINI-CARD (Always Visible) --- */}
          <div className="mt-8 mb-6 p-4 rounded-2xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-3.5 shadow-md relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
                <Facebook size={20} />
              </div>
              <div className="space-y-0.5">
                <div className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                  <PlayCircle size={10} /> World Economic Forum Spotlight
                </div>
                <p className="text-xs sm:text-sm font-bold text-white">
                  &ldquo;Sometimes there are no best moves, but the one that suits you the most.&rdquo;
                </p>
                <p className="text-[11px] text-slate-400">
                  GM Yifan Hou on what chess teaches about uncertainty, resilience and decision-making.
                </p>
              </div>
            </div>
            <a
              href="https://www.facebook.com/share/v/1De6NoMrez/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shrink-0 transition-all shadow-xs active:scale-95 whitespace-nowrap self-stretch sm:self-auto justify-center"
            >
              <span>Watch on Facebook</span>
              <ExternalLink size={12} />
            </a>
          </div>

          {/* --- CENTRAL TAKEAWAY SEAL --- */}
          <div className="pt-4 border-t border-slate-200/80 flex items-start gap-3 text-xs leading-relaxed text-slate-600 relative z-10">
            <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 font-black text-xs mt-0.5 shadow-2xs">
              ★
            </div>
            <p>
              <strong className="text-slate-900 font-bold">Central Takeaway:</strong> Chess is more than a game of tactics and competition. It provides a practical environment for developing strategic thinking, sound judgement, adaptability and the ability to make decisions under uncertainty. However, these skills must be consciously applied and developed in real-life situations; playing chess alone does not guarantee success. At Physics Made Easy, Mr. Chew consciously trains students to translate these habits into Physics exams and lifelong leadership.
            </p>
          </div>

        </div>

      </div>

      {/* --- LIGHTBOX MODAL FOR FULL-SIZE INFOGRAPHIC VIEW --- */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxOpen(false)}
          >
            <div 
              className="relative max-w-2xl w-full max-h-[92vh] flex flex-col items-center bg-white rounded-3xl p-3 sm:p-5 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-800">
                  How Chess Skills Apply to Real Life — Full Infographic Poster
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="/images/chess-skills-real-life-infographic.jpg"
                    download="How-Chess-Skills-Apply-To-Real-Life-Infographic.jpg"
                    className="p-1.5 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-600 transition-colors"
                    title="Download Poster"
                  >
                    <Download size={14} />
                  </a>
                  <button
                    onClick={() => setLightboxOpen(false)}
                    className="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              <div className="relative w-full max-h-[80vh] overflow-y-auto pt-3 flex justify-center">
                <img
                  src="/images/chess-skills-real-life-infographic.jpg"
                  alt="Full-size infographic poster: How Chess Skills Apply to Real Life"
                  className="rounded-2xl max-h-[78vh] w-auto object-contain shadow-md"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}