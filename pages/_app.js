// All the style files goes here in this file
// import "../styles/common.scss";
import Layout from "../layout";

// Function acting like a Templating Language
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
