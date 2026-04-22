// ─────────────────────────────────────────────────────────────────────────────
// careers-data.tsx
// Single source of truth for all hardcoded career pathway data.
// Consumed by:
//   - app/careers/Intermediate/page.tsx  (After Class 10th pathways)
//   - app/careers/Matriculation/page.tsx (After Class 12th pathways)
// ─────────────────────────────────────────────────────────────────────────────

import {
  Cpu, PenTool, Microscope, Activity, PlusSquare, Pill, Stethoscope,
  BarChart3, Award, TrendingUp, Scale, ScrollText, Palette,
  Globe, Plane, Ship, Shield, Wrench, Landmark, ClipboardList,
} from "lucide-react";
import type { ReactNode } from "react";

// ─── Interfaces for Intermediate (After 10th) ───────────────────────────────

export interface Exam {
  name: string;
  body: string;
  freq: string;
  for: string;
  tip?: string;
}

export interface SubOption {
  label: string;
  note: string;
  careers: string[];
  exams: Exam[];
  timeline: string;
  salary: string;
}

export interface PathItem {
  name: string;
  icon: string;
  overview: string;
  subOptions: SubOption[];
}

export interface Category {
  id: string;
  title: string;
  tagline: string;
  color: string;
  accent: string;
  bg: string;
  border: string;
  icon: string;
  paths: PathItem[];
}

// ─── Interfaces for Matriculation (After 12th) ──────────────────────────────

export interface Option {
  name: string;
  tag?: string;
  examInfo: string;
  duration: string;
  eligibility: string;
  topColleges: string;
  jobRoles: string[];
  avgSalary: string;
}

export interface Subcategory {
  title: string;
  icon: ReactNode;
  options: Option[];
}

export interface Pathway {
  name: string;
  icon: ReactNode;
  description: string;
  accent: string;
  textAccent: string;
  subcategories: Subcategory[];
}

// ─── After 10th: Categories Data ────────────────────────────────────────────

