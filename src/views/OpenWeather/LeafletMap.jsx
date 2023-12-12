import React, { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"

const LeafletMap = () => {
  const mapRef = useRef(); //reference/hook til map
  const MapMarker = useRef() //reference til marker

  //indlæs map når component er klar
  useEffect(() => {

    if (!mapRef.current) {

        mapRef.current = L.map("mapContainerLeaf").setView([56, 10], 10);

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {maxZoom: 19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          }).addTo(mapRef.current);
          
        } else{
            mapRef.current.setView
        }
    }, []);
        
   

  return (
    <div id="mapContainerLeaf" style={{ width: "500px", height: "500px" }}>
      kortet Loader...
    </div>
  );
};

export default LeafletMap;
