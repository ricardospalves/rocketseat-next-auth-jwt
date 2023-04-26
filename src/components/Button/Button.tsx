import classNames from 'classnames'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

export type ButtonProps = ComponentPropsWithoutRef<'button'>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={classNames([
          'block w-full py-2 px-4 bg-blue-700 font-bold hover:bg-blue-900 focus-visible:bg-blue-900 text-white rounded focus:outline-none focus:ring focus:ring-orange-500 transition-colors',
          className,
        ])}
        ref={ref}
        {...props}
      >
        Sign in
      </button>
    )
  },
)

Button.displayName = 'Button'
