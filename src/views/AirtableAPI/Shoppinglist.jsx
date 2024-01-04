import React, { useEffect } from "react";
import Loader from "../../components/Loader";
import useRequestData from "../../hooks/useRequestData";
import { Link } from "react-router-dom";
// imported icons fra react-icons (npm i react-icons)
import { FaUserEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { MdAdd } from "react-icons/md";

const Shoppinglist = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  const {makeRequest: makeRequestDelete, isLoading: isLoadingDelete, data: dataDelete, error: errorDelete} = useRequestData();

  useEffect(() => {
    makeRequest("https://api.airtable.com/v0/appxiAugddwTUbYy1/Projects", "GET", null, { Authorization: "Bearer " + "patGG88HDoec8o0UT.47590412b17fcb9a081349bde252153acacde63192b1388649186c1146bc4294", });
  }, []);

  const handleDelete = (Item, Note) => {
    if (window.confirm("du sletter" + Item + "?")) {
      makeRequestDelete(
        "https://api.airtable.com/v0/appxiAugddwTUbYy1/Projects" + postID,
        "DELETE", null, { Authorization: "Bearer " + "patGG88HDoec8o0UT.47590412b17fcb9a081349bde252153acacde63192b1388649186c1146bc4294", }
      );
    }
  };

  return (
    <div>
      <h1 className="text-black">Airtable shoppinglist</h1>

      {isLoading && <Loader />}
      {error && <h2> error</h2>}

      <table className="table text-black">
        <thead>
          <tr>
            <th></th>
            <th>
              <Link to={"/ShoppingCreate"}>
                <MdAdd size="2em" className="text-black" />
              </Link>
            </th>
          </tr>
          <tr className="text-black">
            <th>Item</th>
            <th>Note</th>
            <th>RET</th>
            <th>SLET</th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.records.map((p) => (
              <tr key={p.id}>
                <td>{p.fields.Item}</td>
                <td>{p.fields.Note}</td>
                {/* figure img = src={p.fields.img[0].url} */}
                <td>
                  <Link to={"/ShoppingEDIT/" + p.fields.Item}><FaUserEdit size="2em" /></Link>
                </td>
                <td>
                  <button
                    className="btn btn-neutral"
                    onClick={() => handleDelete(p.id, p.fields.Item)}><IoTrashBin size="2em" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shoppinglist;
