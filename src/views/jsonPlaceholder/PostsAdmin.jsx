import React from "react";
import Loader from "../../components/Loader";
import { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import { Link } from "react-router-dom";
// imported icons fra react-icons (npm i react-icons)
import { FaUserEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { MdAdd } from "react-icons/md";

const PostsAdmin = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  const {
    data: dataDelete,
    isLoading: isLoadingDelete,
    error: errorDelete,
    makeRequest: makeRequestDelete,
  } = useRequestData();

  useEffect(() => {
    makeRequest("https://jsonplaceholder.typicode.com/posts");
  }, []);

  const handleDelete = (postID, postTitle) => {
    if (window.confirm("du sletter" + postTitle)) {
      makeRequestDelete(
        "https://jsonplaceholder.typicode.com/posts" + postID,
        "DELETE"
      );
    }
  };

  return (
    <div className={"overflow-x-auto"}>
      <h1>jsonPlaceholder admin posts</h1>

      {isLoading && <Loader />}
      {error && <h2> error</h2>}

      <table className="table text-black">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>
              <Link to={"/PostsCreate"}>
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
            data.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>
                  <Link to={"/PostEdit/" + p.id}>
                    <FaUserEdit size="2em" />
                  </Link>
                </td>
                <td>
                  <button className="btn btn-neutral" onClick={() => handleDelete(p.id, p.title)}>
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

export default PostsAdmin;
