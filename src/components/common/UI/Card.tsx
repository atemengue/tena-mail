import React from 'react'

interface CardProps {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string
  headerClassName?: string
  bodyClassName?: string
  footerClassName?: string
}

export default function Card({
  title,
  subtitle,
  children,
  footer,
  className = '',
  headerClassName = '',
  bodyClassName = '',
  footerClassName = ''
}: CardProps) {
  return (
    <div className={`bg-white shadow rounded-lg overflow-hidden ${className}`}>
      {(title || subtitle) && (
        <div className={`px-4 py-5 sm:px-6 ${headerClassName}`}>
          {title && (
            typeof title === 'string' 
              ? <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
              : title
          )}
          {subtitle && (
            typeof subtitle === 'string'
              ? <p className="mt-1 max-w-2xl text-sm text-gray-500">{subtitle}</p>
              : subtitle
          )}
        </div>
      )}
      <div className={`px-4 py-5 sm:p-6 ${bodyClassName}`}>
        {children}
      </div>
      {footer && (
        <div className={`px-4 py-4 sm:px-6 bg-gray-50 ${footerClassName}`}>
          {footer}
        </div>
      )}
    </div>
  )
} 