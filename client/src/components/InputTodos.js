import React, { useState } from "react";

const InputTodos = () => {

  const [description, setDescription] = useState("");
    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = { description }
            const response = await fetch("http://localhost:5000/todos", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (error) {
            
        }
    }

  return (
    <div>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  );
};

export default InputTodos;
