declare module 'swiper/react' {
  export interface SwiperProps {
    speed?: number;
    loop?: boolean;
    slidesPerView?: number;
    direction?: string;
    spaceBetween?: number;
    centeredSlides?: boolean;
    centeredSlidesBounds?: boolean;
    initialSlide?: number;
    loopedSlides?: number;
    grabCursor?: boolean;
    navigation?: {
      prevEl: string;
      nextEl: string;
    };
    
  }
}

export {};