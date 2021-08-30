import "../styles/globals.css";
import Router from "next/router";
import Nprogress from "nprogress";

Nprogress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => Nprogress.start());
Router.events.on("routeChangeComplete", () => Nprogress.done());
Router.events.on("routeChangeError", () => Nprogress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
