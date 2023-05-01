"use client"

import {useSelector, useDispatch} from '../../redux/store';
import * as actions from '../../redux/slices/todoSlice'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Todo() {
  const loading = useSelector(state => state.todos.loading);
  const todos = useSelector(state=> state.todos);

  const [editStatus, setEditStatus] = useState(false);
  const [editItemId, setEditItemId] = useState('');
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(1);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(actions.getTodo()) 
  },[])

  const onAddNewItemClickHandle = () => {
    if(title == "") {
      console.log("Missing title");
      return;
    }
    if(editStatus == false) {  
      const newItem = {
        title   : title,
        status  : status
      }
      
      dispatch(actions.addTodo(newItem, reset));
    } else {
      
      const newItem = {
        title   : title,
        status  : status
      }
      
      dispatch(actions.updateTodo( editItemId, newItem, reset));
    }
  }

  const onDeleteItemClickHandle = (item_id) => {
    dispatch(actions.deleteTodo(item_id));
  }

  const reset = () => {
    setStatus(1);
    setTitle("");
  }
  

  const onEditItemClickHandle = (item) => {
    setEditItemId(item._id);
    setStatus(item.status);
    setTitle(item.title);
    setEditStatus(true);
  }


  return (
    <main className="min-h-screen p-24 text-center">
      <table className='border-collapse border border-slate-400 text-center m-auto mt-10'>
        <thead>
          <tr className='border-1'>
            <th className="border border-slate-300  p-4">Title</th>
            <th className="border border-slate-300 p-4">Status</th>
            <th className="border border-slate-300 p-4">Operation</th>
          </tr>
        </thead>
        <tbody>
          {
            loading == false ?
            todos.todos.map(item => (
              <tr key={item._id}>
                <td className="border border-slate-300 p-2">{item.title}</td>
                <td className="border border-slate-300 p-2">{item.status == 1 ? "todo" : "done"}</td>
                <td className="border border-slate-300 p-2">
                  <button 
                    onClick={() => onEditItemClickHandle(item)}
                    type="button" className="mx-4 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
                    EDIT
                  </button>
                  <button
                    onClick={() => onDeleteItemClickHandle(item._id)} 
                    type="button" className="mx-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    DELETE
                  </button>
                </td>
              </tr>
            ))
            :
            <tr>
              <td colSpan={3} className='text-center'>  
                Loading
              </td>
            </tr>

          }
          <tr>
              <td className="border border-slate-300 p-2">
                <input type='text' value={title} onInput={ (e) => setTitle(e.target.value)} className='border border-slate-300 outline-none' />  
              </td>
              <td className="border border-slate-300 p-2">
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value={1}>
                    ToDo
                  </option>
                  <option value={2}>
                    Done
                  </option>
                </select>
              </td>
              <td className="border border-slate-300 p-2">
                <button onClick={() => onAddNewItemClickHandle()}
                  type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                  {
                    editStatus ? "SAVE" : "ADD"
                  }
                </button>
              </td>
            </tr>
        </tbody>
      </table>
      
      
    </main>
  )
}
