import React from 'react'

const weatherCard = () => {
  return (
    <div>
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
              <li>
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
              </li>
            </ul>
          </div>
        </article>
    </div>
  )
}

export default weatherCard