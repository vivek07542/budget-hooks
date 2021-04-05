import React, { useState } from 'react'
import Button from '@material-ui/core/Button';

const Budget = (props) => {
    const [budgetAllocate, setBudgetAllocated] = useState("");

    const inputChangeHandler = (event) => {
        setBudgetAllocated(event.target.value);
    }

    const resetInput = ()=>{
        setBudgetAllocated("")
    }
    return (
        <div>
            <input type="number"
                placeholder="Budget"
                onChange={inputChangeHandler}
                value={budgetAllocate} />
            <Button variant="outlined" color="primary"
                onClick={() => {props.budgetClicked(budgetAllocate); resetInput()}}>
                Add Budget
                </Button>
        </div>
    )
}
export default Budget;