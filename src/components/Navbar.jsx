import './Navbar.css'
import ProjectsPopup from './ProjectsPopup'
import TechStackPopup from './TechStackPopup'
import ExperiencePopup from './ExperiencePopup'
import ContactPopup from './ContactPopup'

const Navbar = ({
    isProjectsOpen,
    onProjectsOpen,
    onProjectsClose,
    isTechStackOpen,
    onTechStackOpen,
    onTechStackClose,
    isExperienceOpen,
    onExperienceOpen,
    onExperienceClose,
    isContactOpen,
    onContactOpen,
    onContactClose
}) => {
    const navItems = [
        { name: 'PROJECTS', color: '#00ffff', hasPopup: true }, // Cyan
        { name: 'TECH STACK', color: '#a855f7', hasPopup: true }, // Purple
        { name: 'EXPERIENCE', color: '#3b82f6', hasPopup: true }, // Blue
        { name: 'CONTACT', color: '#ec4899', hasPopup: true } // Pink
    ]

    const handleNavClick = (itemName) => {
        if (itemName === 'PROJECTS') {
            onProjectsOpen()
        } else if (itemName === 'TECH STACK') {
            onTechStackOpen()
        } else if (itemName === 'EXPERIENCE') {
            onExperienceOpen()
        } else if (itemName === 'CONTACT') {
            onContactOpen()
        }
    }

    return (
        <>
            <nav className="cad-navbar">
                <div className="nav-container">
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            className="nav-item"
                            style={{ '--item-color': item.color }}
                            onClick={() => handleNavClick(item.name)}
                        >
                            <span className="nav-text">{item.name}</span>
                            <span className="nav-line"></span>
                        </button>
                    ))}
                </div>
            </nav>

            <ProjectsPopup
                isOpen={isProjectsOpen}
                onClose={onProjectsClose}
            />

            <TechStackPopup
                isOpen={isTechStackOpen}
                onClose={onTechStackClose}
            />

            <ExperiencePopup
                isOpen={isExperienceOpen}
                onClose={onExperienceClose}
            />

            <ContactPopup
                isOpen={isContactOpen}
                onClose={onContactClose}
            />
        </>
    )
}

export default Navbar
