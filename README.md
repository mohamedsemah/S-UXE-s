<div align="center">

# S-UXE's

**Sustainable Open-Source Ecosystem for User Experience Evaluation**

[![NSF](https://img.shields.io/badge/NSF-Funded-blue?style=for-the-badge&logo=national-science-foundation&logoColor=white)](https://www.nsf.gov/)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.0-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-CC--BY--SA_4.0-green?style=for-the-badge&logo=creative-commons&logoColor=white)](https://creativecommons.org/licenses/by-sa/4.0/)

[![WCAG](https://img.shields.io/badge/WCAG-2.2_AA-007ACC?style=flat-square&logo=accessibility&logoColor=white)](https://www.w3.org/WAI/WCAG22/quickref/)
[![ISO 9241](https://img.shields.io/badge/ISO-9241_Aligned-0066CC?style=flat-square&logo=iso&logoColor=white)](https://www.iso.org/)
[![Static Site](https://img.shields.io/badge/Static_Site-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## About

S-UXE's (Sustainable Open-Source Ecosystem for User Experience Evaluation) is an **NSF POSE Phase I** funded research initiative addressing fragmentation in user experience evaluation tools through an open, interoperable ecosystem.

This website serves as the public face of the ecosystem, designed for:
- **NSF reviewers** and grant stakeholders
- **Researchers and educators** in human-computer interaction
- **Open-source contributors** and developers
- **Public-sector and nonprofit stakeholders**

### Key Features

✨ **Standards-Aligned**: Explicitly aligned with ISO 9241-210, ISO 9241-11, WCAG 2.2, Nielsen's heuristics, and UX Honeycomb

🔗 **Interoperable**: Enables existing UX tools to work together without being replaced

🌱 **Sustainable**: Community-driven governance ensuring long-term viability

♿ **Accessible**: WCAG 2.2 AA compliant with semantic HTML and keyboard navigation

🎓 **Academic Quality**: Credible, professional presentation suitable for grant reviewers

---

## Website Structure

The site consists of the following pages:

- **Home** (`/`) - Overview of S-UXE's as an ecosystem
- **Vision & Standards** (`/vision`) - Fragmentation problem and standards alignment
- **Ecosystem** (`/ecosystem`) - How tools participate and coordinate
- **Tools** (`/tools`) - Collection of integrated UX evaluation tools
- **Get Involved** (`/get-involved`) - Participation pathways for researchers, students, developers, and educators
- **Governance** (`/governance`) - Transparent, community-driven governance model

---

## Technology Stack

- **Framework**: [Next.js 16.1.0](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5.5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Hosting**: [Vercel](https://vercel.com/) (optimized for static generation)

### Key Dependencies

```json
{
  "next": "^16.1.0",
  "react": "^19.2.3",
  "react-dom": "^19.2.3",
  "typescript": "^5.5.4",
  "tailwindcss": "^3.4.9"
}
```

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd S-UXE's
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

The production build is optimized for static generation and can be deployed to any static hosting service.

---

## Development

### Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── vision/             # Vision & Standards page
│   ├── ecosystem/          # Ecosystem page
│   ├── tools/              # Tools showcase page
│   ├── get-involved/       # Get Involved page
│   ├── governance/         # Governance page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Academic footer
│   └── SkipLink.tsx        # Accessibility skip link
├── public/                 # Static assets
└── package.json
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Accessibility

This site is designed with **WCAG 2.2 AA compliance** in mind:

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus indicators
- Skip links
- High contrast ratios
- Screen reader friendly structure

---

## Design Principles

- **Academic Tone**: No startup language or marketing hype
- **Credibility**: Suitable for NSF reviewers and academic audiences
- **Clarity**: Large, readable headings and generous white space
- **Neutral Palette**: Restrained blues and grays
- **Minimal Animations**: Respects prefers-reduced-motion

---

## Contributing

We welcome contributions! Please see the [Get Involved](/get-involved) page for information on:

- How researchers can contribute
- Student participation pathways
- Developer integration guidelines
- Educational material contributions

### Code Style

- TypeScript strict mode enabled
- ESLint configuration follows Next.js best practices
- Semantic HTML and accessible components
- Tailwind CSS utility classes

---

## License

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).

---

## Funding

This material is based upon work supported by the National Science Foundation under Award No. [Award Number].

Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.

---

## Links

- **Live Site**: [https://s-uxes.vercel.app](https://s-uxes.vercel.app) (or your deployment URL)
- **Tools**: [Aesthetic Evaluator](https://aesthetic-evaluator.vercel.app)

---

<div align="center">

**S-UXE's** - Building a sustainable, interoperable future for UX evaluation

[Home](/) | [Vision](/vision) | [Ecosystem](/ecosystem) | [Tools](/tools) | [Get Involved](/get-involved) | [Governance](/governance)

</div>

