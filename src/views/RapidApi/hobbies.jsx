import React, { useEffect } from "react";
import Loader from "../../components/Loader";
import useRequestData from "../../hooks/useRequestData";

const hobbies = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
     getNewHobby()
  }, []);

  const getNewHobby=()=>{
    makeRequest(
      "https://hobbies-by-api-ninjas.p.rapidapi.com/v1/hobbies",
      "GET",
      null,
      {
        "X-RapidAPI-Key": "75d79c30c1mshc57adc0f56f1264p1bfd66jsn222bdc7cfed1",
        "X-RapidApi-Host": "hobbies-by-api-ninjas.p.rapidapi.com",
      }
    );
  }

  return (
    <div>
      <h1>rapidAPI - Hobbies</h1>

      {isLoading && <Loader />}
      {error && <h2> error</h2>}

      {data && (
        <div>
          <h2>{data.hobby}</h2>
          <a href={data.hobby}>læs mere om {data.hobby}</a>
          <button className="btn btn-wide m-16 justify-center" onClick={()=> getNewHobby()}>ny hobby</button>
        </div>
      )}
    </div>
  );
};

export default hobbies;
