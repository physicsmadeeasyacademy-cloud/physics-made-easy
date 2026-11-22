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
# H2 Physics Year 1 Topical Revision: Full Solved Paper & Step-by-Step Solutions (Measurement & Kinematics)

Mastering **Singapore-Cambridge GCE A-Level H2 Physics (Syllabus 9749)** requires bridging the gap between theoretical definitions and rigorous mathematical execution. 

In this comprehensive guide, **Mr. Chew Kok Mun** (Ex-MOE PSC Scholar, NTU Physics Faculty & Lead Specialist at Physics Made Easy) breaks down the complete worked solutions for the **JC1 H2 Physics Year 1 Topical Revision (Part 1 & 2)**, covering core examination questions across **Measurement, Error Analysis, and Kinematics**.

---

## Download Question Paper & Full Solution PDFs

We have made both the original topical question paper and the annotated solution key available for free download:

<div className="my-8 p-6 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-2xl border border-teal-500/30 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
  <div className="space-y-2 text-center md:text-left">
    <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 border border-teal-400/40 rounded-full text-xs font-bold uppercase tracking-wider">
      Free JC1 Physics Revision Pack
    </span>
    <h3 className="text-xl font-black text-white">Download Question Paper & Solution PDF</h3>
    <p className="text-slate-300 text-xs sm:text-sm">
      Download both high-resolution files to practice offline or print for revision.
    </p>
  </div>
  <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
    <a 
      href="/h2-physics-year-1-revision-part-1-questions.pdf" 
      download="H2_Physics_Year_1_Revision_Questions.pdf"
      className="px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
    >
      <span>Download Questions (PDF)</span>
    </a>
    <a 
      href="/h2-physics-year-1-revision-part-1-solution.pdf" 
      download="H2_Physics_Year_1_Revision_Solutions.pdf"
      className="px-5 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2"
    >
      <span>Download Full Solutions (PDF)</span>
    </a>
  </div>
</div>

---

## Section 1: Measurement, Uncertainty & Error Analysis

### Question 1: Cylindrical Thermos Flask (Uncertainty Propagation)
**Problem:**  
A cylindrical thermos flask is used to store hot water. The internal diameter and depth of the thermos flask are measured to be $(8.50 \\pm 0.01)\\text{ cm}$ and $(17.0 \\pm 0.1)\\text{ cm}$ respectively.

#### (a) Measuring Instrument & Systematic Error
- **Instrument used:** Vernier callipers (or inside jaws of vernier callipers).
- **Systematic error:** Zero error on the callipers (note: *parallax error is NOT accepted* as it is classified as a random error when reading scales, whereas zero error is a persistent calibration offset).

#### (b) Calculation of Capacity & Associated Uncertainty
The volume $V$ of a cylinder is:
$$V = \\frac{\\pi d^2 h}{4}$$

Substituting the measured mean values:
$$V = \\frac{\\pi (8.50)^2 (17.0)}{4} = 964.665\\text{ cm}^3$$

For fractional uncertainty, since $V \\propto d^2 h$:
$$\\frac{\\Delta V}{V} = 2 \\left(\\frac{\\Delta d}{d}\\right) + \\frac{\\Delta h}{h}$$

$$\\Delta V = \\left(2 \\times \\frac{0.01}{8.50} + \\frac{0.1}{17.0}\\right) \\times 964.665$$
$$\\Delta V = (0.002353 + 0.005882) \\times 964.665 = 7.94\\text{ cm}^3 \\approx 8\\text{ cm}^3 \\text{ (rounded to 1 s.f.)}$$

Since the uncertainty $\\Delta V$ is rounded to $1\\text{ s.f.}$ ($8\\text{ cm}^3$), the mean value must be quoted to the same decimal place (units place):
$$\\mathbf{V = (965 \\pm 8)\\text{ cm}^3}$$

---

### Question 2: Spring Constant Uncertainty & Graphical Analysis

#### (a) Distinguishing Random vs. Systematic Errors
- **Random errors:** Errors with differing signs and varying magnitudes in repeated measurements. They cause readings to scatter symmetrically around the true value and **can be reduced by taking the average of multiple readings**.
- **Systematic errors:** Errors of measurement that follow a consistent fixed rule or pattern, causing readings to be persistently over-estimated or under-estimated. They cannot be eliminated by simple averaging.

#### (b) Determining Spring Constant $k$ with Errors
Given:
- Added mass $m = (20 \\pm 1)\\text{ g} = (0.020 \\pm 0.001)\\text{ kg}$
- Initial scale reading $x_1 = (32.00 \\pm 0.05)\\text{ cm}$
- Final scale reading $x_2 = (36.30 \\pm 0.05)\\text{ cm}$

