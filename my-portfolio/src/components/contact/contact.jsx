// components/contact/contact.jsx
import data from '../../data/data.json';
import greyBG from '../../assets/dark.jpg';
import './contact.css'
const Contact = () => {
  const { personalInfo } = data;

  return (
    <section
      className="min-vh-100 py-5 bg-black text-white position-relative overflow-hidden d-flex align-items-center"
      style={{
        backgroundImage: `url(${greyBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container py-5 position-relative z-2">  
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
              Let's Connect
            </span>
          </h1>
          <p className="lead text-muted fs-4">I'm always excited to collaborate or chat about new opportunities!</p>
        </div>

        {/* Contact Cards Grid */}
        <div className="row g-5 justify-content-center">
          <div className="col-12">
            <div
              className="card border-0 shadow-lg h-100 position-relative overflow-hidden rotate-2 hover-shadow-purple transition-all duration-500"
              style={{ backgroundColor: '#232321' }}
            >
              <div className="card-body p-5 p-lg-6 text-center">

                {/* Email */}
                <div className="mb-5">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="d-block text-decoration-none"
                  >
                    <i className="bi bi-envelope-fill text-primary fs-1 mb-3"></i>
                    <p className="fs-3 text-light mb-1">{personalInfo.email}</p>
                    <p className="text-muted">Send me an email</p>
                  </a>
                </div>

                <hr className="border-secondary border-opacity-30 my-5" />

                <div className="row g-4 justify-content-around">

                  <div className="col-6 col-md-2 cardItem">
                    <a
                      href={personalInfo.email}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <div className="p-4 rounded-3 bg-gradient" style={{ background: 'linear-gradient(45deg, #0077b5, #00a0dc)' }}>
                        <i className="bi bi-google text-white fs-2"></i>
                      </div>
                      <p className="mt-3 text-light fw-bold">Gmail</p>
                    </a>
                  </div>

                  <div className="col-6 col-md-2 cardItem">
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <div className="p-4 rounded-3 bg-gradient" style={{ background: 'linear-gradient(45deg, #0077b5, #00a0dc)' }}>
                        <i className="bi bi-linkedin text-white fs-2"></i>
                      </div>
                      <p className="mt-3 text-light fw-bold">LinkedIn</p>
                    </a>
                  </div>

                  <div className="col-6 col-md-2 cardItem">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <div className="p-4 rounded-3 bg-gradient">
                        <i className="bi bi-github text-white fs-2"></i>
                      </div>
                      <p className="mt-3 text-light fw-bold">GitHub</p>
                    </a>
                  </div>

                  <div className="col-6 col-md-2 cardItem">
                    <a
                      href={`https://wa.me/201126565444`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <div className="p-4 rounded-3 bg-gradient" style={{ background: 'linear-gradient(45deg, #25D366, #128C7E)' }}>
                        <i className="bi bi-whatsapp text-white fs-2"></i>
                      </div>
                      <p className="mt-3 text-light fw-bold">WhatsApp</p>
                    </a>
                  </div>

                  <div className="col-6 col-md-2 cardItem">
                    <a
                      href="https://leetcode.com/u/abdelghafaar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <div className="p-4 rounded-3 bg-gradient" style={{ background: 'linear-gradient(45deg, #ffa116, #ff6b00)' }}>
                        <i className="bi bi-code-slash text-white fs-2"></i>
                      </div>
                      <p className="mt-3 text-light fw-bold">LeetCode</p>
                    </a>
                  </div>
                </div>

                {/* Optional: Phone */}
                <div className="mt-5 pt-4">
                  <p className="text-white mb-2">Or call me</p>
                  <a href={`tel:${personalInfo.phone}`} className="fs-3 text-light text-decoration-none">
                    <i className="bi bi-telephone-fill text-success me-3"></i>
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Bottom glow line */}
              <div
                className="position-absolute bottom-0 start-0 w-100 h-1"
                style={{ background: 'linear-gradient(to right, #00f2fe, #9f7aea)', opacity: 0.7 }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;