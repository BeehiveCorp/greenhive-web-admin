import * as React from 'react'
import { SVGProps } from 'react'

const Icon: React.FC<SVGProps<SVGSVGElement> & { size?: number }> = ({
  color = '#fff',
  size = 32,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 32 32"
      {...rest}
    >
      <g clipPath="url(#a)">
        <path
          fill={color}
          d="m26.251 0-.04 23.375c0 3.733-3.173 6.756-8.336 6.756-.69 0-1.361-.067-2.002-.196 1.394-.915 2.176-2.34 2.176-3.939l.029-17.305s-5.566 1.065-6.136 5.48c-.2-1.78-1.235-3.013-2.401-3.854C9.54 4.964 9.543 0 9.543 0s7.688 1.428 8.367 7.4c.776-5.96 8.343-7.4 8.343-7.4h-.002Z"
        />
        <path
          stroke={color}
          strokeMiterlimit={10}
          d="m18.075 8.691-.029 17.306c0 1.598-.782 3.021-2.176 3.938-1.014.668-2.357 1.066-3.957 1.066-3.387 0-6.133-2.24-6.133-5.004L5.784 8.69s2.02.378 3.754 1.627c1.166.84 2.2 2.074 2.402 3.853.57-4.412 6.135-5.48 6.135-5.48Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export { Icon }
