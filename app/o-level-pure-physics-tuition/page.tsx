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
  AlertTriangle,
  Layers,
  Scale
} from "lucide-react";
import { getCourseSchema } from "@/config/seo-config";

export default function OLevelPurePhysicsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = getCourseSchema({
    title: "O-Level Pure Physics Tuition Singapore | Sec 3 & Sec 4",
    description: "Turn O-Level Physics from confusing to scoring. Small-group Pure Physics tuition for Sec 3 and Sec 4 in Singapore (Toa Payoh & Online). Clear concepts, exam tips, free trial.",
    level: "Secondary 3 and Secondary 4 (O-Level Pure Physics 6091)",
    url: "/o-level-pure-physics-tuition",
    price: "320",
    priceCurrency: "SGD"
  });

  const problems = [
    {
      title: "Understands notes but cannot answer unfamiliar questions",
      desc: "Your child follows classroom explanations and memorizes formulas, but freezes when Cambridge twists the question scenario or presents a novel everyday context.",
      icon: AlertTriangle
    },
    {
      title: "Loses heavy marks on explanation answers",
      desc: "Calculations might be passable, but structured 3–4 mark qualitative questions get penalised repeatedly for missing Cambridge keywords and incomplete cause-and-effect reasoning.",
      icon: FileText
    },
    {
      title: "Weak in formulas, units or graphical analysis",
      desc: "Mixing up prefixes (micro, milli, mega), careless unit conversions, or failing to interpret the physical meaning of gradients and areas under velocity-time or I-V curves.",
      icon: Zap
    },
    {
      title: "Unsure whether to stay in Pure Physics or drop to Combined",
      desc: "After a disappointing Sec 3 Mid-Year or End-of-Year exam, confidence takes a hit. Students question if they should give up Pure Physics even when their foundation just needs targeted fixing.",
      icon: Scale
    }
  ];

  const sec3Topics = [
    { title: "Physical Quantities, Units & Measurement", desc: "Base vs derived units, standard prefixes, precision with vernier calipers and micrometer screw gauge." },
    { title: "Kinematics", desc: "Interpreting distance-time and velocity-time graphs, calculating acceleration, free fall and terminal velocity." },
    { title: "Dynamics & Newton's Laws of Motion", desc: "Free-body force diagrams, resultant force F = ma, balanced vs unbalanced forces, and friction." },
    { title: "Mass, Weight & Density", desc: "Gravitational field strength, inertia, density calculations and sink/float principles." },
    { title: "Turning Effects of Forces (Moments)", desc: "Principle of moments, clockwise vs anticlockwise balance, center of gravity and stability conditions." },
    { title: "Pressure & Hydrostatics", desc: "Solid pressure P = F/A, liquid pressure P = hρg, hydraulic systems, U-tube manometers and mercury barometers." },
    { title: "Work, Energy & Power", desc: "Kinetic energy, gravitational potential energy, conservation of energy law, and mechanical power calculations." },
    { title: "Thermal Properties & Kinetic Model", desc: "States of matter, Brownian motion, conduction, convection, radiation, specific heat capacity and latent heat." }
  ];

  const sec4Topics = [
    { title: "General Wave Properties", desc: "Transverse vs longitudinal waves, wave equation v = fλ, wavefronts, reflection and refraction mechanics." },
    { title: "Light & Optics", desc: "Reflection laws, Snell's law of refraction, total internal reflection (TIR), critical angle, and thin converging lenses." },
    { title: "Electromagnetic Spectrum & Sound", desc: "EM wave properties and applications, longitudinal sound waves, pitch, loudness, speed of sound and echo reflections." },
    { title: "Static & Current Electricity", desc: "Electric charges, Coulomb forces, electric current, potential difference (V = W/Q), resistance and Ohm's law." },
    { title: "D.C. Circuits & Practical Electricity", desc: "Series and parallel circuits, potential dividers, electrical power (P = IV), safe domestic wiring, circuit breakers, and plugs." },
    { title: "Magnetism & Electromagnetism", desc: "Magnetic fields, right-hand grip rule, Fleming's left-hand motor rule, d.c. electric motor principles." },
    { title: "Electromagnetic Induction", desc: "Faraday's and Lenz's laws, Fleming's right-hand dynamo rule, a.c. generators and step-up/down transformers." },
    { title: "Radioactivity & Nuclear Physics", desc: "Alpha, beta, and gamma radiation, nuclear decay equations, half-life decay curves, and biological hazards." }
  ];

  const faqs = [
    {
      question: "When should my child start O-Level Physics tuition?",
      answer: "Ideally at the beginning of Secondary 3. Sec 3 covers more than 60% of the core mechanics and thermal syllabus, which builds the conceptual foundation for all subsequent topics. Catching conceptual gaps early prevents stress in Sec 4. However, if your child is already in Sec 4, our accelerated diagnostic bridging plugs critical misconceptions rapidly before Prelims."
    },
    {
      question: "Is Pure Physics harder than Combined Science Physics?",
      answer: "Yes, in terms of breadth and depth. Pure Physics (Syllabus 6091) covers additional topics (such as Radioactivity, Sound calculations, and deeper Electromagnetic Induction), requires rigorous multi-step mathematical calculations, and includes Paper 3 Practical (20% weightage). In contrast, Combined Science has a lighter syllabus and simpler questions. If your child plans to take H2 Physics in JC, Pure Physics is strongly recommended."
    },
    {
      question: "How is IP Physics different from O-Level Physics?",
      answer: "Integrated Programme (IP) schools do not sit for O-Levels; their internal curriculum moves faster, introduces advanced JC-level concepts early (such as circular motion vectors or calculus-based kinematics), and features open-ended inquiry assessments. Mr. Chew has extensive experience coaching IP students from RI, RGS, Hwa Chong, Nanyang Girls, SJI, and SCGS, providing custom scaffolding suited to each school's distinct rigor."
    },
    {
      question: "How many hours of practice are needed before prelims?",
      answer: "Rather than counting hours blindly, targeted quality practice is what matters. We recommend 2 to 3 hours of focused topical revision per week alongside school work, escalating to completing 1 timed full paper weekly (Paper 1 MCQ + Paper 2 Structured) 6 to 8 weeks before Prelims. Reviewing mistakes in our Mistake Bank is far more valuable than re-doing questions you already know."
    },
    {
      question: "Do you teach the practical paper (Paper 3)?",
      answer: "Yes. Paper 3 carries 20% of your total O-Level score. We coach experimental planning, source-of-error identification, significant figures rules, gradient calculations with proper units, and how to write clear precautions. Students learn how examiners mark practical lab books and avoid common experimental write-up penalties."
    },
    {
      question: "Is online tuition available?",
      answer: "Yes. We offer interactive live online classes with full digital whiteboard annotation, live document cameras, and real-time step-by-step working checks. Students receive the identical printed master notes and topical booklets by post or collection, with the same individual feedback as physical classes."
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
            src="/images/olevel-physics-hero.jpg"
            alt="O-Level Pure Physics Background Concept"
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
            <span className="text-teal-400 font-semibold">O-Level Pure Physics</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles size={14} className="text-teal-400" />
              <span>Singapore Cambridge GCE O-Level Syllabus 6091</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-sm">
              O-Level Pure Physics Tuition in Singapore for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-sky-300">Sec 3 & Sec 4</span> Students
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
              Physics makes sense when it is explained step by step. Join small-group classes built to take your child from confused to confident before O-Levels.
            </p>

            {/* Three Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-left">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md shadow-lg">
                <div className="text-teal-400 font-black text-lg">20+ Years</div>
                <div className="text-xs text-slate-200 font-medium">Ex-MOE Scholar & NTU Instructor</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md shadow-lg">
                <div className="text-cyan-300 font-black text-lg">Max 6–8</div>
                <div className="text-xs text-slate-200 font-medium">Small classes for close guidance</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md shadow-lg">
                <div className="text-sky-300 font-black text-lg">85–92% A1/A2</div>
                <div className="text-xs text-slate-200 font-medium">Proven distinction track record</div>
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
                href="https://wa.me/6597277419?text=Hello%20Mr%20Chew,%20I'm%20interested%20in%20O-Level%20Pure%20Physics%20Tuition."
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
                  src="/images/olevel-physics-hero.jpg"
                  alt="O-Level Pure Physics Concepts - Prism Light Dispersion, Lens Ray Optics, and Force Dynamics"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-2 text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      Interactive Visual Models: Light Refraction, Waves, Dynamics & Circuits
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-300 bg-teal-950/80 border border-teal-500/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    Syllabus 6091 A1 Roadmap
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: DOES YOUR CHILD FACE ANY OF THESE PROBLEMS? --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Student Diagnosis
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            Does Your Child Face Any of These Problems?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Most secondary students find Pure Physics jarring because Lower Sec Science was about memorisation. Pure Physics requires real logical deduction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-teal-300 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-teal-50 text-teal-600 shrink-0">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- SECTION 3: WHY O-LEVEL PHYSICS FEELS SO HARD --- */}
      <section className="py-16 bg-slate-100/70 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest bg-teal-100/70 px-3 py-1 rounded-full">
              Syllabus Reality
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-4">
              Why O-Level Physics Feels So Hard
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6 text-sm sm:text-base">
              The transition from Lower Secondary Science to O-Level Pure Physics (Syllabus 6091) represents one of the steepest jumps in Singapore’s secondary curriculum. Students who scored distinctions in Sec 2 suddenly find themselves getting C5 or F9 on their first Sec 3 Physics test. Here is why:
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 text-base mb-1">1. The Heavy Concept-to-Application Jump</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  In Lower Sec, remembering facts was enough. In O-Level Pure Physics, questions are contextualized in real-world scenarios—rollercoasters, hydraulic lifts, optical fibers, or domestic AC mains. Students must diagnose which underlying law applies without being directly told.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 text-base mb-1">2. Precise Keywords and Cause-and-Effect Phrasing</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Cambridge examiners do not award marks for vague impressions. Explanation answers must link cause and effect using mandatory scientific keywords (e.g. &ldquo;rate of change of momentum&rdquo;, &ldquo;constant velocity implies net force is zero&rdquo;, &ldquo;internal energy equals sum of kinetic and potential energy&rdquo;).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 text-base mb-1">3. Careless Calculation and Mathematical Pitfalls</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Students frequently lose 8 to 15 marks across Papers 1 and 2 purely due to unit mismatches (forgetting to convert grams to kilograms, or cm³ to m³), misreading graph axes, or dropping significant figures in final answers.
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-teal-50 border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs sm:text-sm text-teal-900">
                Want to read our comprehensive guide on exam mistakes? Check out our student resource blog:
              </div>
              <Link 
                href="/blog" 
                className="shrink-0 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1"
              >
                <span>Read O-Level Exam Tips</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: HOW WE HELP STUDENTS SCORE BETTER --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Our 5-Pillar Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            How We Help Students Score Better
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Instead of giving students endless past-school exam papers to drown in, we build mastery systematically through 5 deliberate steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "1. Concept Clarity via Real Analogies",
              desc: "We use intuitive mental models and real-life physical props so abstract concepts (like electric potential difference or electromagnetic induction) become tangible before mathematical formulas are introduced.",
              icon: Brain
            },
            {
              title: "2. Topic-by-Topic Mistake Bank",
              desc: "Every topic has a curated 'Cambridge Trap List' highlighting the exact careless blunders, misleading distractors, and incomplete explanations that cost students marks year after year.",
              icon: Target
            },
            {
              title: "3. 3-Part Answering Protocol",
              desc: "Structured frameworks for definition questions, calculation workflows (Given → Equation → Working → Units), and qualitative explanation templates that guarantee all keyword marks.",
              icon: FileText
            },
            {
              title: "4. Past-Year Topical Drilling",
              desc: "Students practice questions clustered by subtopic difficulty rather than year-by-year, allowing them to spot recurring Cambridge patterns and master variations of every core question type.",
              icon: TrendingUp
            },
            {
              title: "5. Practical Paper 3 Skills",
              desc: "Dedicated guidance on laboratory exam technique: experimental planning, avoiding parallax error, tabulating data with correct d.p./s.f., and writing airtight sources of error.",
              icon: Award
            },
            {
              title: "6. Direct WhatsApp Diagnostic Help",
              desc: "Students can snapshot tricky school tutorial problems and send them directly to Mr. Chew for step-by-step voice-note explanations and prompt clarification between weekly lessons.",
              icon: MessageCircle
            }
          ].map((col, idx) => {
            const Icon = col.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-teal-400 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{col.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{col.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- SECTION 5: TOPICS WE COVER (SEC 3 & SEC 4) --- */}
      <section className="py-16 bg-slate-100/60 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              Complete Syllabus Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
              Topics We Cover in Pure Physics
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Every chapter in the Singapore-Cambridge GCE O-Level Pure Physics (6091) syllabus is covered thoroughly with concise notes and targeted worksheets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sec 3 Column */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100">
                <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-black uppercase tracking-wider">
                  Secondary 3 Focus
                </span>
                <span className="text-xs text-slate-500 font-medium">Foundational Mechanics & Thermal</span>
              </div>
              <div className="space-y-4">
                {sec3Topics.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-teal-500 pl-3.5 py-0.5">
                    <h3 className="font-bold text-sm text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sec 4 Column */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100">
                <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-black uppercase tracking-wider">
                  Secondary 4 Focus
                </span>
                <span className="text-xs text-slate-500 font-medium">Waves, Electromagnetism & Nuclear</span>
              </div>
              <div className="space-y-4">
                {sec4Topics.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-cyan-500 pl-3.5 py-0.5">
                    <h3 className="font-bold text-sm text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: PURE PHYSICS VS COMBINED SCIENCE --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-700 shadow-xl">
          <div className="max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider">
              Option Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mt-3 mb-4">
              Pure Physics or Combined Science: Which Is Right for Your Child?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Many students struggle in early Sec 3 and wonder if they should drop to Combined Science (Physics/Chemistry). Before deciding, consider:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="font-bold text-teal-300 text-base mb-2">Pure Physics (6091)</div>
                <ul className="text-xs sm:text-sm text-slate-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-teal-400 shrink-0 mt-0.5" />
                    <span>Essential if aiming for JC H2 Physics and Engineering/Computing at university.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-teal-400 shrink-0 mt-0.5" />
                    <span>Includes dedicated Practical Paper 3 (20% weightage).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-teal-400 shrink-0 mt-0.5" />
                    <span>Covers deeper topics: Radioactivity, advanced wave optics and magnetic fields.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="font-bold text-cyan-300 text-base mb-2">Combined Science Physics (5076)</div>
                <ul className="text-xs sm:text-sm text-slate-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>Physics accounts for 50% of one overall Science subject grade.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>Shorter syllabus with simpler calculation questions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>Suited for students prioritizing Poly diplomas or non-STEM JC paths.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href="/o-level-combined-science-tuition"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Combined Science (Physics) Tuition</span>
                <ArrowRight size={14} />
              </Link>
              <Link 
                href="/jc-h2-physics-tuition"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Planning for JC? View JC H2 Physics</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: LESSON FORMAT, SCHEDULE AND FEES --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Transparent Details
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            Lesson Format, Schedule & Fees
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Small group classes ensuring close individual attention, high-quality printing of proprietary notes, and dedicated WhatsApp consultation.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm mb-8">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-4 px-4 sm:px-6">Level</th>
                <th className="py-4 px-4 sm:px-6">Class Size</th>
                <th className="py-4 px-4 sm:px-6">Duration</th>
                <th className="py-4 px-4 sm:px-6">Monthly Fee</th>
                <th className="py-4 px-4 sm:px-6">Venues & Options</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-teal-50/40 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                  Sec 3 Pure Physics
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">4 – 8 students</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">2.0 Hours / week</td>
                <td className="py-4 px-4 sm:px-6 font-black text-teal-700">$320 / 4 sessions</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">Toa Payoh Central / Online</td>
              </tr>
              <tr className="hover:bg-teal-50/40 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                  Sec 4 Pure Physics (O-Level Prep)
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">4 – 8 students</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">2.0 Hours / week</td>
                <td className="py-4 px-4 sm:px-6 font-black text-teal-700">$340 / 4 sessions</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">Toa Payoh Central / Online</td>
              </tr>
              <tr className="hover:bg-teal-50/40 transition-colors bg-slate-50/50">
                <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                  1-on-1 Intensive Diagnostic
                </td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">1-on-1 custom</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">1.5 – 2.0 Hours</td>
                <td className="py-4 px-4 sm:px-6 font-black text-teal-700">Enquire for rates</td>
                <td className="py-4 px-4 sm:px-6 text-slate-600">Physical Studio / Online</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Venue Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
              <MapPin size={16} className="text-teal-600" />
              <span>Main Centre: Toa Payoh</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              185 Toa Payoh Central, #02-342 (Lift E), Singapore 310185. (Wednesday sessions held at 186 Toa Payoh Central, #02-430).
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
              <span>Overflow: Braddell Studio</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Braddell Studio (near Braddell MRT), providing calm, comfortable small-group capacity when main classes fill up.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
              <Laptop size={16} className="text-teal-600" />
              <span>Interactive Online Synchronous</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Live broadcast with digital tablet work, real-time step reviews, and hardcopy materials delivered directly to your home.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 8: TUTOR PROFILE & VERIFIED REVIEWS --- */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Tutor Details */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-teal-400 shadow-lg shadow-teal-500/30">
                <Image
                  src="/chewsir.jpeg"
                  alt="Mr Chew Kok Mun - Ex-MOE Scholar & NTU Instructor"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="inline-block text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-500/20 px-3 py-1 rounded-full border border-teal-400/30">
                Principal Physics Specialist
              </span>
              <h2 className="text-2xl sm:text-3xl font-black">
                Taught Personally by Mr. Chew Kok Mun
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Former MOE PSC Scholar, ex-Physics lecturer at NTU National Institute of Education, and holder of a Master of Education (M.Ed.). With over 20 years of experience deconstructing the Cambridge syllabus, Mr. Chew knows precisely where students lose marks and how to systematically rebuild their confidence.
              </p>

              <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-teal-400 shrink-0" />
                  <span>Ex-MOE PSC Overseas Scholar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-teal-400 shrink-0" />
                  <span>NTU NIE Physics Lecturer & Pedagogy Specialist</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-teal-400 shrink-0" />
                  <span>Certified in Multiple Intelligences Teaching Strategies</span>
                </div>
              </div>
            </div>

            {/* Right Testimonials Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-amber-400 text-xs font-bold mb-2">★★★★★ C6 to A1 in 5 Months</div>
                <p className="text-xs text-slate-300 italic leading-relaxed mb-3">
                  &ldquo;I was failing Pure Physics consistently in Sec 3. Mr. Chew broke down turning effects and light refraction so clearly that I stopped memorizing formulas blindly. Scored A1 for O-Levels!&rdquo;
                </p>
                <div className="text-xs font-bold text-white">— Marcus T., Chung Cheng High (Main)</div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-amber-400 text-xs font-bold mb-2">★★★★★ F9 to A2 (Prelims to O-Levels)</div>
                <p className="text-xs text-slate-300 italic leading-relaxed mb-3">
                  &ldquo;I was about to drop Pure Physics after Sec 3. The small group attention and the step-by-step answering method completely changed my approach. Thank you Mr Chew!&rdquo;
                </p>
                <div className="text-xs font-bold text-white">— Rachel K., Cedar Girls&apos; Secondary</div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm sm:col-span-2">
                <div className="text-amber-400 text-xs font-bold mb-2">★★★★★ Top Marks in IP Physics</div>
                <p className="text-xs text-slate-300 italic leading-relaxed mb-2">
                  &ldquo;Mr. Chew’s notes are far superior to my school’s lecture pack. He connects pure physics concepts to real engineering applications, which made Sec 4 IP physics enjoyable and easy to score.&rdquo;
                </p>
                <div className="text-xs font-bold text-white">— Ethan L., Raffles Institution (IP)</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 9: FREQUENTLY ASKED QUESTIONS --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Clear answers to help you decide on the right physics support for your child.
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

      {/* --- SECTION 10: FINAL CALL TO ACTION --- */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-teal-700 via-teal-800 to-slate-900 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-teal-200 border border-white/15 text-xs font-bold uppercase tracking-wider">
              Reserve Your Place Today
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Give Your Child the Clarity to Master Pure Physics
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed">
              Book a no-obligation trial lesson or message Mr. Chew directly on WhatsApp to discuss your child&apos;s current syllabus progress and diagnostic needs.
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
                href="https://wa.me/6597277419?text=Hello%20Mr%20Chew,%20I'd%20like%20to%20enquire%20about%20Sec%203/4%20Pure%20Physics%20Tuition."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-white/20 text-white font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <MessageCircle size={18} className="text-emerald-400" />
                <span>WhatsApp (+65 9727 7419)</span>
              </a>
            </div>

            <div className="text-xs text-teal-200/80 pt-2">
              Classes capped at 6–8 students. Limited slots available for Sec 3 & Sec 4 intake.
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
