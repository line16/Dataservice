import React, { useState } from "react";
import useRequestData from "../../hooks/useRequestData";

const MongoTodoCreate = () => {

  const { data, isLoading, error, makeRequest } = useRequestData()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //   klikket på submit = send data til API
  const handleSubmit = (e) => {
    e.preventDefault(); //VIGTIG

    const nyTodo = {title, description}

    makeRequest("http://localhost:5000/todos", "POST", nyTodo)
  };

  return (
    <div>
        <h1>Mongo Todo - CREATE POST </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inpTitle">title</label>
        <input
          type="text"
          id="inpTitle"
          required
          placeholder="Title"
          onInput={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="txtDescription">body</label>
        <input
          type="text"
          required
          id="txtDescription"
          placeholder="Description"
          onInput={(e) => setDescription(e.target.value)}
        />

        <button className="text-black m-2" type="submit">opret min post</button>
      </form>
    </div>
  );
};

export default MongoTodoCreate;
