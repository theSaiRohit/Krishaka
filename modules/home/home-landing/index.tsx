import Image from "next/image";
import {
  companyHeadingStyle,
  homeBgContainerStyle,
  homeCarouselStyle,
  landingTextStyle,
  spanContainerStyle,
  spanStyle
} from "./style";

export default function HomeLanding() {
  const words = ["Agriculture", "Automation", "Efficiency", "Future"];
  return (
    <main css={homeCarouselStyle}>
      <div css={landingTextStyle}>
        <div css={spanContainerStyle}>
          {words.map((word: string, index: number) => {
            return (
              <span key={index} css={spanStyle}>
                {word}
              </span>
            );
          })}
          <span css={spanStyle}>{words[0]}</span>
        </div>
      </div>
      <div className="img-container home-bg-container" css={homeBgContainerStyle}>
        <Image src="/assets/images/wallpaper.jpg" alt="/" fill sizes="100%" priority />
      </div>
      <div css={companyHeadingStyle}>
        <h1>Krishaka</h1>
        <span>Driving Farming Forward, One Vehicle at a Time</span>
      </div>
    </main>
  );
}
