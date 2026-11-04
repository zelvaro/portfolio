# Sabir Essaad — Portfolio

Personal portfolio of **Sabir Essaad**, Computer Science & Networks engineering student at EMSI and Full Stack & AI developer.

It presents my internships, academic projects and tech stack, plus a downloadable CV.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) icons

## Pages

| Route       | Content                                              |
|-------------|------------------------------------------------------|
| `/`         | Hero, experience, tech stack, featured projects, contact |
| `/work`     | Internship & academic projects, filterable           |
| `/about`    | Background, timeline, tech stack, certifications     |
| `/contact`  | Contact form                                         |
| `/cv.pdf`   | Resume (PDF in `public/`)                            |

## Getting started

Requirements: Node.js 18+.

```bash
git clone https://github.com/zelvaro/portfolio.git
cd portfolio
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description              |
|-----------------|--------------------------|
| `npm run dev`   | Start the dev server     |
| `npm run build` | Build for production     |
| `npm run start` | Run the production build |
| `npm run lint`  | Lint the code            |

## Project structure

```
app/          Pages and routes (App Router)
components/
  home/       Home page sections
  ui/         Shared UI (navbar, footer, cards, cursor…)
lib/data.ts   All content: profile, projects, stack, timeline
```

To update the content, edit `lib/data.ts` — no component changes needed.

## Contact

- Email: sabiressaad24@gmail.com
- LinkedIn: [linkedin.com/in/sabiressaad](https://linkedin.com/in/sabiressaad/)
