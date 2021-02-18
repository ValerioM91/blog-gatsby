import React from "react";
import Head from "../components/head";
import Layout from "../components/Layout";
import contactStyle from "./contact.module.scss";

const contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h2>Contact info</h2>
      <div className={contactStyle.contacts}>
        <p>
          <i className="fas fa-mobile-alt"></i>Tel: 0123 4567890
        </p>
        <p>
          <a href="#" className={contactStyle.facebook}>
            <i className="fab fa-facebook-f"></i>Facebook
          </a>
        </p>
        <p>
          <i className="far fa-envelope"></i>Email: abc@def.com
        </p>
        <p>
          <a href="#" className={contactStyle.instagram}>
            <i className="fab fa-instagram"></i>Instagram
          </a>
        </p>
        <p>
          <i className="fas fa-map-marker-alt"></i>Address:
        </p>
        <p>
          <a href="#" className={contactStyle.twitter}>
            <i className="fab fa-twitter"></i>Twitter
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default contact;
