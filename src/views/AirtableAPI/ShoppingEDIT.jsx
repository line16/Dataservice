import { useEffect, useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

import React from "react";

const ShoppingEDIT = () => {
  const { postID } = useParams();

  const { data, isLoading, error, makeRequest } = useRequestData();

  const [Item, setItem] = useState("");
  const [Note, setNote] = useState("");
  // const [userID, setUserID] = useState("");

  useEffect(() => {
    makeRequest(
      "https://api.airtable.com/v0/appxiAugddwTUbYy1/Projects" + postID,  "GET", null,
      { Authorization: "Bearer " + "patGG88HDoec8o0UT.47590412b17fcb9a081349bde252153acacde63192b1388649186c1146bc4294", }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); //VIGTIG

    const nyPost = {
      fields: {
        Item: Item,
        Note: Note,
      },
    };

    makeRequest(
      "https://api.airtable.com/v0/appxiAugddwTUbYy1/Projects",
      "PUT",
      nyPost,
      { Authorization: "Bearer " + "patGG88HDoec8o0UT.47590412b17fcb9a081349bde252153acacde63192b1388649186c1146bc4294", }
    );
  };

  useEffect(() => {
    if(data){
      setItem(data.fields.Item)
      setNote(data.fields.Note)
    }
  }, [data])
  
  return (
    <div>
      <h1>Airtable Shoppinglist</h1>

      {isLoading && <Loader />}
      {error && <h2> error</h2>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="inpTitle">item</label>
        <input
          type="text"
          id="inpTitle"
          required
          placeholder="item"
          onInput={(e) => setItem(e.target.value)}
          value={Item}
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

export default ShoppingEDIT;
