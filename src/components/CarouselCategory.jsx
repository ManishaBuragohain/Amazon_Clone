import { Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const CarouselCategory = () => {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">shop by category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        modules={[Navigation]}
        navigation={true}
      >
        <SwiperSlide>
          <img src={"../images/category_0.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/category_1.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/category_2.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/category_3.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/category_4.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/category_5.jpg"} />
        </SwiperSlide>
      </Swiper>
      ;
    </div>
  );
};

export default CarouselCategory;
