import Image from "next/image";
import Link from "next/link";
import { hamburgerStyle, headerStyle, logoContainerStyle, navContainerStyle, productsStyle } from "./style";
import { useCallback, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const clickHandler = useCallback(() => {
    setOpenMenu(!openMenu);
  }, [openMenu]);
  return (
    <header id="header" css={headerStyle} className="header">
      <Link
        href="/"
        className="img-container logo-container"
        css={logoContainerStyle}
        title="Krishaka"
        aria-label="Home | Krishaka"
      >
        <Image src="/assets/images/logo.png" alt="Logo" fill sizes="100%" priority></Image>
      </Link>
      <div
        className={openMenu ? "hamburger-active" : "hamburger-inactive"}
        css={hamburgerStyle}
        title={!openMenu ? "Open Menu" : "Close Menu"}
        aria-label="Menu"
        onClick={clickHandler}
      >
        <div className="lines _1"></div>
        <div className="lines _2"></div>
        <div className="lines _3"></div>
      </div>
      <nav className={openMenu ? "nav-container" : "nav-container-inactive"} css={navContainerStyle}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <div css={productsStyle}>
          <Link href="/">
            Products
            <AiFillCaretDown />
          </Link>
          <div className="pop-up">
            <Link href="/products/prometheus">Prometheus</Link>
            <Link href="/products/zeus">Zeus</Link>
            <Link href="/products/posiedon">Posiedon</Link>
          </div>
        </div>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
