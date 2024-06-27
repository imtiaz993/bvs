"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// Custom Icon
const BVSicon = new L.Icon({
  iconUrl: "./img/filled_logo.png",
  iconSize: [38, 45],
  iconAnchor: [15, 0],
  popupAnchor: [0, 0],
});

const PopupOpener = ({ open }) => {
  const map = useMap();

  useEffect(() => {
    if (open) {
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker && layer.getLatLng().lat === 40.75225) {
          layer.openPopup();
        }
      });
    }
  }, [open, map]);

  return null;
};

const MapComponent = () => {
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    setOpenPopup(true);
  }, []);

  return (
    <MapContainer
      center={[40.75225, -73.9883]}
      zoom={18}
      scrollWheelZoom={false}
      zoomControl={false}
      style={{ height: "65vh", width: "100vw", marginBottom: "3%" }}
    >
      <TileLayer
        url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}"
        maxZoom={19}
        attribution='&copy; <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">City of New York CC BY 4.0</>'
      />
      <TileLayer
        url="https://mapwarper.net/mosaics/tile/1194/{z}/{x}/{y}.png"
        maxZoom={19}
        attribution='&copy; <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">City of New York CC BY 4.0</>'
      />
      <TileLayer
        url="https://maps.nyc.gov/xyz/1.0.0/carto/label-lt/{z}/{x}/{y}.png8"
        maxZoom={19}
        attribution='&copy; <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">City of New York CC BY 4.0</>'
      />
      <Marker position={[40.75225, -73.9883]} icon={BVSicon}>
        <Popup>130 West 37 Street, New York, NY</Popup>
      </Marker>
      <PopupOpener open={openPopup} />
    </MapContainer>
  );
};

export default MapComponent;
