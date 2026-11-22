export interface StaticBlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
  featured: boolean;
  date: string;
}

export const STATIC_BLOG_POSTS: StaticBlogPost[] = [
  {
    id: 9901,
    title: "H2 Physics Year 1 Topical Revision: Full Solved Paper & Worked Solutions (Measurement & Kinematics)",
    slug: "h2-physics-year-1-revision-solved-paper",
    excerpt: "Comprehensive worked solutions for JC1 H2 Physics Year 1 Topical Revision (Part 1 & 2). Detailed step-by-step answers for Measurement, Uncertainty Calculations, and Kinematics with downloadable PDF question paper & solution key.",
    category: "Physics",
    readTime: "12 min read",
    image: "/images/h2-physics-hero.jpg",
    featured: true,
    date: "2026-11-22T00:00:00.000Z",
    content: `
<div className="space-y-8">
  <p className="text-lg text-slate-700 leading-relaxed font-normal">
    Mastering <strong>Singapore-Cambridge GCE A-Level H2 Physics (Syllabus 9749)</strong> requires bridging the gap between theoretical definitions and rigorous mathematical execution. In this comprehensive guide, <strong>Mr. Chew Kok Mun</strong> (Ex-MOE PSC Scholar, NTU Physics Faculty & Lead Specialist at Physics Made Easy) breaks down the complete worked solutions for the <strong>JC1 H2 Physics Year 1 Topical Revision (Part 1 & 2)</strong>, covering high-yield examination questions across <strong>Measurement, Error Analysis, and Kinematics</strong>.
  </p>

  <!-- DOWNLOAD BOX -->
  <div className="my-8 p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 rounded-2xl border border-teal-500/30 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
    <div className="space-y-2 text-center md:text-left">
      <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 border border-teal-400/40 rounded-full text-xs font-bold uppercase tracking-wider">
        Free JC1 Physics Revision Pack
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-white">Download Question Paper & Solution PDF</h3>
      <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
        Download both official PDF documents to practice offline, check your steps against the mark scheme, or print for intensive revision.
      </p>
    </div>
    <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
      <a 
        href="/h2-physics-year-1-revision-part-1-questions.pdf" 
        download="H2_Physics_Year_1_Revision_Questions.pdf"
        className="px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 text-center"
      >
        <span>📥 Download Questions (PDF)</span>
      </a>
      <a 
        href="/h2-physics-year-1-revision-part-1-solution.pdf" 
        download="H2_Physics_Year_1_Revision_Solutions.pdf"
        className="px-5 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2 text-center"
      >
        <span>📄 Download Full Solutions (PDF)</span>
      </a>
    </div>
  </div>

  <hr className="my-8 border-slate-200" />

  <!-- SECTION 1 -->
  <div className="space-y-6">
    <div className="border-l-4 border-teal-600 pl-4 py-1">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight m-0">
        Section 1: Measurement, Uncertainty & Error Analysis
      </h2>
      <p className="text-slate-600 text-sm mt-1">Core concepts: Systematic vs random errors, fractional uncertainty propagation, and graph plotting techniques.</p>
    </div>

    <!-- QUESTION 1 -->
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="px-3 py-1 bg-teal-100 text-teal-800 font-bold text-xs rounded-md uppercase tracking-wider">Question 1</span>
        <span className="text-xs font-semibold text-slate-500">Uncertainty Propagation in Volume</span>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 text-slate-800">
        <p className="font-semibold text-slate-900">Problem Statement:</p>
        <p className="mt-1 text-slate-700">
          A cylindrical thermos flask is used to store hot water. The internal diameter and depth of the thermos flask are measured to be 
          <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-teal-800 font-semibold ml-1">(8.50 ± 0.01) cm</span> and 
          <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-teal-800 font-semibold ml-1">(17.0 ± 0.1) cm</span> respectively.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900 text-base mb-2">Part (a): Measuring Instrument & Systematic Error</h4>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li><strong>Suitable Instrument:</strong> Vernier callipers (using the internal jaws to measure internal diameter, or depth gauge for depth).</li>
            <li><strong>Systematic Error:</strong> Zero error on the callipers (e.g., positive or negative zero error where the zero mark does not coincide when jaws are closed).</li>
            <li className="text-amber-800 bg-amber-50 p-2.5 rounded-lg border border-amber-200 text-sm list-none">
              ⚠️ <strong>Examiner Warning:</strong> Parallax error is <em>not accepted</em> as a systematic error. Parallax error causes random scattering of readings and is classified as a random error when reading scales.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 text-base mb-2">Part (b): Calculation of Capacity & Associated Uncertainty</h4>
          <p className="text-slate-700 mb-2">The capacity (volume <i>V</i>) of a cylinder with diameter <i>d</i> and height <i>h</i> is given by:</p>
          
          <div className="bg-slate-900 text-teal-300 font-mono p-4 rounded-xl text-center text-base sm:text-lg my-3 shadow-inner">
            V = (&pi; &times; d<sup>2</sup> &times; h) / 4
          </div>

          <p className="text-slate-700">1. Calculate mean capacity <i>V</i>:</p>
          <div className="bg-slate-100 p-3 rounded-lg font-mono text-sm text-slate-800 my-2">
            V = [&pi; &times; (8.50)<sup>2</sup> &times; 17.0] / 4 = <strong>964.665 cm<sup>3</sup></strong>
          </div>

          <p className="text-slate-700 mt-3">2. Fractional uncertainty propagation (since <i>V &prop; d<sup>2</sup> h</i>):</p>
          <div className="bg-slate-900 text-teal-300 font-mono p-4 rounded-xl text-center text-sm sm:text-base my-3 shadow-inner">
            &Delta;V / V = 2 &times; (&Delta;d / d) + (&Delta;h / h)
          </div>

          <p className="text-slate-700">Substitute known absolute uncertainties:</p>
          <div className="bg-slate-100 p-3 rounded-lg font-mono text-sm text-slate-800 space-y-1 my-2">
            <div>&Delta;V = [ 2 &times; (0.01 / 8.50) + (0.1 / 17.0) ] &times; 964.665</div>
            <div>&Delta;V = [ 0.002353 + 0.005882 ] &times; 964.665 = <strong>7.94 cm<sup>3</sup></strong></div>
            <div className="text-teal-700 font-bold">&Delta;V &approx; 8 cm<sup>3</sup> (always rounded to 1 significant figure)</div>
          </div>

          <p className="text-slate-700 mt-3">
            Since the absolute uncertainty <span className="font-mono font-bold">&Delta;V = 8 cm<sup>3</sup></span> is rounded to 1 s.f. in the units place, the mean volume must be quoted to the <strong>same decimal place (units place)</strong>:
          </p>
          <div className="p-4 bg-teal-50 border-2 border-teal-500 rounded-xl text-teal-950 font-bold font-mono text-center text-lg sm:text-xl my-3 shadow-sm">
            Capacity V = (965 ± 8) cm<sup>3</sup>
          </div>
        </div>
      </div>
    </div>

    <!-- QUESTION 2 -->
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="px-3 py-1 bg-teal-100 text-teal-800 font-bold text-xs rounded-md uppercase tracking-wider">Question 2</span>
        <span className="text-xs font-semibold text-slate-500">Spring Constant & Graphical Uncertainty</span>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900 text-base mb-2">Part (a): Distinguishing Random vs. Systematic Errors</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <h5 className="font-bold text-teal-700 mb-1">Random Errors</h5>
              <p className="text-sm text-slate-600">Errors with differing signs and varying magnitudes in repeated measurements. They cause readings to scatter unpredictably above and below the true value. <strong>Can be reduced by calculating the average of repeated readings.</strong></p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <h5 className="font-bold text-indigo-700 mb-1">Systematic Errors</h5>
              <p className="text-sm text-slate-600">Errors of measurement that follow a consistent fixed rule or pattern, causing readings to be persistently over-estimated or under-estimated. <strong>Cannot be eliminated by simple averaging.</strong></p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 text-base mb-2">Part (b): Determining Spring Constant k with Full Error Propagation</h4>
          <p className="text-slate-700">Given data:</p>
          <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1 font-mono">
            <li>Added mass m = (20 ± 1) g = (0.020 ± 0.001) kg</li>
            <li>Initial position x<sub>1</sub> = (32.00 ± 0.05) cm</li>
            <li>Final position x<sub>2</sub> = (36.30 ± 0.05) cm</li>
          </ul>

          <div className="bg-slate-100 p-3 rounded-lg font-mono text-sm text-slate-800 space-y-1 my-3">
            <div>Extension e = x<sub>2</sub> - x<sub>1</sub> = 36.30 - 32.00 = <strong>4.30 cm = 0.0430 m</strong></div>
            <div>&Delta;e = &Delta;x<sub>2</sub> + &Delta;x<sub>1</sub> = 0.05 + 0.05 = <strong>0.10 cm = 0.0010 m</strong></div>
            <div>Load force F = m &times; g = 0.020 &times; 9.81 = <strong>0.1962 N</strong></div>
            <div>Spring constant k = F / e = 0.1962 / 0.0430 = <strong>4.563 N m<sup>-1</sup></strong></div>
          </div>

          <p className="text-slate-700 mt-2">Fractional uncertainty calculation:</p>
          <div className="bg-slate-900 text-teal-300 font-mono p-4 rounded-xl text-center text-sm sm:text-base my-3 shadow-inner">
            &Delta;k / k = &Delta;m / m + &Delta;e / e = (1 / 20) + (0.10 / 4.30) = 0.050 + 0.0233 = 0.0733
          </div>

          <div className="bg-slate-100 p-3 rounded-lg font-mono text-sm text-slate-800 my-2">
            &Delta;k = 0.0733 &times; 4.563 = 0.334 N m<sup>-1</sup> &approx; <strong>0.3 N m<sup>-1</sup></strong> (1 s.f.)
          </div>

          <div className="p-4 bg-teal-50 border-2 border-teal-500 rounded-xl text-teal-950 font-bold font-mono text-center text-lg sm:text-xl my-3 shadow-sm">
            k = (4.6 ± 0.3) N m<sup>-1</sup>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 text-base mb-2">Part (c): 4 Advantages of Plotting a Best-Fit Graph</h4>
          <ol className="list-decimal pl-5 space-y-1 text-slate-700 text-sm">
            <li><strong>Reduces random errors:</strong> Drawing the line of best fit averages out statistical fluctuations across all plotted points.</li>
            <li><strong>Spots systematic errors immediately:</strong> Indicated if the extension-load line does not pass through the origin when unloaded.</li>
            <li><strong>Identifies anomalous data:</strong> Outlier points that deviate significantly from the linear trend can be easily identified and repeated.</li>
            <li><strong>Detects limit of proportionality:</strong> Visually verifies the exact point where the spring begins non-linear deformation.</li>
          </ol>
        </div>
      </div>
    </div>

    <!-- QUESTION 3 & 4 -->
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="px-3 py-1 bg-teal-100 text-teal-800 font-bold text-xs rounded-md uppercase tracking-wider">Question 3 & 4</span>
        <span className="text-xs font-semibold text-slate-500">Order of Magnitude & SI Base Units</span>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900 text-base mb-2">Order of Magnitude Estimates for Daily Physics:</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse bg-white rounded-lg overflow-hidden border border-slate-200">
              <thead className="bg-slate-100 text-slate-800 font-bold">
                <tr>
                  <th className="p-3 border border-slate-200">Physical Quantity</th>
                  <th className="p-3 border border-slate-200">Physical Modeling / Calculation</th>
                  <th className="p-3 border border-slate-200">Accepted A-Level Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-3 font-semibold border border-slate-200">Human Body Volume</td>
                  <td className="p-3 border border-slate-200">Cylinder of diameter ~ 0.22 m and height ~ 1.7 m (or mass 70 kg &divide; 1000 kg/m<sup>3</sup>)</td>
                  <td className="p-3 font-mono font-semibold text-teal-700 border border-slate-200">0.05 to 0.08 m<sup>3</sup> (or 5.6 &times; 10<sup>-2</sup> m<sup>3</sup>)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border border-slate-200">Kinetic Energy of Sprinter</td>
                  <td className="p-3 border border-slate-200">KE = &frac12; m v<sup>2</sup> with m &approx; 60 kg and top sprint speed v &approx; 10 m s<sup>-1</sup></td>
                  <td className="p-3 font-mono font-semibold text-teal-700 border border-slate-200">1.9 kJ to 7.2 kJ (typical: 3.0 kJ)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold border border-slate-200">Density of Human Body</td>
                  <td className="p-3 border border-slate-200">Humans just float/sink in water with lungs inflated</td>
                  <td className="p-3 font-mono font-semibold text-teal-700 border border-slate-200">950 to 1050 kg m<sup>-3</sup></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="pt-2">
          <h4 className="font-bold text-slate-900 text-base mb-2">SI Base Units of Electric Field Strength (E):</h4>
          <div className="bg-slate-100 p-4 rounded-xl font-mono text-sm text-slate-800 space-y-2">
            <div>By definition: E = Force / Charge = F / q</div>
            <div>Recall: F = m &times; a &rarr; [F] = kg &middot; m s<sup>-2</sup></div>
            <div>Recall: q = I &times; t &rarr; [q] = A &middot; s</div>
            <div className="border-t border-slate-300 pt-2 text-base font-bold text-teal-900">
              [E] = (kg &middot; m s<sup>-2</sup>) / (A &middot; s) = <span className="bg-teal-100 px-2 py-0.5 rounded">kg m A<sup>-1</sup> s<sup>-3</sup></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr className="my-8 border-slate-200" />

  <!-- SECTION 2 -->
  <div className="space-y-6">
    <div className="border-l-4 border-indigo-600 pl-4 py-1">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight m-0">
        Section 2: Kinematics & Projectile Motion
      </h2>
      <p className="text-slate-600 text-sm mt-1">Core concepts: Independent orthogonal motion, time of flight quadratic solutions, and relative chase kinematics.</p>
    </div>

    <!-- KINEMATICS Q1 -->
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 font-bold text-xs rounded-md uppercase tracking-wider">Kinematics Q1</span>
        <span className="text-xs font-semibold text-slate-500">Projectile Launch to Dislodge Durian</span>
      </div>

      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 text-slate-800">
          <p className="font-semibold text-slate-900">Problem Setup:</p>
          <p className="mt-1 text-slate-700">
            A stone is launched from height 1.0 m at 75.0° to the horizontal. It dislodges a durian at height 4.75 m when the stone reaches its maximum trajectory apex.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-slate-800 font-bold">Step 1: Vertical Component at Apex (v<sub>y</sub> = 0)</p>
          <div className="bg-slate-100 p-3 rounded-lg font-mono text-sm text-slate-800">
            v<sub>y</sub><sup>2</sup> = u<sub>y</sub><sup>2</sup> + 2 a<sub>y</sub> s<sub>y</sub><br />
            0 = u<sub>y</sub><sup>2</sup> + 2(-9.81)(4.75 - 1.0 - 0.25)<br />
            u<sub>y</sub><sup>2</sup> = 2 &times; 9.81 &times; 3.50 = 68.67 &rarr; <strong>u<sub>y</sub> = 8.287 m s<sup>-1</sup></strong>
          </div>

          <p className="text-slate-800 font-bold">Step 2: Projection Speed (u)</p>
          <div className="bg-slate-100 p-3 rounded-lg font-mono text-sm text-slate-800">
            u = u<sub>y</sub> / sin(75.0°) = 8.287 / 0.9659 = <strong className="text-teal-700">8.58 m s<sup>-1</sup></strong>
          </div>

          <p className="text-slate-800 font-bold">Step 3: Time of Flight to Ground (s<sub>y</sub> = -1.0 m)</p>
          <div className="bg-slate-100 p-3 rounded-lg font-mono text-sm text-slate-800">
            s<sub>y</sub> = u<sub>y</sub> t + &frac12; a<sub>y</sub> t<sup>2</sup><br />
            -1.0 = 8.287 t - 4.905 t<sup>2</sup><br />
            4.905 t<sup>2</sup> - 8.287 t - 1.0 = 0 &rarr; <strong className="text-teal-700">t = 1.80 s</strong>
          </div>

          <p className="text-slate-800 font-bold">Step 4: Horizontal Distance (Range)</p>
          <div className="bg-slate-100 p-3 rounded-lg font-mono text-sm text-slate-800">
            s<sub>x</sub> = u<sub>x</sub> &times; t = (8.58 &times; cos 75.0°) &times; 1.80 = <strong className="text-teal-700">4.0 m</strong>
          </div>
        </div>
      </div>
    </div>

    <!-- KINEMATICS Q2 -->
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 font-bold text-xs rounded-md uppercase tracking-wider">Kinematics Q2</span>
        <span className="text-xs font-semibold text-slate-500">Police Pursuit & Relative Motion</span>
      </div>

      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 text-slate-800">
          <p className="font-semibold text-slate-900">Scenario:</p>
          <p className="mt-1 text-slate-700">
            A motorcycle cruises past a stationary police patrol car at a constant speed of 35 m s<sup>-1</sup> on an expressway (speed limit 90 km h<sup>-1</sup>). The police car reacts after a 20.0 s delay, accelerating at 4.0 m s<sup>-2</sup> for 13.0 s before maintaining maximum speed. The police car overtakes when it is 100 m behind the motorcycle.
          </p>
        </div>

        <div className="space-y-3">
          <div className="bg-slate-100 p-4 rounded-xl font-mono text-sm text-slate-800 space-y-2">
            <div><strong>1. Speed check:</strong> 90 km h<sup>-1</sup> = (90 &times; 1000) / 3600 = 25 m s<sup>-1</sup>. Since 35 m s<sup>-1</sup> &gt; 25 m s<sup>-1</sup>, the vehicle is speeding.</div>
            <div><strong>2. Police car maximum speed:</strong> v = 0 + (4.0 &times; 13.0) = 52.0 m s<sup>-1</sup></div>
            <div><strong>3. Police distance in 13.0 s acceleration:</strong> s<sub>police</sub> = &frac12; &times; 4.0 &times; (13.0)<sup>2</sup> = 338 m</div>
            <div><strong>4. Motorcycle distance at end of police acceleration (total time = 20 s + 13 s = 33 s):</strong><br />
            s<sub>bike</sub> = 35 &times; 33.0 = 1155 m</div>
            <div><strong>5. Current separation:</strong> 1155 m - 338 m = 817 m</div>
            <div><strong>6. Target catch-up distance (allowing 100 m gap):</strong> 817 m - 100 m = 717 m</div>
            <div><strong>7. Relative speed during chase:</strong> v<sub>rel</sub> = 52.0 - 35.0 = 17.0 m s<sup>-1</sup></div>
            <div className="text-base font-bold text-teal-800 border-t border-slate-300 pt-2">
              Time needed from top speed: t = 717 / 17.0 = 42.2 s
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- CALL TO ACTION BOX -->
  <div className="mt-12 p-8 bg-gradient-to-r from-teal-900 to-slate-900 rounded-3xl text-white shadow-2xl space-y-6">
    <div className="max-w-2xl">
      <h3 className="text-2xl sm:text-3xl font-black text-white">Need Personal Guidance in H2 Physics?</h3>
      <p className="text-slate-300 text-sm sm:text-base mt-2">
        Whether it is error propagation, multi-body free body diagrams, or challenging wave superposition problems, learn under ex-MOE PSC Scholar Mr. Chew Kok Mun. Small groups, clear concept-first frameworks, and personalized feedback.
      </p>
    </div>
    <div className="flex flex-wrap gap-4 pt-2">
      <a 
        href="/jc-h2-physics-tuition" 
        className="px-6 py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-teal-500/30"
      >
        Explore JC H2 Physics Tuition
      </a>
      <a 
        href="https://wa.me/6597277419" 
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl text-sm transition-all"
      >
        WhatsApp Mr. Chew (+65 9727 7419)
      </a>
    </div>
  </div>
</div>
`
  }
];
