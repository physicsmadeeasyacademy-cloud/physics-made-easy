"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  MapPin,
  Clock,
  Laptop,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Users,
  Compass,
  FileText,
  Home,
  ChevronRight,
  Atom,
  Target,
  GraduationCap,
  Award,
  Phone,
  MessageCircle,
  ShieldCheck,
  Zap,
  TrendingUp,
  Brain,
  Scale,
  Check,
  X
} from "lucide-react";
import { getCourseSchema } from "@/config/seo-config";

export default function OLevelCombinedSciencePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = getCourseSchema({
    title: "O-Level Combined Science Tuition (Physics) | Singapore",
    description: "Combined Science Physics made clear. Small-group O-Level tuition in Singapore (Toa Payoh & Online) covering Physics concepts, calculations and exam technique. Free trial lesson.",
    level: "Secondary 3 and Secondary 4 (O-Level Combined Science 5076/5077)",
    url: "/o-level-combined-science-tuition",
    price: "320",
    priceCurrency: "SGD"
  });

  const whoIsThisFor = [
    {
      title: "Students Pulled Down by the Physics Half",
      desc: "Your Chemistry or Biology marks are decent, but your overall Combined Science grade is stuck at B4, C5 or lower because Physics drags down the 50% aggregate.",
      badge: "Targeted Grade Boost"
    },
    {
      title: "Students Needing Core Basics Rebuilt",
      desc: "Struggling with fundamental concepts like resultant forces, series/parallel circuit current splitting, or ray diagrams. You need patient, step-by-step explanations.",
      badge: "Foundation Rebuilding"
    },
    {
      title: "Students Aiming for a Definite Distinction (A1 / A2)",
      desc: "Combined Science questions follow predictable patterns. With disciplined exam technique and formula mastery, Physics can become your guaranteed scoring paper.",
      badge: "Distinction Strategy"
    }
  ];

  const syllabusTopics = [
    {
      category: "Section I: Measurement & Mechanics",
      topics: [
        { name: "Physical Quantities & Units", desc: "Base SI units, conversion of units, scalar and vector quantities." },
        { name: "Kinematics", desc: "Speed, velocity, acceleration, interpreting distance-time and speed-time graphs." },
        { name: "Dynamics & Newton's Laws", desc: "F = ma, balanced and unbalanced forces, friction and air resistance." },
        { name: "Mass, Weight & Density", desc: "Gravitational field strength, difference between mass and weight, density calculations." },
        { name: "Turning Effect of Forces", desc: "Moment of a force = F × d, principle of moments and stability." },
        { name: "Pressure", desc: "Pressure definition P = F/A and everyday atmospheric / liquid pressure applications." },
        { name: "Energy, Work & Power", desc: "Kinetic energy (½mv²), gravitational potential energy (mgh), conservation of energy, and power (W/t)." }
      ]
    },
    {
      category: "Section II: Thermal Physics",
      topics: [
        { name: "Kinetic Model of Matter", desc: "Solid, liquid, and gas molecular arrangement and motion, Brownian motion evidence." },
        { name: "Transfer of Thermal Energy", desc: "Conduction, convection, radiation mechanisms and practical everyday applications (vacuum flasks, cooling fins)." }
      ]
    },
    {
      category: "Section III: Waves, Light & Sound",
      topics: [
        { name: "General Wave Properties", desc: "Transverse vs longitudinal waves, wavelength, frequency, amplitude, period, and v = fλ." },
        { name: "Light & Reflection/Refraction", desc: "Laws of reflection, refraction, refractive index n = c/v, and total internal reflection basics." },
        { name: "Electromagnetic Spectrum", desc: "Components of the EM spectrum (radio to gamma) in order of wavelength/frequency and their uses." },
        { name: "Sound Waves", desc: "Longitudinal nature of sound, echoes, pitch vs frequency, loudness vs amplitude, and speed of sound." }
      ]
    },
    {
      category: "Section IV: Electricity & Magnetism",
      topics: [
        { name: "Current of Electricity", desc: "Electric current I = Q/t, electromotive force (e.m.f.), potential difference V = W/Q, and resistance R = V/I." },
        { name: "D.C. Circuits", desc: "Current and voltage behavior in series and parallel circuits, calculating effective resistance." },
        { name: "Practical Electricity", desc: "Electrical power P = VI, cost of electrical energy (kWh), plugs, fuses, earthing, and safe home usage." },
        { name: "Magnetism & Electromagnetism", desc: "Magnetic poles, magnetic field patterns, magnetic effect of electric currents, and electromagnets." }
      ]
    }
  ];

  const faqs = [
    {
      question: "Can I switch from Combined Science to Pure Physics?",
      answer: "School policies vary, but switching typically happens at the end of Secondary 3 if a student demonstrates outstanding performance (usually an overall A1) and the school administration approves. However, if your child remains in Combined Science, excelling with an A1/A2 is a fantastic asset for Polytechnic courses and select JC pathways."
    },
    {
      question: "Is Combined Science Physics easier than Pure Physics?",
      answer: "Yes, the syllabus is approximately 30% lighter and eliminates heavier, mathematically rigorous topics like Radioactivity, Thermal Capacities (c and l), and complex Electromagnetic Induction. The questions in Paper 1 (MCQ) and Paper 2 are more direct. With focused guidance, students can achieve near-full marks on the Physics component."
    },
    {
      question: "Do you also teach the Chemistry or Biology component?",
      answer: "Mr. Chew is a dedicated, specialized Physics master coach (Ex-MOE PSC Scholar, NTU Physics Instructor). We focus 100% on the Physics component to ensure it becomes your highest-scoring paper. Many parents find that when Physics becomes a guaranteed 40/50 or 45/50, the pressure on the Chemistry component drops dramatically, securing an overall A1 or A2."
    },
    {
      question: "How soon will I see an improvement in my grades?",
      answer: "Most students see a noticeable leap within 4 to 8 weeks. Because Combined Science Physics has fewer variations of questions, once a student learns our 4-step formula protocol and masters graph reading, their MCQ and structured paper scores rise immediately."
    }
  ];

  return (
    <main className="bg-slate-50 min-h-screen font-sans pb-24 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative w-full bg-slate-950 text-white overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-20">
        {/* Full Hero Background Concept Image with Cinematic Gradient Overlays */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/images/combined-science-hero.jpg"
            alt="Combined Science Physics Background Concept"
            fill
            className="object-cover object-center opacity-25 scale-105"
            priority
          />
          {/* Gradients to keep text ultra-crisp and readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-transparent to-slate-950/85" />
          {/* Subtle Science Grid */}
          <div 
            className="absolute inset-0 opacity-[0.05]" 
            style={{ backgroundImage: 'radial-gradient(#14b8a6 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
          
          {/* Breadcrumbs */}
          <nav className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-300 mb-5">
            <Link href="/" className="hover:text-teal-400 transition-colors flex items-center gap-1">
              <Home size={12} /> Home
            </Link>
            <ChevronRight size={12} className="text-slate-500" />
            <Link href="/courses" className="hover:text-teal-400 transition-colors">Courses</Link>
            <ChevronRight size={12} className="text-slate-500" />
            <span className="text-teal-400 font-semibold">Combined Science (Physics)</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles size={14} className="text-teal-400" />
              <span>Singapore Cambridge GCE O-Level Syllabus 5076 / 5077</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-sm">
              O-Level Combined Science <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-300">(Physics) Tuition</span> in Singapore
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
              Focused help for the Physics component of Combined Science, so the Physics grade stops holding your overall result back.
            </p>

            {/* Three Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-left">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md shadow-lg">
                <div className="text-teal-400 font-black text-lg">20+ Years</div>
                <div className="text-xs text-slate-200 font-medium">Ex-MOE Scholar & NTU Instructor</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md shadow-lg">
                <div className="text-emerald-300 font-black text-lg">Max 6–8</div>
                <div className="text-xs text-slate-200 font-medium">Dedicated small-group guidance</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md shadow-lg">
                <div className="text-cyan-300 font-black text-lg">Fast Jump</div>
                <div className="text-xs text-slate-200 font-medium">From C6/D7 to confident A1/A2</div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2"
              >
                <span>Book a Free Trial Lesson</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/6597277419?text=Hello%20Mr%20Chew,%20I'm%20interested%20in%20O-Level%20Combined%20Science%20Physics%20Tuition."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <MessageCircle size={18} className="text-emerald-400" />
                <span>WhatsApp Us (+65 9727 7419)</span>
              </a>
            </div>

            {/* Visual Concept Feature Card */}
            <div className="pt-6 max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-slate-950/80 aspect-[16/8] sm:aspect-[21/8]">
                <Image
                  src="/images/combined-science-hero.jpg"
                  alt="Combined Science Physics Concepts - Electric Circuits, Light Reflection, Energy Conversion, and Moments"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-2 text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      Targeted Physics Mastery: High-Scoring Circuits, Thermal & Mechanics
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    Syllabus 5076/5077
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: WHO THIS CLASS IS FOR --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Student Profiles
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            Who This Class Is For
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            In Combined Science, Physics constitutes exactly 50% of your total score. Fixing Physics is the fastest way to turn a failing grade into an L1R4/L1R5 scoring asset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whoIsThisFor.map((item, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="px-2.5 py-1 rounded-md bg-teal-50 text-teal-700 text-xs font-bold">
                  {item.badge}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-3 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-teal-600">
                <CheckCircle size={14} /> Proven turnaround method
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: COMBINED SCIENCE PHYSICS VS PURE PHYSICS --- */}
      <section className="py-16 bg-slate-100/70 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest bg-teal-100/70 px-3 py-1 rounded-full">
              Syllabus Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-2">
              Combined Science Physics vs Pure Physics
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base">
              What is the difference between Pure Physics and Combined Science (Physics) in Singapore? Here is an objective comparison to help you choose the best study path:
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm mb-6">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-4 px-4 sm:px-6">Feature</th>
                  <th className="py-4 px-4 sm:px-6 text-teal-800 bg-teal-50/60">Combined Science (Physics 5076)</th>
                  <th className="py-4 px-4 sm:px-6">Pure Physics (6091)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">Total Subject Weight</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-700 bg-teal-50/30">
                    Counts as 50% of one Science grade (e.g., Science Physics/Chem).
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600">
                    Counts as 1 full standalone O-Level subject grade.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">Depth of Content</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-700 bg-teal-50/30">
                    Streamlined syllabus. Focuses on straightforward conceptual definitions and standard single-equation calculations.
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600">
                    Deeper conceptual and mathematical rigor, multi-step problem solving, and complex graphical derivations.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">Excluded Topics</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-700 bg-teal-50/30 font-medium text-teal-900">
                    No Radioactivity, no Specific Heat Capacity / Latent Heat equations, no complex Electromagnetic Induction circuits.
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600">
                    Includes all 22 full chapters including Radioactivity, Nuclear Physics, and advanced induction.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">Practical Exam</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-700 bg-teal-50/30">
                    Combined Science Paper 5 practical is shared between two sciences (shorter 1h 30m total).
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600">
                    Paper 3 Practical is an intensive 1h 50m lab exam carrying 20% weightage.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">Who This Suits</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-700 bg-teal-50/30">
                    Students aiming for Polytechnic diplomas, arts/commerce JC streams, or students wanting a lower-stress science subject.
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600">
                    Students planning to take JC H2 Physics and pursue engineering, computing, architecture, or science degrees.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <Link 
              href="/o-level-pure-physics-tuition"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800"
            >
              <span>Considering Pure Physics instead? Check out our O-Level Pure Physics Tuition page</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: HOW WE TEACH COMBINED PHYSICS --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Teaching Strategy
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            How We Teach Combined Physics
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Combined Science students do not need overwhelming theory. They need simplicity, high-frequency question mastery, and immediate exam confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              step: "01",
              title: "Start from Fundamentals",
              desc: "We strip away confusing textbook jargon and explain concepts using visual everyday examples so students truly understand why things happen."
            },
            {
              step: "02",
              title: "High-Frequency Questions",
              desc: "Cambridge Combined Science repeats core question patterns. We drill the top 20 question styles that consistently appear year after year."
            },
            {
              step: "03",
              title: "Formula & Unit Confidence",
              desc: "A one-page Formula Sheet and our Given → Formula → Calculation checklist eliminate careless calculation and conversion mistakes."
            },
            {
              step: "04",
              title: "Fix Common Traps",
              desc: "Topic-by-topic traps (like confusing mass and weight, or forgetting that total resistance in parallel decreases) are mastered upfront."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm relative">
              <span className="text-2xl font-black text-teal-500/30 absolute top-4 right-4">
                {item.step}
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 5: TOPICS COVERED --- */}
      <section className="py-16 bg-slate-100/60 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              SEAB 5076 / 5077
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
              Topics Covered in Combined Science Physics
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Full coverage of all SEAB syllabus topics across Sec 3 and Sec 4.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {syllabusTopics.map((cat, cIdx) => (
              <div key={cIdx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wider pb-3 mb-3 border-b border-slate-100">
                  {cat.category}
                </h3>
                <div className="space-y-3">
                  {cat.topics.map((t, tIdx) => (
                    <div key={tIdx} className="border-l-2 border-teal-400 pl-3">
                      <div className="font-bold text-xs sm:text-sm text-slate-900">{t.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{t.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: SCHEDULE, LOCATION AND FEES --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Transparent Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            Schedule, Location & Fees
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            No hidden material fees, no registration deposit, and small groups capped at 4 to 8 students.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm mb-8">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-4 px-4 sm:px-6">Course</th>
                <th className="py-4 px-4 sm:px-6">Class Size</th>
                <th className="py-4 px-4 sm:px-6">Duration</th>
                <th className="py-4 px-4 sm:px-6">Monthly Fee</th>
                <th className="py-4 px-4 sm:px-6">Venues</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-teal-50/40 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                  Sec 3 Combined Science (Physics)
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">4 – 8 students</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">2.0 Hours / week</td>
                <td className="py-4 px-4 sm:px-6 font-black text-teal-700">$320 / 4 sessions</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">Toa Payoh Central / Online</td>
              </tr>
              <tr className="hover:bg-teal-50/40 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                  Sec 4 Combined Science (Physics)
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">4 – 8 students</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">2.0 Hours / week</td>
                <td className="py-4 px-4 sm:px-6 font-black text-teal-700">$320 / 4 sessions</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">Toa Payoh Central / Online</td>
              </tr>
              <tr className="hover:bg-teal-50/40 transition-colors bg-slate-50/50">
                <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                  1-on-1 Fast-Track Booster
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">1-on-1 custom</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">1.5 – 2.0 Hours</td>
                <td className="py-4 px-4 sm:px-6 font-black text-teal-700">Enquire for slots</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">Physical Studio / Online</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Location notes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
              <MapPin size={16} className="text-teal-600" />
              <span>Main Centre: Toa Payoh</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              185 Toa Payoh Central, #02-342 (Lift E), Singapore 310185. (Wednesday classes held at 186 Toa Payoh Central #02-430).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 overflow-hidden">
            <div className="relative h-20 -mx-4 -mt-4 mb-2">
              <Image
                src="/images/braddell-studio.jpg"
                alt="Braddell Studio Tuition Space"
                fill
                className="object-cover"
              />
            </div>
            <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
              <MapPin size={16} className="text-teal-600" />
              <span>Overflow: Braddell Studio</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Braddell Studio (near Braddell MRT), providing calm overflow small-group capacity when existing venues are full.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
              <Laptop size={16} className="text-teal-600" />
              <span>Live Synchronous Online</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Real-time online lessons with digital whiteboard and mailed physical notes for students who cannot travel.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: RESULTS AND REVIEWS --- */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-500/20 px-3 py-1 rounded-full border border-teal-400/30">
              Verified Student Results
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mt-3">
              Combined Science Grade Breakthroughs
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base mt-2">
              Real stories of students who transformed Physics from their worst subject into their highest-scoring asset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-amber-400 text-xs font-bold mb-2">★★★★★ D7 to A1 for O-Levels</div>
              <p className="text-xs text-slate-300 italic leading-relaxed mb-4">
                &ldquo;Physics was always dragging my Combined Science down to D7. Mr Chew made circuits and turning effects so simple with his analogies. For O-Levels, my science jumped all the way to A1!&rdquo;
              </p>
              <div className="text-xs font-bold text-white">— Bryan K., Pei Hwa Secondary</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-amber-400 text-xs font-bold mb-2">★★★★★ C5 to A2 in 3 Months</div>
              <p className="text-xs text-slate-300 italic leading-relaxed mb-4">
                &ldquo;I was very stressed before Prelims because my Physics marks were always below 50%. The targeted topical drilling and formula cheat sheets gave me immediate confidence.&rdquo;
              </p>
              <div className="text-xs font-bold text-white">— Jaslyn T., St. Andrew&apos;s Secondary</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-amber-400 text-xs font-bold mb-2">★★★★★ From Confused to Confident</div>
              <p className="text-xs text-slate-300 italic leading-relaxed mb-4">
                &ldquo;Mr. Chew never makes you feel bad for asking basic questions. His patient explanation of light refraction and moments helped my son finally enjoy science.&rdquo;
              </p>
              <div className="text-xs font-bold text-white">— Mrs. Lim, Parent of Sec 4 student</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 8: FAQ --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Clarifications
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Everything you need to know about our Combined Science Physics coaching.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors text-sm sm:text-base"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-teal-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* --- SECTION 9: FINAL CTA --- */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-teal-700 via-emerald-800 to-slate-900 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-200 border border-white/15 text-xs font-bold uppercase tracking-wider">
              Secure Your Child&apos;s O-Level Science Grade
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Turn Physics Into Your Scoring Advantage
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed">
              Experience Mr. Chew&apos;s clear, patient teaching in a free trial lesson. WhatsApp us today to check current class times and seat availability.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-teal-900 font-bold text-sm sm:text-base transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Book a Free Trial Lesson</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/6597277419?text=Hello%20Mr%20Chew,%20I'd%20like%20to%20enquire%20about%20Combined%20Science%20Physics%20Tuition."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-white/20 text-white font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <MessageCircle size={18} className="text-emerald-400" />
                <span>WhatsApp (+65 9727 7419)</span>
              </a>
            </div>

            <div className="text-xs text-teal-200/80 pt-2">
              Small classes of 4 to 8 students. Located at Toa Payoh Central & Braddell Studio.
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
