import React, { useEffect,useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

const MongoTodoEdit = () => {

    //hent id fra url der skal rettes 
    const {todoId} = useParams();

  const { data, isLoading, error, makeRequest } = useRequestData();
  const {
    data: dataPUT,
    isLoading: isLoadingPUT,
    error: errorPUT,
    makeRequest: makeRequestPUT,
  } = useRequestData(); //PUT

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  //henter data 
  useEffect(() => {
    makeRequest("http://localhost:5000/todos/" + todoId)
  }, []);

  useEffect(() => {
    if (data) {
      setTitle(data.todo.title);
      setDescription(data.todo.description);
    }
  }, [data])
  
  
// DER ER KLIKKET PÅ SUBMIT - SEND DATA TIL API
  const handleSubmit = (e) => {
    e.preventDefault(); //VIGTIG

    const nyTodo = { title: title, description: description};

    makeRequestPUT("http://localhost:5000/todos/" + todoId , "PUT", nyTodo);
  };

  return (
    <div className="m-auto w-auto">
      <h1 className="text-3xl">Mongo - EDIT todo  {todoId}</h1>

      {isLoading && <Loader />}
      {error && <h2> error</h2>}

      {/* Beskeden når der er rettet data - PUT */}
      {dataPUT && (
        <div>
          <h2>Todo er rettet!</h2>
          <p>{dataPUT.updated.title}</p>
          <p>{dataPUT.updated.description}</p>
        </div>
      )}

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
          placeholder="description"
          onInput={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Done</button>
      </form>
    </div>
  );
};

export default MongoTodoEdit;
