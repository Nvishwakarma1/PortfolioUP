import { useState, useEffect } from 'react'
import './TechStackPopup.css'

const TechStackPopup = ({ isOpen, onClose }) => {
    const techCategories = [
        {
            category: 'Frontend Technologies',
            color: '#00ffff',
            technologies: [
                { name: 'HTML', level: 95, icon: '🌐' },
                { name: 'CSS', level: 95, icon: '🎨' },
                { name: 'JavaScript', level: 90, icon: '⚡' },
                { name: 'React (Vite)', level: 85, icon: '⚛️' },
                { name: 'PHP', level: 70, icon: '🐘' }
            ]
        },
        {
            category: 'Programming Languages',
            color: '#a855f7',
            technologies: [
                { name: 'JavaScript', level: 90, icon: '📜' },
                { name: 'Python', level: 75, icon: '🐍' },
                { name: 'Java Basics', level: 65, icon: '☕' },
                { name: 'Node.js', level: 75, icon: '🟢' }
            ]
        },
        {
            category: 'Web Development',
            color: '#ec4899',
            technologies: [
                { name: 'Responsive Design', level: 90, icon: '📱' },
                { name: 'UI Design', level: 85, icon: '🎯' },
                { name: 'Component-based Architecture', level: 80, icon: '🧩' }
            ]
        },
        {
            category: 'Computer Knowledge',
            color: '#10b981',
            technologies: [
                { name: 'Hardware & Software', level: 85, icon: '💻' },
                { name: 'MS Office', level: 90, icon: '📊' },
                { name: 'Troubleshooting', level: 90, icon: '🔧' },
                { name: 'OS & Software Installation', level: 85, icon: '⚙️' }
            ]
        },
        {
            category: 'AI Tools',
            color: '#fbbf24',
            technologies: [
                { name: 'GitHub Copilot', level: 85, icon: '🤖' },
                { name: 'Claude', level: 80, icon: '🧠' },
                { name: 'Gemini', level: 85, icon: '✨' },
                { name: 'GPT-4o', level: 80, icon: '💬' },
                { name: 'Firebase Studio', level: 75, icon: '🔥' },
                { name: 'Antigravity', level: 90, icon: '🚀' }
            ]
        },
        {
            category: 'Soft Skills',
            color: '#06b6d4',
            technologies: [
                { name: 'Communication', level: 90, icon: '🗣️' },
                { name: 'Problem-solving', level: 95, icon: '🧩' },
                { name: 'Teamwork', level: 90, icon: '👥' }
            ]
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
                className="popup-content techstack-popup"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="popup-close" onClick={handleClose}>
                    ✕
                </button>
                <div className="popup-header">
                    <h2 className="popup-title">TECH STACK</h2>
                    <div className="popup-subtitle">SKILLS & EXPERTISE</div>
                    <div className="keyboard-hint">Press ESC to close</div>
                </div>

                <div className="tech-categories">
                    {techCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="tech-category"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            <h3
                                className="category-title"
                                style={{ '--category-color': category.color }}
                            >
                                {category.category}
                            </h3>

                            <div className="tech-items">
                                {category.technologies.map((tech, techIdx) => (
                                    <div
                                        key={techIdx}
                                        className="tech-item"
                                        style={{ animationDelay: `${(idx * 0.1) + (techIdx * 0.05)}s` }}
                                    >
                                        <div className="tech-header">
                                            <span className="tech-icon">{tech.icon}</span>
                                            <span className="tech-name">{tech.name}</span>
                                            <span className="tech-level">{tech.level}%</span>
                                        </div>
                                        <div className="tech-bar">
                                            <div
                                                className="tech-bar-fill"
                                                style={{
                                                    width: `${tech.level}%`,
                                                    '--bar-color': category.color
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStackPopup
