import Image from "next/image";
import { aboutImgContainerStyle, aboutParaStyle, aboutTextStyle, homeAboutStyle } from "./style";
import { aboutDesc } from "@/common/common-data";

export default function HomeAbout() {
  return (
    <div className="home-about" css={homeAboutStyle}>
      <div className="img-container about-img-container" css={aboutImgContainerStyle}>
        <Image src="/assets/images/about.webp" alt="/" fill sizes="100%" className="about-img" />
      </div>
      <div className="about-text-container" css={aboutTextStyle}>
        <h2>About Krishaka</h2>
        <p css={aboutParaStyle}>{aboutDesc}</p>
      </div>
    </div>
  );
}
