import React, { useEffect,useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

const PostEdit = () => {

    //hent id fra url der skal rettes 
    const {postID} = useParams();

  const { data, isLoading, error, makeRequest } = useRequestData();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userID, setUserID] = useState("");


  //henter data 
  useEffect(() => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/" + postID)
  }, []);

  useEffect(() => {
    
  }, [])
  
  
// DER ER KLIKKET PÅ SUBMIT - SEND DATA TIL API
  const handleSubmit = (e) => {
    e.preventDefault(); //VIGTIG

    const nyPost = { title, body, userID };

    makeRequest("https://jsonplaceholder.typicode.com/posts", "PUT", nyPost);
  };

  return (
    <div>
      <h1>JSON PLACEHOLDER - EDIT POST  {postID}</h1>

      {isLoading && <Loader />}
      {error && <h2> error</h2>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="inpTitle">title</label>
        <input
          type="text"
          id="inpTitle"
          required
          placeholder="Title"
          onInput={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="txtBody">body</label>
        <input
          type="text"
          required
          id="txtBody"
          placeholder="body"
          onInput={(e) => setBody(e.target.value)}
          value={body}
        />

        <label htmlFor="txtUser">id på user</label>
        <input
          type="text"
          id="txtUser"
          placeholder="user id"
          required
          onInput={(e) => setUserID(e.target.value)}
          value={userID}
        />

        <button type="submit">Done</button>
      </form>
    </div>
  );
};

export default PostEdit;
