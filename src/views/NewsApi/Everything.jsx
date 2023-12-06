import React, { useState } from "react";
import useRequestData from "../../hooks/useRequestData";

const Everything = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

//   useState til at rumme det der skal søges på
  const {searchKey, setSearchKey} = useState("denmark")

  useEffect(() => {
    makeRequest(
        "https://newsapi.org/v2/everything?q="+ searchKey +"&pageSixe=50&language="+language+"&apiKey=9d7094e527bb4c40a90b88a3052e46b4",
      "GET"
    );
  }, []);

//   Når der er submit på form/søgning
const handleSearch = e =>{
    e.preventDefault()
    makeRequest("https://newsapi.org/v2/everything?q="+ searchKey +"&apiKey=9d7094e527bb4c40a90b88a3052e46b4",
    "GET")
}

  return (
    <div>
      <h1>NEWSAPI - Everything </h1>
      {/* loading and error */}
      {isLoading && <Loader />}
      {error && <h2> error</h2>}

      {/* Søgning */}

      {/* dere er data */}
      { data &&
        data.articles.map(n => 
        <div>
            <figure>
            <img src="{n.urlToImage}" alt="pics" />
            </figure>
          
            <h2>{n.title}</h2>
            <p>{n.content}</p>
        </div>
        )
      }
    </div>
  );
};

export default Everything;
