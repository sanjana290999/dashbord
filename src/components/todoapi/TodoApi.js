import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { isEmpty } from "lodash";
import {
  getTodo,
  addTodo,
  deleteTodo,
  editTodo,
} from "../../features/TodoApiSlice";

function TodoApi() {
  const [newTodo, setNewTodo] = useState("");
  //   const [edit, setEdit] = useState(false);
  const [updateData, setUpdateData] = useState("");
  const todos = useSelector((state) => state.todoApi.todos);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title: newTodo };
    console.log({ data });
    if (!isEmpty(updateData)) {
      dispatch(
        editTodo({
          id: updateData._id,
          data,
        })
      );
      dispatch(getTodo());
    } else dispatch(addTodo(data));

    setNewTodo("");
    dispatch(getTodo());
  };

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const handleDelete = (_id) => {
    dispatch(deleteTodo(_id));
    dispatch(getTodo());
  };
  const handleEdit = async (data) => {
    try {
      setUpdateData(data);
      setNewTodo(data.title);
    } catch (error) {
      console.error("error", error.msg);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-lg p-8 space-y-4 bg-gray-300 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Todo Form
        </h1>
        <form onSubmit={handleSubmit}>
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
              {!isEmpty(updateData) ? "update Todo" : "Add todo"}
            </button>
          </div>
        </form>
        <div className="mt-6 ">
          <h2 className="text-xl font-bold text-gray-700">Todo List</h2>
          {todos.map((todo) => (
            <ul className="mt-4 space-y-2">
              <li
                key={todo._id}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              >
                {todo.title}
              </li>
              <button
                className="px-2 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200"
                onClick={() => handleDelete(todo._id)}
              >
                Remove
              </button>
              <button
                className="px-2 py-1 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-red-200 m-2 p-2"
                onClick={() => handleEdit(todo)}
              >
                Edit
              </button>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoApi;
