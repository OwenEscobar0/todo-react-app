import React, { useState } from "react";
import TodoForm from "../ToDoForm";
import TodoFu from "../ToDoFunction";
import Swal from 'sweetalert2'


function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return(
        Swal.fire({
          icon: 'error',
          title: 'No hay tareas para agregar',
          text: '¡Agregar tarea para continuar!',
          
        })
      );
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((taks) => {
        console.log(taks);
        return taks.id === Number(id)
          ? { ...taks, completed: !taks.completed }
          : { ...taks };
      })
    );
  };

  const calcularCompletados = () => {
    let contador = 0;
    todos.forEach((task) => {
      if (task.completed) {
        contador += 1;
      }
    });
    return contador;
  };
 
  const completed = calcularCompletados();
  
  const eliminar = () =>{
   let tareasN = "No hay tareas"
   if (todos!== ""){}
   
   return tareasN;

  }; 


  return (
    <>
      <h1 className="titulo">TAREAS</h1>
      <p className="contador"> Tareas completadas: {completed}</p>
      <TodoForm onSubmit={addTodo} />
      <TodoFu
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        
      />
      
    </>
  );
}

export default TodoList;
