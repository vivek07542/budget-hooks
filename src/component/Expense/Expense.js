import React, { useState,useEffect } from 'react';
import Button from '@material-ui/core/Button';
import "./Expense.css";


const Expense = (props) => {
   const[budgetApp,setBudgetApp]= useState({
        title: "",
        price: "",
        id: null,
        editMode : false
   })

   const expenseTitleHandler = (event) => {
    setBudgetApp({...budgetApp,title : event.target.value})
    }

    const expenseAmountHandler = (event) => {
        setBudgetApp({...budgetApp,price : event.target.value})
    }

    const resetInput = () =>{
        setBudgetApp({
            title:"",
            price: "",
            id: null,
            editMode : false
        })
    }

    useEffect(() => {
        if(props.editData !== null && props.editMode){
            if (props.editData.id !== budgetApp.id) {
                setBudgetApp({
                title : props.editData.title,  
                id : props.editData.id,
                price : props.editData.price,
                editMode : props.editMode
                })
            }
        }
        return null;
    },[props.editData])

    return (
        <div className="Expense">
        <input
        type="text"
        placeholder="Expense"
        onChange={expenseTitleHandler}
        value={budgetApp.title}
    />
    <input
        type="number"
        placeholder="Amount"
        onChange={expenseAmountHandler}
        value={budgetApp.price}
    />
    <Button variant="outlined" color="primary"
        onClick={() => {props.expenseClicked(budgetApp.title, budgetApp.price, budgetApp.id,budgetApp.editMode);resetInput()}}>
        Add Expense
    </Button>
</div>
    )
}

export default Expense;