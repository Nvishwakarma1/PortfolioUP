import { useState, useEffect } from 'react'
import './AnimatedLines.css'

const AnimatedLines = () => {
    const [lines, setLines] = useState([])

    // Generate random lines with tech colors
    const generateLine = (id) => {
        const isHorizontal = Math.random() > 0.5
        const speed = 3 + Math.random() * 5 // 3-8 seconds
        const delay = Math.random() * 3 // 0-3 seconds delay
        const thickness = 1 + Math.random() * 1.5 // 1-2.5px
        const opacity = 0.2 + Math.random() * 0.4 // 0.2-0.6

        // Tech colors - cyan, purple, blue
        const colors = [
            'rgba(0, 255, 255, 0.6)',    // Cyan
            'rgba(168, 85, 247, 0.6)',   // Purple
            'rgba(59, 130, 246, 0.6)',   // Blue
            'rgba(236, 72, 153, 0.5)',   // Pink
        ]
        const color = colors[Math.floor(Math.random() * colors.length)]

        if (isHorizontal) {
            const top = Math.random() * 100
            const direction = Math.random() > 0.5 ? 'ltr' : 'rtl'

            return {
                id,
                isHorizontal: true,
                top: `${top}%`,
                speed,
                delay,
                thickness,
                opacity,
                color,
                direction
            }
        } else {
            const left = Math.random() * 100
            const direction = Math.random() > 0.5 ? 'ttb' : 'btt'

            return {
                id,
                isHorizontal: false,
                left: `${left}%`,
                speed,
                delay,
                thickness,
                opacity,
                color,
                direction
            }
        }
    }

    useEffect(() => {
        // Initial lines
        const initialLines = Array.from({ length: 20 }, (_, i) => generateLine(i))
        setLines(initialLines)

        // Add new lines periodically
        const interval = setInterval(() => {
            setLines(prevLines => {
                const newId = Date.now()
                const newLine = generateLine(newId)

                // Keep maximum 30 lines
                const updatedLines = [...prevLines, newLine]
                if (updatedLines.length > 30) {
                    return updatedLines.slice(-30)
                }
                return updatedLines
            })
        }, 2500)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="animated-lines-container">
            {lines.map(line => (
                <div
                    key={line.id}
                    className={`animated-line ${line.isHorizontal ? 'horizontal' : 'vertical'} ${line.direction}`}
                    style={{
                        ...(line.isHorizontal
                            ? { top: line.top, height: `${line.thickness}px` }
                            : { left: line.left, width: `${line.thickness}px` }
                        ),
                        backgroundColor: line.color,
                        boxShadow: `0 0 10px ${line.color}`,
                        opacity: line.opacity,
                        animationDuration: `${line.speed}s`,
                        animationDelay: `${line.delay}s`
                    }}
                />
            ))}
        </div>
    )
}

export default AnimatedLines
