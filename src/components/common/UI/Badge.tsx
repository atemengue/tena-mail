import React from 'react'

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
export type BadgeSize = 'sm' | 'md' | 'lg'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  size?: BadgeSize
  rounded?: boolean
  className?: string
}

export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  rounded = false,
  className = ''
}: BadgeProps) {
  const variantClasses = {
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    danger: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-indigo-100 text-indigo-800'
  }
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1'
  }
  
  const roundedClasses = rounded ? 'rounded-full' : 'rounded'
  
  return (
    <span className={`inline-flex items-center ${variantClasses[variant]} ${sizeClasses[size]} ${roundedClasses} ${className}`}>
      {children}
    </span>
  )
} 