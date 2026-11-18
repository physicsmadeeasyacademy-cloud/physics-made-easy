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
  Brain
} from "lucide-react";
import { getCourseSchema } from "@/config/seo-config";

export default function JCH2PhysicsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = getCourseSchema({
    title: "JC H2 Physics Tuition Singapore | JC1 & JC2 Small Groups",
    description: "Small group H2 Physics tuition for JC1 and JC2 students in Singapore (Toa Payoh, Central & Online). Concept-first coaching by ex-MOE PSC Scholar Mr. Chew Kok Mun.",
    level: "Junior College 1 and 2 (A-Level H2)",
    url: "/jc-h2-physics-tuition",
    price: "360",
    priceCurrency: "SGD"
  });

  const faqs = [
    {
      question: "Which JC level should I start tuition? (JC1 versus JC2)",
      answer: "Starting in JC1 is strongly recommended. JC1 lays the bedrock with heavy conceptual topics like Kinematics, Dynamics, Circular Motion, Gravitation, and Superposition. Students who wait until JC2 often find themselves having to revise the entire JC1 syllabus while keeping up with new abstract JC2 topics like Electromagnetism and Quantum Physics. However, if you are currently in JC2, our targeted bridging and diagnostic notes help plug foundational gaps rapidly before Mid-Years and Prelims."
    },
    {
      question: "Is H2 Physics tuition worth it if my school lessons are fine?",
      answer: "Many students understand lecture slides and can follow tutorial solutions when presented by teachers, but get stuck when facing novel, multi-step application questions in block tests. H2 Physics demands precise scientific phrasing, clear reasoning chains, and mathematical modelling under tight time pressure. Specialist tuition trains higher-order answering technique, spots common pitfalls, and ensures your conceptual understanding translates into distinction-grade marks."
    },
    {
      question: "What is the difference between H1 and H2 Physics?",
      answer: "H2 Physics (Syllabus 9749) covers a broader range of topics in substantially greater mathematical depth and includes Paper 4 (Practical Assessment, 20% weightage). H1 Physics (Syllabus 8867) has a condensed syllabus, fewer subtopics, and no practical paper. You can explore our dedicated H1 Physics Tuition page for a complete comparison."
    },
    {
      question: "How many students are in a class?",
      answer: "We cap classes at small groups of 4 to 8 students. This ensures Mr. Chew can review every student's written working, provide live verbal feedback, and resolve individual misconceptions on the spot without anyone getting lost in a crowd."
    },
    {
      question: "Can I switch from another tuition centre mid-year?",
      answer: "Yes. Mid-year transfers are common, especially after Mid-Year or Block Test results reveal that large lecture-style tuition centers aren't addressing individual learning bottlenecks. Mr. Chew conducts a personalized diagnostic assessment to identify your weak topics and seamlessly integrates you into the appropriate class pace."
    },
    {
      question: "Do you offer a trial lesson?",
      answer: "Yes. We offer a trial lesson so you and your parents can experience Mr. Chew's Multiple Intelligences concept-first teaching approach, inspect our master notes, and observe the small-group dynamics before committing to a term package."
    },
    {
      question: "How should a JC student prepare for A-Level H2 Physics?",
      answer: "First, master core definitions and fundamental principles from first principles rather than memorizing formula steps blindly. Second, practice articulating qualitative explanation questions using precise keywords (e.g. rate of change of momentum, phase difference, flux linkage). Third, practice topical past-year A-Level Cambridge papers to identify question patterns, followed by timed full-paper simulations to build speed and stamina."
    },
    {
      question: "Which H2 Physics tuition helps with difficult topics like dynamics?",
      answer: "Physics Made Easy specifically specializes in deconstructing stubborn, complex topics like Dynamics, Oscillations, Superposition, and Electromagnetic Induction. Mr. Chew utilizes multi-sensory diagrams, free-body diagram breakdown protocols, and step-by-step mathematical reasoning to turn high-hurdle topics into predictable, high-scoring questions."
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
            src="/images/h2-physics-hero.jpg"
            alt="JC H2 Physics Background Concept"
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
            <span className="text-teal-400 font-semibold">JC H2 Physics</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles size={14} className="text-teal-400" />
              <span>Singapore Cambridge GCE A-Level Syllabus 9749</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-sm">
              JC H2 Physics Tuition in Singapore for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-300">JC1 and JC2</span> Students
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
              Understand H2 Physics properly, then learn to score in it. Small-group coaching, Toa Payoh Central & West studios, and live online options.
            </p>

            {/* Three Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-left">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md shadow-lg">
                <div className="text-teal-400 font-black text-lg">20+ Years</div>
                <div className="text-xs text-slate-200 font-medium">Ex-MOE Scholar & NTU Instructor</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md shadow-lg">
                <div className="text-cyan-300 font-black text-lg">Max 6–8</div>
                <div className="text-xs text-slate-200 font-medium">Small classes for personal feedback</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/15 backdrop-blur-md shadow-lg">
                <div className="text-indigo-300 font-black text-lg">80–95% A/B</div>
                <div className="text-xs text-slate-200 font-medium">Consistent distinction track record</div>
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
                href="https://wa.me/6597277419?text=Hello%20Mr%20Chew,%20I'm%20interested%20in%20JC%20H2%20Physics%20Tuition."
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
                  src="/images/h2-physics-hero.jpg"
                  alt="JC H2 Physics Concepts - Wave-Particle Duality, Electromagnetism and Quantum Fields"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-2 text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      Interactive Concept Visualisation: Quantum, Fields & Superposition
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-teal-300 bg-teal-950/80 border border-teal-500/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    Syllabus 9749 Mastery
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: IS THIS CLASS RIGHT FOR YOU? --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Self-Diagnosis
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            Is This Class Right for You?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Most JC students don’t struggle because they aren’t smart—they struggle because H2 Physics tests structured scientific reasoning, not rote memorization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {[
            {
              title: "You follow lectures but can't start tutorial questions",
              desc: "You understand the concepts when the lecturer goes through them, but stare blankly at novel exam questions without knowing which formula to invoke."
            },
            {
              title: "You lose marks on qualitative explanations",
              desc: "Your math is adequate, but Cambridge examiners penalize your wording for missing essential scientific keywords, causal chains, or principles."
            },
            {
              title: "Your grades are stuck around U, S, or C",
              desc: "You are putting in countless hours into revision and summary sheets, yet your grades plateau and you need a systematic breakthrough before A-Levels."
            },
            {
              title: "You are already scoring B and want guaranteed A",
              desc: "You want rigorous masterclass exposure to tricky non-standard questions, paper timing tactics, and practical Paper 4 mastery to secure your distinction."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5">
                ✓
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: WHY STUDENTS FIND H2 PHYSICS HARD --- */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                The Reality of Syllabus 9749
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
                Why Students Find H2 Physics Hard
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The jump from O-Level Pure Physics to JC H2 Physics is notoriously steep. In secondary school, questions are largely formula-substitution drills. In H2 Physics, Cambridge tests multi-variable systems where you must deconstruct the physics before writing down a single equation.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Zap size={18} className="text-amber-500" />
                The Core Trouble Spots in JC H2 Physics:
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                  <span className="font-bold text-teal-600">•</span>
                  <span><strong>Dynamics & Forces:</strong> Multi-body systems, oblique collisions, and variable-mass calculations.</span>
                </li>
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                  <span className="font-bold text-teal-600">•</span>
                  <span><strong>Circular Motion & Gravitation:</strong> Field potential differences, escape velocity, and satellite orbits.</span>
                </li>
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                  <span className="font-bold text-teal-600">•</span>
                  <span><strong>Waves & Superposition:</strong> Phase differences, double-slit interference, diffraction gratings, and stationary waves.</span>
                </li>
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                  <span className="font-bold text-teal-600">•</span>
                  <span><strong>EM Induction & AC:</strong> Faraday’s & Lenz’s laws, self-inductance, and sinusoidal AC power integration.</span>
                </li>
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2 flex items-start gap-2">
                  <span className="font-bold text-teal-600">•</span>
                  <span><strong>Quantum Physics & Nuclear:</strong> Wave-particle duality, de Broglie wavelength, line spectra, and binding energy decay series.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: HOW OUR LESSONS FIX THIS --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Our Pedagogical Method
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            How Our Lessons Fix This
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Four pillars designed by Ex-MOE PSC Scholar & NTU Instructor Mr. Chew Kok Mun to transform confusion into high-scoring precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-black">
              <Brain size={20} />
            </div>
            <h3 className="text-base font-bold text-slate-900">1. Concept First</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We rebuild first-principles understanding using intuitive diagrams and real-life analogies before touching complex math.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black">
              <FileText size={20} />
            </div>
            <h3 className="text-base font-bold text-slate-900">2. Structured Notes</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Concise summary sheets strictly aligned to SEAB 9749. No 80-page lecture dumps—only high-yield exam takeaways.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-black">
              <Target size={20} />
            </div>
            <h3 className="text-base font-bold text-slate-900">3. Exam Technique</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We teach you how to write answers that Cambridge examiners mark correct, spot trap options in Paper 1 MCQs, and structure working.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">
              <CheckCircle size={20} />
            </div>
            <h3 className="text-base font-bold text-slate-900">4. Diagnostic Feedback</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Marked assignments with line-by-line annotations so you know exactly where marks were lost and how to avoid repeated errors.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: WHAT YOU WILL COVER (ROADMAP) --- */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/80 border border-teal-500/40 px-3 py-1 rounded-full">
              Syllabus Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
              What You Will Cover in JC1 and JC2
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Our comprehensive programme follows the current Singapore-Cambridge H2 Physics (Syllabus 9749) curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* JC1 Column */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <h3 className="text-xl font-black text-teal-300">Junior College 1 (JC1)</h3>
                <span className="text-xs bg-teal-950 text-teal-400 border border-teal-800 px-2.5 py-1 rounded-full font-bold">Foundational Mastery</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {[
                  "Measurement & Physical Quantities, Errors & Uncertainties",
                  "Kinematics (Rectilinear, Projectile & Graphing)",
                  "Dynamics (Linear Momentum, Newton's Laws & Impulse)",
                  "Forces (Hooke's Law, Friction, Upthrust & Turning Moments)",
                  "Work, Energy and Power (Conservation & Efficiency)",
                  "Motion in a Circle (Centripetal Force & Conical Pendulums)",
                  "Gravitational Field (Newton's Gravitation, Orbits & Potentials)",
                  "Thermal Physics (Ideal Gas Equation & 1st Law of Thermodynamics)",
                  "Oscillations (Simple Harmonic Motion, Resonance & Damping)",
                  "Waves & Superposition (Interference, Diffraction & Stationary Waves)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* JC2 Column */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <h3 className="text-xl font-black text-indigo-300">Junior College 2 (JC2)</h3>
                <span className="text-xs bg-indigo-950 text-indigo-400 border border-indigo-800 px-2.5 py-1 rounded-full font-bold">Advanced & Exam Sprint</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {[
                  "Electric Fields (Coulomb's Law, Field Strength & Potentials)",
                  "Current of Electricity (I=nAvq, Resistance & Temperature)",
                  "DC Circuits (Potential Dividers & Potentiometer Circuits)",
                  "Electromagnetism (Magnetic Fields, Forces on Charges & Currents)",
                  "Electromagnetic Induction (Faraday's & Lenz's Laws, Generators)",
                  "Alternating Currents (RMS, Transformers & Rectification)",
                  "Quantum Physics (Photoelectric Effect, de Broglie & X-ray Spectra)",
                  "Nuclear Physics (Mass Defect, Binding Energy & Radioactive Decay)",
                  "Paper 4 Practical Skills (Uncertainties, Graph Plotting & Planning)",
                  "Full-length Cambridge Prelim & TYS Mock Simulations"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: WHAT A TYPICAL LESSON LOOKS LIKE --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Inside the Classroom
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
            What a Typical 2-Hour Lesson Looks Like
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              step: "01",
              time: "First 20 Mins",
              title: "Homework Diagnostic & Review",
              desc: "Rapid analysis of previous week's problem sets, pinpointing calculation slips and phrasing errors."
            },
            {
              step: "02",
              time: "Next 40 Mins",
              title: "Core Concept Deconstruction",
              desc: "First-principles derivation, visual diagrams, and intuition-building for the week's syllabus topic."
            },
            {
              step: "03",
              time: "Next 40 Mins",
              title: "Exam Application & Modeling",
              desc: "Guided step-by-step deconstruction of challenging Cambridge past-year and top-JC prelim problems."
            },
            {
              step: "04",
              time: "Final 20 Mins",
              title: "Timed Drill & Individual Q&A",
              desc: "Simulated exam conditions under the clock, followed by 1-on-1 consultations to resolve individual doubts."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs relative">
              <span className="text-xs font-black text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                {item.time}
              </span>
              <div className="text-2xl font-black text-slate-200 mt-2">{item.step}</div>
              <h3 className="font-bold text-slate-900 text-sm mt-1">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 7: CLASS SCHEDULE, LOCATIONS & FEES --- */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              Transparent Logistics
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
              Class Schedule, Locations and Fees
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              All physical classrooms are fully air-conditioned, equipped with high-resolution digital visualizers and experiment apparatus.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-4">Level</th>
                  <th className="p-4">Day & Time Slot</th>
                  <th className="p-4">Class Size</th>
                  <th className="p-4">Monthly Fee</th>
                  <th className="p-4">Mode</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="p-4 font-bold text-slate-900">JC1 H2 Physics</td>
                  <td className="p-4">Saturdays 2:00 PM – 4:00 PM<br/><span className="text-slate-400 text-xs">or Sundays 10:00 AM – 12:00 PM</span></td>
                  <td className="p-4 font-semibold text-teal-700">Max 6–8</td>
                  <td className="p-4 font-black text-slate-900">$360 / 4 sessions</td>
                  <td className="p-4"><span className="bg-teal-50 text-teal-700 border border-teal-200 px-2 py-0.5 rounded text-xs font-bold">Physical / Hybrid</span></td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">JC2 H2 Physics</td>
                  <td className="p-4">Saturdays 4:30 PM – 6:30 PM<br/><span className="text-slate-400 text-xs">or Sundays 2:00 PM – 4:00 PM</span></td>
                  <td className="p-4 font-semibold text-teal-700">Max 6–8</td>
                  <td className="p-4 font-black text-slate-900">$380 / 4 sessions</td>
                  <td className="p-4"><span className="bg-teal-50 text-teal-700 border border-teal-200 px-2 py-0.5 rounded text-xs font-bold">Physical / Hybrid</span></td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">JC 1-on-1 Intensive</td>
                  <td className="p-4">Flexible Weekday / Weekend timing</td>
                  <td className="p-4 font-semibold text-indigo-700">1-to-1 Custom</td>
                  <td className="p-4 font-black text-slate-900">Enquire for Rates</td>
                  <td className="p-4"><span className="bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded text-xs font-bold">In-person / Online</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Physical Locations Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase">Main Centre (Toa Payoh)</span>
              <p className="text-xs text-slate-700 font-medium">185 Toa Payoh Central, Lift E, Blk, #02-342, S(310185)</p>
              <p className="text-[11px] text-slate-500">1-min walk from Toa Payoh MRT & Bus Interchange.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-xs font-bold text-indigo-700 uppercase">West Branch (Beauty World)</span>
              <p className="text-xs text-slate-700 font-medium">Beauty World Shopping Centre, Upper Bukit Timah Road</p>
              <p className="text-[11px] text-slate-500">Serving students from Bukit Timah, Clementi & Jurong.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 overflow-hidden">
              <div className="relative h-20 -mx-4 -mt-4 mb-2">
                <Image
                  src="/images/braddell-studio.jpg"
                  alt="Braddell Studio Tuition Environment"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-bold text-emerald-700 uppercase">Braddell Studio (Overflow)</span>
              <p className="text-xs text-slate-700 font-medium">Near Braddell MRT (Serving Toa Payoh & Bishan)</p>
              <p className="text-[11px] text-slate-500">Modern, quiet studio rooms when main centre hits capacity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 8: MEET YOUR TUTOR --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white shadow-xl relative overflow-hidden">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 text-center md:text-left space-y-3">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-teal-400 shadow-lg shadow-teal-500/30 mx-auto md:mx-0">
                <Image
                  src="/chewsir.jpeg"
                  alt="Mr Chew Kok Mun - Principal Physics Specialist"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">Mr. Chew Kok Mun</h3>
                <p className="text-xs sm:text-sm text-teal-400 font-semibold">Lead Physics Specialist & Founder</p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p className="text-sm sm:text-base text-white font-medium">
                &ldquo;Physics is not a test of memory; it is a training system for the mind. Once a student learns to see the underlying architecture of a problem, exam anxiety evaporates.&rdquo;
              </p>
              
              <ul className="space-y-2 text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Current NTU Physics Instructor:</strong> Teaching first-year undergraduate physics, keeping curriculum instruction at the highest academic standard.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Ex-MOE PSC Scholar & NIE-Trained:</strong> Deep institutional familiarity with Singapore Cambridge A-Level marking rubrics and assessment benchmarks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>M.Ed. Candidate (IB-Certified, Geneva) & FIDE Chess Instructor:</strong> Infuses Howard Gardner’s Multiple Intelligences theory and chess strategic foresight to sharpen student problem-solving.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 9: RESULTS AND REVIEWS --- */}
      <section className="py-16 bg-slate-100 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-slate-200">
              Verified Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Student Results from Top Junior Colleges
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Featuring students from Raffles Institution (RI), Hwa Chong Institution (HCI), National JC, Victoria JC, Anglo-Chinese JC, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;I scored U in my JC1 Mid-Years for H2 Physics and was terrified of failing. Mr. Chew’s concept-first diagrams made Oscillations and Superposition crystal clear. Jumped to an A in A-Levels!&rdquo;
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-xs">Marcus L.</div>
                  <div className="text-[11px] text-slate-500">Raffles Institution (RI) · Grade U to A</div>
                </div>
                <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Distinction</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;The difference with Mr. Chew is the feedback. In school lectures, no one checks your step-by-step working. Here, he showed me where I lost 3 marks on every explanation question.&rdquo;
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-xs">Rachel T.</div>
                  <div className="text-[11px] text-slate-500">Hwa Chong Institution (HCI) · Grade S to A</div>
                </div>
                <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Distinction</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                &ldquo;Small class size meant I could ask about my specific school tutorial questions anytime. Mr. Chew’s notes are 10x more useful than any commercial guidebook.&rdquo;
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-xs">Darren K.</div>
                  <div className="text-[11px] text-slate-500">National JC (NJC) · Grade D to A</div>
                </div>
                <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Distinction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 10: FAQS --- */}
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Everything you need to know about JC H2 Physics tuition at Physics Made Easy.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-slate-900 hover:text-teal-600 transition-colors text-xs sm:text-sm gap-3"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                    openFaq === idx ? "rotate-180 text-teal-600" : ""
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="p-4 sm:p-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 11: FINAL CTA --- */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider">
            Zero Risk Trial
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
            Not Sure Yet? Try a Free Trial Lesson
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Experience Mr. Chew&apos;s teaching in person or online with no financial commitment. See how concept-first clarity changes your approach to H2 Physics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-teal-500 hover:bg-teal-400 font-bold rounded-xl text-slate-950 shadow-lg shadow-teal-500/25 transition-all text-sm flex items-center justify-center gap-2"
            >
              <span>Book Your Free Trial</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/6597277419?text=Hello%20Mr%20Chew,%20I'd%20like%20to%20enquire%20about%20a%20JC%20H2%20Physics%20trial%20lesson."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 font-bold rounded-xl text-white transition-all text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle size={16} className="text-emerald-400" />
              <span>WhatsApp Mr. Chew</span>
            </a>
          </div>

          {/* Internal links strip */}
          <div className="pt-6 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap justify-center gap-4">
            <span>Related Programmes:</span>
            <Link href="/h1-physics-tuition" className="hover:text-teal-400 underline">H1 Physics Tuition</Link>
            <Link href="/ib-physics-tuition" className="hover:text-teal-400 underline">IB Physics (SL/HL)</Link>
            <Link href="/o-level-pure-physics-tuition" className="hover:text-teal-400 underline">O-Level Pure Physics</Link>
          </div>
        </div>
      </section>

    </main>
  );
}