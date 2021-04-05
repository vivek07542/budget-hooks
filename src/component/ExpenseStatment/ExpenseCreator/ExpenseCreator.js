import React from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const ExpenseCreator = (props) => {
    return (
        <div>
           <p>{props.title}</p>
                <p>{props.price}</p>
                <Button onClick={()=>props.editHandler(props.id)}><EditIcon/></Button>
                <Button onClick={()=>props.deleteHandler(props.id)}><DeleteIcon/></Button> 
        </div>
    )
}

export default ExpenseCreator;