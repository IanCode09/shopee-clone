import React from 'react'
import './Button.css'

const Button = (props) => {
    const btnType = [props.btnType]

    if(props.isPrimary) btnType.push("btn btn-primary")
    if(props.isSecondary) btnType.push("btn btn-secondary")
    if(props.isDisabled) btnType.push("btn btn-disabled")
    if(props.isSearch) btnType.push("btn btn-search")

    return (
        <button className={btnType.join("")} disabled={props.disabled} onClick={props.onClick}>
            {props.children}
        </button>

    )
}

export default Button
