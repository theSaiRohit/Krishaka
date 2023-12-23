import { teamData } from "@/common/common-data";
import {
  cardsContainerStyle,
  imgLinkStyle,
  memberCardStyle,
  memberImgContainerStyle,
  memberNameStyle,
  memberTextContainerStyle,
  positionStyle,
  socialIconsStyle,
  teamContainerStyle
} from "@/modules/home/home-team/style";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";

export default function HomeTeam() {
  const teamMapper = (member: (typeof teamData)[0], index: number) => {
    return (
      <div key={index} css={memberCardStyle}>
        <Link href={member.link} title={member.name} aria-label={member.name} css={imgLinkStyle}>
          <div className="img-container" css={memberImgContainerStyle}>
            <Image src={member.imageUrl} sizes="100%" alt={member.name} fill />
          </div>
        </Link>
        <div css={memberTextContainerStyle}>
          <h3 css={memberNameStyle}>{member.name}</h3>
          <span css={positionStyle}>{member.position}</span>
        </div>
        <div>
          <Link href={member.insta}>
            <AiFillInstagram css={socialIconsStyle} />
          </Link>
          <Link href={member.mail}>
            <AiOutlineMail css={socialIconsStyle} />
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div css={teamContainerStyle}>
      <h2>Meet Our Team</h2>
      <div css={cardsContainerStyle}>{teamData.map(teamMapper)}</div>
    </div>
  );
}
