import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 
import axios from 'axios'; 
import {dispatch} from '../store';
 


const initialState = {
  loading: true,
  todos: [ ],
  currentName: "",
  currentStatus: "",
  error: ""
}  
export const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    reset: () => initialState,
    addTodoSuccess: (state, action) => {
      state.todos = [...state.todos, action.payload]      
    },
    updateTodoSuccess: (state, action) => {
      state.todos = state.todos.map(item => {
        if(item._id == action.payload._id ){
          return action.payload
        }
        return item
      })
    },
    deleteTodoSuccess: (state, action) => {
      state.todos = state.todos.filter(item => {
        if(item._id !== action.payload)
          return item
      })
    },
    getTodoSuccess: (state, action ) => {
      state.todos = action.payload;
      state.loading  = false;
    },
    hasError: (state, action) => {
      state.error = action.payload
    }
  },
});



const baseURL = 'http://localhost:5000';

export const  getTodo = () => {
  return async () => {
    try {
      const response = await axios.get(`${baseURL}/todos`);
      dispatch(slice.actions.getTodoSuccess(response.data.todos));
    } catch (error) {
      if(error.response && error.response.data && error.response.data.msg)
        dispatch(slice.actions.hasError(error.response.data.msg));
      else console.log(error)
    }
  };
}

export const addTodo = (newItem, reset) => {
  return async () => {
    try {
      const response = await axios.post(`${baseURL}/todos`, newItem);
      dispatch(slice.actions.addTodoSuccess(response.data.newItem));
      
      reset(); 

    } catch (error) {
      if(error.response && error.response.data && error.response.data.msg)
        dispatch(slice.actions.hasError(error.response.data.msg));
      else console.log(error)
    }
  };
}

export function updateTodo(todo_id, item, reset) {
  return async () => {
    try {
      const response = await axios.put(`${baseURL}/todos/${todo_id}`, item);
      dispatch(slice.actions.updateTodoSuccess(response.data.updatedItem));
      reset();
    } catch (error) {
      if(error.response && error.response.data && error.response.data.msg)
        dispatch(slice.actions.hasError(error.response.data.msg));
      else console.log(error)
    }
  };
}


export function deleteTodo(todo_id) {
  return async () => {
    try {
      const response = await axios.delete(`${baseURL}/todos/${todo_id}`);
      dispatch(slice.actions.deleteTodoSuccess(response.data.todo_id));
      console.log(response.data.msg)
    } catch (error) {
      if(error.response && error.response.data && error.response.data.msg)
        dispatch(slice.actions.hasError(error.response.data.msg));
      else console.log(error)
    }
  };
}


export default slice.reducer;
