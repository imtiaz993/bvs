const JoinTeam = () => {
  return (
    <div className="responsive-two-column-grid" style={{ marginTop: "2%" }}>
      <div>
        <div className="contact-right" style={{ margin: "auto" }}>
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
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input
              type="hidden"
              name="_subject"
              value="BVS - Job Application Submission"
            />

            <input
              type="text"
              placeholder="Name"
              name="Name"
              style={{ width: "100%" }}
              required
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <input
                id="file"
                name="Attachment"
                type="file"
                placeholder="Resume"
                style={{ width: "45%" }}
                accept="application/vnd.ms-word.document.macroEnabled.12, application/pdf, image/png, image/jpeg"
                required
              />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                style={{ width: "45%" }}
                required
              />
            </div>
            <textarea
              placeholder="Message"
              name="Message"
              style={{ width: "100%" }}
            ></textarea>
            <button type="submit">Apply</button>
          </form>
        </div>
      </div>
      <div className="contact-left" style={{ width: "100%" }}>
        <div className="contact-img2">
          <img
            loading="lazy"
            className="parallax"
            src="/img/contact2.png"
            style={{ width: "90%" }}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
