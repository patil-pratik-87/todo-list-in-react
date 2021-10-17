import { Fragment, FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { ACTION_TYPES } from "../../../shared/actions";

interface AddTodoProps {
    
}
 
const AddTodo: FunctionComponent<AddTodoProps> = () => {
    const initialState = {description:''}

    const [item, setItem] = useState(initialState)
    const dispatch  = useDispatch();

    const onChangeHandler = (event:any)=> {
        setItem({description: event.target.value});
    }

    const onClickHandler = () => {
        dispatch({type:ACTION_TYPES.ADD_TODO,payload:item});
        setItem(initialState);
    }

    return (  
        <Fragment>
            <input type="text" name="Todo Text" id="todoText" placeholder="Add todo text here.." value={item.description} onInput={onChangeHandler} />
            <button type="button" onClick={onClickHandler}>Add</button>
        </Fragment>
    );
}
 
export default AddTodo;