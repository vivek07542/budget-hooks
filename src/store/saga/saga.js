import {put} from "redux-saga/effects";
import * as actionType from "../reducer/reducer";

export function* initilizerHandlerSaga(){
    window.localStorage.clear();
    const budgetApp = {
        budget:0,
        expenditure : 0,
        expense : [],
        editMode : false,
        editData : null
    }
    yield localStorage.setItem("budgetApp",JSON.stringify(budgetApp));
}

export function* budgetHandlerSaga(action){
    const localValue = JSON.parse(localStorage.getItem("budgetApp"));
    const updateValue = {...localValue};
    updateValue.budget = +action.budget;
    updateValue.expenditure = 0;
    updateValue.expense = [];
    updateValue.editMode = false;
    updateValue.editData = null;
    yield localStorage.setItem("budgetApp",JSON.stringify(updateValue));
    yield put (actionType.budgetSuccess(updateValue));
}

export function* expenseHandlerSaga(action){
    const localValue = JSON.parse(localStorage.getItem("budgetApp"));
    const updateValue = {...localValue};
    if(action.id !== null && action.editMode === true){
        const editObjIndex = updateValue.expense.findIndex(item => item.id === action.id)
        updateValue.expense[editObjIndex].title = action.title
        updateValue.expense[editObjIndex].price = +action.price
        updateValue.editData = null;
    }
    else{
        let expenseLast = null;

        if(updateValue.expense.length !== 0){
           const expenseLastItem = updateValue.expense[updateValue.expense.length-1];
            expenseLast = expenseLastItem.id
        }
        else{
            expenseLast = 0
        }
        const expenseObject = {
            title : action.title,
            price : +action.price,
            id:+expenseLast + 1
        }
        updateValue.expense.push(expenseObject);
    }
    const fetchPrice = updateValue.expense.map(x=>x.price).reduce((a,c) => a+c);
    updateValue.expenditure = fetchPrice;
    updateValue.editMode = false;
    yield localStorage.setItem("budgetApp",JSON.stringify(updateValue));
    yield put (actionType.expenseSuccess(updateValue));
}

export function* editHandlerSaga(action){
const localValue = JSON.parse(localStorage.getItem("budgetApp"));
const updateValue = {...localValue};
updateValue.editMode = true;
const editObj = updateValue.expense.find(item => item.id === action.id);
updateValue.editData = editObj;
yield localStorage.setItem("budgetApp",JSON.stringify(updateValue));
yield put(actionType.editHandlerSuccess(updateValue));
}

export function* deleteHandlerSaga(action){
    const localValue = JSON.parse(localStorage.getItem("budgetApp"));
    const updateValue = {...localValue};
    const editObjIndex = updateValue.expense.findIndex(item => item.id === action.id)
    updateValue.expense.splice(editObjIndex,1);
    const fetchPrice = updateValue.expense.map(x=>x.price).reduce((a,c) => a+c);
    updateValue.expenditure = fetchPrice;
    updateValue.editMode = false;
    yield localStorage.setItem("budgetApp",JSON.stringify(updateValue));
    yield put (actionType.deleteHandlerSuccess(updateValue));
}