import { useState, useEffect } from 'react'
import './FloatingButtons.css'
import { FaLinkedin, FaGithub, FaEnvelope, FaBlog, FaTrophy } from 'react-icons/fa'

const FloatingButtons = () => {
    const [socialLinks, setSocialLinks] = useState([])

    useEffect(() => {
        // Social and tech links for IT engineer
        const links = [
            { icon: <FaLinkedin />, label: 'LinkedIn', color: '#0077b5', URL: 'https://www.linkedin.com/in/nagesh-vishwakarma-271202238' },
            { icon: <FaGithub />, label: 'GitHub', color: '#00ffff', URL: 'https://github.com/Nvishwakarma1' },
            { icon: <FaEnvelope />, label: 'Email', color: '#ec4899', URL: 'mailto:[nageshvish1234@gmail.com]' },
            { icon: <FaBlog />, label: 'Blog', color: '#a855f7', URL: 'https://medium.com/@nagesh.vishwakarma' },
            { icon: <FaTrophy />, label: 'Achievements', color: '#10b981', URL: 'https://your-achievements.com' },
        ]

        setSocialLinks(links.map((link, index) => ({ ...link, index })))
    }, [])

    return (
        <div className="floating-buttons-container">
            {socialLinks.map((link, index) => (
                <div
                    key={index}
                    className="floating-annotation"
                    style={{
                        animationDelay: `${index * 0.15}s`,
                        '--link-color': link.color
                    }}
                >
                    <a
                        href={link.URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-button"
                    >
                        {link.icon}
                    </a>
                    <div className="annotation-label">{link.label}</div>
                </div>
            ))}
        </div>
    )
}

export default FloatingButtons
