import React from "react"
import styles from "./Button.module.scss"
import type { ButtonHTMLAttributes, ReactNode } from "react"
import classNames from "classnames"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "secondary"
  size?: "sm" | "md" | "lg"
  isLoading?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  iconLeft,
  iconRight,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const buttonClass = classNames(
    styles.button,
    styles[variant],
    styles[size],
    {
      [styles.loading]: isLoading,
    },
    className
  )

  return (
    <button
      className={buttonClass}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <span className={styles.spinner} />}
      {!isLoading && iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      <span>{children}</span>
      {!isLoading && iconRight && <span className={styles.iconRight}>{iconRight}</span>}
    </button>
  )
}
