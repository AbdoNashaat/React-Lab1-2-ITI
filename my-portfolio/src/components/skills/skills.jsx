// components/skills/skills.jsx
import data from '../../data/data.json';
import greyBG from '../../assets/dark.jpg';

const Skills = () => {
  const { skills } = data;

  // Same beautiful color logic as your Projects page
  const getSkillColor = (skill) => {
    const s = skill.toLowerCase();

    if (s.includes('javascript') || s.includes('typescript')) return 'linear-gradient(45deg, #f7df1e, #f0c20c)';
    if (s.includes('node') || s.includes('express')) return 'linear-gradient(45deg, #68a063, #83c97a)';
    if (s.includes('angular')) return 'linear-gradient(45deg, #dd0031, #c3002f)';
    if (s.includes('flutter') || s.includes('dart')) return 'linear-gradient(45deg, #02569B, #00D1F7)';
    if (s.includes('php') || s.includes('laravel')) return 'linear-gradient(45deg, #777BB4, #8993C1)';
    if (s.includes('firebase')) return 'linear-gradient(45deg, #FFA000, #FFC046)';
    if (s.includes('mongodb')) return 'linear-gradient(45deg, #4DB33D, #6ADC5A)';
    if (s.includes('mysql') || s.includes('sql')) return 'linear-gradient(45deg, #00758f, #00a0c6)';
    if (s.includes('stripe') || s.includes('paymob') || s.includes('paypal')) return 'linear-gradient(45deg, #635BFF, #8A75FF)';
    if (s.includes('bootstrap')) return 'linear-gradient(45deg, #712cf9, #8a4ff0)';
    if (s.includes('git') || s.includes('github')) return 'linear-gradient(45deg, #F1502F, #f48024)';

    return 'linear-gradient(45deg, #00f2fe, #4facfe)';
  };

  return (
    <section
      className="min-vh-100 py-5 bg-black text-white position-relative overflow-hidden"
      style={{
        backgroundImage: `url(${greyBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container py-5 position-relative z-2">
        {/* Title */}
        <div className="text-center mb-5">
          <h1 className="display-1 fw-bold mb-3">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #00f2fe, #4facfe, #9f7aea, #c679dd)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              What I Bring To The Table
            </span>
          </h1>
        </div>

        {/* Skills Grid */}
        <div className="row g-5 justify-content-center">
          {/* Programming Languages */}
          <div className="col-12 col-lg-10">
            <div className="card border-0 shadow-lg bg-opacity-90" style={{ backgroundColor: '#232321' }}>
              <div className="card-body p-5">
                <h3 className="display-6 fw-bold text-primary mb-4">Programming Languages</h3>
                <div className="d-flex flex-wrap gap-3">
                  {skills.languages.map((lang, i) => (
                    <span
                      key={i}
                      className="badge text-dark px-4 py-3 fw-bold rounded-3 shadow-sm"
                      style={{ background: getSkillColor(lang), fontSize: '1rem' }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="col-12 col-lg-10">
            <div className="card border-0 shadow-lg bg-opacity-90 rotate-2" style={{ backgroundColor: '#232321' }}>
              <div className="card-body p-5">
                <h3 className="display-6 fw-bold text-danger mb-4">Frameworks & Libraries</h3>
                <div className="d-flex flex-wrap gap-3">
                  {skills.frameworks.map((fw, i) => (
                    <span
                      key={i}
                      className="badge text-dark px-4 py-3 fw-bold rounded-3 shadow-sm"
                      style={{ background: getSkillColor(fw), fontSize: '1rem' }}
                    >
                      {fw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Databases & Backend */}
          <div className="col-12 col-lg-10">
            <div className="card border-0 shadow-lg bg-opacity-90" style={{ backgroundColor: '#232321' }}>
              <div className="card-body p-5">
                <h3 className="display-6 fw-bold text-success mb-4">Databases & Backend</h3>
                <div className="d-flex flex-wrap gap-3">
                  {skills.databases.map((db, i) => (
                    <span
                      key={i}
                      className="badge text-dark px-4 py-3 fw-bold rounded-3 shadow-sm"
                      style={{ background: getSkillColor(db), fontSize: '1rem' }}
                    >
                      {db}
                    </span>
                  ))}
                  {skills.payment.map((pay, i) => (
                    <span
                      key={i}
                      className="badge text-white px-4 py-3 fw-bold rounded-3 shadow-sm"
                      style={{ background: getSkillColor(pay), fontSize: '1rem' }}
                    >
                      {pay}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="col-12 col-lg-10">
            <div className="card border-0 shadow-lg bg-opacity-90 rotate-2" style={{ backgroundColor: '#232321' }}>
              <div className="card-body p-5">
                <h3 className="display-6 fw-bold text-warning mb-4">Tools & Platforms</h3>
                <div className="d-flex flex-wrap gap-3">
                  {skills.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="badge text-dark px-4 py-3 fw-bold rounded-3 shadow-sm"
                      style={{ background: getSkillColor(tool), fontSize: '1rem' }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Concepts */}
          <div className="col-12 col-lg-10">
            <div className="card border-0 shadow-lg bg-opacity-90" style={{ backgroundColor: '#232321' }}>
              <div className="card-body p-5">
                <h3 className="display-6 fw-bold text-info mb-4">Core Concepts & Soft Concepts</h3>
                <div className="d-flex flex-wrap gap-3">
                  {skills.concepts.map((concept, i) => (
                    <span
                      key={i}
                      className="badge bg-gradient text-white px-4 py-3 fw-semibold rounded-3 shadow-sm"
                      style={{ background: 'linear-gradient(45deg, #667eea, #764ba2)', fontSize: '0.95rem' }}
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom glow line on last card */}
        <div
          className="position-absolute bottom-0 start-0 w-100 h-1"
          style={{ background: 'linear-gradient(to right, #00f2fe, #9f7aea)', opacity: 0.7, zIndex: 1 }}
        ></div>
      </div>
    </section>
  );
};

export default Skills;  