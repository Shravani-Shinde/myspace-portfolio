# MySpace — Personal Profile & Portfolio

An interactive personal profile website built as an academic Human-Computer Interaction (HCI) project.

> **Status honesty:** all personal content (name, education, projects, blog posts, achievements, links) is **placeholder text** and clearly marked editable. No usability study has been performed; the Usability Evaluation page starts empty.

## 1. Aim
To design and develop an interactive personal profile that presents professional, academic, social, blogging, project and other activities, applying established HCI principles and evaluating the usability of the resulting interface.

## 2. Problem statement
Static CVs and cluttered portfolios make it hard for recruiters, faculty and peers to find the information they need quickly, especially on phones or with assistive technology.

## 3. Objectives
Present a complete profile; organise it into clear sections; provide intuitive navigation; demonstrate usability principles; offer useful interactions; support desktop/tablet/mobile; follow accessibility practice; support usability testing with measurable metrics; document the HCI work.

## 4. Target users
Recruiters, faculty evaluators, collaborating students, developers, visitors interested in the academic journey, and professional contacts.

## 5. Requirements
**Hardware:** any computer with ≥4 GB RAM. **Software:** Node.js 20+ (22 recommended), npm, a modern browser, Git.

## 6. Technology stack
React 19, TypeScript, Vite, Tailwind CSS v4, Lucide React, Vitest (unit tests). No router (a tiny hash switch serves the evaluation page), no backend, no paid APIs. Theme and test records use `localStorage`.

## 7. Architecture
Content lives in `src/data/*` (edit these), presentation in `src/sections/*` and `src/components/*`, pure logic in `src/utils/*` (validation, metrics — unit-tested), state hooks in `src/hooks/*`. Design tokens (colours) are CSS variables in `src/index.css`, switched by a `.dark` class on `<html>`.

## 8. Major features
Responsive navbar with active-section highlighting and mobile menu · dark/light theme (persisted, no flash) · hero with resume action · About, Education timeline, Skills · Projects with search, category + technology filters, reset, empty state and accessible detail dialog · Blog with search, categories and article view · Achievements with category filter · Contact form with inline validation · Footer with back-to-top · Usability Evaluation page (`#/usability`).

## 9. HCI principles and where they are implemented
| Principle | Implementation |
|---|---|
| Consistency & standards | Shared tokens and `btn`/`card`/`chip`/`field` styles; same filter pattern in Projects, Blog, Achievements |
| Visibility of system status | Live result counts ("Showing 2 of 5"), theme-change announcement, active nav item, form status region |
| Affordance & signifiers | Buttons vs underlined links, icons with labels, pressed state on filter chips (not colour alone: bold + `aria-pressed`) |
| Feedback | Instant filtering, inline validation on blur, success panel, resume-missing message |
| Error prevention | Required markers, example placeholders, `type=email`, duplicate-submit guard, `rel="noopener noreferrer"`, confirm before deleting test records |
| Error recovery | Plain-language messages tied to fields via `aria-describedby`, values preserved, focus moves to first invalid field |
| User control & freedom | Theme toggle, Reset filters, Clear form, Esc / close button / backdrop click on dialog, Back to blog |
| Recognition over recall | Always-visible nav, category labels, familiar icons |
| Hick–Hyman law | 8 grouped nav items, one primary CTA in hero, Usability page linked from footer only |
| Fitts's law | All controls ≥ 44 px tall/wide, large mobile nav targets |
| Accessibility | Semantic landmarks, skip link, heading order, labels, visible focus ring, native `<dialog>`, reduced-motion CSS, token colours chosen for high contrast (formal contrast audit still to be run) |
| Responsive design | Fluid grids, mobile menu, scrollable tables |

## 10. Install and run
```bash
npm install
npm run dev        # development at http://localhost:5173
npm test           # unit tests (metrics + validation)
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

## 11. Folder structure
```
public/            resume.pdf (you add), images/
src/components/    Navbar, Footer, ThemeToggle, Modal, ProjectCard, BlogCard, ContactForm, ...
src/sections/      Home, About, Education, Skills, Projects, Blog, Achievements, Contact
src/pages/         UsabilityEvaluation
src/data/          profile, projects, blogPosts, achievements  (EDIT THESE)
src/hooks/         useTheme
src/utils/         validation, usabilityMetrics (+ tests)
docs/              REPORT_OUTLINE.md, TEST_CHECKLIST.md
```

## 12. What you must customise
1. Name, headline, intro, email, GitHub, LinkedIn in `src/data/profile.ts`.
2. Education, skills, projects, articles, achievements (remove or edit sample records; set real repo/demo URLs and statuses).
3. Add `public/resume.pdf` and set `resumeUrl`.
4. Optional: photo/screenshots in `public/images`.

## 13. Usability testing methodology
1. Recruit ~5–8 representative participants if feasible. 2. Explain purpose, get consent. 3. Give the six tasks (listed in the app) without guiding. 4. Record completion, time, errors, observations. 5. Collect a 1–5 satisfaction rating. 6. Identify recurring problems. 7. Prioritise by impact × frequency. 8. Fix. 9. Retest selected tasks and compare. A small sample is suited to formative testing and cannot establish universal usability. Use anonymous codes (P1, P2…), never real names.

## 14. Metric definitions
- **Completion rate** = completed attempts ÷ total attempts × 100.
- **Average time** = sum of valid times ÷ number of valid timed attempts. Blank, negative or non-numeric times are excluded (failed attempts with a valid time are included).
- **Average satisfaction** = sum of valid ratings ÷ number of valid ratings (integers 1–5 only).
- **Errors** = sum of whole-number error counts.
- With zero attempts / zero valid values the app shows "—" (never 0, NaN or a division error).

## 15. Recording observations
Open `#/usability` → "Record an attempt". Pick the task, mark completed, enter seconds (optional), error count, rating (optional) and notes. Records persist in this browser's `localStorage`. After fixes, record a second round using new participant codes (e.g. R2-P1) and compare metrics.

## 16. Results template
| Round | Participants | Completion rate | Avg time (s) | Errors | Avg satisfaction | Main issues |
|---|---|---|---|---|---|---|
| 1 (before) | _enter_ | _enter_ | _enter_ | _enter_ | _enter_ | _enter_ |
| 2 (after) | _enter_ | _enter_ | _enter_ | _enter_ | _enter_ | _enter_ |

## 17. Limitations
No backend — the contact form validates locally and hands off to the visitor's email app via `mailto:`; it never delivers messages itself. Test records are per-browser. No command palette, no CMS, no automated browser/accessibility tests. Placeholder content only.

## 18. Future scope
Backend/email service for real delivery, Markdown blog with admin, CSV export of test data, automated axe/Playwright tests, command palette, i18n.

## 19. Conclusion
_Write after your study — summarise what the evaluation showed and what you improved. Do not claim results before collecting them._
