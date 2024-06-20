import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import Topper from "./components/topper";
import CTA from "app/components/cta";
import PageBreak from "app/components/page-break";
import JoinTeam from "./components/join-team";
import Locations from "./components/locations";
import "../../../public/css/style.css";
import "../../../public/css/slider.css";
import "../../../public/css/about.css";
import "../../../public/css/services.css";

export const metadata = {
  title: "BVS | Contact",
  description:
    "We are a multidisciplinary tech-enabled project management service, that bridges the gaps between the silos of property management and NYC municipal agencies. ",
  keywords: "BVS, Violations, Expediters, Design, Solutions, Resolution",
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <Topper />
      <CTA />
      <PageBreak />
      <JoinTeam />
      <PageBreak />
      <Locations />
      <div id="map"></div>
      {/* <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossorigin=""></script>

<script>
    var map = L.map('map', {    scrollWheelZoom: false, zoomControl: false
    }).setView([40.752250, -73.988300], 18);
    L.tileLayer('http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">City of New York CC BY 4.0</>'
    }).addTo(map);

    L.tileLayer('https://mapwarper.net/mosaics/tile/1194/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">City of New York CC BY 4.0</>'
    }).addTo(map);

    L.tileLayer('https://maps.nyc.gov/xyz/1.0.0/carto/label-lt/{z}/{x}/{y}.png8', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">City of New York CC BY 4.0</>'
    }).addTo(map);

    var BVSicon = L.icon({
        iconUrl: './img/filled_logo.png',

        iconSize:     [38, 45], // size of the icon
        iconAnchor:   [15, 0], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
    });

    var marker = L.marker([40.752250, -73.988300], {icon: BVSicon}).addTo(map);
    marker.bindPopup("130 West 37 Street, New York, NY").openPopup();
    
</script> */}
      <Footer />
    </>
  );
};

export default Contact;
