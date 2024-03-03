"use client"
import React, { ReactElement, useEffect, useRef, useState } from 'react'

function AnimationWrapper({ initialClass = "", animationClass, visited = false, threshold, children }: { initialClass?: string, animationClass: string, visited?: boolean, threshold?: number, children: ReactElement }) {
  const [isVisible, setIsVisible] = useState(visited);
  const elementRef = useRef(null);

  useEffect(() => {
    const options: IntersectionObserverInit | undefined = threshold ? { threshold }: undefined;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target)
        }
      })
    }, options)

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    }

  }, []);


  return (
    <div ref={elementRef} className={isVisible ? initialClass + ' ' + animationClass : initialClass}>{children}</div>
  )
}

export default AnimationWrapper