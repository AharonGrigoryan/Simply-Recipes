import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-info">
          <h3>Want To Get In Touch?</h3>
          <p>
            Four dollar toast biodiesel plaid salvia actually pickled banjo
            bespoke mlkshk intelligentsia edison bulb synth.
          </p>
          <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
          <p>
            Hashtag swag health goth air plant, raclette listicle fingerstache
            cold-pressed fanny pack bicycle rights cardigan poke.
          </p>
        </article>
        <article>
          <form className="form contact-from">
            <div className="form-row">
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">Your Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="form-row">
              <label htmlFor="message">Massage</label>
              <textarea name="message" id="massage"></textarea>
            </div>
            <button type="submit" className="btn block">
              Submit
            </button>
          </form>
        </article>
      </section>
    </Layout>
  );
};

export default Contact;
