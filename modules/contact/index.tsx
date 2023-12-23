import { contactInfo, contactPageHeading } from "@/common/common-data";
import ContactForm from "@/modules/contact/form-component";
import {
  contactHeadingStyle,
  contactImageStyle,
  contactSectionStyle,
  infoContainerStyle,
  infoTitleStyle,
  infoWrapperStyle,
  textContainerStyle
} from "@/modules/contact/style";
import Image from "next/image";

export default function ContactModule() {
  const mapper = (
    data: {
      title: string;
      value: string;
    },
    index: number
  ) => {
    return (
      <div key={index} css={infoContainerStyle}>
        <span className="title" css={infoTitleStyle}>
          {data.title}
        </span>
        <span className="value">{data.value}</span>
      </div>
    );
  };
  return (
    <section id="contact" css={contactSectionStyle}>
      <div className="img-container" css={contactImageStyle}>
        <Image src="/assets/images/bg.jpg" alt="Contact Image" fill sizes="100%" priority />
      </div>
      <div>
        <h1 css={contactHeadingStyle}>{contactPageHeading}</h1>
        <div css={textContainerStyle}>
          <ContactForm />
          <div className="contact-info" css={infoWrapperStyle}>
            {contactInfo.map(mapper)}
          </div>
        </div>
      </div>
    </section>
  );
}
