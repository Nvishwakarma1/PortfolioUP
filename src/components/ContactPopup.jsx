import { useState, useEffect } from 'react'
import './ContactPopup.css'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const ContactPopup = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'nageshvsh1234@gmail.com',
            link: 'mailto:nageshvsh1234@gmail.com',
            color: '#ec4899'
        },
        {
            icon: <FaPhone />,
            label: 'Phone',
            value: '+91-8624006449',
            link: 'tel:+918624006449',
            color: '#10b981'
        },
        {
            icon: <FaMapMarkerAlt />,
            label: 'Location',
            value: 'Nagpur, Maharashtra, India',
            link: null,
            color: '#a855f7'
        },
        {
            icon: <FaGithub />,
            label: 'GitHub',
            value: 'github.com/Nvishwakarma1',
            link: 'https://github.com/Nvishwakarma1?tab=repositories',
            color: '#00ffff'
        },
        {
            icon: <FaLinkedin />,
            label: 'LinkedIn',
            value: 'Nagesh Vishwakarma',
            link: 'https://www.linkedin.com/in/nagesh-vishwakarma',
            color: '#0077b5'
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

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Thank you for your message! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    if (!isOpen) return null

    return (
        <div className="popup-overlay" onClick={handleClose}>
            <div
                className="popup-content contact-popup"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="popup-close" onClick={handleClose}>
                    ✕
                </button>
                <div className="popup-header">
                    <h2 className="popup-title">GET IN TOUCH</h2>
                    <div className="popup-subtitle">LET'S BUILD SOMETHING TOGETHER</div>
                    <div className="keyboard-hint">Press ESC to close</div>
                </div>

                <div className="contact-content">
                    <div className="contact-info-section">
                        <h3 className="section-title">CONTACT INFORMATION</h3>
                        <div className="contact-cards">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="contact-card"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                        '--card-color': info.color
                                    }}
                                >
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-link"
                                        >
                                            <div className="contact-icon">{info.icon}</div>
                                            <div className="contact-details">
                                                <div className="contact-label">{info.label}</div>
                                                <div className="contact-value">{info.value}</div>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="contact-link">
                                            <div className="contact-icon">{info.icon}</div>
                                            <div className="contact-details">
                                                <div className="contact-label">{info.label}</div>
                                                <div className="contact-value">{info.value}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="contact-form-section">
                        <h3 className="section-title">SEND A MESSAGE</h3>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="5"
                                    className="form-textarea"
                                />
                            </div>
                            <button type="submit" className="submit-button">
                                <FaPaperPlane />
                                <span>SEND MESSAGE</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPopup
