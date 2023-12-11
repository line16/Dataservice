import React,{useEffect} from 'react';
import useRequestData from '../../hooks/useRequestData';
import Loader from '../../components/Loader';


const Facts = () => {

  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(()=>{
    makeRequest("https://facts-by-api-ninjas.p.rapidapi.com/v1/facts", "GET", null,{
      "X-RapidAPI-Key": "75d79c30c1mshc57adc0f56f1264p1bfd66jsn222bdc7cfed1",
      "X-RapidApi-Host": "facts-by-api-ninjas.p.rapidapi.com"
    })
  }, [])

  return (
    <div>
      <h1>RAPID API - FACTS</h1>
        {isLoading && <Loader />}
      {error && <h2> error</h2>}
      {data &&
      <div>
        <h2>{data[0].fact}</h2>
      </div>}
    </div>
  )
}

export default Facts