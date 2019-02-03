import React from 'react'

const TodosContext = React.createContext({
    todos: [
        // {
        //     id: 1,
        //     text: "Eat breakfast",
        //     complete: false
        // },
        // {
        //     id: 2,
        //     text: "Go to gym",
        //     complete: false
        // },
        // {
        //     id: 3,
        //     text: "Do laundry",
        //     complete: true
        // },
    ],
    currentTodo: {
        
    }
})

export default TodosContext;