import React from "react";

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
    <div>
      <div>
        <div style="width: 100%; height: 75vh;">
          <img
            alt="topper"
            loading="lazy"
            src="/img/pageTopper.png"
            class="top-bg"
          />
          <h1 class="header-text">Contact Us</h1>
        </div>

        <div class="responsive-two-column-grid" style="margin-top: 5%">
          <div class="contact-left">
            <div class="contact-img">
              <img
                loading="lazy"
                class="parallax"
                src="/img/contact1.png"
                style="width: 100%"
                alt="image"
              />
            </div>
          </div>
          <div>
            <div class="contact-right">
              <h1>
                For more information, business opportunities or any questions;
                reach out below
              </h1>
              <form action="https://formsubmit.co/admin@bvs.nyc" method="POST">
                <input type="hidden" name="_next" value="https://bvs.nyc/" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="text" name="_honey" style="display:none" />

                <input
                  type="text"
                  placeholder="Name"
                  name="Name"
                  style="width: 100%"
                  required
                />
                <div style="display: flex; justify-content: space-between">
                  <input
                    type="text"
                    placeholder="Subject"
                    name="_subject"
                    style="width: 45%"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="Email"
                    style="width: 45%"
                    required
                  />
                </div>
                <textarea
                  placeholder="Message"
                  name="Message"
                  style="width: 100%"
                  required
                ></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>

        <div style="display: flex; justify-content: center;">
          <img
            loading="lazy"
            src="/img/pagebreak.png"
            class="page-break"
            alt="image"
          />
        </div>

        <div class="responsive-two-column-grid" style="margin-top: 2%">
          <div>
            <div class="contact-right" style="margin: auto">
              <h1>
                We are always looking for talented individuals to join our team.
                Interested? Connect with us by filling out the form below.
              </h1>
              <form
                action="https://formsubmit.co/talent@bvs.nyc"
                method="POST"
                enctype="multipart/form-data"
              >
                <input type="hidden" name="_next" value="https://bvs.nyc/" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="text" name="_honey" style="display:none" />
                <input
                  type="hidden"
                  name="_subject"
                  value="BVS - Job Application Submission"
                />

                <input
                  type="text"
                  placeholder="Name"
                  name="Name"
                  style="width: 100%"
                  required
                />
                <div style="display: flex; justify-content: space-between">
                  <input
                    id="file"
                    name="Attachment"
                    type="file"
                    placeholder="Resume"
                    style="width: 45%"
                    accept="application/vnd.ms-word.document.macroEnabled.12, application/pdf, image/png, image/jpeg"
                    required
                  />
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    style="width: 45%"
                    required
                  />
                </div>
                <textarea
                  placeholder="Message"
                  name="Message"
                  style="width: 100%"
                ></textarea>
                <button type="submit">Apply</button>
              </form>
            </div>
          </div>
          <div class="contact-left" style="width: 100%">
            <div class="contact-img2">
              <img
                loading="lazy"
                class="parallax"
                src="/img/contact2.png"
                style="width: 90%"
                alt="image"
              />
            </div>
          </div>
        </div>

        <div style="display: flex; justify-content: center;">
          <img
            loading="lazy"
            src="/img/pagebreak.png"
            class="page-break"
            alt="image"
          />
        </div>

        <div class="locational">
          <div style="display: flex; flex-direction: row; width: 100%">
            <a
              id="location-mail"
              style="display: flex; flex-direction: row; width: 100%; "
              href="mailto: admin@bvs.nyc"
            >
              <span
                class="fas fa-envelope text-white"
                style="padding: 2%; background-color: #ad172c; border-radius: 500px; margin: auto 2%"
              ></span>
              <h3>admin@bvs.nyc</h3>
            </a>
          </div>
          <div style="display: flex; flex-direction: row; width: 100%">
            <a
              id="location-map"
              style="display: flex; flex-direction: row; width: 100%; "
              href="https://maps.app.goo.gl/3S2kgXWk48vREADu9"
              target="_blank"
            >
              <span
                class="fas fa-location-arrow text-white"
                style="padding: 2%; background-color: #BA2025; border-radius: 500px; margin: auto 2%"
              ></span>
              <h3>130 West 37th Street New York, NY 10018</h3>
            </a>
          </div>
          <div style="display: flex; flex-direction: row; width: 100%; ">
            <a
              id="location-phone"
              style="display: flex; flex-direction: row; width: 100%; "
              href="tel:212-547-9000"
            >
              <span
                class="fas fa-phone text-white"
                style="padding: 2%; background-color: #ad172c; border-radius: 500px; margin: auto 2%"
              ></span>
              <h3>(212) 547-9000</h3>
            </a>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Contact;
