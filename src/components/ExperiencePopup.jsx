import { useState, useEffect } from 'react'
import './ExperiencePopup.css'

const ExperiencePopup = ({ isOpen, onClose }) => {
    const experiences = [
        {
            id: 1,
            role: 'Web Development Intern',
            company: 'Virtual Galaxy Info Tech Pvt. Ltd.',
            period: 'During Diploma (2021-2023)',
            location: 'Nagpur, India',
            type: 'Internship',
            responsibilities: [
                'Completed internship during Diploma tenure',
                'Worked on basic website development',
                'Implemented UI improvements for client projects',
                'Gained hands-on experience with web technologies',
                'Collaborated with team on multiple web projects'
            ],
            tech: ['HTML', 'CSS', 'JavaScript', 'UI Design']
        }
    ]

    const education = [
        {
            id: 1,
            degree: 'B.Tech in Information Technology',
            institution: 'Priyadarshini College of Engineering, Nagpur',
            university: 'RTMNU',
            period: '2023 - 2026',
            status: 'Pursuing'
        },
        {
            id: 2,
            degree: 'Diploma in Computer Engineering',
            institution: 'G.H. Raisoni Institute of Information and Technology, Nagpur',
            university: 'MSBTE',
            period: '2023',
            percentage: '80%'
        },
        {
            id: 3,
            degree: '12th (HSC)',
            institution: 'Dharampeth M.P. Deo Memorial Science College, Nagpur',
            period: '2021',
            percentage: '88%'
        },
        {
            id: 4,
            degree: '10th (SSC)',
            institution: 'Saraswati Madhyamik Vidyalaya, Prasad Nagar',
            period: '2019',
            percentage: '73%'
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
                className="popup-content experience-popup"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="popup-close" onClick={handleClose}>
                    ✕
                </button>
                <div className="popup-header">
                    <h2 className="popup-title">EXPERIENCE & EDUCATION</h2>
                    <div className="popup-subtitle">PROFESSIONAL JOURNEY & ACADEMIC BACKGROUND</div>
                    <div className="keyboard-hint">Press ESC to close</div>
                </div>

                <div className="experience-section">
                    <h3 className="section-heading">Professional Experience</h3>
                    <div className="experience-timeline">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className="experience-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="timeline-marker"></div>

                                <div className="experience-header">
                                    <div className="experience-main">
                                        <h4 className="experience-role">{exp.role}</h4>
                                        <div className="experience-company">{exp.company}</div>
                                    </div>
                                    <div className="experience-meta">
                                        <span className={`experience-type ${exp.type.toLowerCase()}`}>
                                            {exp.type}
                                        </span>
                                    </div>
                                </div>

                                <div className="experience-details">
                                    <div className="experience-info">
                                        <div className="info-item">📅 {exp.period}</div>
                                        <div className="info-item">📍 {exp.location}</div>
                                    </div>

                                    <ul className="experience-responsibilities">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx}>{resp}</li>
                                        ))}
                                    </ul>

                                    <div className="experience-tech">
                                        {exp.tech.map((technology, idx) => (
                                            <span key={idx} className="tech-badge">{technology}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="education-section">
                    <h3 className="section-heading">Education</h3>
                    <div className="education-timeline">
                        {education.map((edu, index) => (
                            <div
                                key={edu.id}
                                className="education-card"
                                style={{ animationDelay: `${(experiences.length + index) * 0.1}s` }}
                            >
                                <div className="timeline-marker"></div>

                                <div className="education-header">
                                    <h4 className="education-degree">{edu.degree}</h4>
                                    {edu.status && <span className="education-status">{edu.status}</span>}
                                    {edu.percentage && <span className="education-percentage">{edu.percentage}</span>}
                                </div>

                                <div className="education-institution">{edu.institution}</div>
                                {edu.university && <div className="education-university">{edu.university}</div>}
                                <div className="education-period">📅 {edu.period}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperiencePopup
