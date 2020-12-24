import React from 'react'
import CurrencyFormat from 'react-currency-format'

const Currency = ({ value }) => {
    return (
        <div>
            <CurrencyFormat 
                value={value} 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'Rp.'} 
            />
        </div>
    )
}

export default Currency
