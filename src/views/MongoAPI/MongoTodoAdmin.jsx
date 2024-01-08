import React from "react";
import Loader from "../../components/Loader";
import { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import { Link } from "react-router-dom";
// imported icons fra react-icons (npm i react-icons)
import { FaUserEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { MdAdd } from "react-icons/md";

const MongoAdmin = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  const {
    data: dataDelete,
    isLoading: isLoadingDelete,
    error: errorDelete,
    makeRequest: makeRequestDelete,
  } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5000/todos");
  }, []);

  const handleDelete = (todoID, todoTitle) => {
    if (window.confirm("du sletter" + todoTitle)) {
      makeRequestDelete(
        "http://localhost:5000/todos/" + todoID,
        "DELETE"
      );
    }
  };

  return (
    <div className="overflow-x-auto">
      <h1>Mongo To do - admin</h1>

      {isLoading && <Loader />}
      {error && <h2> error</h2>}

      <table className="table text-black">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th className="text-black">
              <Link to="/MongoCreatetodo">
                <MdAdd size="2em"/>
              </Link>
            </th>
          </tr>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>RET</th>
            <th>SLET</th>
          </tr>
        </thead>
        <tbody>
          {data &&
             data.todos.map((p) => (
              <tr key={p._id}>
                <td>{p._id}</td>
                <td>{p.title}</td>
                <td>
                  <Link to={"/MongoTodoEdit/" + p._id}>
                    <FaUserEdit size="2em" />
                  </Link>
                </td>
                <td>
                  <button className="btn btn-neutral" onClick={() => handleDelete(p._id, p.title)}>
                    <IoTrashBin size="2em" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MongoAdmin;
