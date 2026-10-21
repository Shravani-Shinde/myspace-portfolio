# Test Checklist (actual status)

Legend: PASS = executed and passed · NOT RUN = not yet executed (needs a browser/human) 

## Executed in the build environment
| Check | Result |
|---|---|
| Unit tests: metrics (empty data, rates, averages, invalid values) and validation — `npm test` | PASS (6/6) |
| TypeScript type-check — `tsc -b` | PASS |
| Production build — `npm run build` | PASS |

## Not yet executed — please run and fill in
| Check | Result |
|---|---|
| All nav links scroll correctly, active highlight updates | NOT RUN |
| Mobile menu opens, closes on selection and on Esc | NOT RUN |
| Theme toggle changes whole UI; persists after reload | NOT RUN |
| Project search / category / tech filters / reset / empty state | NOT RUN |
| Project dialog: opens, Esc closes, focus returns | NOT RUN |
| Blog search, category filter, article view, back button | NOT RUN |
| Contact form: invalid email error → correct → success panel; no false "sent" claim | NOT RUN |
| Resume button (message shown until public/resume.pdf is added; downloads after) | NOT RUN |
| Evaluation page: add / delete / clear records; dashboard values; empty state | NOT RUN |
| Responsive at 360, 768, 1024, 1440 px — no horizontal overflow | NOT RUN |
| Keyboard-only walkthrough; visible focus everywhere | NOT RUN |
| Contrast check (both themes) with a tool such as axe / Lighthouse | NOT RUN |
| Browser console free of errors | NOT RUN |
