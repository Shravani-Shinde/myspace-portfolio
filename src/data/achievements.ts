// ✏️ EDIT ME — placeholders only. Do not add certificate IDs or links you cannot verify.
export type AchievementCategory = 'Academic' | 'Certificate' | 'Competition' | 'Sports & extracurricular' | 'Workshop'
export interface Achievement {
  id: string; title: string; issuer: string; year: string; description: string
  category: AchievementCategory; link?: string
}


export const achievements: Achievement[] = [
  {
    id: 'a1',
    title: 'Diploma in Computer Engineering – 94.91%',
    issuer: 'MSBTE',
    year: '2025',
    category: 'Academic',
    description:
      'Achieved 94.91% in the Diploma in Computer Engineering, demonstrating strong academic performance.',
  },
  {
    id: 'a2',
    title: 'Digital Techniques – 100/100',
    issuer: 'MSBTE',
    year: '2024',
    category: 'Academic',
    description:
      'Achieved a perfect score in Digital Techniques during diploma studies.',
  },
  {
    id: 'a3',
    title: 'AI and Deep Learning Certifications',
    issuer: 'NVIDIA',
    year: '2026',
    category: 'Certificate',
    description:
      'Completed learning programs covering prompt engineering for LLM applications, deep learning, and end-to-end data science workflows.',
  },
  {
    id: 'a4',
    title: 'Zonal Chess Competition – Winner',
    issuer: 'Zonal-level competition',
    year: '2023',
    category: 'Sports & extracurricular',
    description:
      'Won the girls’ zonal chess competition, demonstrating strategic thinking and concentration.',
  },
  {
    id: 'a5',
    title: 'First Prize – Umang 2K23 Chess',
    issuer: 'Umang 2K23',
    year: '2023',
    category: 'Sports & extracurricular',
    description:
      'Secured first prize in chess at Umang 2K23.',
  },
  {
    id: 'a6',
    title: 'First Place – Box Cricket and Kho-Kho',
    issuer: 'College competitions',
    year: '2025',
    category: 'Sports & extracurricular',
    description:
      'Secured first place in college Box Cricket and Kho-Kho competitions, demonstrating teamwork and competitive spirit.',
  },
]

