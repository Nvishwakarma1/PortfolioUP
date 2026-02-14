import { useState, useEffect } from 'react'
import './ProjectsPopup.css'

const ProjectsPopup = ({ isOpen, onClose }) => {
    const [activeProject, setActiveProject] = useState(null)

    const projects = [
        {
            id: 1,
            title: 'Unastack — Troubleshooting Website',
            description: 'A community-driven troubleshooting platform designed to help users resolve technical issues related to smartphones, laptops, and desktop computers in a simple and structured way. Users can post issues and receive solutions from experienced members. The platform focuses on clarity, beginner friendliness, and reliable guidance.',
            tech: ['React (Vite)', 'Node.js', 'JavaScript', 'Responsive Design'],
            link: 'https://unstuck-ptc7.onrender.com/',
            status: 'In Progress',
            future: 'The future scope includes the integration of AI/ML for automated diagnostics, flowchart-based solutions, and intelligent problem guidance.'
        },
        {
            id: 2,
            title: 'Interior Designer Portfolio Website',
            description: 'Designed and developed a modern, responsive portfolio website for an interior designer using React with Vite. Focused on clean UI, smooth navigation, and professional presentation showcasing design projects and services.',
            tech: ['React (Vite)', 'JavaScript', 'CSS', 'Responsive Design'],
            link: 'https://Nvishwakarma1.github.io/rishi-interior/',
            status: 'Completed'
        }
    ]

    const handleClose = () => {
        onClose()
    }

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                handleClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            return () => {
                document.removeEventListener('keydown', handleEscape)
            }
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className="popup-overlay" onClick={handleClose}>
            <div
                className="popup-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="popup-close" onClick={handleClose}>
                    ✕
                </button>
                <div className="popup-header">
                    <h2 className="popup-title">MY PROJECTS</h2>
                    <div className="popup-subtitle">COMPLETE PORTFOLIO SHOWCASE</div>
                    <div className="keyboard-hint">Press ESC to close</div>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                        >
                            <div className="project-header">
                                <h3 className="project-title">{project.title}</h3>
                                <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                                    {project.status}
                                </span>
                            </div>

                            <p className="project-description">{project.description}</p>

                            {project.future && (
                                <div className="project-future">
                                    <strong>Future Scope:</strong> {project.future}
                                </div>
                            )}

                            <div className="project-tech">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                                onClick={(e) => e.stopPropagation()}
                            >
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectsPopup
