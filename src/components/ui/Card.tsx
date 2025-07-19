import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'bordered' | 'ghost'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  hover?: boolean
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  variant = 'default',
  padding = 'md',
  hover = false 
}) => {
  const baseStyles = "rounded-2xl transition-all duration-200"
  
  const variants = {
    default: "bg-white",
    elevated: "bg-white shadow-sm hover:shadow-md",
    bordered: "bg-white border border-cream-dark",
    ghost: "bg-transparent"
  }
  
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6", 
    lg: "p-8",
    xl: "p-10"
  }
  
  const hoverEffect = hover ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer" : ""

  return (
    <div 
      className={cn(
        baseStyles,
        variants[variant],
        paddings[padding],
        hoverEffect,
        className
      )}
    >
      {children}
    </div>
  )
}

// Дополнительные компоненты для структурированного контента
const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <div className={cn("mb-4", className)}>
    {children}
  </div>
)

const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <h3 className={cn("text-xl font-styrene-a font-semibold text-text-primary", className)}>
    {children}
  </h3>
)

const CardDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <p className={cn("text-text-secondary font-styrene-b", className)}>
    {children}
  </p>
)

const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <div className={cn("", className)}>
    {children}
  </div>
)

const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <div className={cn("mt-6 pt-4 border-t border-cream-dark/50", className)}>
    {children}
  </div>
)

// Экспортируем все компоненты
Card.Header = CardHeader
Card.Title = CardTitle
Card.Description = CardDescription
Card.Content = CardContent
Card.Footer = CardFooter

export default Card
