import React from 'react'

function Button({
    children,
    type = "button",
    className = '',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    ...props
}) {
  return (
    <button
      className={`rounded-lg px-4 py-2 ${className} ${bgColor} ${textColor} {...props}`}
    >{children}</button>
  )
}

export default Button