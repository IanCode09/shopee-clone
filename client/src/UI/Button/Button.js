import React from 'react'
import './Button.css'

const Button = (props) => {
    const btnType = [props.btnType]

    if(props.isPrimary) btnType.push("btn btn-primary")

    return (
        <button className={btnType.join("")} onClick={props.onClick}>
            {props.children}
        </button>

    )
}

export default Button
