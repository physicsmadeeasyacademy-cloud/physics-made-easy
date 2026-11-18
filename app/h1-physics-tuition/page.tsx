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
  Smile,
  Check
} from "lucide-react";
import { getCourseSchema } from "@/config/seo-config";

export default function H1PhysicsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = getCourseSchema({
    title: "H1 Physics Tuition Singapore | JC Physics Made Clear",
    description: "Taking H1 Physics in JC? Small-group tuition that simplifies concepts and builds exam confidence in Singapore (Toa Payoh & Online). Book a free trial lesson today.",
    level: "Junior College 1 & 2 (A-Level H1 Physics 8867)",
    url: "/h1-physics-tuition",
    price: "360",
    priceCurrency: "SGD"
  });

  const h1Topics = [
    { name: "Measurement & Physical Quantities", desc: "Base and derived SI units, systematic vs random errors, and uncertainty propagation." },
    { name: "Kinematics", desc: "Linear motion equations, projectile motion components, and displacement/velocity-time graphs." },
    { name: "Dynamics", desc: "Newton's laws of motion, momentum conservation, and impulse." },
    { name: "Forces", desc: "Hooke's law, upthrust (Archimedes' principle), frictional forces, and torque/moments." },
    { name: "Work, Energy & Power", desc: "Work done by variable forces, kinetic and potential energies, conservation of energy and power calculations." },
    { name: "Motion in a Circle", desc: "Angular velocity, centripetal acceleration, and centripetal force in horizontal and banked curves." },
    { name: "Gravitational Field", desc: "Newton's law of universal gravitation, gravitational field strength g, and circular satellite orbits." },
    { name: "Current of Electricity", desc: "Electric current, potential difference, resistance, resistivity and temperature dependence." },
    { name: "D.C. Circuits", desc: "Electromotive force (e.m.f.), internal resistance, potential dividers, and Kirchhoff's loop principles." },
    { name: "Electromagnetism", desc: "Magnetic flux density, force on a current-carrying conductor (F = BIL), and magnetic field patterns." },
    { name: "Electromagnetic Induction", desc: "Magnetic flux linkage, Faraday's law, Lenz's law, and simple transformer principles." },
    { name: "Nuclear Physics", desc: "Mass defect and binding energy, nuclear fission, nuclear fusion, and radioactive half-life calculations." }
  ];

  const faqs = [
    {
      question: "Is H1 Physics hard without a strong science background?",
      answer: "No, provided concepts are taught clearly from fundamentals. H1 Physics has a significantly reduced scope compared to H2—there is no practical exam (Paper 4), fewer subtopics, and questions focus on fundamental applications rather than grueling multi-layered derivations. Many of our students took Combined Science in secondary school or are Arts/Commerce stream students and still comfortably achieve an A or B with our structured scaffolding."
    },
    {
      question: "Can I upgrade from H1 to H2 Physics?",
      answer: "Upgrading from H1 to H2 is governed by your specific junior college's academic policy. In most JCs, subject combination adjustments must be requested within the first term of JC1 and require passing an internal diagnostic test or school interview. Because H2 includes Paper 4 Practical lab training and deeper theoretical units, transferring early is critical. If you are considering upgrading, Mr. Chew can provide an accelerated bridging curriculum."
    },
    {
      question: "How much time should I spend studying H1 Physics each week?",
      answer: "Because H1 Physics is a 1-unit subject designed to allow you to focus more revision hours on your 3 H2 subjects, 2 to 3 hours of dedicated, focused weekly study (including attending our weekly 2-hour small-group class) is typically more than sufficient to stay at the top of your cohort."
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
            src="/images/h1-physics-hero.jpg"
            alt="A-Level H1 Physics Background Concept"
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
            style={{ backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}
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
            <span className="text-teal-400 font-semibold">H1 Physics</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles size={14} className="text-sky-400" />
              <span>Singapore Cambridge GCE A-Level Syllabus 8867</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-sm">
              H1 Physics Tuition in Singapore for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-300 to-indigo-300">JC Students</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
              H1 Physics does not have to be stressful. Learn the essentials clearly, build exam confidence, and secure your distinction without sacrificing your H2 study time.
            </p>

            {/* Three Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-left">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md shadow-lg">
                <div className="text-teal-400 font-black text-lg">20+ Years</div>
                <div className="text-xs text-slate-200 font-medium">Ex-MOE Scholar & NTU Instructor</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md shadow-lg">
                <div className="text-sky-300 font-black text-lg">Zero Stress</div>
                <div className="text-xs text-slate-200 font-medium">Clear, high-yield summary notes</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md shadow-lg">
                <div className="text-indigo-300 font-black text-lg">90%+ A/B</div>
                <div className="text-xs text-slate-200 font-medium">Consistent A-Level distinction rate</div>
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
                href="https://wa.me/6597277419?text=Hello%20Mr%20Chew,%20I'm%20interested%20in%20JC%20H1%20Physics%20Tuition."
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
                  src="/images/h1-physics-hero.jpg"
                  alt="A-Level H1 Physics Concepts - Circular Motion, Gravitational Orbits, and D.C. Circuits"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-2 text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      High-Efficiency H1 Revision: Mechanics, Fields & D.C. Circuits
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-sky-300 bg-sky-950/80 border border-sky-500/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    Syllabus 8867 No-Practical Track
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: WHAT IS H1 PHYSICS AND WHO TAKES IT? --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Subject Overview
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            What Is H1 Physics & Who Takes It?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            H1 Physics (Syllabus 8867) is an A-Level content subject designed for JC students who want a solid grounding in scientific principles without the heavier mathematical derivations or lab work of H2.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
              <Users size={20} />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Contrasting Subject Students</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Arts, Humanities, or Economics-stream students fulfilling MOE&apos;s contrasting subject requirement who want an objective, formula-driven subject with clear right-or-wrong marks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
              <Scale size={20} />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Balanced Workload Seekers</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Students taking heavy H2 subjects (such as H2 Math, Chemistry, Biology, or Economics) who prefer not to spend 2 to 3 afternoons a week on H2 Practical laboratory sessions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
              <Target size={20} />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Combined Science Graduates</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Students who took Combined Science in secondary school and find the leap to H2 Physics overwhelming, but can thrive in the more accessible scope of H1 Physics.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: H1 PHYSICS VS H2 PHYSICS COMPARISON --- */}
      <section className="py-16 bg-slate-100/70 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest bg-teal-100/70 px-3 py-1 rounded-full">
              Detailed Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-2">
              H1 Physics vs H2 Physics: What Is the Difference?
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base">
              Wondering whether H1 or H2 Physics fits your university goals better? Here is how they stack up side by side:
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm mb-6">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-4 px-4 sm:px-6">Comparison Aspect</th>
                  <th className="py-4 px-4 sm:px-6 text-sky-800 bg-sky-50/60">H1 Physics (Syllabus 8867)</th>
                  <th className="py-4 px-4 sm:px-6">H2 Physics (Syllabus 9749)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">Academic Units</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-700 bg-sky-50/30 font-semibold text-sky-900">1 AU (Academic Unit)</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600">2 AUs (Academic Units)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">Exam Papers</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-700 bg-sky-50/30">
                    2 Written Papers: Paper 1 (30 MCQs, 33%) & Paper 2 (Structured Questions, 67%).
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600">
                    4 Papers: Paper 1 (MCQ), Paper 2 (Structured), Paper 3 (Long Structured), Paper 4 (Practical Lab).
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">Practical Assessment</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-700 bg-sky-50/30 font-medium text-emerald-700">
                    NO practical exam (0% lab assessment). 100% written papers.
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600">
                    Paper 4 Practical lab exam is mandatory (20% of total grade).
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">Excluded Topics</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-700 bg-sky-50/30">
                    Excludes Superposition / Waves, Quantum Physics, Alternating Current (AC), and Electric Field derivations.
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600">
                    Full syllabus including Quantum, Superposition, A.C., and complete Field theory.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">University Prerequisites</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-700 bg-sky-50/30">
                    Accepted for Business, Law, Medicine (with H2 Chem/Bio), Humanities, Architecture, and select computing courses.
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-600">
                    Strict requirement for NUS/NTU Engineering (Electrical, Mechanical, Aerospace) and Physics majors.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <Link 
              href="/jc-h2-physics-tuition"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800"
            >
              <span>Need the full 2-unit syllabus instead? View our JC H2 Physics Tuition page</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: HOW WE TEACH H1 PHYSICS --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Smart Learning Method
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            How We Teach H1 Physics
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            H1 students need efficiency: high-yield understanding without wading through hundreds of pages of uncurated lecture notes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: "Simplified Intuitive Core",
              desc: "We decode abstract concepts into clear mental pictures so you never have to blindly guess formula application."
            },
            {
              title: "Concise Chapter Notes",
              desc: "10-page master summaries per topic highlighting definitions, standard derivation steps, and mandatory Cambridge keywords."
            },
            {
              title: "Targeted Topical Drilling",
              desc: "Past-year A-Level H1 Cambridge questions arranged by difficulty to build pattern recognition and exam muscle memory."
            },
            {
              title: "High-Yield Exam Strategy",
              desc: "Mastering the MCQ Paper 1 (33% weightage) to secure 26–28/30, leaving a comfortable margin for an easy A in Paper 2."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-sky-300 transition-all">
              <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 font-black text-xs flex items-center justify-center mb-3">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 5: TOPICS COVERED --- */}
      <section className="py-16 bg-slate-100/60 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Complete Scope
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
              Topics Covered in H1 Physics (8867)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Every chapter in the Singapore-Cambridge GCE A-Level H1 Physics syllabus is comprehensively covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {h1Topics.map((topic, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-sky-500" />
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900">{topic.name}</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pl-4">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: SCHEDULE, LOCATION AND FEES --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Clear Rates
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            Schedule, Location & Fees
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Small group coaching capped at 4 to 8 students with direct WhatsApp homework guidance between classes.
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
              <tr className="hover:bg-sky-50/40 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                  JC1 H1 Physics Weekly Class
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">4 – 8 students</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">2.0 Hours / week</td>
                <td className="py-4 px-4 sm:px-6 font-black text-sky-700">$360 / 4 sessions</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">Toa Payoh Central / Online</td>
              </tr>
              <tr className="hover:bg-sky-50/40 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                  JC2 H1 Physics (A-Level Intensive)
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">4 – 8 students</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">2.0 Hours / week</td>
                <td className="py-4 px-4 sm:px-6 font-black text-sky-700">$360 / 4 sessions</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">Toa Payoh Central / Online</td>
              </tr>
              <tr className="hover:bg-sky-50/40 transition-colors bg-slate-50/50">
                <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                  1-on-1 Fast-Track Consultation
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">1-on-1 private</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">1.5 – 2.0 Hours</td>
                <td className="py-4 px-4 sm:px-6 font-black text-sky-700">Enquire for slots</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">Physical Studio / Online</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Venues */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
              <MapPin size={16} className="text-teal-600" />
              <span>Toa Payoh Central (Main Centre)</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              185 Toa Payoh Central, #02-342 (Lift E), Singapore 310185. (Wednesday sessions at 186 Toa Payoh Central #02-430).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 overflow-hidden">
            <div className="relative h-20 -mx-4 -mt-4 mb-2">
              <Image
                src="/images/braddell-studio.jpg"
                alt="Braddell Studio Tuition Environment"
                fill
                className="object-cover"
              />
            </div>
            <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
              <MapPin size={16} className="text-teal-600" />
              <span>Braddell Studio (Overflow)</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Convenient studio space near Braddell MRT, utilized when existing central classes are at maximum capacity.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
              <Laptop size={16} className="text-teal-600" />
              <span>Interactive Synchronous Online</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Real-time digital tablet tuition for JC students with busy CCA schedules or lengthy commute times.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: RESULTS AND REVIEWS --- */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/20 px-3 py-1 rounded-full border border-sky-400/30">
              Student Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mt-3">
              Proven Success in A-Level H1 Physics
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base mt-2">
              Hear how students simplified their physics revision and clinched top A-Level grades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-amber-400 text-xs font-bold mb-2">★★★★★ From U to A at A-Levels</div>
              <p className="text-xs text-slate-300 italic leading-relaxed mb-4">
                &ldquo;I took H1 Physics as a contrasting subject and failed Promo with a U grade. Mr. Chew’s notes explained dynamics and circuits in a way my school lectures never did. Secured an A for A-Levels!&rdquo;
              </p>
              <div className="text-xs font-bold text-white">— Chloe L., Anglo-Chinese JC (ACJC)</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-amber-400 text-xs font-bold mb-2">★★★★★ High Efficiency Revision</div>
              <p className="text-xs text-slate-300 italic leading-relaxed mb-4">
                &ldquo;With 3 heavy H2 subjects, I had very little time for H1 Physics. Mr Chew&apos;s topical question bank and 30-min weekly review allowed me to score an A without burning out.&rdquo;
              </p>
              <div className="text-xs font-bold text-white">— Shaun T., Catholic JC (CJC)</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-amber-400 text-xs font-bold mb-2">★★★★★ Replaced Guesswork with Logic</div>
              <p className="text-xs text-slate-300 italic leading-relaxed mb-4">
                &ldquo;I was guessing MCQs throughout JC1. Mr. Chew taught me how to eliminate incorrect options mathematically. My MCQ score jumped from 14/30 to 28/30 in Prelims.&rdquo;
              </p>
              <div className="text-xs font-bold text-white">— Daniel M., Tampines Meridian JC (TMJC)</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 8: FAQ --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Frequently Asked
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            H1 Physics Tuition FAQ
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Answers to common questions from JC students and parents about H1 Physics.
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
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-sky-800 via-teal-800 to-slate-900 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-sky-200 border border-white/15 text-xs font-bold uppercase tracking-wider">
              Experience the Clarity First-Hand
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Master H1 Physics with Confidence and Ease
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed">
              Book a no-obligation trial class to see how Mr. Chew makes complex A-Level physics concepts simple, intuitive, and easy to score.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-sky-950 font-bold text-sm sm:text-base transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Book a Free Trial Lesson</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/6597277419?text=Hello%20Mr%20Chew,%20I'd%20like%20to%20enquire%20about%20JC%20H1%20Physics%20Tuition."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 border border-white/20 text-white font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <MessageCircle size={18} className="text-emerald-400" />
                <span>WhatsApp (+65 9727 7419)</span>
              </a>
            </div>

            <div className="text-xs text-sky-200/80 pt-2">
              Small group classes capped at 4–8 students. Toa Payoh Central & Online options.
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
