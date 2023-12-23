import { useRef } from "react";
import { useEasyGoogleForm } from "@hymns-of-web/use-easy-google-form";
import { formStyle, inputStyle, submitBtnStyle, textareaStyle } from "@/modules/contact/form-component/style";

export default function ContactForm() {
  const ref = useRef(null);
  const onSubmit = useEasyGoogleForm({
    formRef: ref,
    gFormId: "https:",
    links: [
      {
        entryId: "entry.2005078058",
        formId: "yqcLl",
        type: "text"
      },
      {
        entryId: "entry.1097987895",
        formId: "COAtR",
        type: "text"
      },
      {
        entryId: "entry.1590953149",
        formId: "DWMGV",
        type: "radio"
      },
      {
        entryId: "entry.43458632",
        formId: "FCSOq",
        type: "textarea"
      }
    ]
  });
  return (
    <form onSubmit={onSubmit} ref={ref} css={formStyle}>
      {/* <label htmlFor="yqcLl">Name</label> */}
      <input type="text" id="yqcLl" placeholder="Name" css={inputStyle} />

      {/* <label htmlFor="COAtR">Mail</label> */}
      <input type="text" id="COAtR" placeholder="Mail" css={inputStyle} />

      <div id="DWMGV">
        <span>Your Occupation</span>
        <label htmlFor="KtxDT">Option 1</label>

        <input type="radio" name="DWMGV" id="KtxDT" value="Option 1" />
      </div>
      {/* <label htmlFor="FCSOq">Your Message </label> */}

      <textarea id="FCSOq" placeholder="Message" css={textareaStyle} />
      <button type="submit" css={submitBtnStyle}>
        Submit
      </button>
    </form>
  );
}
