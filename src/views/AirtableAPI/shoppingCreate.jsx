import React,{useState} from 'react'
import useRequestData from '../../hooks/useRequestData';

const shoppingCreate = () => {

    const { data, isLoading, error, makeRequest } = useRequestData()

    const [Item, setItem] = useState("");
    const [Note, setNote] = useState("");
    // const [userID, setUserID] = useState("");
  
    //   klikket på submit = send data til API
    const handleSubmit = (e) => {
      e.preventDefault(); //VIGTIG
  
      const nyPost = {
        "fields": {
            "Item":Item,
            "Note": Note
        }
    };
  
      makeRequest("https://api.airtable.com/v0/appxiAugddwTUbYy1/Projects", "POST", nyPost,
      { Authorization: "Bearer " + "patGG88HDoec8o0UT.47590412b17fcb9a081349bde252153acacde63192b1388649186c1146bc4294", })
    };
  
  return (
    <div className='card shadow-xl mx-auto justify-center py-10 text-black'>
          <div>

        <h1>AIRTABLE SHOPPINGLIST - CREATE POST </h1>

      <form className='mx-auto py-16' onSubmit={handleSubmit}>
        <label htmlFor="inpTitle">title</label>
        <input
        className='mx-2 py-1 rounded-md bg-white'
          type="text"
          id="inpTitle"
          required
          placeholder="Title"
          onInput={(e) => setItem(e.target.value)}
          value={Item}
        />

        <label htmlFor="txtBody">body</label>
        <input
        className='mx-2 py-1 rounded-md bg-white'
          type="text"
          required
          id="txtBody"
          placeholder="body"
          onInput={(e) => setNote(e.target.value)}
          value={Note}
        />


        <button className='btn rounded-lg bg-slate-300 text-black' type="submit">opret min post</button>
      </form>
    </div>
    </div>
  )
}

export default shoppingCreate