export const intermediateCategories: Category[] = [
  {
    id: "academic",
    title: "Academic Streams",
    tagline: "Structured pathways through Science, Commerce, and Humanities for higher education",
    color: "#16a34a",
    accent: "#22c55e",
    bg: "rgba(22,163,74,0.07)",
    border: "rgba(22,163,74,0.22)",
    icon: "🎓",
    paths: [
      {
        name: "Science Stream",
        icon: "⚗️",
        overview: "Offers structured pathways through Science, Commerce, and Humanities for higher education, opening doors to engineering, medicine, research, defence, and management while requiring strong analytical skills and consistent study habits.",
        subOptions: [
          {
            label: "PCM — Physics, Chemistry, Mathematics",
            note: "Engineering, architecture & defence — suits strong maths students",
            careers: ["IIT / NIT / BITS — B.Tech", "Architecture (B.Arch)", "Merchant Navy (B.Sc Nautical Sci.)", "Defence (NDA, CDS)", "B.Sc Physics / Maths / Statistics", "Data Science & AI (B.Sc/B.Tech)", "Pilot Training (CPL)"],
            exams: [
              { name: "JEE Main", body: "NTA", freq: "Jan & Apr", for: "NITs, IIITs, GFTIs (31 lakh+ appear)", tip: "Min. 75% in 12th PCM for IIT/NIT eligibility" },
              { name: "JEE Advanced", body: "IITs (rotating)", freq: "May", for: "IITs only — top 2.5 lakh from JEE Main qualify", tip: "Only 2 attempts; need top ~1% in JEE Main" },
              { name: "WBJEE", body: "WBJEEB", freq: "Apr–May", for: "WB state colleges + IIEST, Jadavpur via this route", tip: "Separate syllabus from JEE — practice WB-specific PYQs" },
              { name: "BITSAT", body: "BITS Pilani", freq: "May–Jun", for: "BITS Pilani / Goa / Hyderabad (3 campuses)", tip: "Speed-based — finish early to get bonus questions" },
              { name: "MHT-CET", body: "Maharashtra CET Cell", freq: "Apr–May", for: "Maharashtra engineering colleges", tip: "70% weightage on 11–12th syllabus" },
              { name: "KEAM / AP EAPCET / KCET", body: "State bodies", freq: "May–Jun", for: "Kerala, AP, Karnataka state colleges respectively", tip: "State domicile required for most" },
              { name: "NDA Written", body: "UPSC", freq: "Apr & Sep", for: "Army/Navy/Air Force after 12th PCM", tip: "Physical + medical after written; age 16.5–19.5" },
            ],
            timeline: "11th–12th (2 yrs) → Entrance exam (Apr–May Class 12) → Counselling (Jun–Jul) → B.Tech (4 yrs)",
            salary: "₹4–25 LPA fresher (varies: IIT vs. private college)",
          },
          {
            label: "PCB — Physics, Chemistry, Biology",
            note: "Medicine, dentistry & life sciences — strong biology foundation required",
            careers: ["MBBS (Doctor)", "BDS (Dentist)", "B.Pharm / Pharm.D", "B.Sc Nursing", "B.Sc Agriculture", "Veterinary Science (B.V.Sc)", "Biotechnology / Microbiology", "Physiotherapy (BPT)"],
            exams: [
              { name: "NEET-UG", body: "NTA", freq: "May (once/year)", for: "ALL medical/dental admissions in India — 21 lakh+ appear", tip: "720 marks; 180 Qs; 50% cutoff for general (360+)" },
              { name: "AIIMS (via NEET)", body: "AIIMS Delhi", freq: "via NEET score", for: "AIIMS colleges — use NEET score for counselling", tip: "AIIMS Delhi needs 99.9+ percentile" },
              { name: "JIPMER", body: "JIPMER Puducherry", freq: "via NEET", for: "JIPMER campus — govt. MBBS at ₹342/year fees", tip: "Low fees, extremely competitive" },
              { name: "KEAM / state CET", body: "State bodies", freq: "May–Jun", for: "Pharmacy & BSc admissions in respective states", tip: "" },
              { name: "ICAR AIEEA", body: "NTA / ICAR", freq: "Jun", for: "Agriculture & Veterinary Science (B.Sc Ag, B.V.Sc)", tip: "Separate from NEET; biology + agriculture subjects" },
            ],
            timeline: "11th–12th PCB (2 yrs) → NEET (May) → Counselling MCC/state (Jun–Jul) → MBBS (5.5 yrs) / BDS (5 yrs)",
            salary: "₹6–15 LPA for MBBS fresher; specialist doctors ₹20–80 LPA",
          },
          {
            label: "PCMB — All Four Subjects",
            note: "All PCM & PCB pathways combined — ideal for research-oriented students",
            careers: ["All PCM + PCB options above", "Biotechnology (B.Tech Biotech)", "Bioinformatics", "Biomedical Engineering", "Dual degree programmes (IISc, IITs)"],
            exams: [
              { name: "Both JEE Main & NEET-UG", body: "NTA", freq: "Jan–May", for: "Attempt both exams; decide based on results", tip: "Heavy workload — plan schedule carefully" },
              { name: "KVPY / INSPIRE", body: "IISc / DST", freq: "Nov", for: "Research scholarship at IISc, IITs, IISERs", tip: "For pure science research lovers; stipend ₹5,000–7,000/month" },
              { name: "IAT (IISER Aptitude Test)", body: "IISERs", freq: "Jun", for: "5-yr BS-MS at IISERs (world-class research institutes)", tip: "Also via JEE Advanced or KVPY channel" },
            ],
            timeline: "11th–12th (2 yrs) → Multiple exams simultaneously → Choose path based on rank",
            salary: "Research: ₹3–8 LPA starting + grants; industry: ₹5–20 LPA",
          },
        ],
      },
      {
        name: "Commerce Stream",
        icon: "📊",
        overview: "Offers pathways focused on finance, business, and law, leading to professional courses such as CA, CS, and MBA; strong maths skills help but aren't mandatory for non-maths tracks.",
        subOptions: [
          {
            label: "Professional Track — CA, CS, CMA",
            note: "CA, CS & CMA certifications — high-earning finance and legal careers",
            careers: ["Chartered Accountant (CA)", "Company Secretary (CS)", "Cost & Management Accountant (CMA)", "Forensic Auditor", "Tax Consultant", "CFO (long term)"],
            exams: [
              { name: "CA Foundation", body: "ICAI", freq: "May & Nov", for: "Entry to CA course — after 12th or even alongside 12th", tip: "Register 4 months before exam; 4 papers; need 50% aggregate + 40% each" },
              { name: "CS Foundation", body: "ICSI", freq: "Jan & Jun", for: "Company Secretary course — after 12th", tip: "Can register while in 12th; 4 papers online" },
              { name: "CMA Foundation", body: "ICMAI", freq: "Jun & Dec", for: "Cost Accountant course — after 12th", tip: "4 papers; less competitive than CA but equally valuable in manufacturing" },
            ],
            timeline: "12th → Foundation (6 months) → Intermediate (2 exams) → Final + Articleship (3 yrs) → Qualified CA (avg. 4–5 yrs total)",
            salary: "CA fresher ₹7–12 LPA; Big 4 partner level ₹50L–1Cr+",
          },
          {
            label: "Finance & Banking Track",
            note: "Banking, investment & stock markets — strong analytical skills required",
            careers: ["Investment Banker", "Stock Broker / Trader", "Financial Analyst (CFA)", "Actuary", "SEBI Officer", "RBI Grade B Officer", "Bank PO (SBI/IBPS)"],
            exams: [
              { name: "IBPS PO / Clerk", body: "IBPS", freq: "Aug–Nov", for: "Public sector bank jobs — 10,000+ vacancies/year", tip: "Prelims + Mains + Interview; age 20–30; graduation required for PO" },
              { name: "SBI PO / Clerk", body: "SBI", freq: "Mar–Jun", for: "State Bank of India — most prestigious bank job", tip: "Separate from IBPS; SBI PO is harder; starts at ₹41,960/month" },
              { name: "RBI Grade B", body: "RBI", freq: "Apr–Sep", for: "Central bank officer — most prestigious finance govt. job", tip: "Graduation needed; 3-phase exam; ₹77,000+ starting CTC" },
              { name: "NISM / NCFM Certifications", body: "SEBI / NSE", freq: "On demand", for: "Stock market certifications for trading/broking careers", tip: "Can start from 12th; low cost; opens broker/analyst roles" },
            ],
            timeline: "12th → B.Com / BBA (3 yrs) → Bank exams / CFA Level 1 → Job",
            salary: "Bank PO: ₹8–12 LPA; Investment Banking: ₹15–40 LPA",
          },
          {
            label: "Corporate & Management Track",
            note: "Business management & entrepreneurship — suits leadership-oriented students",
            careers: ["BBA → MBA", "Business Analyst", "Marketing Manager", "HR Manager", "Operations Manager", "Entrepreneur", "Hotel Management (BHM)"],
            exams: [
              { name: "IPMAT (IPM-AT)", body: "IIM Indore/Rohtak", freq: "May", for: "5-year integrated BBA+MBA at IIMs directly after 12th!", tip: "Age limit 20 yrs; 60% in 10th & 12th; MCQ + SA" },
              { name: "DU JAT", body: "Delhi University", freq: "Jun", for: "BBA at SRCC, Gargi, Keshav Mahavidyalaya (DU)", tip: "Very competitive; SRCC BBA is India's top BBA" },
              { name: "SET (Symbiosis)", body: "Symbiosis International", freq: "May", for: "BBA / B.Com at Symbiosis Pune (top private)", tip: "Online proctored test + Personal Interaction round" },
              { name: "NCHMCT JEE", body: "NTA", freq: "Apr", for: "Hotel Management at IHMs (govt. hotel mgmt. colleges)", tip: "English + Reasoning + Aptitude; IHM Mumbai is top" },
            ],
            timeline: "12th → BBA (3 yrs) → CAT/GMAT → MBA (2 yrs) → Corporate job",
            salary: "BBA fresher ₹3–6 LPA; post-MBA IIM ₹25–35 LPA average",
          },
        ],
      },
      {
        name: "Humanities (Arts) Stream",
        icon: "🎨",
        overview: "Offers routes into civil services, law, journalism, design, psychology, and teaching — high-impact careers that value communication and critical thinking.",
        subOptions: [
          {
            label: "Civil Services / UPSC Track",
            note: "IAS, IPS & IFS — India's most competitive civil service examination",
            careers: ["IAS (Collector / DM)", "IPS (Police / CBI)", "IFS (Foreign Service / Ambassador)", "IRS (Tax / Customs)", "State PCS Officers (SDO, DSP)", "PSU admin roles"],
            exams: [
              { name: "UPSC CSE (IAS Exam)", body: "UPSC", freq: "Prelims: Jun, Mains: Sep", for: "IAS, IPS, IFS — top 1000 selected from 10 lakh+ applicants", tip: "Graduation required; start GS prep in 11th itself; optional subject matters" },
              { name: "State PCS (WBCS, UPPSC, etc.)", body: "State PSCs", freq: "Varies by state", for: "SDO, DSP, BDO, CDPO in your state govt.", tip: "Easier than UPSC; state domicile usually needed; 3-tier exam" },
              { name: "NDA (with Arts PCM not needed)", body: "UPSC", freq: "Apr & Sep", for: "Army ground duty (Arts can apply for Army — not Navy/AF)", tip: "Maths in 12th not mandatory for Army NDA entry" },
            ],
            timeline: "12th → Any Graduation (3 yrs) → UPSC Prelims → Mains → Interview → 2-yr training",
            salary: "IAS: ₹56,100 basic (+perks, housing, car, pension); effective CTC ₹15–25 LPA equivalent",
          },
          {
            label: "Law Track — CLAT & Legal Careers",
            note: "National Law Universities & legal careers — critical thinking essential",
            careers: ["Advocate / Lawyer", "Corporate Lawyer (LLB/BA LLB)", "Public Prosecutor", "Judge (via judiciary exam)", "Legal Advisor (MNCs)", "Patent Attorney", "NGO Legal Head"],
            exams: [
              { name: "CLAT (Common Law Admission Test)", body: "Consortium of NLUs", freq: "Dec (for next session)", for: "22 National Law Universities — NLS Bangalore, NALSAR, NLIU top 3", tip: "5-yr BA LLB; English + GK + Legal Reasoning + Quant; 150 Qs in 2 hrs" },
              { name: "AILET", body: "NLU Delhi", freq: "Dec", for: "NLU Delhi (India's #1 law school) — separate from CLAT", tip: "Much harder than CLAT; only ~80 seats BA LLB; separate preparation needed" },
              { name: "LSAT India", body: "Law School Admission Council", freq: "Jan & Jun", for: "Jindal Global Law School, Symbiosis, Christ University", tip: "Skills-based, not GK — good for students who find CLAT GK hard" },
              { name: "DU LLB Entrance", body: "Delhi University", freq: "Jun", for: "3-yr LLB after graduation at DU Campus Law Centre", tip: "Campus Law Centre is India's largest law school; after any graduation" },
            ],
            timeline: "12th → CLAT (Dec) → BA LLB (5 yrs) → Enrolment at Bar Council → Practice / Judiciary prep",
            salary: "Junior advocate ₹2–5 LPA; corporate lawyer ₹15–50 LPA; senior counsel ₹1Cr+",
          },
          {
            label: "Journalism & Mass Communication",
            note: "Print, digital & broadcast media — strong communication skills required",
            careers: ["Print / TV / Digital Journalist", "News Anchor", "Content Creator / YouTuber (professional)", "Public Relations Officer", "Copywriter / Ad Agency", "Film & Documentary Maker", "Social Media Manager"],
            exams: [
              { name: "IIMC Entrance", body: "Indian Institute of Mass Communication", freq: "Apr–May", for: "Govt. IIMC — PG diploma in journalism (top govt. media institute)", tip: "After graduation; 5 campuses across India; ₹30K/year fees" },
              { name: "ACJ (Asian College of Journalism)", body: "ACJ Chennai", freq: "Mar", for: "Best private journalism school in India", tip: "Intense 1-yr PG; Reuters, BBC, The Hindu alumni" },
              { name: "Symbiosis / Christ / JMI BA-MC", body: "Various", freq: "May–Jun", for: "UG BA in Mass Communication / Journalism", tip: "JMI (Jamia) is top govt. option for UG; SET for Symbiosis" },
              { name: "FTII / SRFTI Entrance", body: "FTII Pune / SRFTI Kolkata", freq: "Feb–Mar", for: "Film direction, screenwriting, cinematography, editing", tip: "Very few seats (~30–50 per discipline); portfolio + interview" },
            ],
            timeline: "12th → BA Mass Comm (3 yrs) → Internships → Job; OR → PG Diploma (1 yr) after any degree",
            salary: "₹2.5–6 LPA entry; senior editor/anchor ₹15–40 LPA; star anchor ₹1Cr+",
          },
          {
            label: "Design — NID, NIFT, Pearl",
            note: "NID, NIFT & IIT design schools — creative aptitude and portfolio essential",
            careers: ["Fashion Designer", "Product / Industrial Designer", "UX/UI Designer", "Graphic Designer", "Interior Designer", "Textile Designer", "Jewellery Designer", "Automobile Designer"],
            exams: [
              { name: "NID DAT (Design Aptitude Test)", body: "National Institute of Design", freq: "Jan (Prelims) + Mar (Mains)", for: "NID Ahmedabad, Bengaluru, Jorhat — govt. design institutes", tip: "Studio test — drawing, model-making, portfolio; no maths needed" },
              { name: "NIFT Entrance", body: "NIFT (Ministry of Textiles)", freq: "Feb", for: "NIFT campuses — fashion design, leather, textile, knitwear", tip: "CAT (Creative Ability Test) + GAT (General Ability Test) + Situation Test" },
              { name: "CEED (for M.Des)", body: "IITs / IISc", freq: "Jan", for: "M.Des at IIT Bombay, Delhi, Guwahati — after any graduation", tip: "For UG: check individual IIT B.Des programmes via JEE" },
              { name: "UCEED", body: "IITs", freq: "Jan", for: "B.Des at IIT Bombay, Delhi, Guwahati, Hyderabad, Jorhat", tip: "Same structure as JEE season; strong drawing aptitude needed" },
              { name: "Pearl Academy / Symbiosis Design", body: "Private", freq: "Apr–May", for: "Top private design schools — fashion, luxury, communication design", tip: "Portfolio + interview based; industry connections strong" },
            ],
            timeline: "12th → DAT/NIFT (Jan–Mar) → B.Des (4 yrs) → Portfolio building → Job / Freelance",
            salary: "₹3–8 LPA fresher; senior UX/product designer ₹15–40 LPA",
          },
        ],
      },
    ],
  },
  {
    id: "vocational",
    title: "Professional & Vocational",
    tagline: "Skill-focused programs designed for early employment and industry readiness",
    color: "#2563eb",
    accent: "#60a5fa",
    bg: "rgba(37,99,235,0.07)",
    border: "rgba(37,99,235,0.22)",
    icon: "🔧",
    paths: [
      {
        name: "Polytechnic Diploma",
        icon: "🏗️",
        overview: "Offers a 3-year government-recognised diploma after 10th that is skills-focused and enables lateral entry into B.Tech 2nd year — ideal for hands-on students seeking lower fees.",
        subOptions: [
          {
            label: "Engineering Diploma Branches (3 years)",
            note: "3-year government diploma — direct job or lateral entry into B.Tech 2nd year",
            careers: ["Civil Engineering Diploma", "Mechanical Engineering", "Computer Science & IT", "Electrical Engineering", "Electronics & Communication", "AI & ML Diploma", "Chemical / Automobile / Aeronautical"],
            exams: [
              { name: "WB JEXPO", body: "WEBSCTE", freq: "Apr–May", for: "West Bengal government polytechnics — 100,000+ seats", tip: "Maths + Physical Science from 10th; based on 10th marks + test" },
              { name: "Delhi CET (Polytechnic)", body: "BTEUP", freq: "May–Jun", for: "Delhi government polytechnics", tip: "10th marks-based + entrance; 60+ polytechnics in Delhi" },
              { name: "JEECUP", body: "BTEUP UP", freq: "Apr–May", for: "Uttar Pradesh polytechnics — largest in India by seats", tip: "Group A (Engg) uses 10th maths + science score" },
              { name: "Mah Polytechnic CET", body: "DTE Maharashtra", freq: "May", for: "Maharashtra polytechnics (Mumbai, Pune, Nashik campuses)", tip: "10th percentage-based counselling" },
              { name: "AP / TS POLYCET", body: "State BTE", freq: "Apr", for: "Andhra Pradesh / Telangana govt. polytechnics", tip: "Maths + Physical/Biological science from 10th" },
            ],
            timeline: "10th → Polytechnic entrance (Apr–May) → 3-yr Diploma → Job OR Lateral Entry B.Tech",
            salary: "Diploma fresher: ₹2–4 LPA; after B.Tech via lateral entry: ₹4–12 LPA",
          },
          {
            label: "Lateral Entry to B.Tech (2nd Year)",
            note: "Advanced engineering entry — complete a full degree in just 3 years",
            careers: ["Direct B.Tech 2nd year at NITs, state engineering colleges", "Complete B.Tech in 3 years instead of 4", "GATE-eligible after B.Tech for PSU / M.Tech"],
            exams: [
              { name: "LEET (Lateral Entry Entrance Test)", body: "State CETs / WBJEEB", freq: "Jun–Jul", for: "State engineering colleges lateral entry — diploma holders only", tip: "WB JELET for West Bengal; UP JEECUP Group K; Mah. D-Pharmacy etc." },
              { name: "NITs Lateral Entry (DASA/CCMT)", body: "NIT Council", freq: "Jul–Aug", for: "Limited seats at NITs for diploma holders", tip: "Very few seats (~5% of total); merit-based; CGPA 7.5+ in diploma helps" },
            ],
            timeline: "Diploma (3 yrs) → LEET (Jun) → B.Tech 2nd year (3 yrs) → Total: 6 yrs but 1 yr saved on fees",
            salary: "After lateral B.Tech: ₹4–15 LPA depending on college & branch",
          },
        ],
      },
      {
        name: "ITI — Industrial Training Institute",
        icon: "⚙️",
        overview: "Offers government-certified 1–2 year trade courses under NCVT that lead to direct placements in PSUs, railways, defence, and private industry, with apprenticeship support and stipends.",
        subOptions: [
          {
            label: "Technical Trades — High Job Demand",
            note: "NCVT-certified trades — high job demand in railways, defence & PSUs",
            careers: ["Electrician (1 yr)", "Fitter (2 yrs)", "Welder (1 yr)", "Turner (2 yrs)", "Machinist (2 yrs)", "Instrument Mechanic (2 yrs)", "Refrigeration & AC Tech (2 yrs)", "Plumber (1 yr)"],
            exams: [
              { name: "State ITI Entrance / Merit-based", body: "State DTE / ITI boards", freq: "Jun–Jul", for: "All government ITI admissions; some states use 10th marks directly", tip: "WB ITI: apply on wbscvet.in; UP: admission on 10th merit" },
              { name: "NCVT MIS Portal", body: "Ministry of Skill Development", freq: "Year round", for: "Central govt. ITI tracking; certificate from here is nationally valid", tip: "NCVT certificate > SCVT — check which your ITI offers" },
              { name: "NIMI Mock Tests (online)", body: "NIMI", freq: "Year round", for: "ITI trade test preparation — free govt. platform", tip: "Practice trade-specific MCQs; helps in final trade exam" },
              { name: "Apprenticeship Portal", body: "BOAT / apprenticeshipindia.gov.in", freq: "After ITI", for: "1-year apprenticeship at BHEL, ONGC, Railways, Steel plants etc.", tip: "Apprenticeship Allowance ₹7,000–10,000/month; boosts placement" },
            ],
            timeline: "10th → ITI admission (Jun) → Trade (1–2 yrs) → Apprenticeship (1 yr) → Job at ₹15K–30K/month",
            salary: "Entry: ₹1.8–3.5 LPA; skilled technician: ₹4–8 LPA; Gulf / abroad: ₹8–20 LPA",
          },
          {
            label: "Computer & IT Trades",
            note: "Office-ready IT trades — government clerical and data entry roles",
            careers: ["COPA — Computer Operator & Programming Assistant", "Data Entry Operator (DEO)", "IT & Electronics System Maintenance", "Stenographer (English / Hindi)", "Desktop Publishing Operator"],
            exams: [
              { name: "Same state ITI admission process", body: "State DTE", freq: "Jun–Jul", for: "COPA is the most popular IT trade — 1 yr", tip: "COPA pass-outs can appear in SSC MTS / Steno / Bank Clerk directly" },
              { name: "SSC Steno / MTS after COPA", body: "SSC", freq: "Sep–Oct", for: "Govt. office jobs after COPA — 10th + ITI eligible", tip: "COPA + English typing 30 WPM = direct steno eligibility" },
            ],
            timeline: "10th → COPA ITI (1 yr) → Apprenticeship → Govt. office job / BPO / data entry role",
            salary: "₹1.5–3 LPA; govt. DEO: ₹25,000–40,000/month after confirmation",
          },
          {
            label: "Vocational & Service Trades",
            note: "Service and trade skills — fastest route to self-employment",
            careers: ["Mechanic (Diesel / Motor Vehicle / Two-Wheeler)", "Tailoring & Fashion Technology", "Cosmetology / Beauty & Hair", "Baker & Confectioner", "Health Sanitary Inspector"],
            exams: [
              { name: "State ITI Admission (same portal)", body: "State DTE", freq: "Jun–Jul", for: "All vocational trades admission — merit or entrance based", tip: "Motor vehicle mechanic trade has highest placement in auto industry" },
              { name: "PMKVY under Skill India", body: "NSDC / Ministry", freq: "Rolling", for: "Free short-term skilling with NSQF certification", tip: "Free training + ₹500 reward after assessment; useful if ITI is full" },
            ],
            timeline: "10th → ITI (1–2 yrs) → Direct self-employment / workshop job / hotel / salon chain",
            salary: "Own garage/salon: ₹3–10 LPA; employed: ₹1.8–3.5 LPA starting",
          },
        ],
      },
      {
        name: "Paramedical & Nursing",
        icon: "🏥",
        overview: "Offers high-demand healthcare roles (lab technicians, radiographers, nurses) with strong job security and multiple entry points that do not require an MBBS degree.",
        subOptions: [
          {
            label: "Diploma Programmes (2–3 years after 10th+2)",
            note: "Healthcare diplomas — hospital placement without an MBBS degree",
            careers: ["DMLT — Diploma in Medical Lab Technology", "DMRIT — Radiology & Imaging", "DPT — Physiotherapy (Diploma)", "Diploma in OT Technology", "Diploma in Cardiac Tech", "Diploma in Dialysis Tech"],
            exams: [
              { name: "State Paramedical Entrance / Merit", body: "State Health Depts.", freq: "Jun–Aug", for: "Govt. paramedical colleges — very low fees (₹5K–15K/year)", tip: "WB: WBPMC; Delhi: DPMT; UP: UPUMS; Karnataka: KPME" },
              { name: "AIIMS Paramedical Entrance", body: "AIIMS Delhi", freq: "Jun", for: "Paramedical courses at AIIMS Delhi / other AIIMS", tip: "Highly competitive — MCQ + practical; only ~100 seats per course" },
              { name: "Private Hospital Diploma", body: "Apollo / Fortis / VLCC tied institutions", freq: "Rolling", for: "Placement-guaranteed courses at hospital-run institutes", tip: "Expensive (₹80K–2L/yr) but direct placement; check recognition" },
            ],
            timeline: "10+2 Science (PCB) → Diploma (2–3 yrs) → Council Registration → Hospital Job",
            salary: "Lab Tech: ₹2–4 LPA; Radiographer: ₹3–6 LPA; Gulf/abroad: ₹8–18 LPA",
          },
          {
            label: "Nursing (GNM & B.Sc Nursing)",
            note: "INC-regulated nursing degrees — globally recognised with strong overseas demand",
            careers: ["Staff Nurse (Govt. Hospital)", "ICU / CCU Nurse", "Community Health Nurse", "Nurse Educator", "Nurse in USA / Canada / UK / Gulf (after NCLEX / NMC OET)", "Midwife", "Nursing Superintendent"],
            exams: [
              { name: "GNM Entrance (3.5 yr course)", body: "State Nursing Councils", freq: "Jun–Aug", for: "Govt. nursing schools; 10+2 PCB or just 10th (state varies)", tip: "WB: wbnhm.nic.in; low cost ₹10K–30K/yr in govt. schools" },
              { name: "B.Sc Nursing Entrance (4 yr)", body: "AIIMS / State CETs", freq: "Jun", for: "Degree nursing — higher pay, more senior roles", tip: "JIPMER, PGIMER, BHU nursing entrance — top govt. options" },
              { name: "NCLEX-RN (for USA)", body: "NCSBN (USA)", freq: "Year round", for: "License for USA nursing — salary $60,000–90,000/year", tip: "Clear English, complete Indian nursing degree, then prepare NCLEX; NMC OET for UK" },
            ],
            timeline: "10+2 PCB → GNM (3.5 yrs) / B.Sc Nursing (4 yrs) → State Registration → Job / Abroad prep",
            salary: "Govt. nurse: ₹25,000–50,000/month; USA/UK: ₹40–80 LPA equivalent",
          },
        ],
      },
    ],
  },
  {
    id: "alternative",
    title: "Alternative Learning",
    tagline: "Flexible and non-traditional pathways aligned with modern learning and career needs",
    color: "#7c3aed",
    accent: "#a78bfa",
    bg: "rgba(124,58,237,0.07)",
    border: "rgba(124,58,237,0.22)",
    icon: "💡",
    paths: [
      {
        name: "Open & Online Schooling",
        icon: "🌐",
        overview: "Offers flexible open and online schooling paths (e.g., NIOS) that are government-recognised and equivalent to CBSE for competitive exams like NEET, JEE, and UPSC.",
        subOptions: [
          {
            label: "NIOS — National Institute of Open Schooling",
            note: "Flexible open schooling — fully valid for NEET, JEE & all university admissions",
            careers: ["Complete 11th & 12th at your own pace (3 months to 5 years)", "Appear in NEET / JEE with NIOS Science stream", "Work while studying — no daily attendance", "Second chance for students who failed 10th CBSE/State"],
            exams: [
              { name: "NIOS Secondary (10th equivalent)", body: "NIOS", freq: "Apr & Oct (On-demand also)", for: "Students who failed 10th or need improvement; also fresh admission", tip: "On-Demand Exam (ODE) — appear anytime; results in 45 days" },
              { name: "NIOS Senior Secondary (12th)", body: "NIOS", freq: "Apr & Oct", for: "11th & 12th together in one registration; choose any subjects", tip: "Can choose PCM and appear for JEE; can choose PCB and appear for NEET" },
              { name: "Vocational Courses (NIOS)", body: "NIOS", freq: "Rolling", for: "50+ vocational courses alongside academics — beautician, IT, agriculture etc.", tip: "Earn a vocational cert while doing 12th — adds employability" },
            ],
            timeline: "10th → NIOS registration (anytime) → Self-study + coaching → 12th in 1–5 years → Competitive exam",
            salary: "Depends entirely on the competitive exam you crack thereafter",
          },
          {
            label: "Online Schools — Cambridge IGCSE / CBSE Online",
            note: "International and online schooling — suited for global university aspirants",
            careers: ["Cambridge IGCSE / AS / A Level → UK/USA university admissions", "CBSE Online (21K School, Extramarks) → same as regular CBSE", "International Baccalaureate (IB) → global university pathways", "Homeschooling with NIOS support"],
            exams: [
              { name: "Cambridge IGCSE / A Level", body: "Cambridge Assessment (UK)", freq: "May & Oct", for: "Internationally recognised; needed for Oxford, MIT, NUS applications", tip: "Expensive (₹1.5–5L/year) but globally accepted; India schools: DPS, Dhirubhai Ambani" },
              { name: "SAT / ACT (for USA)", body: "College Board / ACT Inc.", freq: "Mar, May, Jun, Aug, Oct, Nov", for: "USA university admissions (Harvard, MIT, Stanford etc.)", tip: "SAT: 1600 marks; strong score (1400+) needed for top US schools" },
              { name: "TOEFL / IELTS", body: "ETS / British Council", freq: "Year round", for: "English proficiency for USA / UK / Canada / Australia universities", tip: "IELTS 7.0+ for UK/Australia; TOEFL 100+ for USA Ivy League" },
            ],
            timeline: "10th → A Level / IB (2 yrs) → SAT + TOEFL → USA/UK university applications (Sept–Jan) → Admit",
            salary: "Depends on university + field; USA STEM: $80,000–120,000/year starting",
          },
        ],
      },
      {
        name: "Short-Term Certifications & Skills",
        icon: "📜",
        overview: "Offers short-term, high-ROI certifications and skills (digital marketing, web development, cloud) that enable immediate freelancing or paid work alongside academics.",
        subOptions: [
          {
            label: "Digital Marketing Certifications",
            note: "Industry-recognised certifications — freelancing possible within months",
            careers: ["SEO Specialist", "Google Ads / Meta Ads Manager", "Social Media Manager", "Content Strategist", "Email Marketing Specialist", "Affiliate Marketer", "Digital Marketing Agency Owner"],
            exams: [
              { name: "Google Digital Garage (Fundamentals)", body: "Google", freq: "Self-paced, free", for: "Industry-recognised intro to digital marketing; LinkedIn badge", tip: "Complete in 40 hours; certificate from google.com/certificates" },
              { name: "Meta Blueprint (Facebook/Instagram Ads)", body: "Meta", freq: "Self-paced", for: "Professional Facebook/Instagram advertising certification", tip: "Free courses; paid exam (~$150) for certified status; optional" },
              { name: "HubSpot Content Marketing", body: "HubSpot Academy", freq: "Free, self-paced", for: "Inbound marketing, content strategy, blogging — free cert", tip: "5 free certifications; HubSpot badge is well-recognised by Indian startups" },
              { name: "Google Analytics 4 Certification", body: "Google Skillshop", freq: "Free", for: "Data-driven marketing; needed for any digital marketing role", tip: "Must renew yearly; 70%+ to pass; 60 MCQs in 75 min" },
            ],
            timeline: "10th → Online study (2–6 months) → Build portfolio (client projects / mock campaigns) → Freelance / Job",
            salary: "Freelance: ₹20,000–80,000/month; agency job: ₹3–8 LPA",
          },
          {
            label: "Web Design & Development",
            note: "Frontend & full-stack skills — portfolio-driven path to freelancing and tech jobs",
            careers: ["Frontend Developer (HTML/CSS/JavaScript)", "WordPress / Webflow Designer", "UI/UX Designer", "Full Stack Developer (after advanced learning)", "React / Next.js Developer", "Shopify Developer"],
            exams: [
              { name: "freeCodeCamp Certifications", body: "freeCodeCamp.org (free)", freq: "Self-paced", for: "Responsive Web Design, JavaScript, Front End Libraries — free & recognised", tip: "300+ hours each; project-based; globally recognised in portfolios" },
              { name: "The Odin Project", body: "Open source curriculum", freq: "Self-paced, free", for: "Full stack web dev from scratch — highly respected by developers", tip: "Not a certificate — but builds real skills; pair with GitHub portfolio" },
              { name: "AWS Cloud Practitioner", body: "Amazon Web Services", freq: "Year round (Pearson VUE)", for: "Cloud basics — adds ₹1–3 LPA premium to any dev salary", tip: "~$100 exam; valid 3 years; entry into cloud computing careers" },
              { name: "Google UX Design Certificate", body: "Google / Coursera", freq: "Self-paced (~6 months)", for: "UX/UI design without a design degree — Figma + research methods", tip: "~$200 total on Coursera; highly sought by product companies" },
            ],
            timeline: "10th → Learn online (6–12 months) → Build 3–5 projects → GitHub portfolio → Freelance / Internship → Job",
            salary: "Freelance fresher: ₹25,000–60,000/month; company job: ₹4–15 LPA",
          },
          {
            label: "Accounting & Business Tools",
            note: "Accounting software and tax tools — quickest entry to office and accounting jobs",
            careers: ["Accountant / Bookkeeper", "GST Filing Assistant", "Tally Operator", "E-Commerce Seller / Manager", "Payroll Executive", "Tax Return Preparer (TRP)"],
            exams: [
              { name: "Tally Certified Professional (TCP)", body: "Tally Solutions", freq: "Year round", for: "Industry-standard accounting software cert; ₹2,500 exam fee", tip: "Tally ERP 9 + Tally Prime; GST module essential; most SME jobs ask for this" },
              { name: "GST Practitioner Exam", body: "GSTN / NACIN", freq: "Year round", for: "Certified GST Practitioner — can file returns for businesses", tip: "Register on gstp.gst.gov.in; exam + enrolment; earn ₹500–2000/return" },
              { name: "Income Tax Return Preparer (ITRP)", body: "Income Tax Dept.", freq: "Rolling", for: "Govt. scheme to prepare ITRs for citizens; earn per filing", tip: "Free training by IT dept.; good side income during March–July season" },
            ],
            timeline: "10th → Tally/GST cert (3–6 months) → Join CA firm / SME accounts team / Start own tax practice",
            salary: "Tally operator: ₹12,000–22,000/month; own practice: ₹3–8 LPA",
          },
        ],
      },
    ],
  },
  {
    id: "government",
    title: "Government & Defence",
    tagline: "Stable and service-oriented careers through government and defence sectors",
    color: "#b45309",
    accent: "#fbbf24",
    bg: "rgba(180,83,9,0.07)",
    border: "rgba(180,83,9,0.22)",
    icon: "🇮🇳",
    paths: [
      {
        name: "Defence Forces — After 10th/12th",
        icon: "⚓",
        overview: "India's armed forces offer unmatched career security, respect, and benefits — free housing, ECHS medical, canteen, pension, and CSD facilities. Multiple entry points exist both directly after 10th and after 12th.",
        subOptions: [
          {
            label: "Agniveer — Army, Navy, Air Force",
            note: "Short-service military scheme — 25% retained permanently after 4 years",
            careers: ["Indian Army Agniveer (Soldier GD, Tradesman, Clerk)", "Indian Navy Agniveer MR (Matric Recruit)", "Indian Navy Agniveer SSR (after 12th PCM)", "Indian Air Force Agniveer Vayu (X / Y Group)"],
            exams: [
              { name: "Army Agniveer CEE (Common Entrance Exam)", body: "Indian Army", freq: "Varies; announced on joinindianarmy.nic.in", for: "Soldier GD, Clerk, Tradesman, Technical — all via CEE + physical", tip: "Physical first (1.6km run in 5:30 / 5:45); then CEE (100 marks, 60 min); medical last" },
              { name: "Navy Agniveer MR", body: "Indian Navy", freq: "2 times/year; joinindiannavy.gov.in", for: "Chef, Steward, Hygienist — 10th pass; physically fit males", tip: "Written (Maths + Sci + GK + English) → Physical → Medical; age 17.5–21" },
              { name: "Navy Agniveer SSR", body: "Indian Navy", freq: "2 times/year", for: "Technical branch — 12th PCM; ₹30,000–40,000/month during Agnipath", tip: "Higher pay than MR; chance for permanent commission for top 25%" },
              { name: "Air Force Agniveer Vayu", body: "Indian Air Force", freq: "2 times/year; agnipathvayu.cdac.in", for: "X Group (Technical/Education) — 12th PCM; Y Group — 12th any stream", tip: "Online exam + PPDT + interview; Air Force most competitive of the three" },
              { name: "NDA (for Officer-level entry)", body: "UPSC", freq: "Apr & Sep", for: "Become Officer (Lieutenant) — 12th pass; age 16.5–19.5; only males (now females too via SSC W)", tip: "Written 900 marks + SSB interview (5 days); JEE-level maths preparation needed" },
            ],
            timeline: "10th/12th → Apply online → Physical → Written → Medical → Training (3–6 months) → 4-yr service",
            salary: "Agniveer: ₹30,000–40,000/month (Year 1); NDA Officer: ₹56,100 basic + allowances",
          },
          {
            label: "Paramilitary & Police (CAPF / State Police)",
            note: "Semi-military forces — stable careers with central government benefits",
            careers: ["Constable GD in CRPF / BSF / CISF / ITBP / SSB", "State Police Constable", "Delhi Police Constable", "CISF Constable (Airport security)", "Assam Rifles Rifleman", "RPF Constable (Railway Protection)"],
            exams: [
              { name: "SSC GD Constable", body: "Staff Selection Commission", freq: "Nov–Jan (Notification); Exam: Feb–Mar", for: "CRPF, BSF, CISF, ITBP, SSB, NIA, SSF — 10th pass; 50,000+ vacancies", tip: "CBT (80 Qs, 60 min) → Physical (1.6km run / 800m + long jump) → Medical" },
              { name: "RPF Constable & SI", body: "Railway Recruitment Board", freq: "Varies; indianrailways.gov.in", for: "Railway Protection Force — travel security; 10th pass for constable", tip: "Math + Reasoning + GK; physical after written; posted across India" },
              { name: "Delhi Police Constable", body: "SSC / Delhi Police", freq: "Annually", for: "Delhi-only posting; 10th pass; well-known for good work culture", tip: "Computer typing test (10 min) after written + physical" },
              { name: "State Police Constable (WB, UP, Raj, etc.)", body: "State Police Recruitment Boards", freq: "State-wise varies", for: "Respective state posting; lakhs of vacancies; 10th pass", tip: "WBPRB for West Bengal; UPPRPB for UP; check state-specific syllabus" },
            ],
            timeline: "10th → Physical fitness prep (6–12 months) → SSC GD notification → CBT → Physical → Medical → Training (9 months) → Posted",
            salary: "Constable: ₹21,700–69,100 (Pay Matrix Level 3) + HRA + DA; effective ₹35,000–50,000/month in hand",
          },
        ],
      },
      {
        name: "Staff Selection Commission (SSC)",
        icon: "📋",
        overview: "SSC conducts exams for thousands of central government jobs annually. Most SSC exams require only 10th or 12th — no graduation needed. These are among the most sought-after government jobs for stability, pension (NPS), and EL/CL leaves.",
        subOptions: [
          {
            label: "SSC MTS — Multi-Tasking Staff",
            note: "10th-pass entry — most accessible route to a central government posting",
            careers: ["MTS in any central govt. ministry / department", "Roles: peon, watchman, dak runner, junior office assistant", "Havaldar — CBIC (Customs & GST) or CBN (Narcotics)"],
            exams: [
              { name: "SSC MTS + Havaldar", body: "SSC (ssc.gov.in)", freq: "Jun–Aug (notification); Sep–Oct (exam)", for: "MTS: All ministries; Havaldar: CBIC & CBN — both in same notification", tip: "CBT: 90 Qs, 45 min — Maths + Reasoning + English + GK; Havaldar has physical test" },
            ],
            timeline: "10th → SSC MTS notification (Jun) → CBT (Sep–Oct) → Document verification → Posting (12–18 months total)",
            salary: "MTS: ₹18,000–56,900 (Level 1); Havaldar: ₹21,700–69,100 (Level 3); in-hand ~₹22,000–32,000/month",
          },
          {
            label: "SSC CHSL — Combined Higher Secondary Level",
            note: "12th-pass office roles — clerical positions in central ministries and courts",
            careers: ["Lower Division Clerk (LDC) — all central ministries", "Junior Secretariat Assistant (JSA)", "Postal Assistant / Sorting Assistant (Dept. of Posts)", "Data Entry Operator (DEO) — various depts.", "Court Clerk (Supreme / High Court)"],
            exams: [
              { name: "SSC CHSL (Tier 1 + 2)", body: "SSC", freq: "Dec (notification); Mar–Apr (Tier 1 CBT); Jun (Tier 2 + Typing Test)", for: "10,000–15,000 vacancies per cycle; 12th pass any stream", tip: "Tier 1: 100 Qs 60 min (Quant + English + Reasoning + GK); Tier 2: Typing (26 WPM English / 15 WPM Hindi)" },
            ],
            timeline: "12th → 6 months prep → SSC CHSL Tier 1 → Tier 2 (typing) → Posting",
            salary: "LDC/JSA: ₹19,900–63,200 (Level 2); PA/SA: ₹25,500–81,100 (Level 4); in-hand ~₹28,000–38,000/month",
          },
        ],
      },
      {
        name: "Railways — RRB Exams",
        icon: "🚂",
        overview: "Indian Railways is the world's largest employer with 1.3 million employees. RRB (Railway Recruitment Board) conducts exams for Group D and NTPC posts — 10th pass eligible for Group D, 12th for NTPC. Pensionable, transferable, with railway pass benefits.",
        subOptions: [
          {
            label: "RRB Group D — 10th Pass",
            note: "Track and depot roles — stable positions with pension and railway benefits",
            careers: ["Track Maintainer Grade IV", "Helper in Engineering / Electrical / Signal", "Assistant Pointsman", "Level Crossing Gate Man", "Hospital Attendant", "Safaiwala (Sanitation)"],
            exams: [
              { name: "RRB Group D CBT", body: "Railway Recruitment Board (21 RRBs across India)", freq: "Varies; 100K+ vacancies when notified", for: "10th pass + ITI / NAC in relevant trade (for some posts)", tip: "Maths (25) + GI&Reasoning (30) + GS&Science (25) + CA (20) = 100 Qs, 90 min; 1/3 negative marking" },
              { name: "Physical Efficiency Test (PET)", body: "RRB / RRC", freq: "After CBT", for: "Male: lift 35kg/100m; run 1000m in 4:15 | Female: lift 20kg/100m; run 1000m in 5:40", tip: "Start physical training 6 months before exam; PET is elimination round" },
            ],
            timeline: "10th → RRB notification → CBT (90 min) → PET → Document verification → Medical → Posting",
            salary: "₹18,000–56,900 (Level 1); + DA + HRA + Travel Pass; in-hand ~₹22,000–30,000/month",
          },
          {
            label: "RRB NTPC — 12th Pass (Graduate & Non-Graduate)",
            note: "Office-based railway roles — higher pay scale than Group D positions",
            careers: ["Junior Clerk cum Typist", "Accounts Clerk cum Typist", "Junior Time Keeper", "Trains Clerk", "Commercial cum Ticket Clerk (CTC)", "Station Master (Graduation required)", "Goods Guard (Graduation required)"],
            exams: [
              { name: "RRB NTPC CBT 1 + CBT 2", body: "RRB", freq: "Varies; 35,000+ vacancies per cycle", for: "Under-graduate posts: 12th pass; Graduate posts: any degree", tip: "CBT 1 (screening): 100 Qs 90 min; CBT 2 (merit): 120 Qs 90 min; Typing Test for clerical posts" },
            ],
            timeline: "12th → NTPC CBT 1 → CBT 2 → Typing test (clerical) → Medical → Posting",
            salary: "Non-grad: ₹19,900–Level 2–3; Graduate posts: ₹29,200–Level 5; Station Master: ₹35,400/month basic",
          },
        ],
      },
      {
        name: "Post Office & Other Govt. Entry",
        icon: "🏛️",
        overview: "India Post is India's largest postal network with 1.56 lakh post offices. GDS (Gramin Dak Sevak) is one of the few government jobs selected purely on 10th marks — no written exam! Other entry-level jobs exist in ESIC, FCI, and municipalities.",
        subOptions: [
          {
            label: "India Post — Gramin Dak Sevak (GDS)",
            note: "10th merit-based selection — no written exam required for postal delivery roles",
            careers: ["Branch Postmaster (BPM)", "Assistant Branch Postmaster (ABPM)", "Dak Sevak (mail delivery)", "Can convert to regular Postal Assistant after 5+ yrs service"],
            exams: [
              { name: "GDS Merit-Based Selection", body: "India Post (indiapostgdsonline.gov.in)", freq: "Annual notification; apply May–Jun", for: "Purely 10th percentage merit — no exam! 10th maths + English compulsory", tip: "High cutoffs in many states (95%+); computer knowledge + local language required; bicycle + smartphone needed for delivery" },
            ],
            timeline: "10th result → GDS notification (May) → Merit list (Aug–Sep) → Training → Posting",
            salary: "TRCA ₹10,000–14,500/month + DA; part-time nature; can do other work alongside",
          },
          {
            label: "FCI, ESIC, Municipal & Other Central Govt.",
            note: "FCI, ESIC & municipal bodies — entry-level central government recruitment",
            careers: ["FCI Watchman / MTS (Food Corporation of India)", "ESIC MTS (Employee State Insurance Corp.)", "Municipal Worker / Sanitation Inspector", "UIDAI (Aadhaar) Centre Operator", "Anganwadi / ASHA Worker (Social sector)"],
            exams: [
              { name: "FCI Recruitment (MTS / Watchman)", body: "FCI (fci.gov.in)", freq: "Varies; 10th pass + physical fitness", for: "Food grain storage, depot watchman, MTS across 27 states", tip: "State-wise recruitment; physical test included; good posting in home state usually" },
              { name: "ESIC MTS / LDC", body: "ESIC (esic.gov.in)", freq: "Annual; 10th for MTS; 12th for LDC", for: "ESIC hospitals and regional offices; 2,000–5,000 vacancies/cycle", tip: "Computer-based test; medical benefits for employee + family from Day 1" },
            ],
            timeline: "10th/12th → Watch official websites → Apply → CBT or Merit → Posting",
            salary: "₹18,000–25,500/month in-hand starting; confirmed govt. employee with pension (NPS)",
          },
        ],
      },
    ],
  },
];

