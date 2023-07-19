import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      completed: false,
    });
    setInput("");
  };
  //   const [valor, setValor] = useState(0);
  // const sumar = () => {
  //   setValor(valor + 1);
  // };
  // const restar = () => {
  //   setValor(valor - 1);
  // };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Actualizar tarea"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Actualizar
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Agregar tarea"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Agregar
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
