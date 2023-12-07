import React, { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Loader from "../../components/Loader";

const Everything = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

//   useState til at rumme det der skal søges på
  const [searchKey, setSearchKey] = useState("ai")

  //useState til language
  const [language, setLanguage] = useState("en");

  useEffect(() => {
   handleSearch()
  }, [language]);

//   Når der er submit på form/søgning
const handleSearch = e =>{
    makeRequest("https://newsapi.org/v2/everything?q="
    + searchKey +"&pageSixe=50&language="
    + language +"&apiKey=9d7094e527bb4c40a90b88a3052e46b4",
    "GET")
}

const handleSearchKeyUp =(e)=>{
  if(e.key === 'Enter' || e.code === 'Enter') handleSearch()
}

  return (
    <div className="container">
      <h1>NEWSAPI - Everything </h1>
      {/* loading and error */}
      {isLoading && <Loader />}
      {error && <h2> error</h2>}

      {/* Søgning */}
      <input type="search" onKeyUp={(e) => handleSearchKeyUp(e)} 
      onChange={(e)=> setSearchKey(e.target.value)}
      value={searchKey} placeholder="søg sprog" />

      <select onChange={e => setLanguage(e.target.value)} value={language}>
        <option value="ar">arabisk</option>
        <option value="de">tysk</option>
        <option value="en">engelsk</option>
      </select>

      {/* dere er data */}
      { data &&
        data.articles.map(n => 
        <div key={n.url} className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
            <img src={n.urlToImage} alt="pics" />
            </figure>
          
            <h2 className="card-title">{n.title}</h2>
            <p>{n.content}</p>
        </div>
        )
      }
    </div>
  );
};

export default Everything;
