import React from 'react'
import Todos from './Todos'
import style from './Home.module.css'
import NewTodo from './NewTodo'



const Home = () => {
    const dummayTodos = [
        {
            id: 1,
            title: "todo title 1",
            desc: "This is todo1 description"
        },
        {
            id: 2,
            title: "todo title 2",
            desc: "This is todo2 description"
        }
    ]
    return (
        <div className={ style.container }>
            <h1 style={ { color: 'white' } }>Todo App</h1>
            <NewTodo />
            <Todos todos={ dummayTodos } />
        </div>
    )
}

export default Home