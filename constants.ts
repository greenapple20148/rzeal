
import { Job, Testimonial } from './types';

export const FEATURED_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Engineer',
    company: 'TechFlow Systems',
    location: 'San Francisco, CA',
    type: 'Remote',
    salary: '$160k - $210k',
    category: 'Engineering',
    description: 'Lead the development of our next-gen SaaS platform using React and TypeScript.',
    postedDate: '2 days ago'
  },
  {
    id: '2',
    title: 'Marketing Director',
    company: 'BrightStar Media',
    location: 'New York, NY',
    type: 'Hybrid',
    salary: '$140k - $180k',
    category: 'Marketing',
    description: 'Drive growth and brand strategy for a fast-paced digital media agency.',
    postedDate: '1 week ago'
  },
  {
    id: '3',
    title: 'Nurse Practitioner',
    company: 'CityCare Health',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$120k - $155k',
    category: 'Healthcare',
    description: 'Provide exceptional patient care in a modern, multidisciplinary clinic environment.',
    postedDate: '3 days ago'
  },
  {
    id: '4',
    title: 'Financial Analyst',
    company: 'RZeal Finance',
    location: 'Charlotte, NC',
    type: 'Full-time',
    salary: '$90k - $125k',
    category: 'Finance',
    description: 'Support investment decisions through deep data analysis and market research.',
    postedDate: 'Today'
  },
  {
    id: '5',
    title: 'UX/UI Designer',
    company: 'Creative Pulse',
    location: 'Austin, TX',
    type: 'Remote',
    salary: '$110k - $150k',
    category: 'Design',
    description: 'Design intuitive interfaces for award-winning mobile applications.',
    postedDate: '5 days ago'
  },
  {
    id: '6',
    title: 'Data Scientist',
    company: 'Insight Logic',
    location: 'Boston, MA',
    type: 'Hybrid',
    salary: '$150k - $190k',
    category: 'Engineering',
    description: 'Build predictive models to solve complex business problems.',
    postedDate: 'Yesterday'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "VP of People, InnovateCo",
    content: "RZeal has transformed our hiring process. They don't just find candidates; they find the right cultural fit with incredible speed.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Senior Developer",
    content: "The easiest job search I've ever had. My recruiter understood my technical niche perfectly.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const COMPANY_VALUES = [
  {
    title: "Precision Matching",
    desc: "We use AI-driven insights to ensure every placement is a long-term success.",
    icon: "fa-bullseye"
  },
  {
    title: "Radical Transparency",
    desc: "Clear communication between candidates and employers at every single stage.",
    icon: "fa-eye"
  },
  {
    title: "Global Reach",
    desc: "Our network spans continents, finding the best talent regardless of borders.",
    icon: "fa-globe"
  },
  {
    title: "Human First",
    desc: "Behind every resume is a person. We prioritize relationships over transactions.",
    icon: "fa-heart"
  }
];

export const HIRING_PROCESS = [
  { step: "01", title: "Discovery", desc: "We deep dive into your company culture and technical requirements." },
  { step: "02", title: "Sourcing", desc: "Our AI-powered engine identifies the top 1% of passive and active talent." },
  { step: "03", title: "Vetting", desc: "Rigorous technical and behavioral screening by our industry experts." },
  { step: "04", title: "Placement", desc: "Seamless onboarding and follow-up to ensure long-term success." }
];

export const LEADERSHIP = [
  { name: "Elena Rodriguez", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" },
  { name: "David Chen", role: "CTO", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400" },
  { name: "Sophia Walsh", role: "Head of Talent", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400" }
];

export const MILESTONES = [
  { year: "2018", title: "The Beginning", desc: "RZeal founded in San Francisco with a mission to humanize staffing." },
  { year: "2020", title: "Global Expansion", desc: "Opened London and Singapore hubs to support international tech growth." },
  { year: "2022", title: "AI Revolution", desc: "Launched our proprietary talent-matching AI, Co-pilot 1.0." },
  { year: "2024", title: "Market Leader", desc: "Named #1 Tech Staffing Agency for diversity and retention." }
];

export const LOCATIONS = [
  { city: "San Francisco", region: "Americas", role: "Global HQ" },
  { city: "New York", region: "Americas", role: "Finance Hub" },
  { city: "London", region: "EMEA", role: "European HQ" },
  { city: "Singapore", region: "APAC", role: "APAC Hub" }
];

export const LEGAL_CONTENT = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "June 15, 2024",
    sections: [
      {
        heading: "1. Information We Collect",
        content: "We collect personal information including but not limited to your name, contact details, employment history, and professional skills when you apply for roles or join our Talent Network. This may include data from third-party sources like LinkedIn with your consent."
      },
      {
        heading: "2. How We Use Your Data",
        content: "Your data is used to match you with potential employment opportunities using our proprietary AI algorithms. We also use it to communicate with you about career advice, interview preparations, and relevant job alerts."
      },
      {
        heading: "3. AI Processing and Matching",
        content: "RZeal utilizes the Gemini AI model to assist in analyzing resumes and optimizing job matches. This process is always overseen by human recruiters to ensure fairness and accuracy. Your data is processed in accordance with strict security standards."
      }
    ]
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "June 15, 2024",
    sections: [
      {
        heading: "1. Agreement to Terms",
        content: "By accessing the RZeal Staffing website or utilizing our services, you agree to be bound by these Terms of Service. If you do not agree, please refrain from using the platform."
      },
      {
        heading: "2. Candidate Obligations",
        content: "Candidates represent that all information provided in resumes and profiles is accurate and truthful. Providing misleading information may result in removal from our Talent Network and termination of any placed roles."
      },
      {
        heading: "3. Employer Obligations",
        content: "Employers using our platform agree to adhere to all local labor laws and provide a safe, non-discriminatory environment for any talent placed through RZeal."
      }
    ]
  },
  cookies: {
    title: "Cookie Policy",
    lastUpdated: "June 15, 2024",
    sections: [
      {
        heading: "1. What are Cookies?",
        content: "Cookies are small text files stored on your device that help us improve your browsing experience. We use them to remember your preferences (like Dark Mode) and analyze site traffic."
      },
      {
        heading: "2. Types of Cookies We Use",
        content: "Essential cookies are required for site security and functionality. Analytical cookies help us understand how users interact with our job boards and Career Co-pilot assistant."
      }
    ]
  }
};
