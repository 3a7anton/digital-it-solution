# Digital IT Solutions

A modern, responsive website for Digital IT Solutions - a company providing comprehensive IT services including branding, motion graphics, web development, animation, video production, photography, and software development.

**Live Demo:** [digitalitsolbd.netlify.app](https://digitalitsolbd.netlify.app)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [License](#license)

## Features

- **Modern UI/UX Design** - Sleek dark theme with gradient accents and animated backgrounds
- **Responsive Layout** - Fully responsive design that works on all device sizes
- **Animated Components** - Custom Aurora background animations and interactive elements
- **Multi-page Application** - Home, About, Services, and Contact pages
- **Interactive Elements** - Hover effects, transitions, and micro-interactions
- **Performance Optimized** - Built with modern tools for fast loading times

## Technologies Used

- [React 19](https://react.dev/) - Frontend library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) - React fast refresh plugin
- [GSAP](https://greensock.com/gsap/) - Professional-grade JavaScript animation library
- [React Router](https://reactrouter.com/) - Declarative routing for React applications
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling and layout

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/digital-it-solution-bd.git
   ```

2. Navigate to the project directory:
   ```bash
   cd digital-it-solution-bd
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build

Create a production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
digital-it-solution-bd/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── AboutUs.tsx      # About page component
│   │   ├── Contact.tsx      # Contact page component
│   │   ├── Footer.tsx       # Footer component
│   │   ├── HomePage.tsx     # Home page component
│   │   ├── Navbar.tsx       # Navigation bar component
│   │   └── Services.tsx     # Services page component
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Entry point
│   └── ...
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── ...
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Locally previews the production build
- `npm run lint` - Runs ESLint to analyze the code

## Deployment

This project is configured for easy deployment to Netlify:

1. Push your code to a GitHub repository
2. Connect your repository to Netlify
3. Set the build command to `npm run build`
4. Set the publish directory to `dist`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.