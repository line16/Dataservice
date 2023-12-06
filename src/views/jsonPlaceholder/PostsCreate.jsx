import React, { useState } from "react";
import useRequestData from "../../hooks/useRequestData";

const PostsCreate = () => {

  const { data, isLoading, error, makeRequest } = useRequestData()

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userID, setUserID] = useState("");

  //   klikket på submit = send data til API
  const handleSubmit = (e) => {
    e.preventDefault(); //VIGTIG

    const nyPost = {title, body, userID}

    makeRequest("https://jsonplaceholder.typicode.com/posts", "POST", nyPost)
  };

  return (
    <div>
        <h1>JSON PLACEHOLDER CREATE POST </h1>
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

        <button type="submit">opret min post</button>
      </form>
    </div>
  );
};

export default PostsCreate;
