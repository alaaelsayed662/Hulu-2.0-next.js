import Head from "next/head";
import requests from "../utils/requests";
import Header from "./../components/Header";
import Nav from "./../components/Nav";
import Results from "./../components/Results";
export default function Home(props) {
  return (
    <>
      <Head>
        <title>Hulu | By Alaa</title>
      </Head>
      <div className="globalContainer">
        <Header />
        <Nav />
        <Results results={props?.data?.results} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  let fetchUrl = `https://api.themoviedb.org/3${
    requests[genre]?.url || requests.trending.url
  }`;
  const data = await fetch(fetchUrl).then((res) => res.json());
  return {
    props: {
      data,
    },
  };
}
