import { takeLatest } from "@redux-saga/core/effects";
import * as actionType from "../reducer/reducer";
import {initilizerHandlerSaga,budgetHandlerSaga,expenseHandlerSaga,editHandlerSaga,deleteHandlerSaga} from "./saga";

export function* watch(){
    yield takeLatest(actionType.INIT,initilizerHandlerSaga);
    yield takeLatest(actionType.BUDGET_INIT,budgetHandlerSaga);
    yield takeLatest(actionType.EXPENSE_INIT,expenseHandlerSaga);
    yield takeLatest(actionType.EDIT_INIT,editHandlerSaga);
    yield takeLatest(actionType.DELETE_INIT,deleteHandlerSaga);
}
