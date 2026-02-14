import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProfileImage from './components/ProfileImage'
import FloatingButtons from './components/FloatingButtons'
import DecorativeFrames from './components/DecorativeFrames'
import TechStack from './components/TechStack'
import CodeStats from './components/CodeStats'

function App() {
    const [isCodeStatsOpen, setIsCodeStatsOpen] = useState(false)
    const [isProjectsPopupOpen, setIsProjectsPopupOpen] = useState(false)
    const [isTechStackPopupOpen, setIsTechStackPopupOpen] = useState(false)
    const [isExperiencePopupOpen, setIsExperiencePopupOpen] = useState(false)
    const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)

    const handleCodeStatsToggle = (isOpen) => {
        setIsCodeStatsOpen(isOpen)
    }

    const handleProjectsPopupOpen = () => {
        setIsProjectsPopupOpen(true)
    }

    const handleProjectsPopupClose = () => {
        setIsProjectsPopupOpen(false)
    }

    const handleTechStackPopupOpen = () => {
        setIsTechStackPopupOpen(true)
    }

    const handleTechStackPopupClose = () => {
        setIsTechStackPopupOpen(false)
    }

    const handleExperiencePopupOpen = () => {
        setIsExperiencePopupOpen(true)
    }

    const handleExperiencePopupClose = () => {
        setIsExperiencePopupOpen(false)
    }

    const handleContactPopupOpen = () => {
        setIsContactPopupOpen(true)
    }

    const handleContactPopupClose = () => {
        setIsContactPopupOpen(false)
    }

    return (
        <div className="app-container">
            {/* Hero Section */}
            <HeroSection onViewProjects={handleProjectsPopupOpen} />

            {/* Profile Image with Dimensions */}
            <ProfileImage />

            {/* Code Statistics */}
            <CodeStats onToggle={handleCodeStatsToggle} />

            {/* Tech Stack Showcase */}
            <TechStack />

            {/* Floating + Buttons - Hidden when CodeStats is open */}
            {!isCodeStatsOpen && <FloatingButtons />}

            {/* Decorative Frames */}
            <DecorativeFrames />

            {/* Navigation Bar */}
            <Navbar
                isProjectsOpen={isProjectsPopupOpen}
                onProjectsOpen={handleProjectsPopupOpen}
                onProjectsClose={handleProjectsPopupClose}
                isTechStackOpen={isTechStackPopupOpen}
                onTechStackOpen={handleTechStackPopupOpen}
                onTechStackClose={handleTechStackPopupClose}
                isExperienceOpen={isExperiencePopupOpen}
                onExperienceOpen={handleExperiencePopupOpen}
                onExperienceClose={handleExperiencePopupClose}
                isContactOpen={isContactPopupOpen}
                onContactOpen={handleContactPopupOpen}
                onContactClose={handleContactPopupClose}
            />

            {/* Version Info */}
            <div className="fixed-label version-label">
                v2.5.0
            </div>

            <div className="fixed-label info-block">
                <div className="project-info">
                    STATUS: AVAILABLE FOR HIRE<br />
                    FULL-STACK ENGINEER
                </div>
                <div className="status-indicator">
                    <span className="status-dot"></span> ONLINE
                </div>
            </div>
        </div>
    )
}

export default App
