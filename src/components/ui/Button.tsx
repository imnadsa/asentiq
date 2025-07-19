'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
  loading?: boolean
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    children, 
    className, 
    loading = false,
    disabled,
    onClick,
    href,
    ...props 
  }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-styrene-b font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      primary: "bg-text-primary text-white hover:bg-gray-800 active:bg-gray-900 shadow-sm hover:shadow-md",
      secondary: "bg-white text-text-primary border-2 border-cream-dark hover:border-text-primary hover:shadow-md active:scale-[0.98]",
      outline: "border-2 border-accent-500 text-accent-600 hover:bg-accent-50 active:bg-accent-100",
      ghost: "text-text-primary hover:bg-cream-dark active:bg-cream-dark/80"
    }
    
    const sizes = {
      sm: "text-sm px-4 py-2 h-9",
      md: "text-base px-6 py-3 h-11",
      lg: "text-lg px-8 py-4 h-13",
      xl: "text-xl px-10 py-5 h-15"
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (href) {
        window.location.href = href
        return
      }
      onClick?.(e)
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          loading && "cursor-wait",
          className
        )}
        disabled={disabled || loading}
        onClick={handleClick}
        {...props}
      >
        {loading ? (
          <>
            <svg 
              className="animate-spin -ml-1 mr-2 h-4 w-4" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Загрузка...
          </>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = "Button"

export default Button
