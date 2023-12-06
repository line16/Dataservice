import React from "react";
import { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Loader from "../../components/Loader";
import PrevNext from "../../components/PrevNext";

const PostsPhoto = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  const [itemsPerPage, setItemPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    makeRequest("https://jsonplaceholder.typicode.com/photos");
  }, []);

  return (
    <div>
      <h1>Json Placeholder Photo</h1>

      {isLoading && <Loader />}
      {error && <h2> error</h2>}

      <div>
        
        {[10, 20, 50, 100].map((o) => (
          <button
            onClick={() => {
              setItemPerPage(o);
              setCurrentPage(0);}}>{o} pr side</button>
        ))}
      </div>
      {data && (

  <>
  <PrevNext setCurrentPage={setCurrentPage} currentPage={currentPage} dataLength={data.Length} itemsPerPage={itemsPerPage}/>

  </>
)}

{data &&
  data
    .slice(
      currentPage * itemsPerPage,
      currentPage * itemsPerPage + itemsPerPage
    )
    .map((p) => (
      <div className="card" key={p.id}>
        <h2 className="text-xl font-bold">{p.title}</h2>
        <img src ={p.thumbnailUrl} alt={p.id}></img>
      </div>
    ))}
    </div>
  );
};

export default PostsPhoto;
