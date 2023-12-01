import React from "react";

const nextprev = ()=>{
    return(
        <div>

<>
    <button
      className="btn"
      onClick={() => setCurrentPage(currentPage - 1)}
      disabled={currentPage <= 0}>Prev</button>
      
    <button
      className="btn"
      onClick={() => setCurrentPage(currentPage + 1)}
      disabled={currentPage + 1 >= Math.ceil(data.length / itemsPerPage)}>Next</button>
  </>

        </div>
    )
}

export default nextprev