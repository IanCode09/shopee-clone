import React from 'react'
import './ErrorMessage.css'

const ErrorMessage = ({ className, children }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

ErrorMessage.defaultProps = {
    className: 'alert info'
}

export default ErrorMessage
