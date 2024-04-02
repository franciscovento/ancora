// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import ContactForm from '../molecules/ContactForm';
import { useSwiper } from 'swiper/react';

interface Props {
  products: { name: string; icon: string }[];
}

const ProductSlider = ({ products }: Props) => {
  const mySwal = withReactContent(Swal);
  const showPopup = (productName: string) => {
    mySwal.fire({
      html: <ContactForm defaultService={productName} />,
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: false,
      background: 'transparent',
    });
  };

  return (
    <div className="relative">
      <Swiper
        style={{
          position: 'unset',
        }}
        spaceBetween={10}
        className="product-slider"
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          400: {
            slidesPerView: 1.5,
          },
          600: {
            slidesPerView: 2.5,
          },
          750: {
            slidesPerView: 3.5,
          },
          950: {
            slidesPerView: 4.3,
          },
        }}
      >
        {products?.map((product, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => showPopup(product.name)}
              className="cursor-pointer group min-w-[194px] duration-300 hover:border-anc-primary border min-h-[121px] bg-white p-6 justify-center items-center flex flex-col gap-4 rounded-md shadow-[0px_4px_18px_0px_rgba(0,_0,_0,_0.05)]"
            >
              <span
                className="hover:fill-anc-primary"
                dangerouslySetInnerHTML={{ __html: product.icon }}
              />
              <span className="group-hover:text-anc-primary duration-300 block text-center uppercase">
                {product.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
        <NextButton />
        <PrevButton />
      </Swiper>
    </div>
  );
};
export default ProductSlider;

const NextButton = () => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideNext()}
      id="next-slide"
      className="hidden lg:block text-4xl text-anc-primary absolute -right-12 top-1/2 -translate-y-1/2 z-30"
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
      className="hidden lg:block text-4xl text-anc-primary absolute -left-12 top-1/2 -translate-y-1/2 z-30"
    >
      <span>{'<'}</span>
    </button>
  );
};
