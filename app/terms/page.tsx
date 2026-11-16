"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FileText, 
  ShieldCheck, 
  ArrowLeft, 
  MapPin, 
  Mail, 
  Phone,
  CheckCircle,
  HelpCircle,
  BookOpen,
  Calendar,
  CreditCard
} from "lucide-react";

export default function TermsOfService() {
  const lastUpdated = "June 2025";

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] selection:bg-teal-100 selection:text-teal-900 pb-20">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-teal-50/50 to-transparent" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: "radial-gradient(#0f172a 0.5px, transparent 0.5px)", 
            backgroundSize: "40px 40px" 
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 pt-12 md:pt-20">
        
        {/* Back Button */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 font-bold transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Main Document Card */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 shadow-xl border border-slate-100 relative overflow-hidden"
        >
          {/* Top Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-8 mb-10">
            <div>
              <span className="text-teal-600 font-black text-xs uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100/50">
                Legal Documentation
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-3 tracking-tight">
                Terms of Service
              </h1>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Effective Date</span>
              <span className="text-sm font-bold text-slate-700">{lastUpdated}</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 font-normal leading-relaxed space-y-8">
            <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed">
              Welcome to <strong>Physics Made Easy</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing our website (<a href="https://www.makephysicseasy.com" className="text-teal-600 hover:underline">www.makephysicseasy.com</a>) or enrolling in our academic tuition and coaching services, you agree to be bound by these Terms of Service.
            </p>

            {/* Section 1 */}
            <div className="space-y-3 pt-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2.5">
                <BookOpen size={22} className="text-teal-600" />
                1. Educational Services
              </h2>
              <p className="text-sm sm:text-base">
                Physics Made Easy provides structured tuition and academic coaching for O-Level, A-Level (H1/H2), IB Physics (SL/HL), AEIS Mathematics, and Chess Cognitive Development. All learning materials, worksheets, and diagnostic assessments are prepared by certified educator Mr. Chew and are protected under copyright law.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3 pt-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2.5">
                <Calendar size={22} className="text-teal-600" />
                2. Lesson Schedules & Venues
              </h2>
              <p className="text-sm sm:text-base">
                Lessons are held at our registered physical premises and online via interactive video conferencing:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                <li><strong>Main Centre:</strong> 185 Toa Payoh Central, Lift E, Blk, Toa Payoh Central, #02-342, Singapore 310185.</li>
                <li><strong>Mid-week Annex:</strong> 186 Toa Payoh Central, Lobby H 02-430, Singapore 310186 (conducted on Wednesdays only).</li>
                <li><strong>West Branch:</strong> 431 Clementi Ave 3, Singapore 120431.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-3 pt-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2.5">
                <CreditCard size={22} className="text-teal-600" />
                3. Fees & Attendance
              </h2>
              <p className="text-sm sm:text-base">
                Tuition fees are payable prior to the commencement of each billing cycle or monthly term. Students who are unable to attend a scheduled session must provide at least 24 hours advance notice to arrange an alternative make-up slot or access lesson recordings.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3 pt-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2.5">
                <ShieldCheck size={22} className="text-teal-600" />
                4. Intellectual Property
              </h2>
              <p className="text-sm sm:text-base">
                All proprietary pedagogical frameworks (including the Multiple Intelligences Physics curriculum, diagnostic notes, worked solutions, and chess cognitive transfer infographics) remain the exclusive intellectual property of Physics Made Easy and may not be reproduced or distributed without prior written consent.
              </p>
            </div>

            {/* Section 5 - Contact Box */}
            <div className="mt-12 p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-black text-slate-900 mb-3">5. Contact Information</h3>
              <p className="text-sm text-slate-600 mb-4">
                For questions regarding these terms, enrollment policies, or lesson arrangements, please contact:
              </p>
              <div className="space-y-2 text-sm text-slate-700">
                <p className="flex items-start gap-2">
                  <MapPin size={16} className="text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Address:</strong> 185 Toa Payoh Central, Lift E, Blk, Toa Payoh Central, #02-342, Singapore 310185</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-teal-600 shrink-0" />
                  <span><strong>Phone / WhatsApp:</strong> +65 8700 9189</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-teal-600 shrink-0" />
                  <span><strong>Email:</strong> chew@makephysicseasy.com</span>
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </main>
  );
}