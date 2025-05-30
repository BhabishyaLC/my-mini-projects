import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(() => {
    const saved = localStorage.getItem("todo");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  const handleClick = (e) => {
    e.preventDefault();
    const TodoItems = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodo([...todo, TodoItems]);
    setNewTodo("");
  };

  const handleDelete = (id) => {
    const updateDelete = todo.filter((todos) => todos.id !== id);
    setTodo(updateDelete);
  };

  const toggleCompleted = (id) => {
    const updatedTodo = todo.map((todos) => {
      if (todos.id === id) {
        return { ...todos, completed: !todos.completed };
      } else {
        return todos;
      }
    });
    setTodo(updatedTodo);
  };

  const handleBundleDelete = () => {
    const activeTodo = todo.filter((todos) => !todos.completed);
    setTodo(activeTodo);
  };
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-500 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Todo App</h1>
        </div>

        <div className="p-6 border-b">
          <div className="flex">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition-colors cursor-pointer"
              onClick={handleClick}
            >
              Add
            </button>
          </div>
        </div>

        <div className="p-4 border-b bg-gray-50">
          <div className="flex justify-between text-sm">
            <h1 className="px-3 py-1 rounded-md text-gray-600 hover:bg-gray-200 cursor-pointer">
              Your Todo List
            </h1>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {todo.map((items) => (
            <div className="p-4 flex items-center" key={items.id}>
              <input
                className="w-6 h-6 rounded-full border-2 border-gray-300 mr-3 flex-shrink-0"
                type="checkbox"
                checked={items.completed}
                onChange={() => toggleCompleted(items.id)}
              />
              <span className="flex-grow">{items.text}</span>
              <button
                className="text-red-500 hover:text-red-700 ml-2 cursor-pointer"
                onClick={() => handleDelete(items.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="p-4 bg-gray-50 text-sm text-gray-600">
          <span>{todo.length} items total</span>
          <button
            className="float-right text-blue-500 hover:text-blue-700 cursor-pointer"
            onClick={handleBundleDelete}
          >
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
