import { createSlice } from "@reduxjs/toolkit";
import dataList from "../../assets/api/data";
// localStorage.clear();
const initialState = localStorage.getItem("todoSliceData")
  ? JSON.parse(localStorage.getItem("todoSliceData"))
  : {
      text: "",
      todoData: dataList,
      no: 9,
    };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todoData = [...state.todoData, { id: state.no++, text: action.payload, isChk: false }];
      //   state.todoData.push({ id: no++, text: action.payload, isChk: false });
      localStorage.setItem("todoSliceData", JSON.stringify(state));
    },
    delTodo(state, action) {
      state.todoData = state.todoData.filter(item => item.id !== action.payload);
      localStorage.setItem("todoSliceData", JSON.stringify(state));
    },
    toggleTodo(state, action) {
      //   state.todoData.map(item => (item.id === action.payload ? { ...item, isChk: !item.isChk } : item));
      const todo = state.todoData.find(item => item.id === action.payload);
      if (todo) {
        todo.isChk = !todo.isChk;
      }
      localStorage.setItem("todoSliceData", JSON.stringify(state));
    },
    changeInput(state, action) {
      state.text = action.payload;
    },
  },
});
export const { addTodo, delTodo, toggleTodo, changeInput } = todoSlice.actions;
export default todoSlice.reducer;
