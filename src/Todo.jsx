import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "./store.jsx";

const Todo = () => {
  const [input, setInput] = useState("");
  const tasks = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (input.trim() === "") return;
    dispatch(addTask(input));
    setInput("");
  };

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#333" }}>📝 Redux Todo List</h1>

        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your task..."
            style={{
              padding: "10px",
              width: "70%",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginRight: "10px",
              outline: "none",
            }}
          />
          <button
            onClick={handleAddTask}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.length === 0 ? (
            <p style={{ color: "#888" }}>No tasks yet! Add one above 👆</p>
          ) : (
            tasks.map((task, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: "#e9ecef",
                  color: "#333",
                  marginBottom: "10px",
                  padding: "10px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "0.2s ease",
                }}
              >
                <span>{task}</span>
                <button
                  onClick={() => handleDelete(index)}
                  style={{
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    padding: "6px 10px",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
