'use client'

import React, { useEffect, useState } from 'react'

type ToastVariant = 'info' | 'success' | 'warning' | 'error'
type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'

interface ToastProps {
  variant?: ToastVariant
  title?: string
  message: string
  duration?: number
  onClose?: () => void
  position?: ToastPosition
  showProgress?: boolean
}

export default function Toast({
  variant = 'info',
  title,
  message,
  duration = 5000,
  onClose,
  position = 'top-right',
  showProgress = true
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(100)
  
  useEffect(() => {
    if (duration === Infinity) return
    
    const timer = setTimeout(() => {
      setIsVisible(false)
      if (onClose) onClose()
    }, duration)
    
    if (showProgress) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev - (100 / (duration / 100))
          return newProgress < 0 ? 0 : newProgress
        })
      }, 100)
      
      return () => {
        clearTimeout(timer)
        clearInterval(interval)
      }
    }
    
    return () => clearTimeout(timer)
  }, [duration, onClose, showProgress])
  
  if (!isVisible) return null
  
  const handleClose = () => {
    setIsVisible(false)
    if (onClose) onClose()
  }
  
  const variantClasses = {
    info: 'bg-blue-50 border-blue-200',
    success: 'bg-green-50 border-green-200',
    warning: 'bg-yellow-50 border-yellow-200',
    error: 'bg-red-50 border-red-200'
  }
  
  const textColors = {
    info: 'text-blue-800',
    success: 'text-green-800',
    warning: 'text-yellow-800',
    error: 'text-red-800'
  }
  
  const progressColors = {
    info: 'bg-blue-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500'
  }
  
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
  }
  
  const icons = {
    info: (
      <svg className="h-6 w-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    success: (
      <svg className="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    warning: (
      <svg className="h-6 w-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    error: (
      <svg className="h-6 w-6 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
  
  return (
    <div className={`fixed ${positionClasses[position]} max-w-sm w-full shadow-lg rounded-lg pointer-events-auto overflow-hidden z-50`}>
      <div className={`${variantClasses[variant]} border rounded-lg shadow-xs`}>
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {icons[variant]}
            </div>
            <div className="ml-3 w-0 flex-1">
              {title && (
                <p className={`text-sm font-medium ${textColors[variant]}`}>
                  {title}
                </p>
              )}
              <p className={`mt-1 text-sm ${textColors[variant]}`}>
                {message}
              </p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                className={`inline-flex ${textColors[variant]} focus:outline-none focus:text-gray-500`}
                onClick={handleClose}
              >
                <span className="sr-only">Fermer</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {showProgress && (
          <div className="h-1 w-full bg-gray-200">
            <div
              className={`h-full ${progressColors[variant]} transition-all duration-100 ease-linear`}
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  )
} 