Extension:
$$e = x_2 - x_1 = 36.30 - 32.00 = 4.30\\text{ cm} = 0.0430\\text{ m}$$
$$\\Delta e = \\Delta x_2 + \\Delta x_1 = 0.05 + 0.05 = 0.10\\text{ cm} = 0.0010\\text{ m}$$

Force exerted:
$$F = mg = 0.020 \\times 9.81 = 0.1962\\text{ N}$$
$$k = \\frac{F}{e} = \\frac{0.1962}{0.0430} = 4.563\\text{ N m}^{-1}$$

Fractional uncertainty:
$$\\frac{\\Delta k}{k} = \\frac{\\Delta m}{m} + \\frac{\\Delta e}{e} = \\frac{1}{20} + \\frac{0.10}{4.30} = 0.050 + 0.0233 = 0.0733$$
$$\\Delta k = 0.0733 \\times 4.563 = 0.334\\text{ N m}^{-1} \\approx 0.3\\text{ N m}^{-1} \\text{ (1 s.f.)}$$

Final result quoted to consistent decimal place:
$$\\mathbf{k = (4.6 \\pm 0.3)\\text{ N m}^{-1}}$$

#### (c) Advantages of Plotting a Best-Fit Graph
1. **Reduces random errors** by drawing a best-fit line through the scattered points.
2. **Spots systematic errors immediately** (e.g. if the extension-load graph does not pass through the origin when unloaded).
3. **Identifies anomalous/outlier data points** that diverge from the linear trend.
4. **Verifies the limit of proportionality** (detects whether the spring transitions into non-linear plastic deformation).

---

### Question 3 & 4: Order of Magnitude Estimates & Dimensional Homogeneity

#### (a) Order of Magnitude Estimations
- **Human Body Volume:** Modeling the human torso/body as an equivalent cylinder of diameter $\\sim 22\\text{ cm}$ and height $\\sim 1.7\\text{ m}$:
  $$V \\approx 5.6 \\times 10^{-3}\\text{ m}^3 \\text{ to } 7.5 \\times 10^{-3}\\text{ m}^3$$
- **Kinetic Energy of a Sprinting Athlete:** With mass $m \\approx 60\\text{ kg}$ and top speed $v \\approx 10\\text{ m s}^{-1}$:
  $$\\text{KE} = \\frac{1}{2}mv^2 = \\frac{1}{2}(60)(10)^2 = 3000\\text{ J} \\text{ (Range: } 1.9\\text{ kJ to } 7.2\\text{ kJ)}$$
- **Density of Human Body:** $\\rho \\approx 950 - 1050\\text{ kg m}^{-3}$ (very close to water).

#### (b) SI Base Units of Electric Field Strength
$$\\text{Electric Field Strength } E = \\frac{F}{q} = \\frac{ma}{It}$$
$$[E] = \\frac{\\text{kg} \\cdot \\text{m s}^{-2}}{\\text{A} \\cdot \\text{s}} = \\mathbf{\\text{kg m A}^{-1}\\text{s}^{-3}}$$

---

### Question 5: 2D Vectors & Navigation (Ship Velocity Change)
**Problem:** A ship cruising at $10\\text{ m s}^{-1}$ on bearing $045^\\circ$ changes course to bearing $145^\\circ$ at $5\\text{ m s}^{-1}$ over $30\\text{ s}$.

$$\\vec{\\Delta v} = \\vec{v}_B - \\vec{v}_A$$
Resolving East-West ($x$) and North-South ($y$) components:
- $\\Delta v_x = 5\\sin(145^\\circ) - 10\\sin(45^\\circ) = 2.868 - 7.071 = -4.20\\text{ m s}^{-1}$
- $\\Delta v_y = 5\\cos(145^\\circ) - 10\\cos(45^\\circ) = -4.096 - 7.071 = -11.17\\text{ m s}^{-1}$

Magnitude of change in velocity:
$$|\\vec{\\Delta v}| = \\sqrt{(-4.20)^2 + (-11.17)^2} = 11.93\\text{ m s}^{-1}$$

Average acceleration:
$$a = \\frac{|\\vec{\\Delta v}|}{\\Delta t} = \\frac{11.93}{30} = \\mathbf{0.40\\text{ m s}^{-2}}$$

Direction angle $\\theta = \\tan^{-1}\\left(\\frac{4.20}{11.17}\\right) = 20.6^\\circ$ West of South, which corresponds to a **bearing of $201^\\circ$**.

---

## Section 2: Kinematics & Projectile Motion

