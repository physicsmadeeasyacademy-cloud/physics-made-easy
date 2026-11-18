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
  Layers,
  Globe,
  Sliders,
  Check
} from "lucide-react";
import { getCourseSchema } from "@/config/seo-config";

export default function IBPhysicsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = getCourseSchema({
    title: "IB Physics Tuition Singapore | SL & HL Tutor",
    description: "IB Physics SL or HL tuition in Singapore. Clear explanations, past-paper practice and Internal Assessment guidance. Book a free trial lesson.",
    level: "International Baccalaureate (IB) Diploma Programme (SL & HL)",
    url: "/ib-physics-tuition",
    price: "380",
    priceCurrency: "SGD"
  });

  const whoIsThisFor = [
    {
      title: "Standard Level (SL) Students",
      desc: "Need strong core conceptual understanding and high-efficiency exam techniques to secure a 7 without overwhelming your other diploma subjects.",
      badge: "SL Track"
    },
    {
      title: "Higher Level (HL) Students",
      desc: "Facing deep mathematical derivations, rotational dynamics, thermodynamics, induction, and quantum physics where school lecture notes fall short.",
      badge: "HL Track"
    },
    {
      title: "Local & International School Students",
      desc: "Proven track record coaching students from ACS (Independent), St. Joseph's Institution (SJI), Hwa Chong International, UWCSEA, Tanglin Trust, SAS, and Dulwich College.",
      badge: "Local & Global"
    }
  ];

  const ibThemes = [
    {
      code: "Theme A",
      name: "Space, Time & Motion",
      sl: "Kinematics, forces, momentum, work, energy, power, and circular motion.",
      hl: "Rigid body mechanics, rotational dynamics, torque, and special relativity."
    },
    {
      code: "Theme B",
      name: "The Particulate Nature of Matter",
      sl: "Thermal energy transfers, ideal gas laws, and greenhouse effect physics.",
      hl: "Thermodynamics laws, heat engines, Carnot cycle, and entropy."
    },
    {
      code: "Theme C",
      name: "Wave Behaviour",
      sl: "Simple Harmonic Motion (SHM), wave properties, Snell's law, standing waves.",
      hl: "Single-slit diffraction, multiple-slit interference, thin film interference, and Doppler effect."
    },
    {
      code: "Theme D",
      name: "Fields",
      sl: "Gravitational fields, electric fields, and magnetic force on moving charges.",
      hl: "Gravitational and electric potential, equipotential surfaces, electromagnetic induction, Faraday's & Lenz's laws."
    },
    {
      code: "Theme E",
      name: "Nuclear & Quantum Physics",
      sl: "Structure of the atom, radioactive decay, nuclear fission, and fusion.",
      hl: "Wave-particle duality, photoelectric effect, de Broglie wavelength, Bohr model, and quantum mechanics."
    }
  ];

  const faqs = [
    {
      question: "Do you teach both IB Physics Standard Level (SL) and Higher Level (HL)?",
      answer: "Yes. Mr. Chew has extensive experience coaching both SL and HL students. We maintain differentiated study tracks and modular notes: SL students focus tightly on core themes and standard problem types, while HL students receive advanced coaching for rotational dynamics, entropy, wave optics, induction, and quantum physics."
    },
    {
      question: "Can you help with the IB Physics Internal Assessment (IA)?",
      answer: "Yes, we provide ethical, comprehensive IA advisory strictly adhering to IB academic honesty standards. Mr. Chew helps you brainstorm feasible research questions (RQ), select suitable experimental or simulation methodologies, set up systematic error analysis and uncertainty propagation, and organize data presentation to satisfy all 4 IB assessment criteria."
    },
    {
      question: "Is online IB tuition available for overseas or international school students?",
      answer: "Yes. We conduct interactive live online lessons with full digital tablet whiteboard work, real-time calculation step checks, and downloadable PDF annotated notes. Many international school students from Singapore and overseas attend our online sessions with outstanding results."
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
            src="/images/ib-physics-hero.jpg"
            alt="IB Physics Background Concept"
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
            style={{ backgroundImage: 'radial-gradient(#06b6d4 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}
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
            <span className="text-teal-400 font-semibold">IB Physics</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles size={14} className="text-teal-400" />
              <span>International Baccalaureate (IB) Diploma Physics</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-sm">
              IB Physics Tuition in Singapore for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-300">SL & HL Students</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
              Help for IB Diploma students who need concepts explained clearly, exam answers that earn full marks, and structured Internal Assessment (IA) guidance.
            </p>

            {/* Three Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-left">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md shadow-lg">
                <div className="text-teal-400 font-black text-lg">IB Certified M.Ed.</div>
                <div className="text-xs text-slate-200 font-medium">Ex-MOE Scholar & NTU Instructor</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md shadow-lg">
                <div className="text-cyan-300 font-black text-lg">Grade 7 Focus</div>
                <div className="text-xs text-slate-200 font-medium">85%+ score Grade 6 or 7</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md shadow-lg">
                <div className="text-indigo-300 font-black text-lg">IA Mastery</div>
                <div className="text-xs text-slate-200 font-medium">Scientific investigation mentoring</div>
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
                href="https://wa.me/6597277419?text=Hello%20Mr%20Chew,%20I'm%20interested%20in%20IB%20Physics%20Tuition%20(SL/HL)."
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
                  src="/images/ib-physics-hero.jpg"
                  alt="IB Physics SL and HL Concepts - Spacetime Curvature, Wave Interference, and Subatomic Particle Physics"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-2 text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      Comprehensive IB Themes A–E: Relativity, Quantum, Waves & Internal Assessment
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    Targeting Grade 7
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: WHO IS THIS FOR? --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Target Audience
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            Who Is This IB Tuition For?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Tailored specifically for students tackling the rigorous International Baccalaureate Diploma Physics curriculum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whoIsThisFor.map((card, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all">
              <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider">
                {card.badge}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-3 mb-2">{card.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: COMMON IB PHYSICS CHALLENGES --- */}
      <section className="py-16 bg-slate-100/70 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest bg-teal-100/70 px-3 py-1 rounded-full">
              Syllabus Hurdles
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-3">
              Common IB Physics Challenges
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base">
              Why do even top students find IB Physics difficult? The IB exam penalizes superficial understanding and tests across four distinct dimensions:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Sliders size={18} className="text-teal-600" />
                <span>1. Strict IB Command Terms</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                IB markschemes are unforgiving. Confusing &ldquo;State&rdquo; with &ldquo;Explain&rdquo;, or failing to &ldquo;Deduce&rdquo; using previously calculated results, costs students up to 15–20% of marks in Paper 2 even when they know the physics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <FileText size={18} className="text-teal-600" />
                <span>2. The Internal Assessment (IA)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Carrying 20% of your final grade, the IA requires designing an original scientific experiment, calculating fractional/percentage uncertainties, plotting linear regression graphs with error bars, and evaluating experimental limitations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Brain size={18} className="text-teal-600" />
                <span>3. Mathematical Vector & Graph Analysis</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From resolving 2D components in inclined planes and circular motion to interpreting potential gradient curves (E = -dV/dr) and Doppler wavelength shifts, IB Physics demands fluent mathematical fluency.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Clock size={18} className="text-teal-600" />
                <span>4. Severe Time Pressure on Paper 1 & 2</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Paper 1A allows barely 1.5 minutes per MCQ with no calculator permitted. Paper 1B introduces unfamiliar experimental data-analysis contexts under tight time limits. Students must develop fast problem triage instincts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: HOW WE HELP --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Targeted Pedagogy
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            How We Help You Score a Grade 7
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Systematic support covering syllabus concepts, exam paper formats, and IA scientific investigation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: "First-Principles Mastery",
              desc: "We derive and connect fundamental laws so you can easily tackle novel IB question scenarios rather than memorizing formula templates."
            },
            {
              title: "Paper-by-Paper Strategy",
              desc: "Targeted drilling for Paper 1A non-calculator speed, Paper 1B data-based questions and uncertainties, and Paper 2 multi-part structured questions."
            },
            {
              title: "Ethical IA Mentorship",
              desc: "Individual guidance on research question formulation, error analysis, uncertainty propagation, and satisfying all IB grading criteria."
            },
            {
              title: "Markscheme Decoding",
              desc: "Learn the exact command-term keywords examiners look for to award full marks on qualitative and discussion questions."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-teal-300 transition-all">
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 font-black text-xs flex items-center justify-center mb-3">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 5: SYLLABUS COVERAGE (THEMES A TO E) --- */}
      <section className="py-16 bg-slate-100/60 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              Updated Curriculum
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
              Updated IB Physics Syllabus: Themes A to E
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Comprehensive coverage of the updated IB Physics syllabus, mapping core SL content and higher-level HL extensions.
            </p>
          </div>

          <div className="space-y-4">
            {ibThemes.map((theme, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-teal-100 text-teal-800 text-xs font-black">
                      {theme.code}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">{theme.name}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="font-bold text-teal-800 mb-1">Standard Level (SL) Content</div>
                    <div className="text-slate-600 leading-relaxed">{theme.sl}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-100">
                    <div className="font-bold text-indigo-900 mb-1">Higher Level (HL) Additional Extension</div>
                    <div className="text-slate-600 leading-relaxed">{theme.hl}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: SCHEDULE, FORMAT AND FEES --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Class Options
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            Schedule, Format & Fees
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Both physical studio classes and interactive live synchronous online classes are available.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm mb-8">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-4 px-4 sm:px-6">Track</th>
                <th className="py-4 px-4 sm:px-6">Class Size</th>
                <th className="py-4 px-4 sm:px-6">Duration</th>
                <th className="py-4 px-4 sm:px-6">Monthly Fee</th>
                <th className="py-4 px-4 sm:px-6">Format</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-teal-50/40 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                  IB Physics SL (Year 1 & 2)
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">4 – 8 students</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">2.0 Hours / week</td>
                <td className="py-4 px-4 sm:px-6 font-black text-teal-700">$380 / 4 sessions</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">Toa Payoh / Online</td>
              </tr>
              <tr className="hover:bg-teal-50/40 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                  IB Physics HL (Year 1 & 2)
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">4 – 8 students</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">2.0 Hours / week</td>
                <td className="py-4 px-4 sm:px-6 font-black text-teal-700">$420 / 4 sessions</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">Toa Payoh / Online</td>
              </tr>
              <tr className="hover:bg-teal-50/40 transition-colors bg-slate-50/50">
                <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                  1-on-1 IA & Exam Masterclass
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">1-on-1 private</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">1.5 – 2.0 Hours</td>
                <td className="py-4 px-4 sm:px-6 font-black text-teal-700">Enquire for slots</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">Physical Studio / Online</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Studio and Online details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
              <MapPin size={16} className="text-teal-600" />
              <span>Toa Payoh Central Main Centre</span>
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
              <span>Braddell Studio (Near Braddell MRT)</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Quiet, professional studio space near Braddell MRT, arranged when central classes reach capacity.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
              <Globe size={16} className="text-teal-600" />
              <span>Live Synchronous Online</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Interactive Zoom classes with live digital pen annotations, perfect for international school students across Singapore.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: REVIEWS & RESULTS --- */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-500/20 px-3 py-1 rounded-full border border-teal-400/30">
              Verified Student Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mt-3">
              IB Physics Grade 7 Success Stories
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base mt-2">
              Results from students across Singapore&apos;s leading IB World Schools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-amber-400 text-xs font-bold mb-2">★★★★★ Jumped from 4 to 7 in HL Physics</div>
              <p className="text-xs text-slate-300 italic leading-relaxed mb-4">
                &ldquo;HL Physics was destroying my diploma predicted score. Mr. Chew’s visual explanations of electromagnetic induction and fields completely changed how I solved Paper 2. Scored a 7 in my final exams!&rdquo;
              </p>
              <div className="text-xs font-bold text-white">— Lucas W., ACS (Independent) HL</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-amber-400 text-xs font-bold mb-2">★★★★★ Invaluable IA Mentorship</div>
              <p className="text-xs text-slate-300 italic leading-relaxed mb-4">
                &ldquo;I was completely stuck on how to process uncertainties and error bars for my damping oscillator IA. Mr. Chew guided my data analysis methodology rigorously. Got 22/24 for my IA!&rdquo;
              </p>
              <div className="text-xs font-bold text-white">— Sarah P., St. Joseph&apos;s Institution (SJI)</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-amber-400 text-xs font-bold mb-2">★★★★★ Outstanding Online Lessons</div>
              <p className="text-xs text-slate-300 italic leading-relaxed mb-4">
                &ldquo;Attending online from Dover was super smooth. Mr Chew checked my working on-screen step by step. His command term tips were the reason I secured a Grade 7 in SL Physics.&rdquo;
              </p>
              <div className="text-xs font-bold text-white">— Maya S., UWCSEA Dover (SL)</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 8: FAQ --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            IB Physics Tuition FAQ
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Key questions answered for IB Diploma parents and students.
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
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-teal-700 via-cyan-800 to-slate-900 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-cyan-200 border border-white/15 text-xs font-bold uppercase tracking-wider">
              Achieve Your Target Grade 7
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Master IB Physics Concepts and Ace Your Diploma
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed">
              Experience Mr. Chew&apos;s concept-first coaching with a complimentary trial lesson. Speak with us directly on WhatsApp to check class schedules and discuss your IA needs.
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
                href="https://wa.me/6597277419?text=Hello%20Mr%20Chew,%20I'd%20like%20to%20enquire%20about%20IB%20Physics%20Tuition."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-white/20 text-white font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <MessageCircle size={18} className="text-emerald-400" />
                <span>WhatsApp (+65 9727 7419)</span>
              </a>
            </div>

            <div className="text-xs text-cyan-200/80 pt-2">
              Small classes capped at 4–8 students. Toa Payoh Central & Live Online options.
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
