import React from "react";
import Loader from "../../components/Loader";
import { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import { Link } from "react-router-dom";

const PostsAdmin = () => {

  const { data, isLoading, error, makeRequest } = useRequestData();

  const {data: dataDelete, isLoading: isLoadingDelete, error: errorDelete, makeRequest: makeRequestDelete} = useRequestData();

  useEffect(() => {

    makeRequest("https://jsonplaceholder.typicode.com/posts")

  }, []);

  const handleDelete = (postID, postTitle) =>{

    if (window.confirm("du sletter" + postTitle)) {

      makeRequestDelete("https://jsonplaceholder.typicode.com/posts" + postID, "DELETE")
    }
    
  }

  return (
    <div className="AllGrid">
      <h1>jsonPlaceholder admin posts</h1>

      {isLoading && <Loader />}
      {error && <h2> error</h2>}


    <table>

    <tr>
        <th>ID</th>
        <th>Title</th>
        <th>RET</th>
        <th>SLET</th>
    </tr>

        <tbody>

        <div>
        {data &&
          data.map((p) => (

            <tr key={p.id}>
            <th>{p.id}</th>
            <th>{p.title}</th>
            <th><Link to={"/post/" + p.id}>RET</Link></th>
            <th onClick={() => handleDelete(p.id, p.title)}>SLET</th>
        </tr>

            // <div className="card">
            //   <h2 className="text-xl font-bold">{p.title}</h2>
            //   <p>{p.body}</p>
            //   <p>{p.id}</p>
            // </div>
          ))}
            </div>

        </tbody>

    

    </table>

    </div>

  );
};

export default PostsAdmin;