// ─── After 10th: Stat Items ──────────────────────────────────────────────────

export const intermediateStatItems = [
  { label: "Career Pathways", value: "4" },
  { label: "Entrance Exams", value: "30+" },
  { label: "Specializations", value: "50+" },
  { label: "Job Roles Covered", value: "100+" },
];

// ─── After 12th: Stat Items ──────────────────────────────────────────────────

export const matriculationStatItems = [
  { label: "Career Pathways", value: "6" },
  { label: "Entrance Exams", value: "25+" },
  { label: "Specializations", value: "40+" },
  { label: "Job Roles Covered", value: "100+" },
];

// ─── After 12th: Pathways Data ───────────────────────────────────────────────

export const matriculationPathways: Pathway[] = [
  {
    name: "Engineering & Technology",
    icon: <Cpu size={28} strokeWidth={1.5} />,
    description: "Highly competitive technical pathways leading to premier institutes, offering rigorous training in engineering disciplines and preparing students for dynamic careers.",
    accent: "#3B82F6",
    textAccent: "#93C5FD",
    subcategories: [
      {
        title: "Entrance Exams",
        icon: <PenTool size={18} strokeWidth={2} />,
        options: [
          {
            name: "JEE Main",
            tag: "NITs / IIITs",
            examInfo: "Conducted by NTA (National Testing Agency) twice a year — January and April sessions. Tests Physics, Chemistry, and Mathematics (PCM) over 3 hours. Paper 1 for B.Tech (MCQ + numerical) and Paper 2 for B.Arch. Over 11–12 lakh students compete annually for roughly 40,000 seats across 31 NITs, 25 IIITs, and 28 GFTIs. Your best score from both sessions is considered. No negative marking for numerical questions. Score is also used for many state and private colleges.",
            duration: "4 years (B.Tech)",
            eligibility: "12th with PCM. Min 75% marks (65% for SC/ST). No upper age limit from 2021 onwards.",
            topColleges: "NIT Trichy, NIT Warangal, NIT Surathkal, IIIT Hyderabad, DTU Delhi, PEC Chandigarh, VNIT Nagpur.",
            jobRoles: [
              "Software Engineer at TCS, Infosys, Google, Amazon",
              "Civil/Structural Engineer at L&T, Shapoorji Pallonji",
              "Data Scientist / ML Engineer at startups",
              "Product Manager at tech companies",
              "VLSI / Embedded Systems Engineer at Qualcomm, Intel",
              "Government PSU Engineer (ONGC, NTPC, BHEL via GATE)",
            ],
            avgSalary: "₹4–12 LPA (fresher); ₹20–60 LPA at top MNCs",
          },
          {
            name: "JEE Advanced",
            tag: "IITs Only",
            examInfo: "The toughest undergraduate entrance exam in India. Only top 2.5 lakh JEE Main qualifiers are eligible. Conducted by one of the 23 IITs on rotation. Two mandatory papers of 3 hours each. Tests deep conceptual understanding — not just formulas. Questions include multiple correct answers, integer-type, and matrix-matching formats. Around 17,000–18,000 B.Tech seats across all IITs. Typically only 1.5–2 lakh students actually appear. Preparation requires 2+ years of dedicated coaching.",
            duration: "4 years (B.Tech) or 5 years (Dual Degree B.Tech+M.Tech)",
            eligibility: "Top 2.5 lakh in JEE Main. Maximum 2 attempts in consecutive years. Must have passed 12th in the year of or one year before attempt.",
            topColleges: "IIT Bombay, IIT Delhi, IIT Madras, IIT Kharagpur, IIT Kanpur, IIT Roorkee, IIT Hyderabad, IIT BHU, IIT Guwahati.",
            jobRoles: [
              "Software Engineer / SDE at Google, Microsoft, Amazon (₹40–80 LPA)",
              "Quantitative Analyst at Goldman Sachs, Jane Street",
              "Research Scientist at DeepMind, Meta AI, ISRO",
              "Consultant at McKinsey, BCG, Bain (via MBA)",
              "Entrepreneur / Startup Founder (IIT alumni network is exceptional)",
              "IAS/IPS Officer (many IITians crack UPSC)",
            ],
            avgSalary: "₹10–25 LPA average IIT fresher; ₹1–3 Cr at top firms (Google, Jane Street, Citadel)",
          },
          {
            name: "BITSAT",
            tag: "BITS Pilani",
            examInfo: "BITS Aptitude Test is a computer-based exam by BITS Pilani for its 3 campuses: Pilani, Goa, and Hyderabad. Covers Physics, Chemistry, Mathematics, English Proficiency, and Logical Reasoning — 130 questions in 3 hours. Unique: finish early and get 12 bonus questions for extra score. Speed and accuracy both matter. BITS offers unique features like flexible curriculum, dual degree options, and Practice School (internship semester with top companies). Direct admission for 12th board toppers above a state-specific cutoff.",
            duration: "4 years (B.E.) or 5 years (M.Sc. dual degree)",
            eligibility: "75% aggregate in PCM or PCB in 12th. English as a core subject mandatory. No upper age limit.",
            topColleges: "BITS Pilani (Rajasthan — highest cutoff), BITS Goa, BITS Hyderabad (rising fast in rankings).",
            jobRoles: [
              "Software Engineer at Qualcomm, Texas Instruments, Adobe",
              "Finance Analyst at Goldman Sachs, Morgan Stanley",
              "Product Manager at Flipkart, Amazon, Meesho",
              "Research Engineer at Samsung R&D, Microsoft Research",
              "Entrepreneur (BITS has one of India's best startup ecosystems — Ola, InMobi, Mu Sigma are BITS alumni ventures)",
            ],
            avgSalary: "₹8–20 LPA fresher; high international placements via Practice School",
          },
          {
            name: "State CETs (MHT-CET / KCET / WBJEE)",
            tag: "State Colleges",
            examInfo: "Each state conducts its own Common Entrance Test for engineering admissions to state government and private aided colleges. MHT-CET (Maharashtra) covers PCM/PCB; KCET (Karnataka) is for state and private aided colleges; WBJEE (West Bengal) is highly competitive with ranks deciding Jadavpur University admission; AP/TS EAMCET for Andhra/Telangana. These are far less competitive than JEE, but top state colleges like COEP Pune, RV College Bangalore, and Jadavpur University are excellent with very affordable fees of ₹20,000–1 lakh/year.",
            duration: "4 years (B.E. / B.Tech)",
            eligibility: "12th with PCM. State domicile certificate usually required for government quota seats. Cutoffs vary per state.",
            topColleges: "COEP Pune (MH CET), RV College Bangalore (KCET), PESIT Bangalore, Jadavpur University Kolkata (WBJEE), VNIT Nagpur, BVRIT Hyderabad (EAMCET).",
            jobRoles: [
              "Junior Engineer at state PWD / CPWD (via SSC JE exam)",
              "Software Developer at mid-size IT companies (Wipro, Mphasis, Hexaware)",
              "Site Engineer at L&T, Shapoorji Pallonji construction projects",
              "Government PSU via GATE exam (BHEL, NTPC, GAIL)",
              "Entrepreneur in regional markets with lower competition",
            ],
            avgSalary: "₹3–8 LPA fresher; government PSU after GATE: ₹8–14 LPA",
          },
        ],
      },
      {
        title: "Specialized Branches",
        icon: <Microscope size={18} strokeWidth={2} />,
        options: [
          {
            name: "Computer Science & AI",
            tag: "Highest Demand",
            examInfo: "CSE/AI is the most sought-after branch at JEE/BITSAT/state CETs. Getting CSE at IIT Bombay requires top 100 rank in JEE Advanced. Curriculum covers data structures, algorithms, machine learning, deep learning, databases, OS, computer networks, and software engineering. Most students supplement with competitive programming (LeetCode, Codeforces) and internships from 2nd year. IIT/IIIT CSE graduates are the most sought-after candidates by tech companies globally.",
            duration: "4 years B.Tech CSE or B.Tech AI/ML (newer specialization)",
            eligibility: "Via JEE Main / JEE Advanced / BITSAT / State CET. Higher rank required for CSE vs other branches.",
            topColleges: "IIT Bombay (CSE), IIT Delhi (CSE/AI), IIT Madras, IIT Hyderabad (AI/ML focus), IIIT Hyderabad (top for CS research), BITS Pilani.",
            jobRoles: [
              "Software Development Engineer (SDE) at FAANG — ₹40–100 LPA",
              "Machine Learning Engineer at AI companies globally",
              "Data Scientist at Zomato, PhonePe, CRED, fintech startups",
              "DevOps / Cloud Engineer at AWS, Google Cloud, Azure",
              "AI Research Scientist (PhD path at top global universities)",
              "Cybersecurity Analyst at CERT-In registered firms",
            ],
            avgSalary: "₹10–50 LPA in India; top packages ₹1–2 Cr at Google, Jane Street, DE Shaw",
          },
          {
            name: "Aerospace & Marine Engineering",
            tag: "Niche / Govt-heavy",
            examInfo: "Aerospace engineering is offered at IIT Bombay, IIT Madras, IIT Kanpur, IIST Thiruvananthapuram (fully funded by ISRO), and a few private universities. Marine engineering is offered at T.S. Chanakya Mumbai, IMU Chennai, and MERI Mumbai. Aerospace covers aerodynamics, propulsion, avionics, and spacecraft design. Marine covers ship design, naval architecture, and marine propulsion. Both are niche fields with government-dominated hiring — private sector is limited but emerging.",
            duration: "4 years B.Tech; IIST offers M.Tech integration",
            eligibility: "JEE Main/Advanced for IIT/NIT Aerospace; IIST has its own entrance (ISAT); IMU-CET for marine engineering.",
            topColleges: "IIT Bombay (Aerospace), IIT Madras, IIST Thiruvananthapuram (ISRO-funded), T.S. Chanakya Mumbai (marine), IMU Chennai.",
            jobRoles: [
              "Scientist / Engineer at ISRO (direct IIST recruitment)",
              "Design Engineer at HAL (Hindustan Aeronautics Limited)",
              "Naval Architect at Cochin Shipyard, Mazagon Dock",
              "Officer / Engineer in Indian Navy",
              "Aircraft Maintenance Engineer (AME license needed)",
              "Research at DRDO (Defence Research & Development Organisation)",
            ],
            avgSalary: "₹5–12 LPA government sector; ₹8–18 LPA private defence; ISRO scientists get ₹60K–1.5 L/month",
          },
          {
            name: "Petroleum & Robotics Engineering",
            tag: "Specialized",
            examInfo: "Petroleum Engineering is offered at IIT Dhanbad (ISM) — one of the oldest and most prestigious mining/petroleum schools in Asia — and University of Petroleum & Energy Studies (UPES Dehradun). Robotics as a standalone branch is newer — offered at IIT Bombay, IIIT Hyderabad, Manipal, VIT. Petroleum engineers work on oil extraction, reservoir management, refining, and energy systems. Robotics engineers work at the intersection of mechanical, electrical, and CS — designing automation systems for manufacturing, agriculture, healthcare.",
            duration: "4 years B.Tech Petroleum or B.Tech Robotics",
            eligibility: "JEE Main for IIT ISM Dhanbad; UPES has its own entrance; JEE/BITSAT for Robotics colleges at top institutes.",
            topColleges: "IIT (ISM) Dhanbad (Petroleum Engineering — gold standard), UPES Dehradun, IIT Bombay (Robotics electives), IIIT Hyderabad, Manipal Institute of Technology.",
            jobRoles: [
              "Petroleum Engineer at ONGC, Cairn India, Vedanta",
              "Reservoir Engineer at Shell, BP, ExxonMobil (international roles)",
              "Robotics Engineer at KUKA, ABB, Fanuc automation companies",
              "Automation Engineer at automotive plants (Maruti, Hyundai factories)",
              "R&D at DRDO (robotics division, autonomous vehicle systems)",
              "Drone Technology startups (booming sector in India post-2024 PLI scheme)",
            ],
            avgSalary: "Petroleum: ₹8–20 LPA India; international oil sector: ₹30–80 LPA. Robotics: ₹6–15 LPA; automation MNCs: ₹15–30 LPA",
          },
          {
            name: "Biotechnology Engineering",
            tag: "Emerging",
            examInfo: "Biotechnology Engineering blends biology, chemistry, and engineering principles. Offered at IIT Madras, IIT Kharagpur, IIT Roorkee, VIT, Manipal, and Amity. Core subjects: genetic engineering, cell biology, bioinformatics, biochemical engineering, immunology, fermentation technology, and drug formulation. This field rewards advanced degrees more — students often pursue M.Tech at IISERs or PhD abroad (US, Germany, UK) after B.Tech. India's biotech sector is growing at 15% CAGR, driven by pharma exports and vaccine manufacturing.",
            duration: "4 years B.Tech Biotechnology; M.Tech or PhD for advanced research roles",
            eligibility: "JEE Main/Advanced for IITs; BITSAT; state CETs; most private colleges via their own entrance tests.",
            topColleges: "IIT Madras (best in India), IIT Kharagpur, IIT Roorkee, VIT Vellore, Manipal Institute, SRM Chennai, Amity Noida.",
            jobRoles: [
              "Research Scientist at Cipla, Sun Pharma, Biocon, Dr. Reddy's",
              "Bioinformatics Analyst at genomics and precision medicine firms",
              "Quality Control / Regulatory Affairs Analyst in pharma",
              "Clinical Research Associate (CRA) at CROs like Covance, IQVIA",
              "Genetic Counsellor (with additional clinical training)",
              "Agricultural Biotechnology Specialist at Mahyco, Bayer Crop Science",
            ],
            avgSalary: "B.Tech fresher: ₹3–7 LPA; After M.Tech: ₹8–18 LPA; After PhD (abroad-returned): ₹20–50 LPA",
          },
        ],
      },
    ],
  },
  {
    name: "Medical & Healthcare Careers",
    icon: <Stethoscope size={28} strokeWidth={1.5} />,
    description: "A rapidly evolving domain combining medical science, research, and patient care, offering impactful and future-ready career opportunities.",
    accent: "#10B981",
    textAccent: "#6EE7B7",
    subcategories: [
      {
        title: "Traditional Medical",
        icon: <PlusSquare size={18} strokeWidth={2} />,
        options: [
          {
            name: "NEET-UG → MBBS",
            tag: "Medical Doctor",
            examInfo: "NEET-UG (National Eligibility cum Entrance Test) is the single gateway to all MBBS, BDS, BAMS seats in India. Conducted by NTA once a year (May). Covers Physics, Chemistry, and Biology (PCB) — 720 marks total, 3.5 hours, 200 questions (attempt 180). Over 20 lakh students compete for roughly 1.08 lakh MBBS seats (government + private combined). Government MBBS seats require top 10,000–15,000 rank; private MBBS costs ₹50 lakh–1 crore total over 5.5 years. After MBBS, doctors pursue MD/MS (3 years) for specialization via NEET-PG.",
            duration: "5.5 years (4.5 years MBBS + 1 year mandatory internship)",
            eligibility: "12th with PCB. Minimum 50% marks (40% for SC/ST/OBC). Age: 17 years minimum on 31 Dec of exam year. No upper age limit after Supreme Court ruling.",
            topColleges: "AIIMS New Delhi (#1 — 50 MBBS seats, extremely competitive), JIPMER Pondicherry, Maulana Azad Medical College Delhi, GMCH Chandigarh, AFMC Pune (Army Medical).",
            jobRoles: [
              "General Physician / Family Doctor (own clinic in tier-2/3 cities — very lucrative)",
              "Specialist after MD/MS — Cardiologist, Neurologist, Orthopaedic Surgeon, Radiologist",
              "Government Doctor at PHC/District Hospitals (UPSC CMS exam — ₹56,000–1.5 L/month)",
              "Medical Officer in Indian Army / Navy / Air Force (AFMC route)",
              "Researcher at ICMR, AIIMS research departments (MD + PhD path)",
              "Medical Superintendent / Hospital Director at Apollo, Fortis, Max",
            ],
            avgSalary: "Government MO: ₹70,000–1.2 L/month; Corporate hospitals post-MD: ₹1–3 L/month; Senior Specialist own practice: ₹3–15 L/month",
          },
          {
            name: "NEET-UG → BDS",
            tag: "Dental Surgeon",
            examInfo: "BDS (Bachelor of Dental Surgery) also uses NEET-UG scores. Around 27,000 BDS seats available — far less competitive than MBBS. NEET ranks from 10,000 to 1.5 lakh can get BDS in decent colleges. After BDS, students pursue MDS (Master of Dental Surgery — 3 years) for specialization in orthodontics, prosthodontics, oral surgery, periodontics, endodontics, etc. MDS requires clearing NEET-MDS. Government dental colleges charge ₹20,000–50,000/year; private colleges ₹3–8 lakh/year.",
            duration: "5 years (4 years BDS + 1 year mandatory rotatory internship)",
            eligibility: "Same as MBBS — NEET-UG qualification with PCB background and 50% in 12th.",
            topColleges: "Maulana Azad Institute of Dental Sciences Delhi, Nair Hospital Dental College Mumbai, Manipal College of Dental Sciences, SDM College of Dental Sciences Dharwad, King George's Medical University Lucknow.",
            jobRoles: [
              "Dental Surgeon — own private clinic (very high demand in urban areas)",
              "Government Dental Officer via state PSC exam",
              "Specialist after MDS — Orthodontist (highest demand), Oral Surgeon, Endodontist",
              "Dental Officer in Indian Army / CAPF",
              "Academic faculty at dental colleges (MDS + PhD path)",
              "Cosmetic Dentist at premium chains (Clove Dental, Sabka Dentist, Axiss Dental)",
            ],
            avgSalary: "Fresher: ₹30,000–80,000/month; After MDS specialist: ₹1–3 L/month; Own established clinic: ₹1–5 L/month",
          },
          {
            name: "AYUSH (BAMS / BHMS / BUMS)",
            tag: "Alternative Medicine",
            examInfo: "AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha, Homeopathy) courses are allotted through NEET-UG scores. BAMS (Bachelor of Ayurvedic Medicine & Surgery) and BHMS (Bachelor of Homeopathic Medicine & Surgery) are most popular. BUMS is for Unani Medicine. Government has allocated ₹3,000 crore to AYUSH Ministry. Post-COVID, demand for Ayurveda surged — Patanjali, Himalaya, Dabur, VLCC all expanded significantly. AYUSH practitioners can legally prescribe within their respective systems.",
            duration: "5.5 years including 1-year internship (BAMS/BHMS/BUMS)",
            eligibility: "NEET-UG qualifying. PCB background. Cutoffs significantly lower than MBBS/BDS, making it more accessible.",
            topColleges: "BHU Varanasi (BAMS — best in India), NIA Jaipur (National Institute of Ayurveda), Government Homeopathic Medical College Calicut, State Ayurveda Colleges in Kerala (gold standard globally for Ayurveda).",
            jobRoles: [
              "AYUSH Medical Officer in government dispensaries and hospitals (UPSC / State PSC)",
              "Own Ayurvedic / Homeopathic clinic (thriving in tier-2/3 cities)",
              "Product Formulation Scientist at Patanjali, Dabur, Himalaya, Baidyanath",
              "Wellness Consultant at yoga retreats, luxury hotels, wellness resorts",
              "Export market specialist (US, EU, and Southeast Asia markets for Ayurvedic products are rapidly growing)",
              "Panchakarma therapist — high demand in international wellness tourism",
            ],
            avgSalary: "Government AYUSH MO: ₹40,000–80,000/month; Private practice: highly variable; Product companies: ₹4–12 LPA",
          },
        ],
      },
      {
        title: "Allied Health Sciences",
        icon: <Pill size={18} strokeWidth={2} />,
        options: [
          {
            name: "Physiotherapy (BPT)",
            tag: "4.5 Years",
            examInfo: "Bachelor of Physiotherapy (BPT) does not require NEET in most states — separate entrance or direct merit-based admission on 12th PCB marks. Curriculum: musculoskeletal rehabilitation, neurological physiotherapy, cardiopulmonary physio, sports medicine, pediatric physio, and electrotherapy. Post-BPT, students pursue MPT (Master of Physiotherapy — 2 years) for specialization in sports, neuro, or cardio physio. Demand skyrocketed post-COVID due to respiratory and long-COVID rehabilitation needs. Sports physio is now a premium niche.",
            duration: "4.5 years (4 years + 6 months compulsory internship)",
            eligibility: "12th with PCB, minimum 50% marks. Some colleges require NEET qualification; others use 12th merit directly.",
            topColleges: "Manipal College of Allied Health Sciences, SRM Institute Chennai, Amrita Institute Coimbatore, CMC Vellore (MPT program), NIMHANS Bangalore, JSS College Mysore.",
            jobRoles: [
              "Physiotherapist at Apollo, Fortis, Max, Narayana Health hospitals",
              "Sports Physiotherapist with IPL teams, national sports bodies (NIS Patiala, SAI)",
              "Rehabilitation Specialist at neurological and orthopedic centers",
              "Home care physiotherapist (high-demand urban gig — ₹2,000–5,000/visit)",
              "Geriatric Care Physiotherapist (massively growing sector)",
              "Own physiotherapy clinic (low investment ₹3–5 lakh, very high ROI in cities)",
            ],
            avgSalary: "₹25,000–60,000/month at hospitals; Senior/Specialist: ₹70K–1.5 L/month; Own clinic: ₹50K–3 L/month",
          },
          {
            name: "Medical Lab Technology (MLT)",
            tag: "Diagnostics Backbone",
            examInfo: "B.Sc. MLT (Medical Lab Technology) or BMLT is a 3–4 year program. Covers clinical biochemistry, hematology, microbiology, histopathology, immunology, and blood banking. Admission through state-level exams or 12th PCB merit. Diagnostic labs (Thyrocare, SRL Diagnostics, Dr. Lal PathLabs, Metropolis) are rapidly expanding — over 1 lakh new lab technicians needed by 2025. Post-graduation via M.Sc. MLT adds research, teaching, and supervisory roles. NABL-accredited labs pay higher.",
            duration: "3 years (B.Sc. MLT) or 4 years (BMLT)",
            eligibility: "12th with PCB, minimum 45–50% marks. State-level counselling or direct college admission.",
            topColleges: "AIIMS paramedical department, CMC Vellore, JIPMER Pondicherry, Amrita Institute, Manipal, JSS Mysore, Government Medical Colleges (state-specific).",
            jobRoles: [
              "Lab Technician at government district hospitals (stable government job)",
              "Senior Technician at Dr. Lal PathLabs, Thyrocare, SRL (chain labs offer good growth)",
              "Blood Bank Technician at regional and hospital blood banks",
              "Quality Analyst at diagnostic reagent manufacturing companies",
              "Research Lab Assistant at medical research institutions and pharma companies",
              "Lab Manager / Chief Technician (with 5–8 years experience)",
            ],
            avgSalary: "Fresher: ₹18,000–40,000/month; Senior roles: ₹50K–1 L/month; Government labs: ₹35,000–70,000/month",
          },
          {
            name: "Radiology & Medical Imaging",
            tag: "Tech-based Medical",
            examInfo: "B.Sc. Radiology or BMRIT (Bachelor of Medical Radiology & Imaging Technology). 3–4 year program covering X-ray, CT scan, MRI, ultrasound, mammography, and fluoroscopy operation and maintenance. With AI entering radiology (AI-assisted CT reading tools), technologists who understand both imaging and data interpretation are in very high demand. Some students pursue post-graduation in cardiovascular technology, nuclear medicine, or MRI specialization. Certificate courses in Cath Lab technology add ₹20,000–40,000/month to earning potential.",
            duration: "3–4 years (B.Sc. Radiology / BMRIT)",
            eligibility: "12th with PCB or PCM (varies by college). State-level entrance or merit-based admission.",
            topColleges: "AIIMS Delhi, CMC Vellore, Manipal, JIPMER, SRM, Amrita, Kasturba Medical College Mangalore.",
            jobRoles: [
              "Radiographer at multi-specialty hospitals (every hospital needs them)",
              "CT / MRI Technologist (specialized roles with significantly higher pay)",
              "Cath Lab Technician (cardiac imaging — very high demand, premium pay)",
              "Nuclear Medicine Technologist at cancer hospitals, PET-CT centers",
              "Application Specialist / Clinical Trainer at GE Healthcare, Siemens Healthineers, Philips",
              "Radiology AI Support Technician (emerging role with AI companies)",
            ],
            avgSalary: "₹20,000–55,000/month generalist; Cath Lab / MRI specialist: ₹60K–1.5 L/month; GE/Siemens roles: ₹8–18 LPA",
          },
          {
            name: "Optometry",
            tag: "Eye Care",
            examInfo: "B.Optom (Bachelor of Optometry) is a 4-year degree focused on primary eye care — refraction, contact lens fitting, low vision aids, binocular vision therapy, and ocular disease management. In India, optometrists work alongside ophthalmologists. Globally (US, UK, Canada, Australia), optometrists are independent practitioners who can diagnose and treat most eye conditions without a physician. Growing demand is driven by rising myopia in youth (India has highest myopia prevalence globally among young adults), screen-time disorders, and an aging population.",
            duration: "4 years B.Optom + 1 year internship",
            eligibility: "12th with PCB or PCM. Entrance exams vary by college or state — merit-based.",
            topColleges: "LV Prasad Eye Institute Hyderabad (best in India), Sankara Nethralaya Chennai, Elite School of Optometry Chennai, Manipal College, Sarojini Devi Eye Hospital Hyderabad, Amrita Institute.",
            jobRoles: [
              "Clinical Optometrist at Vasan Eye Care, Dr. Agarwal's Eye Hospital, Sankara Nethralaya",
              "Retail Optician / Store Manager at Titan Eyeplus, Specsmakers, Lenskart (India's fastest-growing optical retail)",
              "Vision Therapist for children with amblyopia or convergence issues",
              "Contact Lens Specialist / Specialty Lens Fitter (orthokeratology, scleral lenses)",
              "Research Optometrist at eye hospitals and ophthalmic research organizations",
              "Migration to US / UK / Canada / Australia as licensed optometrist — very high income abroad",
            ],
            avgSalary: "India: ₹20K–60K/month; Established optometrist: ₹60K–1.2 L/month; US/UK-licensed optometrist: ₹60–120 L/year equivalent",
          },
        ],
      },
    ],
  },
  {
    name: "Commerce, Finance & Business",
    icon: <BarChart3 size={28} strokeWidth={1.5} />,
    description: "Comprehensive pathways spanning accounting, finance, and business leadership, from professional certifications to global corporate careers.",
    accent: "#F59E0B",
    textAccent: "#FCD34D",
    subcategories: [
      {
        title: "Professional Certifications",
        icon: <Award size={18} strokeWidth={2} />,
        options: [
          {
            name: "CA — Chartered Accountancy",
            tag: "ICAI — India's Top Finance Qual",
            examInfo: "India's most prestigious commerce qualification, governed by ICAI (Institute of Chartered Accountants of India). Three levels: Foundation (4-month prep after 12th), Intermediate (2 groups, cleared separately over 8–12 months), and Final (attempted after 2.5 years of articleship). Articleship is a mandatory 3-year practical training under a practicing CA. Pass rates are brutally low — Foundation ~30%, Intermediate ~10–15%, Final ~8–12%. Total typical duration: 4.5–5 years if first attempts go well. After passing all levels, you earn the 'CA' title — one of the most respected credentials in Indian finance.",
            duration: "4.5–5 years minimum from 12th",
            eligibility: "12th pass (any stream, Commerce preferred). Can attempt Foundation immediately after 12th results.",
            topColleges: "No college required — ICAI itself issues the qualification. Coaching from ICAI, Vijay Saar, Sripal Jain, VSI Jaipur, or YouTube resources. Articleship placement at Big 4 is extremely competitive.",
            jobRoles: [
              "Auditor / Partner at Big 4 (Deloitte, PwC, EY, KPMG) — India's highest-paying commerce roles",
              "Chief Financial Officer (CFO) at listed companies",
              "Tax Consultant — GST litigation, Income Tax, Transfer Pricing, International Tax",
              "Forensic Accountant / Fraud Investigator at consulting firms",
              "Investment Banker at financial institutions and NBFCs",
              "Independent Chartered Accountant — own practice (highest income potential with right clients)",
            ],
            avgSalary: "Big 4 fresher CA: ₹7–10 LPA; CFO-level: ₹50 L–5 Cr; Own successful practice: ₹30 L–2 Cr/year",
          },
          {
            name: "ACCA — Association of Chartered Certified Accountants",
            tag: "UK / Global Recognition",
            examInfo: "ACCA is a globally recognized accounting qualification from the UK. 13 exams across 3 levels: Applied Knowledge (3 exams — FA, MA, BT), Applied Skills (6 exams — FR, AA, FM, SBR, etc.), Strategic Professional (4 exams including optional papers). Can start after 12th or graduation. B.Com or CA Intermediate holders get significant exemptions — up to 9 papers waived. ACCA is especially strong for roles in Middle East (Dubai, Qatar — tax-free salaries), UK, Singapore, Ireland, and Canada. ACCA + CA dual qualification is one of the most powerful finance combinations.",
            duration: "2–4 years depending on exemptions and exam pace",
            eligibility: "12th pass minimum. B.Com / CA Intermediate holders get paper exemptions (reducing exam count).",
            topColleges: "Self-study with ACCA-registered tuition providers — Kaplan, BPP Learning Media (UK), IMS Proschool India, Zell Education Mumbai.",
            jobRoles: [
              "Finance Manager at MNCs in Dubai, Singapore, or UK (tax-free/high-income locations)",
              "Statutory Auditor at international audit firms (Grant Thornton, RSM, BDO)",
              "Financial Controller at global companies with India operations",
              "Management Accountant at Fortune 500 firms",
              "Tax Specialist for cross-border transactions and international trade",
            ],
            avgSalary: "India: ₹6–15 LPA; Dubai / Singapore: ₹25–60 LPA; UK: £35,000–80,000/year",
          },
          {
            name: "CFA — Chartered Financial Analyst",
            tag: "Investment Finance / Global",
            examInfo: "CFA by the CFA Institute (USA) is the world's most respected investment finance qualification. Three levels: Level 1 (offered quarterly), Level 2 (twice/year), Level 3 (once/year). Covers equity analysis, fixed income, derivatives, alternative investments, portfolio management, ethical standards, and economics. Global pass rate: Level 1 ~40%, Level 2 ~45%, Level 3 ~52%. After all 3 levels, you need 4,000 hours of relevant work experience to become a CFA Charterholder. Extremely valued in capital markets, wealth management, investment banking, and asset management globally.",
            duration: "2.5–4 years to complete all 3 levels (typically done alongside working)",
            eligibility: "Bachelor's degree OR final year student OR 4,000 hours of work experience in lieu of degree.",
            topColleges: "Self-study via CFA Institute curriculum. Indian coaching: IMS Proschool, Fintree Finance, Edupristine. Free resources on CFA Institute website.",
            jobRoles: [
              "Equity Research Analyst at Motilal Oswal, ICICI Securities, Edelweiss",
              "Portfolio Manager at AMCs — HDFC, SBI, Nippon, Mirae Asset Mutual Funds",
              "Investment Banker at Goldman Sachs, Morgan Stanley, Deutsche Bank India",
              "Risk Analyst at RBI, SEBI, large NBFCs",
              "Wealth Manager at private banks (Kotak Wealth, IIFL, Waterfield Advisors)",
              "Hedge Fund / PMS (Portfolio Management Service) Analyst",
            ],
            avgSalary: "₹8–18 LPA fresher; Senior Portfolio Manager: ₹50 L–2 Cr; Global AM/PE roles: $80,000–300,000",
          },
          {
            name: "FRM — Financial Risk Manager",
            tag: "Risk Management",
            examInfo: "FRM is awarded by GARP (Global Association of Risk Professionals, USA). Two-part exam covering market risk, credit risk, operational risk, liquidity risk, Basel III/IV regulations, and risk governance. Part 1 focuses on quantitative analysis, financial markets, and risk foundations. Part 2 covers advanced risk measurement, investment management, and risk in banks. Highly valued in banking (HDFC Bank, Axis, Citi, HSBC), insurance (LIC, IRDAI), and regulatory bodies (RBI, SEBI). Often pursued alongside an MBA Finance or CFA.",
            duration: "1–2 years (2 exams, each offered twice a year in May and November)",
            eligibility: "No specific educational requirement to attempt the exam, but finance/mathematics background is very helpful.",
            topColleges: "Self-study; GARP-authorized training providers in India: IMS Proschool, Edupristine, AnalystPrep.",
            jobRoles: [
              "Market Risk Analyst at HDFC Bank, Axis Bank, Citi India treasury",
              "Credit Risk Manager at NBFCs and Microfinance Institutions",
              "Operational Risk Officer at RBI-regulated entities",
              "Risk Consultant at Big 4 risk advisory practices",
              "Asset-Liability Management (ALM) Analyst at banks",
              "Compliance Officer and Risk Officer at financial institutions",
            ],
            avgSalary: "Fresher: ₹7–15 LPA; Senior Risk Manager (5 yrs): ₹25–60 LPA; International banking risk: $80,000–150,000",
          },
        ],
      },
      {
        title: "Management Paths",
        icon: <TrendingUp size={18} strokeWidth={2} />,
        options: [
          {
            name: "IPM — Integrated IIM Programme",
            tag: "Direct IIM after 12th",
            examInfo: "Integrated Programme in Management is a 5-year BBA+MBA directly at IIMs — no need for a separate MBA application years later. Entrance: IPMAT (IIM Indore — one of India's best; IIM Rohtak) and JIPMAT (IIM Jammu, IIM Bodh Gaya). IPMAT tests Quantitative Aptitude and Verbal Ability. After clearing IPMAT, students join the BBA component for 3 years, then automatically transition to the 2-year MBA without taking CAT. This means IIM MBA placement network access without the 2 years of mandatory work experience most CAT aspirants need. Placement average at IIM Indore IPM: ₹22–28 LPA.",
            duration: "5 years (3 years BBA + 2 years MBA at the same IIM)",
            eligibility: "12th with minimum 60% aggregate (55% for SC/ST). Age: maximum 20 years on July 31 of exam year.",
            topColleges: "IIM Indore (flagship IPM — most prestigious), IIM Rohtak, IIM Ranchi, IIM Jammu, IIM Bodh Gaya, IIM Sirmaur.",
            jobRoles: [
              "Management Consultant at McKinsey, BCG, Bain, Kearney, Deloitte",
              "Investment Banker at Goldman Sachs, JP Morgan, Morgan Stanley",
              "Product Manager at Google, Amazon, Flipkart, Razorpay",
              "Marketing Manager at HUL, P&G, Nestlé, ITC FMCG brands",
              "Startup Founder (strong IIM alumni and VC network)",
              "General Manager at top corporations (fast-track promotion cycle)",
            ],
            avgSalary: "IIM Indore IPM average placement: ₹22–28 LPA; Top packages: ₹60 L–1.5 Cr",
          },
          {
            name: "BBA / BMS",
            tag: "3-Year UG Management",
            examInfo: "Bachelor of Business Administration (BBA) or Bachelor of Management Studies (BMS) is a 3-year undergraduate management degree. Admission via DU JAT (Delhi University Joint Admission Test — for SRCC, Shaheed Sukhdev, JDMC — extremely competitive with 98–99% cutoffs), IPUCET (IP University Delhi), SET (Symbiosis Entrance Test — for Symbiosis Pune), and BHU UET. Curriculum: marketing, finance, HR, operations, entrepreneurship, business law, and analytics. After BBA, most students pursue MBA (CAT/XAT/SNAP/NMAT), CA, or directly enter corporate management trainee programs.",
            duration: "3 years",
            eligibility: "12th (Commerce stream preferred, but any stream accepted). DU JAT cutoffs are based on 12th marks — very high for top colleges.",
            topColleges: "SRCC Delhi (BMS — best in India), Shaheed Sukhdev College of Business Studies Delhi, Christ University Bangalore, Symbiosis Institute of Business Management Pune, NMIMS Mumbai.",
            jobRoles: [
              "Business Development Executive at tech or FMCG companies",
              "Marketing Analyst at consumer goods or digital marketing agencies",
              "HR Generalist / Recruitment Consultant",
              "Junior Financial Analyst at financial services firms",
              "Operations Executive at logistics and e-commerce companies",
              "Management Trainee at corporate fast-track programs (after MBA)",
            ],
            avgSalary: "Fresher BBA: ₹2.5–6 LPA; Top BMS colleges: ₹5–8 LPA; After MBA from premier institute: ₹15–30 LPA",
          },
          {
            name: "Digital Marketing",
            tag: "Skill-based / Fast Career Start",
            examInfo: "Digital Marketing is both a full degree (BBA in Digital Marketing at Amity, NMIMS, Symbiosis) and — more commonly — a certification-based career path that can be started right after 12th. Key certifications: Google Digital Marketing & E-commerce Certificate (free on Coursera), HubSpot Content Marketing (free), Meta Blueprint (social media ads), SEMrush SEO Toolkit course, Google Analytics 4 (GA4). Core skills: SEO, Google Ads (SEM), Social Media Marketing (Instagram, LinkedIn, Meta), Content Marketing, Email Marketing, Affiliate Marketing, and YouTube channel management. Freelancers can earn within 6–12 months of dedicated skill-building — often without a formal degree.",
            duration: "Certifications: 2–6 months; Full BBA Digital Marketing degree: 3 years",
            eligibility: "12th pass from any stream. No minimum percentage. Certifications have no age or education requirements.",
            topColleges: "Online: Google Career Certificates, HubSpot Academy, Coursera, Udemy, LinkedIn Learning. Degree: NMIMS Mumbai, Amity Noida, Symbiosis Pune, Christ University Bangalore.",
            jobRoles: [
              "SEO Specialist at digital agencies (every business needs SEO)",
              "Social Media Manager at brands, influencer management agencies",
              "Performance Marketing Manager — Google Ads, Meta Ads (highest paid specialization)",
              "Content Strategist / Head of Content at media companies and D2C brands",
              "Email Marketing Specialist at e-commerce and SaaS companies",
              "Freelance Digital Marketer / Own Digital Agency (lowest capital, high income potential)",
            ],
            avgSalary: "Fresher: ₹2.5–5 LPA; Performance marketing specialist (3 years): ₹10–20 LPA; Freelance: ₹50K–5 L/month (highly variable)",
          },
        ],
      },
    ],
  },
  {
    name: "Law, Design & Humanities",
    icon: <Scale size={28} strokeWidth={1.5} />,
    description: "Diverse career avenues focused on creativity, critical thinking, and societal impact through law, design, and interdisciplinary studies, enabling students to build meaningful careers.",
    accent: "#8B5CF6",
    textAccent: "#C4B5FD",
    subcategories: [
      {
        title: "Legal Studies",
        icon: <ScrollText size={18} strokeWidth={2} />,
        options: [
          {
            name: "CLAT — Common Law Admission Test",
            tag: "National Law Universities",
            examInfo: "CLAT is the single entrance for 24 National Law Universities (NLUs) across India. The exam covers English Language, Current Affairs & GK (40 questions — highest weightage), Legal Reasoning, Logical Reasoning, and Quantitative Techniques. 150 questions, 2 hours, 0.25 negative marking per wrong answer. Total UG seats: ~3,500 across all NLUs. NLSIU Bangalore and NALSAR Hyderabad require ranks under 50–100. After BA LLB (5 years), graduates enter practice, corporate law, or pursue LLM. NLU graduates are recruited aggressively by Tier-1 law firms like AZB, Cyril Amarchand Mangaldas, and Shardul Amarchand.",
            duration: "5 years (Integrated BA LLB) or 3 years (LLB after graduation)",
            eligibility: "12th with minimum 45% (40% for SC/ST). Any stream. Age: maximum 22 years for UG (removed upper limit recently — check current CLAT consortium notice).",
            topColleges: "NLSIU Bangalore (#1), NALSAR Hyderabad (#2), NUJS Kolkata (#3), NLU Delhi (AILET-based), NLU Jodhpur, GNLU Gandhinagar, NLU Odisha Cuttack.",
            jobRoles: [
              "Associate at Tier-1 law firms (AZB & Partners, Cyril Amarchand, Shardul Amarchand, S&R Associates — ₹12–20 LPA)",
              "Advocate at High Court or Supreme Court (building independent practice)",
              "Judicial Services Officer — Civil Judge (via state judiciary competitive exams)",
              "Legal Counsel / In-house lawyer at MNCs and listed companies",
              "Public Prosecutor / Government Pleader at state government",
              "Policy Analyst / Legislative Researcher at NITI Aayog, Parliament, law commissions",
              "LLM abroad (Harvard, Oxford, NYU, LSE — strong NLU alumni support for scholarships)",
            ],
            avgSalary: "Tier-1 law firm fresher: ₹12–20 LPA; Judicial Service: ₹77,000–1.2 L/month; Senior Supreme Court advocate: ₹1–10 Cr/year",
          },
          {
            name: "AILET — All India Law Entrance Test",
            tag: "NLU Delhi — Most Prestigious",
            examInfo: "AILET is conducted exclusively for NLU Delhi — India's most prestigious law school, consistently ranked #1 or #2. Only approximately 110 BA LLB seats are offered via AILET — making it among the most selective professional entrances in India. The exam covers English, General Knowledge & Current Affairs, Legal Aptitude, Reasoning, and Mathematics. 20,000+ applicants compete for 110 seats. NLU Delhi graduates are among the most sought-after by Tier-1 law firms, top corporates, and for LLM scholarships at global universities. The campus is in Dwarka, New Delhi.",
            duration: "5 years (BA LLB Integrated)",
            eligibility: "12th with 50% marks (SC/ST: 45%). Maximum age: 20 years on July 1 of exam year.",
            topColleges: "NLU Delhi is the only institution admitting students via AILET.",
            jobRoles: [
              "Associate at most elite law firms in India (highest NLU placement priority)",
              "Legal Associate at Goldman Sachs, JP Morgan, Citi India (in-house legal teams)",
              "Government Law Officer via Central Services or state PSC law examinations",
              "LLM at Harvard Law School, Oxford, LSE (strong alumni network helps)",
              "Policy Researcher at NITI Aayog, Ministry of Law & Justice",
              "Judge / Judicial Officer (after a few years of practice and qualifying judiciary exam)",
            ],
            avgSalary: "Tier-1 law firms: ₹15–22 LPA fresher; International LLM → global law firm associate: ₹50–120 LPA",
          },
        ],
      },
      {
        title: "Design & Fashion",
        icon: <Palette size={18} strokeWidth={2} />,
        options: [
          {
            name: "NID DAT — National Institute of Design",
            tag: "India's Top Design School",
            examInfo: "NID Design Aptitude Test has two stages: DAT Prelims (studio test + written sections testing design awareness, drawing, spatial ability) and DAT Mains (portfolio submission + in-person interview at NID). It does NOT test academic marks heavily — it tests your creative thinking, observation skills, ability to sketch ideas, and visual communication. Disciplines at NID: Product Design, Communication Design, Textile & Apparel Design, Ceramic & Glass Design, Film & Video Communication, Furniture & Interior Design, Toy & Game Design, and Animation Film Design. NID Ahmedabad is globally ranked among the top design schools.",
            duration: "4 years (B.Des — Graduate Diploma Programme in Design equivalent to Bachelor's)",
            eligibility: "12th pass from any stream. No minimum percentage required. Age: no strict upper limit. Portfolio of your artwork / designs is critical for Mains.",
            topColleges: "NID Ahmedabad (flagship — most sought after), NID Bengaluru (strong industrial design), NID Vijayawada, NID Jorhat, NID Amaravati.",
            jobRoles: [
              "Product Designer at Samsung Design, Apple (internationally), Tata Motors design studio",
              "UX/UI Designer at Zomato, Swiggy, Groww, CRED, Google India",
              "Brand Identity / Graphic Designer at design studios (Elephant Design, Happy mcgarrybowen, Lowe Lintas)",
              "Textile / Surface Designer at fashion and textile brands",
              "Animation Director at Pixar-pipeline studios, OTT content studios",
              "Industrial Designer at manufacturing companies, DRDO design labs",
              "Design Entrepreneur / Founding designer at product startups",
            ],
            avgSalary: "Fresher: ₹5–12 LPA; UX at top tech: ₹20–45 LPA; NID alumni internationally: $60,000–130,000/year",
          },
          {
            name: "NIFT Entrance Exam",
            tag: "Fashion Design",
            examInfo: "National Institute of Fashion Technology entrance has two components: Creative Ability Test (CAT — drawing, color, design thinking, 3-hour studio test) and General Ability Test (GAT — English, Quantitative Ability, Communication, Analytical Ability). Admission is based on combined CAT + GAT score + situation test (for design programs). NIFT offers 11 programs including Fashion Design, Textile Design, Knitwear Design, Leather Design, Accessory Design, Fashion Communication, Fashion Management, and Fashion Technology. 17 NIFT campuses across India. NIFT Delhi graduates are hired by Indian and international fashion houses.",
            duration: "4 years (UG B.Des / B.FTech) or 2 years (PG MFM / MFTech)",
            eligibility: "12th pass from any stream. No minimum percentage specified. Creative portfolio helps in situation tests.",
            topColleges: "NIFT Delhi (most sought after), NIFT Mumbai, NIFT Bengaluru, NIFT Chennai, NIFT Hyderabad, NIFT Kolkata.",
            jobRoles: [
              "Fashion Designer at Sabyasachi Mukherjee, Manish Malhotra, Anita Dongre, Fabindia",
              "Buyer / Merchandiser at H&M India, Zara, Marks & Spencer India",
              "Apparel Technologist / Export Merchandiser at garment export houses",
              "Fashion Stylist for Bollywood films, OTT series, celebrity styling",
              "Textile / Print Designer at fabric mills and home textiles brands",
              "Brand Manager at D2C fashion startups (Bewakoof, Snitch, The Souled Store)",
            ],
            avgSalary: "Fresher: ₹3–8 LPA; Senior Designer: ₹15–30 LPA; International fashion roles: $40,000–80,000",
          },
          {
            name: "UCEED — IIT Design Schools",
            tag: "IIT Design (Hardest Design Exam)",
            examInfo: "Undergraduate Common Entrance Exam for Design is conducted by IIT Bombay and is considered India's toughest design entrance. Admits students to B.Des at IIT Bombay, IIT Delhi, IIT Hyderabad, IIT Guwahati, and IISc Bangalore (new addition). Part A: computer-based (Numerical Answer Type, Multiple Select, MCQ — covering visualization, design sensibility, environmental and social awareness, analytical reasoning, communication design). Part B: in-person sketching and drawing test. Unlike NID, UCEED tests both technical reasoning and creative ability equally. IIT B.Des (IDC — Industrial Design Centre) is India's most prestigious design school with strong global alumni.",
            duration: "4 years (B.Des)",
            eligibility: "12th pass from any stream. Maximum 2 attempts. Should not have been born before October 1, 2000 (check latest UCEED brochure).",
            topColleges: "IIT Bombay IDC (Industrial Design Centre — most prestigious in India), IIT Delhi School of Design, IIT Hyderabad, IIT Guwahati.",
            jobRoles: [
              "Interaction / Experience Designer at Google, Microsoft, Atlassian, Flipkart",
              "Industrial Designer at Tata Design Studio, Mahindra Advanced Design Europe",
              "UX Researcher at tech companies and management consulting firms",
              "Design Lead / Head of Design at funded product startups",
              "Human-Computer Interaction researcher at academic institutions",
              "Design Consultant at global firms (IDEO, Frog Design, Fjord)",
            ],
            avgSalary: "IIT B.Des fresher: ₹10–25 LPA; Global design roles (US/Europe): $70,000–180,000/year",
          },
        ],
      },
      {
        title: "Liberal Arts",
        icon: <Globe size={18} strokeWidth={2} />,
        options: [
          {
            name: "Interdisciplinary Liberal Arts",
            tag: "NEP Aligned / Global Master's Path",
            examInfo: "Liberal arts universities allow students to mix majors across disciplines — e.g., Economics + Data Science + Philosophy, Political Science + Psychology + Creative Writing. Top institutions use their own essays + interviews + SAT/ACT for admission. Ashoka University (Sonipat) is India's closest equivalent to a US liberal arts college — alumni include Rhodes Scholars and Harvard/Oxford admits. FLAME University (Pune), OP Jindal Global University (Sonipat), Azim Premji University (Bengaluru), and Krea University (Sri City, AP) offer similar interdisciplinary programs. These degrees are especially strong for students planning global master's degrees or civil services.",
            duration: "4 years (BA/BSc Liberal Arts or Humanities & Social Sciences under NEP 2020)",
            eligibility: "12th from any stream. College-specific essay/interview process. Ashoka requires strong academic profile + leadership portfolio.",
            topColleges: "Ashoka University Sonipat, FLAME University Pune, OP Jindal Global University, Krea University Sri City, Azim Premji University Bengaluru, Shiv Nadar University.",
            jobRoles: [
              "Policy Analyst at NITI Aayog, World Bank India, UN Development Programme",
              "Investigative Journalist / Editor at The Hindu, Indian Express, Wire, Scroll",
              "Civil Services Officer — IAS/IPS/IFS (liberal arts is excellent UPSC preparation)",
              "Data / Business Analyst (if combined with statistics or economics major)",
              "Management Consultant (after MBA from premier institutes — liberal arts + MBA is a powerful combo)",
              "Social Entrepreneur at development sector organizations and NGOs",
              "Academic Researcher / PhD at global universities",
            ],
            avgSalary: "Fresher: ₹4–10 LPA; After MBA / Civil Services: ₹15–50 LPA; IAS Officer: ₹56,000–2.5 L/month + perks + pension",
          },
        ],
      },
    ],
  },
  {
    name: "Vocational & Skill-Based Careers",
    icon: <Plane size={28} strokeWidth={1.5} />,
    description: "Practical, industry-focused pathways across defence, aviation, and technical trades designed for early career entry, hands-on experience, and strong job readiness.",
    accent: "#EF4444",
    textAccent: "#FCA5A5",
    subcategories: [
      {
        title: "Maritime & Aviation",
        icon: <Ship size={18} strokeWidth={2} />,
        options: [
          {
            name: "Merchant Navy (IMU-CET)",
            tag: "Highest-Paying After 12th",
            examInfo: "Indian Maritime University Common Entrance Test (IMU-CET) is for B.Sc. Nautical Science, B.Tech Marine Engineering, B.Sc. Ship Building & Repair, and other maritime programs. ~8,000 seats at 14 IMU campuses + affiliated maritime academies. Top private institutes: T.S. Chanakya Mumbai (most prestigious), LBS College Mumbai, MERI Mumbai. Medical fitness standards are strict — perfect colour vision (except for certain engine roles), good eyesight, height minimum (varies), and swimming ability required. Once onboard, seafarers work 4–6 months at sea then take equivalent shore leave — meaning they earn while onboard and effectively get 6 months vacation. Tax benefits on sea income under Indian tax law.",
            duration: "3–4 years degree + mandatory pre-sea training + 18 months sea service for Certificate of Competency",
            eligibility: "12th with PCM (Physics, Chemistry, Math) — English mandatory. Medical fitness per DG Shipping standards. Age: 17–25 years depending on program.",
            topColleges: "T.S. Chanakya Mumbai (Deck Cadets — most prestigious), LBS College Mumbai, MERI Mumbai, IMU Chennai, IMU Kolkata, SCI Training Institute.",
            jobRoles: [
              "Deck Officer (Navigating Officer) — progression: 3rd Officer → 2nd → Chief → Captain",
              "Marine Engineer — 4th Engineer → 3rd → 2nd → Chief Engineer",
              "Port Captain / Marine Pilot at major ports (JNPT, Mundra, Chennai, Vizag)",
              "Marine Surveyor at Lloyd's Register, Bureau Veritas, DNV (Classification Societies)",
              "Shipping Company Operations Manager (senior shore-based management after 10 years sea service)",
              "Harbor Master at Port Trust authorities",
            ],
            avgSalary: "Junior Officer: $2,000–4,500/month tax-free at sea; Captain: $8,000–18,000/month; Shore-based senior management: ₹15–50 LPA",
          },
          {
            name: "Commercial Pilot License (CPL)",
            tag: "Airline Pilot",
            examInfo: "CPL is issued by DGCA (Directorate General of Civil Aviation, India). Requires completing ground school for 9 technical subjects (Air Regulations, Navigation, Meteorology, Aircraft Technical General, Aircraft Technical Specific, Aviation Meteorology, Principles of Flight, RTR-A Radio Telephony, Human Performance) and 200 hours total flying time (solo, cross-country, instrument, night flying). Approved Flying Training Organisations (FTOs): IGRUA Raebareli (government — cheapest at ₹35–40 lakh), Bombay Flying Club, CAE Oxford Aviation Academy India (Gondia), Indira Aviation Academy (Nashik). Total cost: ₹40–70 lakh for full CPL with Multi-Engine and Instrument Rating. IndiGo alone has 300+ aircraft on order and needs thousands of pilots through 2030.",
            duration: "2–3 years (ground school + flying hours + DGCA written and oral exams)",
            eligibility: "12th with Physics AND Mathematics (mandatory). Minimum 50% aggregate. Medical Class 1 fitness mandatory (DGCA Class 1 Medical — strict on eyes, heart, colour vision).",
            topColleges: "IGRUA Raebareli (government, most affordable), Bombay Flying Club Mumbai, CAE Oxford Aviation India (Gondia), Indira Aviation Academy Nashik, Blue Bird Aviation Amritsar.",
            jobRoles: [
              "First Officer (Co-pilot) at IndiGo, Air India, SpiceJet, Akasa Air — ₹1.5–3.5 L/month",
              "Captain after accumulating 3,000–5,000 flight hours — ₹4–8 L/month",
              "Cargo Pilot at Blue Dart, FedEx India, SpiceXpress",
              "Corporate / Charter Pilot for private aviation (HNI clients, corporate jets)",
              "Flight Instructor at flying schools (can earn while building hours)",
              "Indian Air Force Combat/Transport Pilot via AFCAT exam (defence service route)",
            ],
            avgSalary: "First Officer: ₹1.5–3.5 L/month; Captain: ₹4–10 L/month; International airline captain: ₹12–25 L/month",
          },
        ],
      },
      {
        title: "Govt & Defence",
        icon: <Shield size={18} strokeWidth={2} />,
        options: [
          {
            name: "NDA & NA Exam (UPSC)",
            tag: "Armed Forces After 12th",
            examInfo: "National Defence Academy (NDA) and Naval Academy (NA) entrance exam is conducted by UPSC twice a year — April (result December) and September (result May). Written exam: Mathematics (300 marks — Calculus, Algebra, Trigonometry, Matrices, Statistics) and General Ability Test (600 marks — English 200 + GK 400 covering Physics, Chemistry, General Science, History, Geography, Current Affairs). Then SSB (Services Selection Board) — a 5-day psychological and physical assessment (Officer Intelligence Rating, psychological tests, GTO group tasks, personal interview) at Allahabad, Bhopal, Bangalore, Mysore, or Kapurthala. ~400 seats: 208 Army, 42 Navy, 120 Air Force. Girls are now eligible post-2022 Supreme Court order.",
            duration: "3 years NDA training at Khadakwasla Pune + 1 year pre-commissioning training at respective academy (IMA/INS/AFA)",
            eligibility: "12th (PCM mandatory for Navy/Air Force; any stream for Army). Age: 16.5 to 19.5 years on first day of course. Unmarried at time of joining.",
            topColleges: "NDA Khadakwasla Pune (training). Subsequently: Indian Military Academy Dehradun (Army), INS Zamorin Ezhimala Kerala (Navy), Air Force Academy Hyderabad (Air Force).",
            jobRoles: [
              "Army Officer — Lieutenant → Captain → Major → Colonel → Brigadier → General (lifelong career with pension)",
              "Naval Officer — Sub-Lieutenant → Lieutenant → Commander → Captain → Admiral",
              "Air Force Pilot / Navigator / Ground Duty Officer (Education, Logistics, Technical branches)",
              "Post-retirement at 54 years: Defence PSU roles at HAL, BEL, DRDO, Ordnance Factories",
              "Security Consultant and Director at private security firms",
              "Civil Services (many ex-officers crack UPSC Civil Services post-retirement for second career)",
            ],
            avgSalary: "Lieutenant: ₹56,100/month + Military Service Pay + DA + HRA + ration allowance; Colonel: ₹1.3 L/month + all perks; Full pension for life after 20 years service",
          },
          {
            name: "SSC CHSL — Combined Higher Secondary Level",
            tag: "Central Government Jobs",
            examInfo: "Staff Selection Commission Higher Secondary Level exam is for 12th-pass students wanting central government jobs. Four post types: Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), Postal Assistant / Sorting Assistant (PA/SA), and Data Entry Operator (DEO). Three-tier selection: Tier 1 (Computer-based — 100 questions in 60 minutes: General Intelligence & Reasoning 25 + General Awareness 25 + Quantitative Aptitude 25 + English Language 25), Tier 2 (Descriptive paper — Essay 200 words + Letter/Application 150 words, 60 minutes), Tier 3 (Skill/Typing test based on post). Government job with 7th Pay Commission benefits, allowances, and job security for life.",
            duration: "Exam preparation: 6–12 months. Secure government job for life thereafter.",
            eligibility: "12th pass from any stream/board. Age: 18–27 years (SC/ST: 5 years relaxation, OBC: 3 years, Ex-servicemen: 3 years extra).",
            topColleges: "No college needed — self-study or coaching institutes (SSC Pinnacle, Paramount, Career Power, Unacademy SSC).",
            jobRoles: [
              "Lower Division Clerk at central government ministries (Home, Finance, External Affairs, etc.)",
              "Postal Assistant at India Post circles across India",
              "Data Entry Operator at CGDA (Controller General of Defence Accounts), NIC (National Informatics Centre)",
              "Junior Secretariat Assistant at Parliament or Secretariat",
              "Promotions over years: LDC → UDC → Assistant Section Officer (requires departmental exams)",
            ],
            avgSalary: "Starting in-hand: ₹19,900–25,500/month + DA + HRA + Medical + LTC; After 10 years with promotions: ₹35,000–55,000/month; Pension after retirement",
          },
        ],
      },
      {
        title: "Vocational / Technical",
        icon: <Wrench size={18} strokeWidth={2} />,
        options: [
          {
            name: "ITI Certificates",
            tag: "Immediate Employment",
            examInfo: "Industrial Training Institutes (ITIs) offer NCVT (National Council for Vocational Training) and SCVT-certified courses. Over 15,000 ITIs across India (government + private) with 130+ trade options. Popular trades: Electrician (2 years — most in demand), Fitter (2 years — for machine shops), Welder (1 year — very high demand in shipbuilding, construction), COPA (Computer Operator & Programming Assistant — 1 year), Plumber (1 year), Refrigeration & Air Conditioning Mechanic (2 years), Mechanic Motor Vehicle / Two Wheeler (1–2 years), Draughtsman Civil/Mechanical (2 years). Government ITIs charge only ₹1,000–5,000 total fees. After ITI, students can appear for Apprenticeship Act training at PSUs — BHEL, ONGC, Railways, Ordnance Factories.",
            duration: "1–2 years depending on trade",
            eligibility: "8th or 10th pass depending on trade (some require only 8th pass). No entrance exam for most states — admission via 10th marks merit list.",
            topColleges: "Government ITIs are best — Government ITI Mumbai (Bandra/Dadar), Government ITI Delhi (multiple), Government Polytechnic & ITI Kolkata. Central Government ITIs (under Ministry of Labour) are highly regarded.",
            jobRoles: [
              "Electrician at factories, construction companies, real estate firms (very high demand — chronic shortage of skilled electricians in India)",
              "Automobile Mechanic at Maruti, Hyundai, Tata Motors, Hero authorized service centers",
              "Welder at Mazagon Dock, Cochin Shipyard, L&T Heavy Engineering",
              "HVAC Technician at Blue Star, Voltas, Daikin, Carrier service centres",
              "Computer Operator (COPA) at government offices, banks, BPOs",
              "Self-employed plumber or electrician in urban areas (extremely high demand, own-time, ₹1,000–5,000/day)",
              "Apprentice at PSUs (BHEL, NTPC, ONGC, Railways — pathway to permanent government technician job)",
            ],
            avgSalary: "Starting: ₹12,000–25,000/month; Skilled senior (5 years): ₹30,000–60,000/month; Self-employed skilled tradesperson in metro cities: ₹60K–2 L/month",
          },
          {
            name: "Polytechnic Diploma",
            tag: "3-Year Engineering Diploma",
            examInfo: "Polytechnic Diploma programs are 3-year engineering diplomas after 10th standard. Some states also admit 12th students directly. Entrance exams: JEECUP (Uttar Pradesh — largest), POLYCET (Andhra Pradesh / Telangana), Delhi CET, Jharkhand PECE, Kerala POLYCET, DTE Maharashtra CET. Branches available: Civil Engineering, Mechanical Engineering, Electrical Engineering, Electronics & Communication, Computer Science, Automobile Engineering, Chemical Engineering, Pharmacy. The biggest advantage of polytechnic: Lateral Entry — diploma holders can directly join B.Tech in 2nd year via LEET (Lateral Entry Entrance Test) or state-specific lateral entry process, saving 1 year and significant fees compared to standard 4-year B.Tech. Government polytechnics charge ₹10,000–30,000/year — extremely affordable.",
            duration: "3 years (after 10th); Lateral entry saves 1 year to complete full B.Tech",
            eligibility: "10th pass (for post-10th admission) or 12th PCM (for direct entry in some states). State-level entrance exams. No minimum percentage in most states.",
            topColleges: "Government Polytechnic Mumbai (GPA — one of India's oldest), BTE Delhi affiliated colleges, YCET Kadapa (AP), Madras Polytechnic College Chennai, Sri Krishna Polytechnic Coimbatore, Government Polytechnic Pune.",
            jobRoles: [
              "Junior Engineer (JE) at state PWD, CPWD, Jal Board (via SSC JE exam or state JE exam)",
              "Technician Grade at BHEL, NTPC, Indian Railways (via Railway RRB exams — diploma eligibility)",
              "Site Engineer / Supervisor at construction companies (very high demand across India)",
              "CAD Design Technician at manufacturing and infrastructure firms",
              "Computer Hardware / Networking Technician at IT service companies",
              "Lateral entry B.Tech → same employment market as full B.Tech graduate",
              "Government Polytechnic Lecturer (after M.Tech + 2 years experience)",
            ],
            avgSalary: "Fresher diploma: ₹15,000–30,000/month; JE in government: ₹35,000–60,000/month; After lateral entry B.Tech: ₹4–12 LPA",
          },
        ],
      },
    ],
  },
  {
    name: "Undergraduate Pathways (NEP 2020)",
    icon: <Landmark size={28} strokeWidth={1.5} />,
    description: "Flexible degree structures with multidisciplinary learning, research opportunities, and multiple entry-exit options under India's National Education Policy.",
    accent: "#06B6D4",
    textAccent: "#67E8F9",
    subcategories: [
      {
        title: "NEP 2020 Key Features",
        icon: <ClipboardList size={18} strokeWidth={2} />,
        options: [
          {
            name: "4-Year UG Honours with Research",
            tag: "New Standard Degree",
            examInfo: "Under NEP 2020, the standard undergraduate degree is now 4 years (replacing the old 3-year General degree system). The 4th year involves a research dissertation, project, or specialization. Students who complete 4 years with research (FYUP — Four Year Undergraduate Programme) can apply directly for PhD admission without a mandatory 2-year master's degree. This saves 2 years and lakhs of rupees. Delhi University, BHU, Jamia Millia, Panjab University, and most central universities already implement FYUP. Admission to most central universities now via CUET (Common University Entrance Test) by NTA — a single national exam replacing individual university entrance tests.",
            duration: "4 years (standard), with optional 5th year for master's integrated",
            eligibility: "12th pass. CUET scores required for central universities (NTA-conducted, ~14 lakh applicants yearly for ~2 lakh seats). State universities may use state-level entrance or merit.",
            topColleges: "Delhi University colleges (Miranda House, Lady Shri Ram, Hindu College, St. Stephen's, SRCC), BHU Varanasi, JNU New Delhi, Hyderabad Central University, Jamia Millia Islamia, University of Hyderabad.",
            jobRoles: [
              "Direct PhD path (skip master's — save 2 years and ₹3–10 lakh in fees)",
              "Research Associate at IISc Bangalore, TIFR Mumbai, NCBS Bangalore, IITs",
              "Government research labs via CSIR-NET / GATE exam (CSIR, DBT, DST funded positions)",
              "Academic Faculty (after PhD — Assistant Professor: ₹57,000–1.44 L/month 7th Pay Commission)",
              "Industry R&D at pharmaceutical, biotech, materials, or social science research companies",
            ],
            avgSalary: "PhD stipend: ₹25,000–37,000/month (CSIR/UGC fellowship); Post-PhD faculty: ₹57,000–1.5 L/month; Industry R&D: ₹8–25 LPA",
          },
          {
            name: "Multiple Entry / Exit Points",
            tag: "Flexible Degrees",
            examInfo: "NEP 2020 introduces a groundbreaking credit-based exit framework that eliminates the concept of 'dropout.' A student who exits after 1 year receives a UG Certificate. After 2 years: UG Diploma. After 3 years: Bachelor's Degree (standard). After 4 years: Bachelor's with Honours or Research. Crucially, students can exit and re-enter within 7 years from the same or a different university, using the Academic Bank of Credits (ABC) to preserve earned credits. This system removes the social stigma of leaving college mid-way due to financial difficulties, health issues, family circumstances, or entrepreneurship opportunities. Students who start a business and leave in year 2 don't lose their 2 years of work — they carry a Diploma and can return later.",
            duration: "Flexible: 1 to 4 years",
            eligibility: "Any student enrolled at an NEP-implementing institution with valid ABC registration.",
            topColleges: "All NAAC A++ and A+ rated universities implementing NEP 2020 — Delhi University, BHU, BITS, Manipal, IITs (via their own frameworks), all state universities progressively.",
            jobRoles: [
              "After 1 year (Certificate): entry-level vocational/technical jobs, bridge to further study",
              "After 2 years (Diploma): technical and para-professional roles in most industries",
              "After 3 years (Bachelor's): standard graduate employment across all sectors",
              "After 4 years (Honours): research, specialized professional roles, direct PhD eligibility",
            ],
            avgSalary: "Entirely depends on level achieved and field of study — ranges from ₹1.5 LPA (1-year certificate) to ₹30+ LPA (4-year honours in premium field from top institution)",
          },
          {
            name: "Academic Bank of Credits (ABC)",
            tag: "Digital Credit Storage",
            examInfo: "The Academic Bank of Credits is India's national digital credit repository — think of it as a 'savings account' for your academic credits. Every time a student completes a course or module at any recognized institution, their earned credits are deposited in their ABC account. Students can then transfer these credits when changing universities, combine credits from multiple institutions, or pause studies and resume without losing progress. ABC also accepts credits from online courses on SWAYAM (India's national MOOC platform), NPTEL (IIT courses online), CEC, IGNOU, and foreign university credit transfers. Managed by NAD (National Academic Depository), linked to DigiLocker and Aadhaar. This enables India's most flexible UG education system ever.",
            duration: "Lifelong credit validity (7-year re-entry window per academic cycle)",
            eligibility: "Any student registered at an ABC-linked institution. Over 800 universities already registered with ABC as of 2024.",
            topColleges: "ABC is institution-independent — it works across all 800+ ABC-registered universities. SWAYAM/NPTEL courses from IITs are particularly well-recognized by employers and universities.",
            jobRoles: [
              "Enables multi-institution qualification — gaining credentials from IIT NPTEL + your local college simultaneously",
              "IIT Madras NPTEL certificates are increasingly accepted by top employers as skill proof",
              "Facilitates upskilling while employed — earn formal college credits without full-time enrollment",
              "Supports international credit transfer for global master's programs",
            ],
            avgSalary: "Indirectly enhances employability — specific salary impact depends on credentials accumulated via ABC",
          },
          {
            name: "Anusandhan Research Foundation (ANRF)",
            tag: "₹50,000 Crore Research Fund",
            examInfo: "The Anusandhan National Research Foundation was established by Parliament via the ANRF Act 2023 with a massive ₹50,000 crore corpus over 5 years — ₹10,000 crore per year. It funds research across natural sciences, mathematics, engineering, technology, health sciences, and humanities/social sciences at all Indian universities and research institutions. Modeled after the US NSF (National Science Foundation), ANRF bridges India's historically large gap between private sector R&D spending and academic research output. Students at UG/PG/PhD level can access ANRF-funded projects through their institutions' research programs. India aims to raise its Gross Expenditure on R&D (GERD) from 0.7% to 2% of GDP by 2030 — ANRF is central to this plan.",
            duration: "Ongoing annual funding — grants and fellowships awarded throughout the year",
            eligibility: "UG students (for research internship programs), PG and PhD students (for research fellowships), Faculty (for independent project grants) at ANRF-recognized institutions.",
            topColleges: "IITs, IISc, IISERs (Indian Institutes of Science Education and Research — Pune, Kolkata, Mohali, Bhopal, Thiruvananthapuram), NITs, AIIMS, and selected state and central universities are primary ANRF partners.",
            jobRoles: [
              "Research Fellow → Senior Research Fellow → Principal Investigator (PI) at funded research labs",
              "Scientist at CSIR-funded laboratories (NCL Pune, IICT Hyderabad, IGIB Delhi, etc.)",
              "Technology Transfer Specialist at university technology transfer offices",
              "Innovation Consultant / Startup Founder via ANRF-supported incubators",
              "Faculty Researcher with significant industry collaboration and grant income",
              "International Research Collaboration roles (ANRF has bilateral agreements with NSF, EU Horizon, etc.)",
            ],
            avgSalary: "UG Research Intern stipend: ₹8,000–15,000/month; PhD Fellow: ₹31,000–58,000/month; Senior Scientist: ₹1–2.5 L/month; Industry-collaborative research PI: ₹25–60 LPA",
          },
        ],
      },
    ],
  },
];

