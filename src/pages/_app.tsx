import { type AppType } from "next/app";
import "@nandwa/styles/globals.css";

const MyApp: AppType = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <Component {...pageProps} />
  );
};

export default MyApp;
