import React from 'react'

function InputBox({
    label, 
    amount, onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    

    className = ""
}) {

    return (
        <div className = {'bg-white p-3 rounded-lg text-sm flex ${className}'}>
            <div className = "w-1/2">
            
            </div>
        </div>
    )
}
export default InputBox