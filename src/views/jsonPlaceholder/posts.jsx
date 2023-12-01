import React from "react";
import { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Loader from "../../components/Loader";

const Posts = () => {
  const  { data, isLoading, error, makeRequest } = useRequestData();

  const [itemsPerPage, setItemPerPage] = useState(50)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    makeRequest("https://jsonplaceholder.typicode.com/posts");
  }, []);

  return (
    <div>

<h1>jsonPlaceholder</h1>

{isLoading && <Loader/>}
{error && <h2> error</h2>}

<div>
  {/* <button onClick={()=>{setItemPerPage(10); setCurrentPage(0)}}>10 pr side</button>
  <button onClick={()=>{setItemPerPage(20); setCurrentPage(0)}}>10 pr side</button>
  <button onClick={()=>{setItemPerPage(100); setCurrentPage(0)}}>10 pr side</button> */}
  {[5, 10, 20, 50, 100].map((o) => (
    <button
      onClick={() => {
        setItemPerPage(o);
        setCurrentPage(0);
      }}>{o} pr side
    </button>
  ))}
</div>

{data && (
  <>
    <button
      className="btn"
      onClick={() => setCurrentPage(currentPage - 1)}
      disabled={currentPage <= 0}
    >
      Prev
    </button>
    <button
      className="btn"
      onClick={() => setCurrentPage(currentPage + 1)}
      disabled={currentPage + 1 >= Math.ceil(data.length / itemsPerPage)}
    >
      Next
    </button>
  </>
)}

{data &&
  data
    .slice(
      currentPage * itemsPerPage,
      currentPage * itemsPerPage + itemsPerPage
    )
    .map((p) => (
      <div className="card">
        <h2 className="text-xl font-bold">{p.title}</h2>
        <p>{p.body}</p>
        <p>{p.id}</p>
      </div>
    ))}
    </div>
  );
};

export default Posts
