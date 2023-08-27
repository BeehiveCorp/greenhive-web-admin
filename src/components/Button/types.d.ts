import { ReactNode } from 'react'

export type ButtonProps = {
  primary?: boolean
  secondary?: boolean
  variant: 'solid' | 'outline' | 'ghost'
  text?: string
  LeftIcon?: () => ReactNode
  RightIcon?: () => ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
  style?: React.CSSProperties
}
