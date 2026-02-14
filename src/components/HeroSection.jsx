import './HeroSection.css'

const HeroSection = ({ onViewProjects }) => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <div className="hero-tag">/// FRONTEND ENGINEER</div>
                <h1 className="hero-title">
                    I AM NAGESH<br />
                    VISHWAKARMA<span className="blue-dot">.</span>
                    <span className="blue-arrow">▶</span>
                </h1>
                <p className="hero-description">
                    I am a Enthusiastic Frontend Developer <br />
                    Skilled in building responsive and user-friendly<br />
                    Web Applications using HTML, CSS, JavaScript, React,<br /> and Vite.
                </p>
                <button className="hero-cta" onClick={onViewProjects}>VIEW PROJECTS</button>
            </div>
        </div>
    )
}

export default HeroSection
