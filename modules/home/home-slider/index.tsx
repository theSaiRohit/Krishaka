import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  sliderBtnStyle,
  sliderContainerStyle,
  sliderHeadingStyle,
  sliderImgContainerStyle,
  sliderStyle,
  sliderTextContainerStyle
} from "./style";
import { productData } from "@/common/common-data";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

export default function HomeSlider() {
  const swiper = useSwiper();
  const productMapper = (product: (typeof productData)[0], index: number) => {
    return (
      <SwiperSlide className="slides" key={index}>
        <div className="img-container slider-img-container" css={sliderImgContainerStyle}>
          <Image src={product.imgSrc} alt={product.name} sizes="100%" fill priority />
        </div>
        <div className="slider-text-container" css={sliderTextContainerStyle}>
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
          <Link href={"/products/" + product.name}>Know More</Link>
        </div>
      </SwiperSlide>
    );
  };
  return (
    <div css={sliderContainerStyle}>
      <h2 css={sliderHeadingStyle}>Our Products</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
        autoplay={{
          delay: 250000000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        modules={[Autoplay, Pagination, Navigation]}
        css={sliderStyle}
      >
        {productData.map(productMapper)}
        <button id="swiper-back" css={sliderBtnStyle} className="prev-btn">
          <AiOutlineLeftCircle />
        </button>
        <button id="swiper-forward" css={sliderBtnStyle} className="next-btn">
          <AiOutlineRightCircle />
        </button>
      </Swiper>
    </div>
  );
}
