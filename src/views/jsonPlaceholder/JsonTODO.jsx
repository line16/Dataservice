import React from "react";
import { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Loader from "../../components/Loader";

const Todo = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    makeRequest("https://jsonplaceholder.typicode.com/todos");
  }, []);

  return (
    <div>
      <h1 className="text-center font-black">JSon Placeholder - TODO</h1>

      {isLoading && <Loader />}
      {error && <h2> error</h2>}

      <button onClick={() => setIsComplete(true)} className="btn m-2">vis alle udførte</button>
      <button onClick={() => setIsComplete(false)} className="btn m-2">
        vis alle afventende todos
      </button>
      <button onClick={() => setIsComplete(null)} className="btn m-2">vis alle todos</button>

      <div>
        {data &&
          data
            .filter((t) => 
            isComplete === null ? true : isComplete ? t.completed === true : t.completed === false )
            .map((t) => (
              <div key={t.id}>
                <h2>todo: {t.title}</h2>
                <p>id:{t.id}</p>
                <p>
                  udførte:
                  <span
                    className={t.completed ? "text-green-700" : "text-red-700"}
                  >
                    {t.completed ? "jep" : "nope"}
                  </span>
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Todo;
