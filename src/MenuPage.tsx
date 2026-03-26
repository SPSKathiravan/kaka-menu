import React, { useEffect } from 'react';
import './menu-styles.css';

// Menu Data
const menuItems = [
  { 
    id: 1, 
    name: 'Chicken Skewer with Rice', 
    nameAr: 'سكه دجاج مع أرز', 
    description: 'Green / Red / White sauce options', 
    price: 18, 
    tag: 'BEST SELLER', 
    gradient: 'linear-gradient(to bottom right, #f97316, #dc2626)',
    image: '/Chicken Skewer with Rice.png' 
  },
  { 
    id: 2, 
    name: 'Chicken & Mutton kebab with Rice', 
    nameAr: 'كباب دجاج مع أرز', 
    description: 'Tender grilled chicken kebab', 
    price: 25, 
    gradient: 'linear-gradient(to bottom right, #f59e0b, #ea580c)',
    image: '/Chicken & Mutton kebab with Rice.png' 
  },
  { 
    id: 3, 
    name: 'Half Shawaya with Rice', 
    nameAr: 'نصف شاوية مع أرز', 
    description: 'Slow roasted half chicken', 
    price: 25, 
    tag: 'POPULAR', 
    gradient: 'linear-gradient(to bottom right, #eab308, #d97706)',
    image: '/Half Shawaya with Rice.png' 
  },
  { 
    id: 4, 
    name: 'Half AlFahm with Rice', 
    nameAr: 'نصف فحم مع أرز', 
    description: 'Charcoal grilled half chicken', 
    price: 28, 
    gradient: 'linear-gradient(to bottom right, #52525b, #27272a)',
    image: '/Half AlFahm with Rice.png' 
  },
  { 
    id: 5, 
    name: 'Half Chicken Madghoot', 
    nameAr: 'نصف مدغوت دجاج', 
    description: 'Pressure cooked tender chicken', 
    price: 30, 
    tag: 'SPICY', 
    gradient: 'linear-gradient(to bottom right, #ef4444, #ec4899)',
    image: '/Half Chicken Madghoot.png' 
  },
  { 
    id: 6, 
    name: 'Beef & Mutton chops with Rice', 
    nameAr: 'ريش لحم بقر مع أرز', 
    description: 'Grilled beef chops', 
    price: '30 / 35', 
    gradient: 'linear-gradient(to bottom right, #78716c, #292524)',
    image: '/Beef & Mutton chops with Rice.png' 
  },
  { 
    id: 7, 
    name: 'Half Beef Madghoot', 
    nameAr: 'نصف مدغوت لحم بقر', 
    description: 'Pressure cooked tender beef', 
    price: 60, 
    gradient: 'linear-gradient(to bottom right, #b45309, #991b1b)',
    image: '/Half Beef Madghoot.png' 
  },
  { 
    id: 8, 
    name: 'Mutton Waleema', 
    nameAr: 'وليمة لحم ضأن', 
    description: 'Special celebration dish', 
    price: 150, 
    tag: 'PREMIUM', 
    gradient: 'linear-gradient(to bottom right, #facc15, #f59e0b, #ea580c)',
    image: '/Mutton Waleema.png' 
  },
];

// Instagram Icon
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function KakaGrillMenu() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.menu-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="menu-container">
      {/* Sticky Header */}
      <header className="header">
        <div className="header-inner">
          <div className="logo-container">
            <div className="logo-img-wrapper">
              <img src="/kaka_grill_logo_transparent.png" alt="Kaka Grill Logo" className="logo-img" />
            </div>
            <div className="brand-text">
              <h1>
                <span className="text-white">KAKA</span>
                <span className="text-red"> GRILL</span>
              </h1>
              <div className="tagline">Rice Menu</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - New Animation */}
      <section className="hero">
        <div className="hero-content">
          
          {/* Animated Logo Container */}
          <div className="hero-center-logo">
            <img src="/kaka_grill_logo_transparent.png" alt="Logo" className="hero-logo-img" />
            <div className="circle-text">
              <svg viewBox="0 0 200 200">
                <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="none" />
                <text fontSize="14" letterSpacing="3">
                  <textPath href="#circlePath">
                      <tspan fill="#dc2626">KAKA GRILL</tspan>
                      <tspan fill="#ffffff"> • PREMIUM QUALITY • </tspan>
                      <tspan fill="#dc2626">AUTHENTIC TASTE</tspan>
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Animated Title with Separator */}
          <div className="title-container">
            <h2 className="hero-title">
              <span className="title-line title-left">RICE</span>
              <span className="animated-line"></span>
              <span className="title-line title-right accent">MENU</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <main className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={item.id} className="menu-card" style={{ '--delay': `${index * 80}ms` } as React.CSSProperties}>
            <div className="card-inner">
              <div className="card-image" style={{ position: 'relative', height: 'auto', overflow: 'hidden' }}>
                <div className="image-bg" style={{ background: item.gradient, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}></div>
                <img src={item.image} alt={item.name} className="food-img" style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 1 }} />
                <div className="image-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }}>
                  <div className="price-badge">
                    <span className="currency">SAR</span>
                    <span className="amount">{item.price}</span>
                  </div>
                  {item.tag && <div className="item-tag"><span>{item.tag}</span></div>}
                </div>
              </div>
              <div className="card-content">
                <div className="content-header">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-ar" dir="rtl">{item.nameAr}</p>
                </div>
                <p className="item-desc">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand-container">
            <img src="/kaka_grill_logo_transparent.png" alt="Kaka Grill Logo" className="footer-logo-img" />
            <div className="footer-brand-text">
              <span className="text-white">KAKA</span>
              <span className="text-red"> GRILL</span>
            </div>
          </div>
          <div className="footer-links">
            <a href="https://www.kakagrill.com" className="footer-btn">Visit Website</a>
            <a href="https://www.instagram.com/kakagrilljubail?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="footer-btn instagram-btn" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
              <span>kakagrilljubail</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Kaka Grill. Premium Arabian Cuisine.</p>
        </div>
      </footer>
    </div>
  );
}