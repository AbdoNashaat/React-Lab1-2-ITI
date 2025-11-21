import personalPic from '../../assets/aurafarming.png'
import backgroundImagr from '../../assets/background.jpg'
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <section className="vh-100 d-flex flex-row"
            style={{
                backgroundImage: `url(${backgroundImagr})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >

            <div className="w-30 h-100 d-flex justify-content-center align-items-center">
                <img
                    src={personalPic}
                    alt="Personal"
                    className="img-fluid rounded"
                    style={{
                        maxHeight: "100%",
                        objectFit: "contain",
                    }}
                />
            </div>

            <div className="d-flex flex-column align-items-start px-5 text-light">

                <span className='h-25'></span>

                <h1 className="fw-bold display-3 mb-5" style={{ textShadow: "0 0 10px rgba(0,0,0,0.7)" }}>
                    Abdelghafaar Nashaat Abdelghafaar
                </h1>

                <h1 className="fw-bold display-3 mb-4" style={{ textShadow: "0 0 10px rgba(0,0,0,0.7)" }}>
                    Full Stack Web Developer
                </h1>

                <a href="/AbdelghafaarCV.pdf" download="AbdelghafaarCV.pdf">
                    <button
                        className="btn btn-outline-light px-4 py-2 fs-2 rounded-pill m-auto"
                        style={{
                            backdropFilter: "blur(4px)",
                            backgroundColor: "rgba(0,0,0,0.4)",
                            borderWidth: "2px",
                            transition: "0.3s"
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "rgba(255,255,255,0.1)")}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(0,0,0,0.4)")}
                    >
                        Download CV
                    </button>
                </a>



            </div>
        </section>

    );
};

export default Hero;