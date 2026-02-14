import './TechStack.css'
import { FaReact, FaPython, FaGithub, FaGitAlt } from 'react-icons/fa'
import { SiHtml5, SiCss3, SiJavascript, SiVite, SiFirebase } from 'react-icons/si'
const TechStack = () => {
    const technologies = [
  {
    name: 'HTML',
    category: 'Frontend',
    icon: <SiHtml5 color="#E34F26" />,
  },
  {
    name: 'CSS',
    category: 'Frontend',
    icon: <SiCss3 color="#1572B6" />,
  },
  {
    name: 'JavaScript',
    category: 'Language',
    icon: <SiJavascript color="#F7DF1E" />,
  },
  {
    name: 'React (Vite)',
    category: 'Frontend',
    icon: <FaReact color="#61DAFB" />,
  },
  {
    name: 'Python',
    category: 'Language',
    icon: <FaPython color="#3776AB" />,
  },
  {
    name: 'GitHub',
    category: 'Version Control',
    icon: <FaGithub color="#413e3eff" />,
  },
  {
    name: 'Git',
    category: 'Version Control',
    icon: <FaGitAlt color="#F05032" />,
  },
  {
    name: 'Firebase ',
    category: 'Ai studio',
    icon: <SiFirebase color="#FFCA28" />,
  },
];


    return (
        <div className="tech-stack-container">
            <div className="tech-stack-header">
                <span className="tech-tag">// TECH STACK</span>
                <h2 className="tech-title">Technologies I Work With</h2>
            </div>
            <div className="tech-grid">
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        className="tech-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="tech-icon">{tech.icon}</div>
                        <div className="tech-name">{tech.name}</div>
                        <div className="tech-category">{tech.category}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechStack
