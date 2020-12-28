import React from 'react'
import './Button.css'

const Button = (props) => {
    const btnClassName = [props.btnClassName]
    const btnType = [props.btnType]

    if(props.isPrimary) btnClassName.push("btn btn-primary")
    if(props.isSecondary) btnClassName.push("btn btn-secondary")
    if(props.isDisabled) btnClassName.push("btn btn-disabled")
    if(props.isSearch) btnClassName.push("btn btn-search")
    if(props.isButton) btnType.push("button")
    if(props.isSubmit) btnType.push("submit")

    return (
        <button className={btnClassName.join("")} type={btnType.join("")} disabled={props.disabled} onClick={props.onClick}>
            {props.children}
        </button>

    )
}

export default Button
