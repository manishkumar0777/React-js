import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
  return (
    <>
        <div className='my-5 text-gray-200 text-3xl'>
            TODO
        </div>
        {todos.map((todo)=> (
            <div 
                key={todo.id} 
                className='bg-gray-800 rounded border border-gray-700
                       focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500
                       text-base outline-none text-gray-100 py-1 px-3 leading-8
                       transition-colors duration-200 ease-in-out flex w-2/4
                       justify-between items-center'
            >
                <h2>{todo.text}</h2>
                <button 
                    className='text-white bg-red-500 border-0 py-2
                       px-6 focus:outline-none hover:bg-red-600
                       rounded text-lg cursor-pointer'
                    onClick={()=> dispatch(removeTodo(todo.id))}
                >X</button>
            </div>
        ))}
    </>
  )
}

export default Todos