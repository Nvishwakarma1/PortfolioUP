import { useState, useRef, useEffect } from 'react'
import './CodeStats.css'
import { FaChartBar } from 'react-icons/fa'

const CodeStats = ({ onToggle }) => {
    const [isOpen, setIsOpen] = useState(false)
    const statsRef = useRef(null)

    const stats = [
        { value: '4', label: 'Projects Completed', color: 'cyan' },
        { value: '5000+', label: 'Lines of Code', color: 'purple' },
        { value: 'Student', label: 'Fresher', color: 'blue' },
        { value: '98%', label: 'Client Satisfaction', color: 'pink' },
    ]

    const handleToggle = () => {
        const newState = !isOpen
        setIsOpen(newState)
        if (onToggle) onToggle(newState)
    }

    const handleClickOutside = (e) => {
        if (statsRef.current && !statsRef.current.contains(e.target)) {
            const trigger = document.querySelector('.code-stats-trigger')
            if (trigger && !trigger.contains(e.target)) {
                setIsOpen(false)
                if (onToggle) onToggle(false)
            }
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    return (
        <>
            {/* Trigger Button */}
            <div className="code-stats-trigger" onClick={handleToggle}>
                <div className="trigger-frame">
                    <div className="trigger-content">
                        <span className="trigger-icon"><FaChartBar /></span>
                        <span className="trigger-text">CodeStats</span>
                    </div>
                </div>
            </div>

            {/* Stats Panel - Slides up from small-frame */}
            <div
                ref={statsRef}
                className={`code-stats-container ${isOpen ? 'visible' : ''}`}
            >
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`stat-box stat-${stat.color}`}
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                        <div className="stat-glow"></div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CodeStats
