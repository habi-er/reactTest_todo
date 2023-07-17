import { useDispatch } from "react-redux";
import { toggleTodo, delTodo } from "../store/modules/todoSlice";

const TodoItem = ({ item }) => {
  const { id, text, isChk } = item;
  const dispatch = useDispatch();
  return (
    <li>
      <span className={isChk ? "on" : ""} onClick={() => dispatch(toggleTodo(id))}>
        고유번호 : {id} &nbsp;&nbsp;&nbsp; {text}
      </span>
      <button onClick={() => dispatch(delTodo(id))}> 삭제</button>
    </li>
  );
};

export default TodoItem;
