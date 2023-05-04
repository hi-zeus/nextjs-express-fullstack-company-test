import { combineReducers } from 'redux';
import todosReducer from './slices/todoSlice';


// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  todos: todosReducer,

});

export default reducer;
