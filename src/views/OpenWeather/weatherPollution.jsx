import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import useRequestData from "../../hooks/useRequestData";
import { FaLongArrowAltRight } from "react-icons/fa";
import LeafletMap from "./LeafletMap";

const weatherPollution = () => {

  const { data, isLoading, error, makeRequest } = useRequestData();
  const {
    makeRequest: makeRequestDawa,
    isLoading: isLoadingDawa,
    data: dataDawa,
    error: errorDawa,
  } = useRequestData();

  const [zip, setZip] = useState("4130");
  const [valid, setValid] = useState(true);

  useEffect(() => {
    searchZipCode();
  }, []);

  const searchZipCode = (e) => {
    if (valid) {
      makeRequest(
        "https://api.openweathermap.org/data/2.5/weather?zip=" +
          zip +
          ",dk&units=metric&appid=76799082ae1442b626cf882793217343",
        "GET"
      );
    }
  };

  const handleSearchKeyUp = (e) => {
    if (e.key === "Enter" || e.code === "Enter") searchZipCode();
  };

  useEffect(() => {
    makeRequestDawa(
      "https://api.dataforsyningen.dk/postnumre/autocomplete?q=" + zip
    );
  }, [zip]);

  
    
  return (
    <div className="mx-auto">
    {/* // udtræk vejret, tempo, vindhastighed/-retning, sol op/ned osv.. */}
    <h1 className="text-black text-lg">vejret fra udvalgt by - map med weatherPollution</h1>

    {isLoading && <Loader />}
    {error && <h2> error</h2>}

    <input
      type="search"
      value={zip}
      name="zipCode"
      onChange={(e) => {
        setZip(e.target.value);
        setValid(e.target.checkValidity());
      }}
      onKeyUp={(e) => handleSearchKeyUp(e)}
      placeholder="postnummer"
      className="m-2 bg-white text-black rounded"
      required
      pattern="{0-9}{4}"
      list="listPostNr"
    />

    <datalist id="listPostNr">
      {dataDawa?.map((d) => (
        <option value={d.postnummer.nr} key={d.postnummer.nr}>
          {d.tekst}
          {d.by}
        </option>
      ))}
    </datalist>

    {data && (
      <article className="card w-98 shadow-xl py-4 text-black">
        <div className="card-body">
          <h2 className="card-title mx-auto">vejret for {data.name}</h2>
          <ul>
            <li>temperatur:{Math.round(data.main.temp)}&deg;C</li>
            <li>vindhastighed {data.wind.speed} m/sek</li>
            <li>
              vindretning {data.wind.deg}
              <FaLongArrowAltRight
                style={{ transform: "rotate(" + data.wind.deg + "deg)" }}
              />
            </li>
            {/* <li>
              solen står op:{" "}
              {new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </li>
            <li>
              solen går ned:{" "}
              {new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </li> */}
          </ul>
        </div>

        <div className="flex m-auto">
        <LeafletMap />
        </div>
      </article>
    )}
  </div>
  )
}

export default weatherPollution