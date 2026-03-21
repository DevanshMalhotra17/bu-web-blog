import { useRef, useEffect, useState, useCallback } from "react"
import "./scroll-areaExpanded.css"

export default function ScrollArea({ children, className = "" }) {
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const thumbRef = useRef(null)
  const trackRef = useRef(null)

  const [isDragging, setIsDragging] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const [thumbHeight, setThumbHeight] = useState(0)
  const [thumbTop, setThumbTop] = useState(0)

  const updateScrollbar = useCallback(() => {
    if (!containerRef.current || !contentRef.current) return

    const container = containerRef.current
    const content = contentRef.current

    const containerHeight = container.clientHeight
    const contentHeight = content.scrollHeight

    if (contentHeight <= containerHeight) {
      setThumbHeight(0)
      return
    }

    const thumbHeightRatio = containerHeight / contentHeight
    const newThumbHeight = Math.max(thumbHeightRatio * containerHeight, 20)
    setThumbHeight(newThumbHeight)

    const scrollRatio = scrollTop / (contentHeight - containerHeight)
    const maxThumbTop = containerHeight - newThumbHeight
    setThumbTop(scrollRatio * maxThumbTop)
  }, [scrollTop])

  const handleWheel = useCallback(
    (e) => {
      e.preventDefault()
      if (!contentRef.current || !containerRef.current) return

      const container = containerRef.current
      const content = contentRef.current
      const maxScroll = content.scrollHeight - container.clientHeight

      const newScrollTop = Math.max(0, Math.min(maxScroll, scrollTop + e.deltaY))
      setScrollTop(newScrollTop)
    },
    [scrollTop],
  )

  const handleMouseDown = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging || !containerRef.current || !contentRef.current) return

      const container = containerRef.current
      const content = contentRef.current
      const containerRect = container.getBoundingClientRect()

      const mouseY = e.clientY - containerRect.top
      const maxThumbTop = container.clientHeight - thumbHeight
      const newThumbTop = Math.max(0, Math.min(maxThumbTop, mouseY - thumbHeight / 2))

      const scrollRatio = newThumbTop / maxThumbTop
      const maxScroll = content.scrollHeight - container.clientHeight
      const newScrollTop = scrollRatio * maxScroll

      setScrollTop(newScrollTop)
    },
    [isDragging, thumbHeight],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener("wheel", handleWheel, { passive: false })
    return () => container.removeEventListener("wheel", handleWheel)
  }, [handleWheel])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  useEffect(() => {
    updateScrollbar()
  }, [updateScrollbar])

  useEffect(() => {
    const handleResize = () => updateScrollbar()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [updateScrollbar])

  return (
    <div className={`scroll-area-wrapper ${className}`} ref={containerRef}>
      <div className="scroll-area-content" ref={contentRef} style={{ transform: `translateY(-${scrollTop}px)` }}>
        {children}
      </div>

      {thumbHeight > 0 && (
        <div className="scroll-area-track" ref={trackRef}>
          <div
            className="scroll-area-thumb"
            ref={thumbRef}
            style={{
              height: `${thumbHeight}px`,
              transform: `translateY(${thumbTop}px)`,
            }}
            onMouseDown={handleMouseDown}
          />
        </div>
      )}
    </div>
  )
}
