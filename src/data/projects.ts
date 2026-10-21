// ✏️ EDIT ME — sample entries. Update status, links, and descriptions to match your real work.
export type ProjectStatus = 'Planned' | 'In progress' | 'Completed'
export interface Project {
  id: string; title: string; category: 'AI / ML' | 'Web' | 'Security' | 'Sustainability'
  summary: string; problem: string; features: string[]; tech: string[]
  status: ProjectStatus; repo: string; demo?: string; hue: number
}

export const projects: Project[] = [
  {
    id: 'virtual-try-on', title: 'AI Virtual Try-On System', category: 'AI / ML', hue: 270,
    summary: 'Preview clothing on a photo of yourself using computer vision.',
    problem: 'Shoppers cannot tell how a garment will look on them before buying online.',
    features: ['Body pose estimation', 'Garment warping and overlay', 'Upload-and-preview workflow'],
    tech: ['Python', 'PyTorch', 'OpenCV', 'React'], status: 'In progress', repo: 'https://github.com/Shravani-Shinde/virtual__tryOn_system',
  },
  {
    id: 'deepfake-detection', title: 'Deepfake Video Detection', category: 'AI / ML', hue: 295,
    summary: 'Classify videos as authentic or manipulated with a deep-learning model.',
    problem: 'Synthetic media spreads misinformation and is hard to spot by eye.',
    features: ['Frame-level feature extraction', 'Confidence score per video', 'Evaluation on a public dataset'],
    tech: ['Python', 'TensorFlow', 'OpenCV'], status: 'In progress', repo: 'https://github.com/Nirzara4/DeepFakeVideoDetection',
  },
  {
    id: 'carbon-calculator', title: 'Carbon Emission Calculator', category: 'Sustainability', hue: 160,
    summary: 'Estimate personal carbon footprint from travel, energy, and diet inputs.',
    problem: 'People want to reduce emissions but do not know where their footprint comes from.',
    features: ['Category-wise breakdown', 'Reduction suggestions', 'Responsive input forms'],
    tech: ['TypeScript', 'React', 'Tailwind CSS'], status: 'Planned', repo: 'https://github.com/Shravani-Shinde/Carbon_Credit_Calculator',
  },
  {
    id: 'campus-agent', title: 'Campus Assistance AI Agent', category: 'AI / ML', hue: 250,
    summary: 'A chat assistant that answers student questions about campus services.',
    problem: 'Students waste time searching notices, timetables, and office hours across many sources.',
    features: ['Natural-language Q&A', 'Timetable and notice lookup', 'Escalation to a human contact'],
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL'], status: 'Planned', repo: 'https://github.com/Shravani-Shinde/campus-agent',
  },
  // {
  //   id: 'secure-assessment', title: 'Secure Resume and Coding Assessment Platform', category: 'Security', hue: 330,
  //   summary: 'Host resume screening and timed coding tests with integrity safeguards.',
  //   problem: 'Remote hiring tests are hard to run fairly and securely.',
  //   features: ['Resume parsing', 'Sandboxed code execution', 'Session integrity checks'],
  //   tech: ['TypeScript', 'Node.js', 'Docker', 'PostgreSQL', 'React'], status: 'In progress', repo: 'https://github.com/your-username/secure-assessment',
  // },
]
