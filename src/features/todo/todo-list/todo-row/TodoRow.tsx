import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { ACTION_TYPES } from "../../../../shared/actions";
import { TodoItem } from "../../../../shared/store";

interface TodoRowProps {
    item:TodoItem;
}
 
const TodoRow: FunctionComponent<TodoRowProps> = (props:TodoRowProps) => {
    const dispatch = useDispatch()

    const onRemoveHandler = () => {
        const removeAction = {type: ACTION_TYPES.REMOVE_TODO, payload: props.item}
        dispatch(removeAction);
    }
    return ( 
        <div className="todo-item">
            <div>{props.item?.description}</div>
            <button onClick={onRemoveHandler}>Remove</button>
        </div>
    );
}
 
export default TodoRow;