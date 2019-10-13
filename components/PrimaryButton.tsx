import * as React from 'react'
import { lighten } from 'polished'

type Props = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const PRIMARY_COLOR = '#03cea4'

export const PrimaryButton = ({ className, ...restProps }: Props) => (
  <>
    <button {...restProps} className={`${className} container`} />
    <style jsx>{`
      .container {
        color: rgba(255, 255, 255, 0.9);
        background-color: ${PRIMARY_COLOR};
        border-radius: 0.25rem;
        padding: 0.5rem 2rem;
        box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
      }

      .container:hover {
        background-color: ${lighten(0.05)(PRIMARY_COLOR)};
        box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.125);
      }
    `}</style>
  </>
)

PrimaryButton.defaultProps = {
  className: '',
}
