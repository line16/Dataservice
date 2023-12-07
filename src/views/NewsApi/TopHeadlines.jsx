import React, { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Loader from "../../components/Loader";

const TopHeadlines = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  //   useState til at rumme det der skal søges på
  const [searchKey, setSearchKey] = useState("ai");

  //useState til language
  const [language, setLanguage] = useState("en");
  //useState til category
  const [category, setCategory] = useState("en");
//  useState til country
const [country, setcountry] = useState("jp") 

  useEffect(() => {
    handleSearch();
  }, [language, category, country]);

  //   Når der er submit på form/søgning
  const handleSearch = (e) => {
    makeRequest(
      "https://newsapi.org/v2/top-headlines?q=" +
        searchKey +
        "&pageSize=50&language=" +
        language +
        "&country=us&category=" +
        category +
        "&apiKey=9d7094e527bb4c40a90b88a3052e46b4",
      "GET"
    );
  };

  const handleSearchKeyUp = (e) => {
    if (e.key === "Enter" || e.code === "Enter") handleSearch();
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline">NEWSAPI - top headlines </h1>
      {/* loading and error */}
      {isLoading && <Loader />}
      {error && <h2> error</h2>}

      {/* Søgning */}
      <input
        type="search"
        onKeyUp={(e) => handleSearchKeyUp(e)}
        onChange={(e) => setSearchKey(e.target.value)}
        value={searchKey}
        placeholder="søg emne"
      />
      {/* dropdown language */}
      <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="ar">arabisk</option>
        <option value="de">tysk</option>
        <option value="en">engelsk</option>
      </select>
      {/* dropdown category */}
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="entertainment">entertainment</option>
        <option value="business">business</option>
        <option value="health">health</option>
      </select>
      {/* dropdown country */}
      <select onChange={(e) => setcountry(e.target.value)} value={country}>
        <option value="br">Brazil</option>
        <option value="jp">Japan</option>
        <option value="ie">Ireland</option>
      </select>
      {/* dere er data */}
      {data &&
        data.articles.map((n) => (
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            key={n.url}
          >
            <figure>
              <img src={n.urlToImage} alt="pics" />
            </figure>

            <h2 className="card-title">{n.title}</h2>
            <p>{n.content}</p>

            <div className="card-actions justify-end">
              <button className="btn btn-primary"></button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TopHeadlines;

//https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9d7094e527bb4c40a90b88a3052e46b4
