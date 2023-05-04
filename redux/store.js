import { configureStore } from "@reduxjs/toolkit";
import { useDispatch , useSelector  } from 'react-redux';
import rootReducer from './reducer';



const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({})
    
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, immutableCheck: false })
});


const { dispatch } = store;

export {store, dispatch, useSelector, useDispatch};