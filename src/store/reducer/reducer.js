// Action Type
export const INIT = "INIT";
export const BUDGET_INIT = "BUDGET_INIT";
export const BUDGET_SUCCESS = "BUDGET_SUCCESS";
export const EXPENSE_INIT = "EXPENSE_INIT";
export const EXPENSE_SUCCESS = "EXPENSE_SUCCESS";
export const EDIT_INIT = "EDIT_INIT";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const DELETE_INIT = "DELETE_INIT";
export const DELETE_SUCCESS = "DELETE_SUCCESS";

// Action Creator
export const initilizerHandler = () =>{
    return{
        type : INIT,
    }
}

export const budgetHandler = (budget) =>{
    return{
        type:BUDGET_INIT,
        budget : budget
    }
}

export const budgetSuccess = (budgetApp) =>{
    return{
        type:BUDGET_SUCCESS,
        budget:budgetApp.budget,
        expenditure:budgetApp.expenditure,
        expense:budgetApp.expense,
        editMode : budgetApp.editMode,
        editData : budgetApp.editData

    }
}

export const expenseHandler = (title,price,id,editMode) =>{
    console.log(title,price,id);
    return{
        type : EXPENSE_INIT,
        title : title,
        price : price,
        id : id,
        editMode : editMode
        
    }
}

export const expenseSuccess = (budgetApp) =>{
    console.log(budgetApp);
    return{
        type:EXPENSE_SUCCESS,
        expense : budgetApp.expense,
        expenditure : budgetApp.expenditure,
        editMode : budgetApp.editMode,
        editData : budgetApp.editData
    }
}

export const editHandler = (id) =>{
    return{
        type : EDIT_INIT,
        id : id
    }
}

export const editHandlerSuccess = (budgetApp) =>{
    console.log(budgetApp);
    return{
        type : EDIT_SUCCESS,
        editData : budgetApp.editData,
        editMode : budgetApp.editMode
    }
}

export const deleteHandler = (id) =>{
    console.log(id)
    return{
        type : DELETE_INIT,
        id :id
    }
}

export const deleteHandlerSuccess = (budgetApp) =>{
    return{
        type : DELETE_SUCCESS,
        expense : budgetApp.expense,
        expenditure:budgetApp.expenditure
    }
}

// Reducer

const initialState = {
    budget:0,
    expenditure:0,
    expense:[],
    editMode : false,
    editData : null
}

const reducer =(state = initialState,action)=>{
    switch(action.type){
        case BUDGET_SUCCESS:
            return{
                ...state,
                budget : action.budget,
                expenditure : action.expenditure,
                editMode:action.editMode,
                editData : action.editData,
                expense : action.expense
            }
        case EXPENSE_SUCCESS:
            return{
                ...state,
                expense : action.expense,
                expenditure : action.expenditure,
                editMode : action.editMode,
                editData : action.editData
            }
        case EDIT_SUCCESS:
            return{
                ...state,
                editData : action.editData,
                editMode:action.editMode
            }    
        case DELETE_SUCCESS:
            return{
                ...state,
                expense:action.expense,
                expenditure : action.expenditure
            }      
        default:
            return state        
    }
}
export default reducer;