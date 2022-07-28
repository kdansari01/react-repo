export const ContactUs = () => {
  return (
    <>
      <div className="contactUs contact-center container">
        <h1 className="contact-head">Contact Us</h1>
        <div
          className="left aos-init aos-animate getInTouch"
          data-aos="fade-dowm"
          data-aos-duration="1500"
        >
          <div className="container-fluid contact-move">
          <h2 className="contact-2nd-head">Get In Touch</h2>
          <p className="contact-para"></p>
          <div>
            <span className="icon">
              <i className="fas fa-user"></i>
            </span>
            <span className="content">
              <h3>Name</h3>
              <span>KD Ansari</span>
            </span>
          </div>

          <div>
            <span className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span className="content">
              <h3>Address</h3>
              <span>Ghaziabad,UP</span>
            </span>
          </div>

          <div>
            <span className="icon">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="content">
              <h3>Email</h3>
              <span>khusmuddin.ansari@gmail.com</span>
            </span>
          </div>
          </div>
        </div>

        <div
          className="right aos-init aos-animate text-message"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <form
            action="https://formspree.io/f/mjvllepa"
            method="POST"
            className="form"
          >
            <h2 className="message-me">Message Me</h2>
            <div>
                <label>Name</label>
              <input
                className="col-11"
                type="text"
                placeholder="Name"
                required=""
              />
            </div>
            <div>
                <label>Email Address</label>
              <input
              className="col-11"
                type="email"
                name="email"
                placeholder="Email Address"
                required=""
              />
              {/* <input type="hidden" name="_captcha" value="false" /> */}
            </div>

            <textarea
              name="message"
              id=""
              cols="25"
              rows="8"
              placeholder="Your message"
            >
              {" "}
            </textarea>
            <button type="submit" className="btn btn-form btn-primary col-11">
              Send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
