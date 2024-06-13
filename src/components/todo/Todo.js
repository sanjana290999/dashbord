// src/TodoForm.js

import { isEmpty } from "lodash";
import React, { useState, useId } from "react";
import uuid from "react-uuid";

const TodoForm = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState({});
  // const [isupdate ,setIsUpdate] = useState(false)

  const handleSubmite = (e) => {
    e.preventDefault();
    if (!isEmpty(editTodo)) {
      let newData = todos.map((elem) => {
        if (elem.id == editTodo.id) {
          elem.name = newTodo;
        }
        return elem;
      });

      setTodos(newData);
      setEditTodo({});
      setNewTodo("");
    } else {
      if (newTodo.trim()) {
        const newTodoItem = { id: uuid(), name: newTodo };
        setTodos([...todos, newTodoItem]);
      }

      setNewTodo("");
    }
  };

  const handleEdit = (elem) => {
    setNewTodo(elem.name);
    setEditTodo(elem);
  };

  const handleDelete = (id) => {
    const deleteTodo = todos.filter((elem) => elem.id !== id);
    setTodos(deleteTodo);
    console.log(deleteTodo);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Todo Form
        </h1>
        <form onSubmit={handleSubmite}>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="task"
            >
              Task
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              type="text"
              id="task"
              placeholder="Enter your task"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
              type="submit"
            >
              {!isEmpty(editTodo) ? "Update Task" : "Add Task"}
            </button>
          </div>
        </form>
        <div className="mt-6 ">
          <h2 className="text-xl font-bold text-gray-700">Todo List</h2>
          {todos.map((elem) => (
            <ul className="mt-4 space-y-2">
              <li
                key={elem.id}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              >
                {elem.name}
              </li>
              <button
                className="px-2 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200"
                onClick={() => handleDelete(elem.id)}
              >
                Remove
              </button>
              <button
                className="px-2 py-1 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-red-200 m-2 p-2"
                onClick={() => handleEdit(elem)}
              >
                Edit
              </button>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