### Question 1: Falling Durian & Projectile Equations
A student launches a projectile to dislodge a durian.
1. Vertical component:
   $$v_y^2 = u_y^2 + 2a_y s_y$$
   $$0 = u_y^2 + 2(-9.81)(4.75 - 1.0 - 0.25) \\implies u_y = 8.29\\text{ m s}^{-1}$$
2. Projection speed at $75^\\circ$:
   $$u = \\frac{8.29}{\\sin 75^\\circ} = \\mathbf{8.58\\text{ m s}^{-1}}$$
3. Time of flight:
   $$-1.0 = (8.29)t + \\frac{1}{2}(-9.81)t^2 \\implies t = \\mathbf{1.80\\text{ s}}$$
4. Horizontal range:
   $$s_x = u_x t = (8.58 \\cos 75^\\circ)(1.80) = \\mathbf{4.0\\text{ m}}$$

---

### Question 3: Dollar Note Reaction Time Demonstration
A lecturer drops a flat $\\text{S\\$}2$ note ($12.7\\text{ cm}$ length) through a student's fingers.
- Fall time for $12.7\\text{ cm}$:
  $$s = ut + \\frac{1}{2}gt^2 \\implies 0.127 = 0 + 4.905 t^2 \\implies t = 0.161\\text{ s}$$
- Typical human reaction time is $0.2 - 0.3\\text{ s}$. Because human reaction time exceeds $0.16\\text{ s}$, **the student will fail to catch the note**.

---

### Question 5: Juggler Projectile Analysis
Ball 1 is thrown at $80.0^\\circ$ to reach maximum height $H = 1.75\\text{ m}$.
1. Initial vertical velocity:
   $$v_y^2 = u_y^2 - 2gH \\implies 0 = u_y^2 - 2(9.81)(1.75) \\implies u_y = 5.86\\text{ m s}^{-1}$$
   $$u = \\frac{5.86}{\\sin 80.0^\\circ} = \\mathbf{5.95\\text{ m s}^{-1}}$$
2. Total flight time:
   $$T = 2 \\times \\frac{u_y}{g} = 2 \\times \\frac{5.86}{9.81} = 1.195\\text{ s}$$
   Horizontal range:
   $$s_x = (u \\cos 80.0^\\circ)(T) = (5.95 \\cos 80.0^\\circ)(1.195) = \\mathbf{1.23\\text{ m}}$$
3. **Why jugglers use steep angles ($>80^\\circ$):**
   - Maximizes time in the air for a given arm speed, providing more reaction buffer.
   - Keeps horizontal range within the natural span of the juggler's two hands.

---

### Question 7: Police Car & Speeding Motorcycle Pursuit
A motorcycle speeds at $35\\text{ m s}^{-1}$ past a stationary police car.
1. **Speed limit verification:**
   $$90\\text{ km h}^{-1} = \\frac{90 \\times 1000}{3600} = 25\\text{ m s}^{-1}$$
   Since $35\\text{ m s}^{-1} > 25\\text{ m s}^{-1}$, the motorcycle is speeding.
2. Police car accelerates at $4.0\\text{ m s}^{-2}$ for $13.0\\text{ s}$ to reach top speed:
   $$v = 0 + (4.0)(13.0) = 52\\text{ m s}^{-1}$$
   Distance covered by police car during acceleration:
   $$s_{\\text{car}} = \\frac{1}{2}(4.0)(13.0)^2 = 338\\text{ m}$$
3. Total motorcycle distance after $20\\text{ s}$ delay $+ 13\\text{ s}$ acceleration ($33\\text{ s}$ total):
   $$s_{\\text{motorcycle}} = 35 \\times 33 = 1155\\text{ m}$$
   Separation distance:
   $$\\Delta s = 1155 - 338 = 817\\text{ m}$$
   Accounting for the $100\\text{ m}$ trailing stopping distance:
   $$\\text{Effective catch-up distance} = 817 - 100 = 717\\text{ m}$$
4. Time to catch up at constant relative speed:
   $$v_{\\text{rel}} = 52 - 35 = 17\\text{ m s}^{-1}$$
   $$t = \\frac{717}{17} = \\mathbf{42.2\\text{ s}}$$

---

## Need Personalized Guidance for H2 Physics?

If you find questions on uncertainty propagation, multi-stage kinematics graphs, or projectile vectors tricky, learning under a structured, concept-first methodology makes all the difference.

- Explore our small-group classes: [JC H2 Physics Tuition](/jc-h2-physics-tuition)
- Compare tracks: [H1 Physics Tuition](/h1-physics-tuition)
- Connect with Mr. Chew directly on WhatsApp: [+65 9727 7419](https://wa.me/6597277419)
`
  }
];
