import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) { //this line ensures
        return;
    }

      const newTodos = [todo, ...todos];
      setTodos(newTodos);
    };

    const updateTodo = (todoId, newvalue) => {
        if(!newvalue.text || /^\s*$/.test(newvalue.text)) { //this line ensures
            return;
        }
        setTodos(prev => prev.map(item =>(item.id === todoId ?
            newvalue : item))
            );
  };

    const removeTodo = id => {
        const removearr = [...todos].filter(todo => todo.id !==id)

        setTodos(removearr);
    };
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>whats the plan for today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} 
            removeTodo={removeTodo} updateTodo={updateTodo}/>
            <div className="footer">
                <div className="footer-text">
                <p valign='bottom'>Made by Patrick</p>
                </div>
            </div>
        </div>
        
        
       
    );
}

export default TodoList;
