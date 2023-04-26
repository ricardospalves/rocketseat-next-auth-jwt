import classNames from 'classnames'
import { InputHTMLAttributes, forwardRef, useId } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

type TextFieldOwnProps = {
  label: string
  className?: string
}

type InputPropsWithoutTextFieldOwnProps = Omit<
  InputProps,
  keyof TextFieldOwnProps
>

export type TextFieldProps = InputPropsWithoutTextFieldOwnProps &
  TextFieldOwnProps

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, className, type, ...props }, ref) => {
    const id = useId()

    return (
      <label htmlFor={id} className={classNames(['block', className])}>
        <span>{label}</span>

        <input
          id={id}
          type={type || 'text'}
          className="block w-full h-10 px-2 border rounded text-base font-sans dark:bg-black dark:text-white border-neutral-900 dark:border-white focus:outline-none focus:ring focus:ring-orange-500"
          ref={ref}
          {...props}
        />
      </label>
    )
  },
)

TextField.displayName = 'TextField'
