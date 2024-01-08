import { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Loader from "../../components/Loader";

const MongoTodo = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    makeRequest("http://localhost:5000/todos");
  }, []);

  return (
    <div className="m-auto w-auto flex justify-center flex-nowrap">
      <h1 className="text-center text-black font-semibold text-2xl m-2">
        MONGO- TODO
      </h1>

      {isLoading && <Loader />}
      {error && <h2> error</h2>}

      <button></button>

      <div>
        {data &&
          data.todos.map((t) => (
            <div key={t.id} className="m-2 card glass w-96 ">
              <div className="card-body">
                <h2 className="card-title text-black m-2">todo: {t.title}</h2>
                <p className="text-black">id:{t.description}</p>
                <p className="text-black">
                  udførte:
                  <span
                    className={t.completed ? "text-green-700" : "text-red-700"}>{t.completed ? "jep" : "nope"}</span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MongoTodo;
