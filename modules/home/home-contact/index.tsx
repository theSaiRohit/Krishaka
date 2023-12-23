import { homeContactMsg } from "@/common/common-data";
import {
  contactContainerStyle,
  homeContactButtonStyle,
  homeContactParaStyle,
  homeContactStyle
} from "@/modules/home/home-contact/style";
import Link from "next/link";

export default function HomeContact() {
  return (
    <div css={homeContactStyle}>
      <div css={contactContainerStyle}>
        <p css={homeContactParaStyle}>{homeContactMsg}</p>
        <Link href="/contact" css={homeContactButtonStyle}>
          <span>Contact Us</span>
        </Link>
      </div>
    </div>
  );
}
