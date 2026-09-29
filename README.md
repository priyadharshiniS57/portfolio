# Priyadharshini - Developer Portfolio (React)

A modern, responsive, and beginner-friendly personal portfolio built with **React only (no Vite)**.

---

## 🌟 Highlights & Features

- **Direct Open Access**: All login pages, authentication guards, and session redirect scripts have been removed. Anyone can directly view the portfolio.
- **Pure React Architecture (No Vite)**: Built using standard React functional components, clean JSX, and beginner-friendly `useState` hooks.
- **Signature Aesthetics**: Preserves the dark theme (`#0e0712`), ambient glowing pink spheres (`@keyframes floatOrb`), frosted glass cards (`backdrop-filter: blur`), and smooth hover micro-animations.
- **Portfolio Sections**:
  - **Navbar**: Sticky frosted glass navigation with brand logo, smooth scroll links, availability badge, and responsive mobile menu.
  - **Home / Hero**: Greeting, title with gradient text, professional bio, call-to-action buttons ("View Projects", "Contact Me"), and highlight cards.
  - **About**: Educational background (B.Sc. Computer Science), primary focus, and passion for modern frontend development.
  - **Skills**: Visual cards with category labels and SVG icons for HTML5, CSS3, JavaScript, React, Bootstrap, Tailwind CSS, Node.js, Express.js, and MongoDB.
  - **Projects**: Clean project cards for Photozone (MERN Stack), Personal Portfolio (React/CSS), and Student Management System (React/Node/MongoDB) with tech stack badges and GitHub repository links.
  - **Contact**: Interactive contact form with local React state handling and instant confirmation banner (no backend or database required).
  - **Footer**: Developer branding, social links (GitHub & LinkedIn), and copyright notice.
- **Fully Responsive**: Smoothly adapts across desktop, tablet, and mobile screens.

---

## 🚀 How to Run Locally

### 1. Install Dependencies (if not already installed)
```bash
npm install
```

### 2. Start the Development Server
```bash
npm start
```
The portfolio will automatically open at `http://localhost:3000`.

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   └── index.html       # HTML shell with Google Fonts and meta tags
├── src/
│   ├── App.js           # Main React component with all portfolio sections
│   ├── index.js         # React 18 entry point (ReactDOM.createRoot)
│   └── index.css        # CSS design system, ambient glow animations & responsiveness
├── package.json         # Project dependencies (React 18 & react-scripts)
├── .gitignore           # Ignored files (node_modules, build)
└── README.md            # Project documentation
```
