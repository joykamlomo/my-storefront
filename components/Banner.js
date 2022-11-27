import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-24 bg-gradient-to-t from-white to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
      >
        <div className="bg-gray-900 h-52">
          <Image
            loading="lazy"
            src="https://links.papareact.com/6ff"
            alt="l"
            width={600}
            height={600}
          />
        </div>
        <div className="bg-gray-900 h-52">
          <Image
            loading="lazy"
            src="https://links.papareact.com/gi1"
            alt="l"
            width={600}
            height={600}
          />
        </div>
        <div className="bg-gray-900 h-52">
          <Image
            loading="lazy"
            src="https://links.papareact.com/7ma"
            alt="l"
            width={600}
            height={600}
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
