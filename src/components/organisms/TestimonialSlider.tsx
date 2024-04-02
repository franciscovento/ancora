// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

import 'swiper/css';
import { useSwiper } from 'swiper/react';

interface Props {
  testimonials: { text: string; author: string }[];
}

const TestimonialSlider = ({ testimonials }: Props) => {
  return (
    <div className="relative">
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        style={{
          position: 'unset',
        }}
      >
        {testimonials?.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="group duration-300 min-h-[121px] p-6 justify-center items-center flex flex-col gap-4">
              <span
                className="italic font-light"
                dangerouslySetInnerHTML={{ __html: testimonial.text }}
              />
              <span
                className="block text-center text-xs"
                dangerouslySetInnerHTML={{ __html: testimonial.author }}
              />
            </div>
          </SwiperSlide>
        ))}
        <NextButton />
        <PrevButton />
      </Swiper>
    </div>
  );
};
export default TestimonialSlider;

const NextButton = () => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideNext()}
      id="next-slide"
      className="hidden lg:block text-4xl text-anc-primary absolute -right-12 top-1/3 -translate-y-1/2 z-30"
    >
      <span>{'>'}</span>
    </button>
  );
};

const PrevButton = () => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slidePrev()}
      id="next-slide"
      className="hidden lg:block text-4xl text-anc-primary absolute -left-12 top-1/3 -translate-y-1/2 z-30"
    >
      <span>{'<'}</span>
    </button>
  );
};
