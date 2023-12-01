import React from "react";
import { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Loader from "../../components/Loader";

const Todo = () => {

    useEffect(() => {
        makeRequest("https://jsonplaceholder.typicode.com/todos");
      }, []);

  return (
    <div>
      <h1>JSon Placeholder TODO</h1>

      {isLoading && <Loader />}
      {error && <h2> error</h2>}

      <div>
        {data &&
          data.map((p) => (
            <div className="card">
              <h2 className="text-xl font-bold">{p.title}</h2>
              <p>{p.body}</p>
              <p>{p.id}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Todo;
