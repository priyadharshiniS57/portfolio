import React, { useState, useEffect } from 'react';

/**
 * ==============================================================================
 * Priyadharshini — Professional Frontend Developer Portfolio
 * Built with React only (No Vite, No Backend, No Complex Dependencies)
 * ==============================================================================
 */

function App() {
  // ---------------------------------------------------------------------------
  // 1. STATE MANAGEMENT
  // ---------------------------------------------------------------------------
  
  // Mobile hamburger menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hero interactive card tab: 'code' | 'preview'
  const [heroTab, setHeroTab] = useState('code');
  const [heroCopied, setHeroCopied] = useState(false);

  // Copy developer code profile to clipboard
  const handleCopyProfile = () => {
    const profileJson = `const developer = {
  name: "Priyadharshini",
  role: "Frontend Developer",
  degree: "B.Sc. Computer Science",
  coreStack: ["React", "JavaScript", "Tailwind", "CSS3"],
  status: true /* Available for Work */
};`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(profileJson);
    }
    setHeroCopied(true);
    setTimeout(() => setHeroCopied(false), 2000);
  };

  // Active skill category filter: 'all' | 'frontend' | 'styling' | 'backend'
  const [activeCategory, setActiveCategory] = useState('all');

  // Contact form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Contact form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Track window scroll position for navbar glass effect & scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ---------------------------------------------------------------------------
  // 2. DATA ARRAYS (Skills, Projects, Stats)
  // ---------------------------------------------------------------------------

  const stats = [
    { number: '3+', label: 'Featured Projects' },
    { number: '9+', label: 'Core Technologies' },
    { number: 'B.Sc.', label: 'Computer Science' },
    { number: '100%', label: 'Responsive Design' }
  ];

  const skills = [
    {
      id: 'html5',
      name: 'HTML5',
      category: 'frontend',
      level: 'Advanced',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      id: 'css3',
      name: 'CSS3',
      category: 'styling',
      level: 'Advanced',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      id: 'javascript',
      name: 'JavaScript (ES6+)',
      category: 'frontend',
      level: 'Intermediate',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="4"></rect>
          <path d="M10 15v4a1 1 0 0 1-1 1H7"></path>
          <path d="M14 11v7a2 2 0 0 0 2 2h1"></path>
        </svg>
      )
    },
    {
      id: 'react',
      name: 'React.js',
      category: 'frontend',
      level: 'Intermediate',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)"></ellipse>
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"></ellipse>
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"></ellipse>
          <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
        </svg>
      )
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      category: 'styling',
      level: 'Intermediate',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 12c.5-2.5 2-4 4.5-4.5 3.5-.7 5.5 1.5 7.5 1.5 1.5 0 2.5-.5 3-1.5-.5 2.5-2 4-4.5 4.5-3.5.7-5.5-1.5-7.5-1.5-1.5 0-2.5.5-3 1.5z"></path>
          <path d="M3 18c.5-2.5 2-4 4.5-4.5 3.5-.7 5.5 1.5 7.5 1.5 1.5 0 2.5-.5 3-1.5-.5 2.5-2 4-4.5 4.5-3.5.7-5.5-1.5-7.5-1.5-1.5 0-2.5.5-3 1.5z"></path>
        </svg>
      )
    },
    {
      id: 'bootstrap',
      name: 'Bootstrap',
      category: 'styling',
      level: 'Intermediate',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
          <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
        </svg>
      )
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      category: 'backend',
      level: 'Foundational',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"></path>
          <polyline points="12 22 12 12"></polyline>
          <polyline points="21 7 12 12 3 7"></polyline>
        </svg>
      )
    },
    {
      id: 'express',
      name: 'Express.js',
      category: 'backend',
      level: 'Foundational',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <path d="M7 8h10"></path>
          <path d="M7 12h6"></path>
          <path d="M7 16h8"></path>
        </svg>
      )
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      category: 'backend',
      level: 'Foundational',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      )
    }
  ];

  const projects = [
    {
      id: 1,
      name: 'Photozone',
      category: 'MERN Stack Application',
      description: 'A responsive photo curation application featuring upload workflows, category filtering, search tags, and responsive gallery cards designed for smooth media browsing.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      highlights: ['Grid/List Layouts', 'RESTful Endpoints', 'Responsive Media Cards'],
      githubUrl: 'https://github.com/priyadharshiniS57/photozone'
    },
    {
      id: 2,
      name: 'Personal Portfolio',
      category: 'Pure React Showcase',
      description: 'Modern developer portfolio built with React and custom CSS architecture, featuring ambient glow effects, glassmorphic cards, micro-animations, and full mobile optimization.',
      tags: ['React 18', 'Vanilla CSS', 'JavaScript (ES6+)'],
      highlights: ['Ambient Orbs', 'Glassmorphism', 'Zero Complex Dependencies'],
      githubUrl: 'https://github.com/priyadharshiniS57/portfolio'
    },
    {
      id: 3,
      name: 'Student Management System',
      category: 'Full-Stack CRUD Application',
      description: 'An academic dashboard system designed to manage student profiles, monitor enrollment status, handle records modification, and maintain persistent database storage.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'CRUD API'],
      highlights: ['State Synchronization', 'Form Validation', 'Database Persistence'],
      githubUrl: 'https://github.com/priyadharshiniS57/student-management-system'
    }
  ];

  // ---------------------------------------------------------------------------
  // 3. EVENT HANDLERS
  // ---------------------------------------------------------------------------

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    // Simulate brief smooth interaction (300ms)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 400);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter skills based on current active tab
  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  return (
    <div className="app-container" id="top">
      {/* Ambient background glowing spheres */}
      <div className="bg-glow-wrapper" aria-hidden="true">
        <div className="bg-glow bg-glow-1"></div>
        <div className="bg-glow bg-glow-2"></div>
        <div className="bg-glow bg-glow-3"></div>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* 4. NAVIGATION BAR */}
      {/* ---------------------------------------------------------------------- */}
      <header className="navbar-wrapper">
        <nav className="navbar" aria-label="Main Navigation">
          <a href="#top" className="brand-group" onClick={() => setMobileMenuOpen(false)}>
            <div className="brand-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <div className="brand-text">
              <span className="brand-title">Priyadharshini</span>
              <span className="brand-subtitle">Frontend Developer</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          {/* Navbar Actions: Availability Pill & Mobile Menu Toggle */}
          <div className="nav-actions">
            <div className="status-pill" title="Currently open for frontend opportunities">
              <span className="status-dot"></span>
              <span className="status-text">Available for Work</span>
            </div>

            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu with Smooth Animation */}
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            <span>Home</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </a>
          <a href="#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            <span>About</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </a>
          <a href="#skills" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            <span>Skills</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </a>
          <a href="#projects" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            <span>Projects</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            <span>Contact</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </a>
        </div>
      </header>

      {/* ---------------------------------------------------------------------- */}
      {/* 5. MAIN CONTENT */}
      {/* ---------------------------------------------------------------------- */}
      <main className="main-content">

        {/* SECTION 1: HERO / INTRO */}
        <section id="home" className="hero-section">
          <div className="hero-grid">
            
            {/* Left Column: Greeting, Headline, Description & CTAs */}
            <div className="hero-content">
              <div className="hero-badge-group">
                <span className="pill-badge pill-primary">
                  <span className="pulsing-radar"></span>
                  Available for Work
                </span>
                <span className="pill-badge pill-accent">Frontend Developer</span>
                <span className="pill-badge pill-outline">B.Sc. Computer Science</span>
              </div>

              <h1 className="hero-heading">
                Hi, I'm <strong className="hero-name-bold">Priyadharshini</strong>
                <span className="hero-title-gradient">Frontend Developer</span>
              </h1>

              <p className="hero-description">
                Crafting intuitive, responsive web experiences with{' '}
                <span className="gradient-highlight">React & Modern CSS</span>. I design and build modern, 
                high-performance web interfaces with clean architecture, accessible components, 
                and smooth micro-interactions.
              </p>

              <div className="hero-cta-group">
                <a href="#projects" className="btn-glow-primary">
                  <span>Explore Projects</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a href="#contact" className="btn-glass-secondary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>Get in Touch</span>
                </a>
                <a
                  href="https://github.com/priyadharshiniS57"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon-glass"
                  title="View GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>

              {/* Quick Key Metrics */}
              <div className="stats-strip">
                {stats.map((item, index) => (
                  <div key={index} className="stat-item">
                    <span className="stat-number">{item.number}</span>
                    <span className="stat-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive Developer Hub Card with Code & Live Preview */}
            <div className="hero-visual">
              {/* Floating ambient tech chips */}
              <div className="hero-floating-chip chip-top" aria-hidden="true">
                <span>⚛️ React 18</span>
              </div>
              <div className="hero-floating-chip chip-bottom-left" aria-hidden="true">
                <span>⚡ Modern JS</span>
              </div>

              <div className="terminal-card">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  
                  {/* Interactive Tab Switcher */}
                  <div className="terminal-tabs">
                    <button
                      type="button"
                      className={`terminal-tab-btn ${heroTab === 'code' ? 'active' : ''}`}
                      onClick={() => setHeroTab('code')}
                    >
                      <span>&lt;/&gt; Profile.jsx</span>
                    </button>
                    <button
                      type="button"
                      className={`terminal-tab-btn ${heroTab === 'preview' ? 'active' : ''}`}
                      onClick={() => setHeroTab('preview')}
                    >
                      <span>👁️ Live Preview</span>
                    </button>
                  </div>

                  {/* Copy Button */}
                  <button
                    type="button"
                    className={`terminal-copy-btn ${heroCopied ? 'copied' : ''}`}
                    onClick={handleCopyProfile}
                    title="Copy Profile Details"
                  >
                    {heroCopied ? '✓ Copied' : '📋 Copy'}
                  </button>
                </div>

                {heroTab === 'code' ? (
                  <div className="terminal-body">
                    <pre>
                      <code>
                        <span className="c-keyword">const</span>{' '}
                        <span className="c-variable">developer</span> = &#123;{'\n'}
                        {'  '}<span className="c-property">name</span>:{' '}
                        <strong className="c-string-bold">"Priyadharshini"</strong>,{'\n'}
                        {'  '}<span className="c-property">role</span>:{' '}
                        <span className="c-string">"Frontend Developer"</span>,{'\n'}
                        {'  '}<span className="c-property">degree</span>:{' '}
                        <span className="c-string">"B.Sc. Computer Science"</span>,{'\n'}
                        {'  '}<span className="c-property">coreStack</span>: [{'\n'}
                        {'    '}<span className="c-string">"React"</span>,{' '}
                        <span className="c-string">"JavaScript (ES6+)"</span>,{'\n'}
                        {'    '}<span className="c-string">"Tailwind CSS"</span>,{' '}
                        <span className="c-string">"CSS3"</span>{'\n'}
                        {'  '}],{'\n'}
                        {'  '}<span className="c-property">status</span>:{' '}
                        <span className="c-boolean">true</span>{' '}
                        <span className="c-comment">{'/* Available for Work */'}</span>{'\n'}
                        &#125;;
                      </code>
                    </pre>

                    <div className="terminal-footer">
                      <div className="terminal-badge">
                        <span className="status-dot"></span>
                        <span>Open to collaborate</span>
                      </div>
                      <span className="terminal-timestamp">UTF-8 • JSX</span>
                    </div>
                  </div>
                ) : (
                  <div className="terminal-preview-body">
                    <div className="preview-developer-header">
                      <div className="preview-avatar">P</div>
                      <div className="preview-info">
                        <h4>Priyadharshini</h4>
                        <div className="preview-badge-row">
                          <span className="pill-badge pill-primary">Frontend Dev</span>
                          <span className="pill-badge pill-outline">B.Sc. CS</span>
                        </div>
                      </div>
                    </div>

                    <p className="preview-bio">
                      Specialized in building scalable, accessible, and high-performance React web applications with clean design systems.
                    </p>

                    <div className="preview-skills-grid">
                      <span className="preview-skill-tag">⚛️ React</span>
                      <span className="preview-skill-tag">⚡ JavaScript</span>
                      <span className="preview-skill-tag">🎨 CSS3</span>
                      <span className="preview-skill-tag">📱 Responsive UI</span>
                      <span className="preview-skill-tag">🍃 MongoDB</span>
                      <span className="preview-skill-tag">🟢 Node.js</span>
                    </div>

                    <div className="preview-footer-action">
                      <div className="terminal-badge">
                        <span className="status-dot"></span>
                        <span>Ready to interview</span>
                      </div>
                      <a href="#contact" className="preview-cta-btn">
                        <span>Send Message &rarr;</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Core Feature Highlights */}
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <div>
                <h3>Pure React Architecture</h3>
                <p>Clean JSX, modular state hooks, and zero overhead from complex bundlers.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <div>
                <h3>Modern Visual Aesthetics</h3>
                <p>Curated pink-accented dark mode with frosted glass panels and ambient glow.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div>
                <h3>Adaptive Responsiveness</h3>
                <p>Optimized typography, flex grids, and smooth transitions on mobile, tablet, and desktop.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ABOUT */}
        <section id="about" className="section-container">
          <div className="section-head">
            <span className="section-tag">About Me</span>
            <h2 className="section-title">Background & Technical Focus</h2>
            <p className="section-subtitle">
              Combining a formal computer science foundation with a dedication to frontend craftsmanship.
            </p>
          </div>

          <div className="about-card">
            <div className="about-layout">
              <div className="about-bio">
                <h3 className="about-bio-title">
                  Passionate about translating UI designs into responsive, scalable code.
                </h3>
                <p>
                  As a <strong>B.Sc. Computer Science graduate</strong>,and pursuing Msc.Information technology ,I bring together solid 
                  fundamentals in programming, data structures, and responsive web design. My primary 
                  interest lies in frontend engineering — building user interfaces that are not only 
                  visually captivating but also intuitive, accessible, and performant.
                </p>
                <p>
                  I enjoy solving frontend challenges with pure React components, clean modular styling, 
                  and thoughtful micro-interactions. I take pride in writing readable, maintainable code 
                  and staying curious about evolving web technologies.
                </p>
                <div className="about-signature-row">
                  <div className="sig-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                    <span>Continuous Learner</span>
                  </div>
                  <div className="sig-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    <span>Passionate about UI/UX</span>
                  </div>
                </div>
              </div>

              <div className="about-pillars">
                <div className="pillar-card">
                  <div className="pillar-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h4>Formal Education</h4>
                    <p className="pillar-highlight">B.Sc. in Computer Science</p>
                    <p className="pillar-desc">Solid understanding of core software concepts, algorithms, and web fundamentals.</p>
                  </div>
                </div>

                <div className="pillar-card">
                  <div className="pillar-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4>Frontend Development</h4>
                    <p className="pillar-highlight">React.js & Component Architecture</p>
                    <p className="pillar-desc">Building responsive, reusable components, managing state, and styling with modern CSS.</p>
                  </div>
                </div>

                <div className="pillar-card">
                  <div className="pillar-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4>Clean Code Principles</h4>
                    <p className="pillar-highlight">Maintainability & UX</p>
                    <p className="pillar-desc">Writing semantic, beginner-accessible code with smooth transitions and performance focus.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SKILLS WITH CATEGORY FILTER */}
        <section id="skills" className="section-container">
          <div className="section-head">
            <span className="section-tag">Technical Arsenal</span>
            <h2 className="section-title">Skills & Competencies</h2>
            <p className="section-subtitle">
              A breakdown of the languages, libraries, and frameworks I use to craft digital solutions.
            </p>

            {/* Filter Tabs */}
            <div className="filter-tab-bar" role="tablist">
              <button
                type="button"
                className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
                role="tab"
                aria-selected={activeCategory === 'all'}
              >
                All Skills ({skills.length})
              </button>
              <button
                type="button"
                className={`filter-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
                onClick={() => setActiveCategory('frontend')}
                role="tab"
                aria-selected={activeCategory === 'frontend'}
              >
                Frontend
              </button>
              <button
                type="button"
                className={`filter-btn ${activeCategory === 'styling' ? 'active' : ''}`}
                onClick={() => setActiveCategory('styling')}
                role="tab"
                aria-selected={activeCategory === 'styling'}
              >
                Styling & UI
              </button>
              <button
                type="button"
                className={`filter-btn ${activeCategory === 'backend' ? 'active' : ''}`}
                onClick={() => setActiveCategory('backend')}
                role="tab"
                aria-selected={activeCategory === 'backend'}
              >
                Backend & Database
              </button>
            </div>
          </div>

          {/* Filtered Skills Grid */}
          <div className="skills-grid">
            {filteredSkills.map((skill) => (
              <div key={skill.id} className="skill-card">
                <div className="skill-top-row">
                  <div className="skill-icon-box">
                    {skill.icon}
                  </div>
                  <span className="skill-level-tag">{skill.level}</span>
                </div>
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-category-label">{skill.category}</span>
                </div>
                <div className="skill-hover-indicator"></div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: PROJECTS */}
        <section id="projects" className="section-container">
          <div className="section-head">
            <span className="section-tag">Selected Works</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Real-world web applications demonstrating full-cycle frontend development, architecture, and responsiveness.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-header-bar">
                  <span className="project-category-badge">{project.category}</span>
                  <div className="project-folder-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-highlights">
                    {project.highlights.map((h, i) => (
                      <span key={i} className="highlight-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="project-tag-list">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="tech-badge">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="project-footer">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github-btn"
                    title={`View source code for ${project.name} on GitHub`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span>Source Code on GitHub</span>
                    <svg className="arrow-external" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="7 17 17 7"></polyline><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 5: CONTACT */}
        <section id="contact" className="section-container">
          <div className="section-head">
            <span className="section-tag">Let's Connect</span>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Have an opening, collaboration, or question? Send me a note and I will get back to you promptly.
            </p>
          </div>

          <div className="contact-wrapper">
            <div className="contact-info-panel">
              <h3 className="contact-info-title">Let's build something remarkable together.</h3>
              <p className="contact-info-desc">
                I am actively seeking junior / entry-level frontend developer roles, internships, and project opportunities. 
                Whether you have an inquiry or just want to connect, feel free to reach out!
              </p>

              <div className="contact-info-items">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <span className="contact-label">Email</span>
                    <a href="mailto:priyadharshini17priya@gmail.com" className="contact-value">
                      priyadharshini17priya@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </div>
                  <div>
                    <span className="contact-label">GitHub</span>
                    <a href="https://github.com/priyadharshiniS57" target="_blank" rel="noreferrer" className="contact-value">
                      github.com/priyadharshiniS57
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <span className="contact-label">Location</span>
                    <span className="contact-value">India (Open to Remote & Relocation)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Interactive React Form */}
            <div className="contact-form-card">
              {isSubmitted ? (
                <div className="form-success-state">
                  <div className="success-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="success-title">Message Sent Successfully!</h3>
                  <p className="success-desc">
                    Thank you for reaching out! I appreciate your message and will reply as soon as possible.
                  </p>
                  <button type="button" onClick={handleResetForm} className="btn-reset-form">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="contact-form" noValidate>
                  <div className="form-row-dual">
                    <div className="form-field">
                      <label htmlFor="name" className="field-label">Your Name *</label>
                      <div className="field-input-box">
                        <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="field-input"
                          placeholder="e.g. Priya"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="email" className="field-label">Your Email *</label>
                      <div className="field-input-box">
                        <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="4"></circle>
                          <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                        </svg>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="field-input"
                          placeholder="priya@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="subject" className="field-label">Subject</label>
                    <div className="field-input-box">
                      <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="4" y1="9" x2="20" y2="9"></line>
                        <line x1="4" y1="15" x2="20" y2="15"></line>
                        <line x1="10" y1="3" x2="8" y2="21"></line>
                        <line x1="16" y1="3" x2="14" y2="21"></line>
                      </svg>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="field-input"
                        placeholder="Collaboration / Job Opportunity"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="message" className="field-label">Your Message *</label>
                    <div className="field-input-box">
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="field-textarea"
                        placeholder="Hello Priyadharshini, I'd like to discuss..."
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" className="btn-send-message" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="spinner-icon"></span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>

      {/* ---------------------------------------------------------------------- */}
      {/* 6. FOOTER */}
      {/* ---------------------------------------------------------------------- */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand-box">
              <div className="brand-group">
                <div className="brand-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div className="brand-text">
                  <span className="brand-title">Priyadharshini</span>
                  <span className="brand-subtitle">Frontend Developer</span>
                </div>
              </div>
              <p className="footer-tagline">
                Building modern, high-quality, and accessible web experiences using React.
              </p>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-links-title">Quick Navigation</h4>
              <ul className="footer-nav-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-links-title">Connect</h4>
              <div className="footer-social-links">
                <a
                  href="https://github.com/priyadharshiniS57"
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              © {new Date().getFullYear()} Priyadharshini. Built with React (No Vite). Clean & Responsive.
            </p>
            <p className="footer-built-with">
              Designed with glassmorphism & subtle micro-interactions.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          className="scroll-top-btn"
          onClick={scrollToTop}
          title="Scroll back to top"
          aria-label="Scroll back to top"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
