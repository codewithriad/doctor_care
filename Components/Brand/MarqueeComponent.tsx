import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../public/image/brand/img1.jpg";
import img2 from "../../public/image/brand/img2.jpg";
import img3 from "../../public/image/brand/img3.jpg";
import img4 from "../../public/image/brand/img4.jpg";
import img5 from "../../public/image/brand/img5.jpg";
import img6 from "../../public/image/brand/img6.png";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
import "./Marquee.css";

const MarqueeComponent = () => {
  return (
    <>
      <section className="relative my-20">
        <div className="mt-12">
          <h2 className="text-4xl font-bold text-[#007e85] text-center">
            Trusted by 10,000 companies around the world.
          </h2>
        </div>
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src={img1} alt="brand-image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img2} alt="brand-image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img3} alt="brand-image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img4} alt="brand-image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img5} alt="brand-image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img6} alt="brand-image" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
export default MarqueeComponent;
