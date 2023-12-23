import {
  canvasStyle,
  featuresContainerStyle,
  headingContainerStyle,
  listStyle,
  oneLinerStyle,
  productContainerStyle,
  productHeadingStyle,
  productTextContainerStyle,
  videoContainerStyle,
  workingHeadingStyle,
  workingParaStyle,
  workingStyle
} from "@/modules/products/style";
import { useEffect, useRef } from "react";

export default function Product({ name }: { name: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameCountRef = useRef<number>(120);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const img = new Image();

    const currentFrame = (index: number) => `/assets/image-sequence-copy/0${"" + (100 + index)}.jpg`;

    const updateImage = (index: number) => {
      const canvas = canvasRef.current;
      if (canvas) {
        img.src = currentFrame(index);
        let imgWidth = img.width;
        let imgHeight = img.height;

        let imgRatio = Math.min(canvas.width / imgWidth, canvas.height / imgHeight);

        let newWidth = imgWidth * imgRatio;
        let newHeight = imgHeight * imgRatio;

        let x = canvas.width / 2 - newWidth / 2;
        let y = canvas.height / 2 - newHeight / 2;
        context?.drawImage(img, x, y, newWidth, newHeight);
      }
    };

    const preloadImages = () => {
      for (let i = 1; i < frameCountRef.current; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    if (canvas) {
      canvas.height = 1280;
      canvas.width = 2160;

      img.src = currentFrame(1);
      img.onload = function () {
        let imgWidth = img.width;
        let imgHeight = img.height;

        let imgRatio = Math.min(canvas.width / imgWidth, canvas.height / imgHeight);

        let newWidth = imgWidth * imgRatio;
        let newHeight = imgHeight * imgRatio;

        let x = canvas.width / 2 - newWidth / 2;
        let y = canvas.height / 2 - newHeight / 2;

        context?.drawImage(img, x, y, newWidth, newHeight);
      };
    }

    const scrollCallback = () => {
      const scrollPos = window.scrollY;
      const val = 2000;
      const scrollFraction = scrollPos / val;
      const frameIndex = Math.min(frameCountRef.current - 1, Math.ceil(scrollFraction * frameCountRef.current));

      requestAnimationFrame(() => updateImage(frameIndex + 1));
    };

    preloadImages();

    window.addEventListener("scroll", scrollCallback);
    return () => window.removeEventListener("scroll", scrollCallback);
  }, []);

  return (
    <div css={productContainerStyle}>
      <div css={productTextContainerStyle}>
        <div css={headingContainerStyle}>
          <h1 css={productHeadingStyle}>{name}</h1>
          <p css={oneLinerStyle}>
            Revolutionize groundnut harvesting with our advanced machine—effortlessly harvests and filters, ensuring
            optimal quality.
          </p>
        </div>
        <div css={workingStyle}>
          <span css={workingHeadingStyle}>Working</span>
          <p css={workingParaStyle}>
            Introducing Prometheus! a cutting-edge agritech vehicle designed for groundnut farmers. This autonomous
            marvel combines precision harvesting technology with advanced filtering mechanisms, ensuring a seamless and
            efficient process. Equipped with state-of-the-art sensors, it selectively harvests mature groundnuts and
            employs real-time filtering to remove debris. HarvestGuard Pro not only optimizes yield but also minimizes
            post-harvest processing, empowering farmers with a time-saving and high-quality solution for groundnut
            cultivation
          </p>
        </div>
        <div css={featuresContainerStyle}>
          <h2>Prominent Features</h2>
          <ul css={listStyle}>
            <li>
              <h3>Efficiency</h3>
              <p>
                The groundnut harvesting machine by Krishaka ensures efficient and rapid harvesting, minimizing labor
                and time while maximizing productivity.
              </p>
            </li>
            <li>
              <h3>Precision Filtering</h3>
              <p>
                With advanced filtering mechanisms, the machine guarantees the collection of high-quality groundnuts,
                eliminating impurities for superior crop yield.
              </p>
            </li>
            <li>
              <h3>User-Friendly Design</h3>
              <p>
                Krishaka&apos;s harvesting machine features a user-friendly interface, making it easy for farmers to
                operate, enhancing overall usability and accessibility.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div css={videoContainerStyle}>
        <canvas id="canvas" css={canvasStyle} ref={canvasRef}></canvas>
      </div>
    </div>
  );
}
