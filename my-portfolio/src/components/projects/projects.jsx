// components/projects/projects.jsx
import data from '../../data/data.json';
import greyBG from '../../assets/dark.jpg';

const Projects = () => {
  const { projects } = data;

  // Smart color logic based on your actual tech
  const getTechBadgeStyle = (tech) => {
    const t = tech.toLowerCase();

    if (t.includes('stripe') || t.includes('paymob') || t.includes('paypal'))
      return 'linear-gradient(45deg, #635BFF, #7B68EE, #9D8CFF)'; // Purple for payments

    if (t.includes('firebase'))
      return 'linear-gradient(45deg, #FFA000, #FFC046, #FF6B00)'; // Firebase orange

    if (t.includes('flutter') || t.includes('dart'))
      return 'linear-gradient(45deg, #02569B, #00D1F7)'; // Flutter official blue

    if (t.includes('angular'))
      return 'linear-gradient(45deg, #DD0031, #C3002F)'; // Angular red

    if (t.includes('mongodb') || t.includes('mongoose'))
      return 'linear-gradient(45deg, #4DB33D, #6ADC5A)'; // MongoDB green

    if (t.includes('node') || t.includes('express'))
      return 'linear-gradient(45deg, #68A063, #83C97A)'; // Node.js green

    if (t.includes('mysql') || t.includes('rdbms'))
      return 'linear-gradient(45deg, #00758F, #00A0C6)'; // MySQL blue

    if (t.includes('arduino') || t.includes('nodered'))
      return 'linear-gradient(45deg, #00979D, #00C9CC)'; // IoT teal

    // Default beautiful cyan-blue
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
        backgroundAttachment: 'fixed' // optional: cool parallax feel
      }}
    >
      <div className="container py-5 position-relative z-2">
        {/* Title */}
        <div className="text-center mb-5">
          <h1 className="display-1 fw-bold mb-3">
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(to right, #00f2fe, #4facfe, #9f7aea, #c679dd)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Things I've built with passion
            </span>
          </h1>
        </div>

        <div className="row g-5 justify-content-center">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-lg-8">
              <div
                className={`card border-0 shadow-lg h-100 position-relative overflow-hidden
                            ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}
                            transition-all duration-500 hover-shadow-purple`}
                style={{ backgroundColor: '#232321' }}
              >
                <div className="card-body p-5 p-lg-6">
                 
                  <h3 className="card-title display-6 fw-bold text-danger mb-3">
                    {project.title}
                  </h3>

                  
                  <div className="d-flex flex-wrap gap-3 mb-4">
                    <span className="badge bg-primary bg-opacity-20 text-white px-3 py-2">
                      {project.period}
                    </span>
                    {(project.role || project.organization) && (
                      <span className="badge bg-info bg-opacity-20 text-black px-3 py-2">
                        {project.role || project.organization}
                      </span>
                    )}
                  </div>

                  {/* Description - Now supports array (bullet points) */}
                  <ul className="text-light mb-5 list-unstyled">
                    {Array.isArray(project.description) ? (
                      project.description.map((line, i) => (
                        <li key={i} className="d-flex gap-3 mb-3">
                          <span className="text-cyan mt-1">▹</span>
                          <span className="fs-5 lh-base">{line}</span>
                        </li>
                      ))
                    ) : (
                      <p className="text-light fs-5 mb-4 lh-base">{project.description}</p>
                    )}
                  </ul>

                  {/* Tech Stack Badges - Now with perfect colors */}
                  <div className="mb-5">
                    <p className="text-muted small mb-3 text-uppercase fw-bold tracking-wider">
                      Built with
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="badge text-dark px-4 py-2 fw-semibold shadow-sm rounded-3"
                          style={{
                            background: getTechBadgeStyle(tech),
                            fontSize: '0.9rem'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="d-flex flex-wrap gap-3">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-lg px-5 shadow-sm hover-lift"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light btn-lg px-5 shadow-sm hover-lift"
                      >
                        GitHub
                      </a>
                    )}
                    {project.playStoreLink && (
                      <a
                        href={project.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success btn-lg px-5 shadow-sm hover-lift"
                      >
                        Play Store
                      </a>
                    )}
                    {!project.liveLink && !project.githubLink && !project.playStoreLink && (
                      <span className="text-muted small">Source not public</span>
                    )}
                  </div>
                </div>

                {/* Bottom glow line */}
                <div
                  className="position-absolute bottom-0 start-0 w-100 h-1"
                  style={{ background: 'linear-gradient(to right, #00f2fe, #9f7aea)', opacity: 0.7 }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;