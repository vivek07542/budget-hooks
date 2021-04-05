import React from 'react'

const BudgetStatment = (props) => {
    return (
        <div>
            <p>{props.budget}</p>
            <p>{props.expenditure}</p>
            <p>{props.budget - props.expenditure}</p>
        </div>
    )
}

export default BudgetStatment
