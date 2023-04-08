import Head from "next/head";

function Container(props) {

  return (
    <>
      <Head>
        <title>Parallax Web | Demo</title>
      </Head>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        body{
          background-color: #003329;
        }

        body::-webkit-scrollbar {
          width: 10px;
          backdrop-filter: blur(10px);
        }

        body::-webkit-scrollbar-thumb {
          background-color: #2c9481;
          border-radius: 50px;
        }

        a{
          text-decoration: none;
          color: #2c9481;
        }
      `}</style>
      {props.children}
    </>
  );
}

export default Container;
