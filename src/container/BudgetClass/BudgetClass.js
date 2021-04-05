import React, { useEffect } from "react";
import {useDispatch , useSelector} from "react-redux";
import "./BudgetClass.css";
import Budget from "../../component/Budget/Budget";
import BudgetStatment from "../../component/BudgetStatment/BudgetStatment";
import Expense from "../../component/Expense/Expense";
import ExpenseStatment from "../../component/ExpenseStatment/ExpenseStatment";
import * as budgetAction from "../../store/reducer/reducer";

const BudgetClass = () =>{
    const budget = useSelector(state => state.reducer.budget);
    const expense = useSelector(state => state.reducer.expense);
    const expenditure = useSelector(state => state.reducer.expenditure);
    const editData = useSelector(state => state.reducer.editData);
    const editMode = useSelector(state => state.reducer.editMode);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(budgetAction.initilizerHandler());
    },[])
        return (
            <div className="BudgetClass">
                <Budget budgetClicked={(budget)=>dispatch(budgetAction.budgetHandler(budget))}/>
                <BudgetStatment budget={budget} expenditure={expenditure}/>
                <Expense expenseClicked = {(title,price,id,editMode) => dispatch(budgetAction.expenseHandler(title,price,id,editMode))} editData = {editData} editMode = {editMode}/>
                <ExpenseStatment expense = {expense}/>
            </div>
        )
    
}
export default BudgetClass;

