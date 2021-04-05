import React from 'react';
import {useDispatch} from "react-redux";
import * as budgetAction from "../../store/reducer/reducer";
import ExpenseCreator from "./ExpenseCreator/ExpenseCreator";


const ExpenseStatment = (props) =>{
    const dispatch = useDispatch();
    let expenses = props.expense.map(expense => {
        return(<ExpenseCreator 
                key={expense.id}
                id={expense.id}
                title = {expense.title}
                price = {expense.price}
                editHandler = {(id) => dispatch (budgetAction.editHandler(id))}
                deleteHandler = { (id) => dispatch (budgetAction.deleteHandler(id))}
            /> )
        })
        return (
            <div className="ExpenseStatment">
                {expenses}
            </div>
        )    
}

export default ExpenseStatment;
