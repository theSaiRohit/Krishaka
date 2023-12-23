import { facebook, instagram, linkedIn, twitter } from "@/common/common-data";
import Link from "next/link";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { socialsBarStyle, socialsStyle } from "./style";

export default function SocialsBar() {
  return (
    <div className="socials-bar" css={socialsBarStyle}>
      <Link href={`https://www.facebook.com/${facebook}`} rel="noopener noreferrer" target="_blank" css={socialsStyle}>
        <span>Facebook</span>
        <AiFillFacebook />
      </Link>
      <Link href={`https://twitter.com/${twitter}`} rel="noopener noreferrer" target="_blank" css={socialsStyle}>
        <span>Twitter</span>
        <AiFillTwitterCircle />
      </Link>
      <Link
        href={`https://www.instagram.com/${instagram}/`}
        rel="noopener noreferrer"
        target="_blank"
        css={socialsStyle}
      >
        <span>Instagram</span>
        <AiFillInstagram />
      </Link>
      <Link
        href={`https://www.linkedin.com/company/${linkedIn}/about/`}
        rel="noopener noreferrer"
        target="_blank"
        css={socialsStyle}
      >
        <span>LinkedIN</span>
        <AiFillLinkedin />
      </Link>
    </div>
  );
}
