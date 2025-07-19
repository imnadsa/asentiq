import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  as?: keyof JSX.IntrinsicElements
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className,
  size = 'lg',
  padding = 'md',
  as: Component = 'div'
}) => {
  const sizes = {
    sm: "max-w-2xl",     // 672px
    md: "max-w-4xl",     // 896px  
    lg: "max-w-6xl",     // 1152px
    xl: "max-w-7xl",     // 1280px
    full: "max-w-none"   // без ограничений
  }
  
  const paddings = {
    none: "",
    sm: "px-4",
    md: "px-4 sm:px-6", 
    lg: "px-4 sm:px-6 lg:px-8",
    xl: "px-4 sm:px-6 lg:px-8 xl:px-12"
  }

  return (
    <Component 
      className={cn(
        "mx-auto w-full",
        sizes[size],
        paddings[padding],
        className
      )}
    >
      {children}
    </Component>
  )
}

export default Container
