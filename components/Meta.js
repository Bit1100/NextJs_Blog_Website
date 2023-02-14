import Head from "next/head";

const Meta = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
    </>
  );
};

Meta.defaultProps = {
  title: "BiT Blog Website",
  description: "This is the new type of blog website.",
};

export default Meta;
