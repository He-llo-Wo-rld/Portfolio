# Portfolio

A modern, professional portfolio built with Astro and Tailwind CSS.

## Features

- ✨ Clean, professional design
- 🌙 Dark/Light theme support
- 📱 Fully responsive
- ⚡ Fast loading with Astro
- 🎨 Tailwind CSS for styling
- 🔧 Reusable components
- 🚀 Easy to customize and extend

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Customization

### Adding New Projects

Edit the `projects` array in `src/pages/index.astro`:

```javascript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    image: "/projects/your-project.jpg",
    technologies: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://your-project-url.com",
    githubUrl: "https://github.com/username/repo",
    featured: true, // Set to true for larger cards
  },
];
```

### Customizing Colors

Update the color scheme in `tailwind.config.mjs`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6', // Change this to your preferred color
    // ... other shades
  },
}
```

### Adding New Components

Create reusable components in `src/components/` and import them where needed.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.astro
│   └── ProjectCard.astro
├── layouts/            # Page layouts
│   └── Layout.astro
└── pages/             # Pages (auto-routed)
    └── index.astro
```

## Deployment

The portfolio is ready to deploy to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Simply connect your repository and the platform will automatically build and deploy your portfolio.
