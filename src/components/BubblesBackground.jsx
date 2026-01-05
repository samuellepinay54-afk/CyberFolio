import { useEffect, useRef } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const BubblesBackground = () => {
  const canvasRef = useRef(null)
  const bubblesRef = useRef([])
  const animationFrameRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let mouseX = 0
    let mouseY = 0

    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.offsetWidth
        canvas.height = container.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    class Bubble {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 60 + 20
        this.dx = (Math.random() - 0.5) * 0.5
        this.dy = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.3 + 0.1
        this.color = theme === 'dark' ? '#00d9ff' : '#2d3748'
      }

      update() {
        this.x += this.dx
        this.y += this.dy

        // Bounce off edges
        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
          this.dx = -this.dx
        }
        if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
          this.dy = -this.dy
        }

        // Mouse repulsion
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 150) {
          const force = (150 - distance) / 150
          this.dx -= (dx / distance) * force * 0.02
          this.dy -= (dy / distance) * force * 0.02
        }
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.shadowBlur = 20
        ctx.shadowColor = this.color
        ctx.fill()
        ctx.restore()
      }
    }

    // Initialize bubbles
    const numBubbles = Math.floor((canvas.width * canvas.height) / 15000)
    bubblesRef.current = Array.from({ length: numBubbles }, () => new Bubble())

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    canvas.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      bubblesRef.current.forEach((bubble) => {
        bubble.update()
        bubble.draw()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Pause on visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameRef.current)
      } else {
        animate()
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-60"
      style={{ filter: 'blur(0.5px)' }}
    />
  )
}

export default BubblesBackground

