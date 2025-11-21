// components/education/education.jsx
import './education.css';
import data from '../../data/data.json';
import greyBG from '../../assets/dark.jpg'
const Education = () => {
  const { education } = data;

  return (
    <section className="vh-100 py-5 text-white w-100" style={{
      backgroundImage: `url(${greyBG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>

      <div className="container py-5 m-0 mx-auto w-100">
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
              My Academic Journey
            </span>
          </h1>
        </div>

        <div className="row g-4 justify-content-center">  {/* increased gap */}
          {education.map((edu, index) => (
            <div key={index} className="col-6">  {/* THIS IS THE MAGIC */}
              <div
                className={`card border-0 shadow-lg h-100 position-relative overflow-hidden
                    ${index === 0 ? 'rotate-2' : '-rotate-2'}
                    transition-all duration-500 hover-shadow-purple`}
                style={{ backgroundColor: '#232321' }}
              >
                {/* Top right year tag */}
                <div
                  className="position-absolute top-0 end-0 bg-gradient text-white small fw-bold px-4 py-2 rounded-bottom-start z-3"
                  style={{ background: 'linear-gradient(to left, #9f7aea, #00f2fe)' }}
                >
                  {edu.period.split(' — ')[1]}
                </div>

                <div className="card-body p-5 p-lg-6 position-relative">  {/* more padding on large screens */}
                  {/* Institution – Now stays on one line easily */}
                  <h3 className="card-title display-5 display-lg-4 fw-bold mb-4 text-danger mb-4 lh-1">
                    {edu.institution}
                  </h3>

                  {/* Location */}
                  <p className="mb-4 text-white fs-5">
                    Location: {edu.location}
                  </p>

                  {/* Degree */}
                  <p className="fs-4 fs-lg-3 text-light mb-5 lh-base">
                    {edu.degree}
                  </p>

                  {/* Achievements */}
                  <div className="mt-4">
                    {edu.grade && (
                      <div className="d-flex align-items-center bg-success bg-opacity-10 border border-success border-opacity-30 rounded-3 px-4 py-3 mb-3">
                        <span className="fs-3 me-3">Certificate</span>
                        <span className="text-success fw-bold fs-5">{edu.grade}</span>
                      </div>
                    )}

                    {edu.projectGrade && (
                      <div className="d-flex align-items-center bg-warning bg-opacity-10 border border-warning border-opacity-30 rounded-3 px-4 py-3 mb-3">
                        <span className="fs-3 me-3">Graduation Project</span>
                        <span className="text-warning fw-bold fs-5">{edu.projectGrade}</span>
                      </div>
                    )}

                    {edu.honor && (
                      <span
                        className="badge fs-6 px-5 py-3 text-dark fw-black shadow-lg d-inline-block mt-3"
                        style={{ background: 'linear-gradient(to right, #fbbf24, #f59e0b)' }}
                      >
                        HONOR DEGREE
                      </span>
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

export default Education;