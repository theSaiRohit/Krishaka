import HomeAbout from "@/modules/home/home-about";
import HomeContact from "@/modules/home/home-contact";
import HomeLanding from "@/modules/home/home-landing";
import HomeSlider from "@/modules/home/home-slider";
import HomeTeam from "@/modules/home/home-team";
import Head from "next/head";

export default function HomeModule() {
  return (
    <section id="home">
      <Head>
        <title>Krishaka</title>
        <meta name="description" content="-" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLanding />
      <HomeSlider />
      <HomeAbout />
      <HomeTeam />
      <HomeContact />
    </section>
  );
}
