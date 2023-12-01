import React from "react";
import Loader from "../../components/Loader";
import { useParams } from "react-router-dom";

const Post = ()=>{

    const  { data, isLoading, error, makeRequest } = useRequestData();

    const {postID} = useParams();

    useEffect(() => {
        makeRequest("https://jsonplaceholder.typicode.com/posts" + postID);
      }, []);
    
    return(
        <div>post


            {data && 
            <div>
                <h2></h2>
                <p></p>
                <p></p>
            </div>}
        </div>
    )
}

export default Post