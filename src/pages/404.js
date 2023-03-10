import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Error = () => {
  return (
    <Layout>
      <Seo title="Error" />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>Page not found</h3>
        </section>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </main>
    </Layout>
  );
};

export default Error;
