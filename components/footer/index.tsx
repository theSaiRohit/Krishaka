import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPhone,
  AiFillTwitterCircle,
  AiOutlineMail
} from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import {
  companyBriefStyle,
  contactStyle,
  footerMainStyle,
  footerStyle,
  footerTextStyle,
  productsStyle,
  socialsIconsStyle,
  socialsStyle
} from "./style";
import { address, facebook, instagram, linkedIn, mailId, phoneNumber, twitter } from "@/common/common-data";
export default function Footer() {
  return (
    <footer id="footer" css={footerStyle}>
      <div className="footer-main" css={footerMainStyle}>
        <div className="company">
          <div className="company-brief" css={companyBriefStyle}>
            <Link href="/" className="company-name">
              Krishaka
            </Link>
            <span className="description">A company that aspires to bring a change!</span>
          </div>
          <div className="socials" css={socialsStyle}>
            <span>Follow Us</span>
            <div className="socials-icons" css={socialsIconsStyle}>
              <Link href={`https://www.facebook.com/${facebook}`} rel="noopener noreferrer" target="_blank">
                <AiFillFacebook />
              </Link>
              <Link href={`https://twitter.com/${twitter}`} rel="noopener noreferrer" target="_blank">
                <AiFillTwitterCircle />
              </Link>
              <Link href={`https://www.instagram.com/${instagram}/`} rel="noopener noreferrer" target="_blank">
                <AiFillInstagram />
              </Link>
              <Link
                href={`https://www.linkedin.com/company/${linkedIn}/about/`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillLinkedin />
              </Link>
            </div>
          </div>
        </div>
        <div className="products" css={productsStyle}>
          <span>Our Products</span>
          <Link href="/">Product One</Link>
          <Link href="/">Product Two</Link>
          <Link href="/">Product Three</Link>
        </div>
        <div className="sitemap" css={productsStyle}>
          <span>Navigation</span>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="contact" css={contactStyle}>
          <div className="email">
            <AiOutlineMail />
            <Link href={`mailto:${mailId}`}>{mailId}</Link>
          </div>
          <div className="phone">
            <AiFillPhone />
            <Link href={`tel:+91${phoneNumber}`}>+91-{phoneNumber}</Link>
          </div>
          <div className="location">
            <FaLocationDot />
            <Link href="/">{address}</Link>
          </div>
        </div>
      </div>
      <div className="footer-text" css={footerTextStyle}>
        <span>KRISHAKA</span>
      </div>
    </footer>
  );
}
