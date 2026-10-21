// ✏️ EDIT ME — all values below are placeholders. Replace with your real details.
export interface EducationEntry {
  institution: string; qualification: string; field: string
  start: string; end: string; score?: string; coursework: string[]; highlights: string[]
}
export interface SkillGroup { category: string; items: string[] }
export interface LinkItem { label: string; href: string; kind: 'github' | 'linkedin' | 'email' | 'other' }

export const profile = {
  name: 'Shravani Shinde',
  initials: 'SS',
  headline: 'Computer Engineering Student | Software Developer | AI/ML Enthusiast',
  intro:
    'I am a Computer Engineering student at VJTI, Mumbai, interested in software development, artificial intelligence, machine learning, and problem-solving. I enjoy building practical projects that combine technology with real-world applications.',
  email: 'shravanishinde307@gmail.com',
  github: 'https://github.com/Shravani-Shinde',
  linkedin: 'www.linkedin.com/in/shravani-shinde-a3595628b',
  /** Put your PDF at public/resume.pdf and set this to '/resume.pdf'. Empty = "not added yet" message. */
  resumeUrl: '/resume.pdf',
  objective:
    'To gain practical software engineering experience through internships and collaborative projects, while strengthening my problem-solving, programming, and AI/ML skills.',
  aboutParagraphs: [
    'I am pursuing a B.Tech in Computer Engineering at Veermata Jijabai Technological Institute (VJTI), Mumbai. I previously completed a Diploma in Computer Engineering through MSBTE, achieving 94.91%. My academic journey has helped me develop an interest in programming, software engineering, and emerging technologies.',
     'Beyond academics, I value creativity, teamwork, and continuous improvement. My goal is to become a skilled software engineer who builds useful, reliable, and user-friendly technology.'
  ],
  interests: [
    { title: 'Academic interests', text: 'Data Structures and Algorithms, Database Systems, Operating Systems, Computer Networks, and Human-Computer Interaction.' },
    { title: 'Technical interests', text: 'Artificial Intelligence, Machine Learning, Computer Vision, Web Development, and Software Engineering.' },
    { title: 'Learning goals', text: 'Strengthen problem-solving skills, build practical projects, contribute to open-source software, and prepare for software engineering internships.'},
    { title: 'Beyond the screen', text: 'Chess, team sports, continuous learning, and exploring new technologies.' },
  ],
  education: [
    {
      institution: 'Veermata Jijabai Technological Institute (VJTI), Mumbai', qualification: 'B.Tech', field: 'Computer Engineering',
      start: '2025', end: '2028 (expected)', score: undefined,
      coursework: [ 'Data Structures and Algorithms',
        'Database Management Systems',
        'Computer Networks',
        'Machine Learning',
        'Human-Computer Interaction',
        'Compiler Construction',
        'Image Processing',
        'Parallel Computing',
        'Network Security'],
      highlights: [ 'Currently pursuing undergraduate studies in Computer Engineering.'],
    },
    {
      institution: 'Sanjay Ghodawat Institute, Atigre', qualification: 'Diploma', field: 'Computer Science and Engineering',
      start: '2022', end: '2025', score: '94.91%',
      coursework: [ 'Programming',
        'Database Systems',
        'Advanced Computer Networks',
        'Network Security',
        'Digital Techniques',
        'Mobile Application Development'], highlights: ['Achieved 100/100 in Digital Techniques (MSBTE).'],
    },
  ] as EducationEntry[],
  skills: [
    { category: 'Programming Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'] },
    { category: 'Frontend Development', items: ['React', 'HTML','CSS', 'Tailwind CSS', 'Vite'] },
    { category: 'Backend Development', items: ['Node.js','Flask', 'REST APIs', 'FastAPI'] },
    { category: 'Databases', items: [ 'MySQL', 'MongoDB'] },
    { category: 'AI and Machine Learning', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'OpenCV'] },
    { category: 'Development Tools', items: ['Git & GitHub', 'VS Code', 'Jupyter Notebook', 'Linux'] },
    { category: 'Core CS Concepts', items: ['Data Structures', 'Algorithms', 'Operating Systems', 'Computer Networks', 'OOP'] },
  ] as SkillGroup[],
}

export const links: LinkItem[] = [
  { label: 'GitHub', href: profile.github, kind: 'github' },
  { label: 'LinkedIn', href: profile.linkedin, kind: 'linkedin' },
  { label: 'Email', href: `mailto:${profile.email}`, kind: 'email' },
]
