import { configureStore } from "@reduxjs/toolkit";
import { useDispatch , useSelector  } from 'react-redux';
import todoReducer from "./slices/todoSlice";


const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
});


const { dispatch } = store;

export {store, dispatch, useSelector, useDispatch};