import Footer from "@/components/footer";
import Header from "@/components/header";
import SocialsBar from "@/components/socials-bar";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Inter, Philosopher } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  preload: true,
  style: "normal"
});

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
  style: "normal"
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-primary: ${inter.style.fontFamily};
            --font-secondary: ${philosopher.style.fontFamily};
          }
        `}
      </style>
      <Header />
      {/* <SocialsBar /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
