"use client";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleDish from "./SingleDish";

const popularDishes = [
  {
    id: 1,
    title: "Burger Deluxe",
    img: "/images/dishes/dish-1.png",
    price: "10.00",
  },
  {
    id: 2,
    title: "Sushi Rolls",
    img: "/images/dishes/dish-2.png",
    price: "10.00",
  },
  {
    id: 3,
    title: "Margherita Pizza",
    img: "/images/dishes/dish-3.png",
    price: "10.00",
  },
  {
    id: 4,
    title: "Super Biryani",
    img: "/images/dishes/dish-4.png",
    price: "10.00",
  },
  {
    id: 5,
    title: "Sushi Rolls",
    img: "/images/dishes/dish-3.png",
    price: "10.00",
  },
];

const Category = () => {
  return (
    <div className="box mb-4 xxxl:mb-6">
      <div className="flex items-center justify-between bb-dashed pb-6 mb-6">
        <p className="font-medium">Popular Dishes</p>
        <div className="flex gap-3">
          <button className="p-1.5 xl:p-2.5 rtl:rotate-180 disabled:cursor-not-allowed prev-dish border hover:bg-primary hover:text-n0 duration-300 border-primary text-primary rounded-lg">
            <IconChevronLeft />
          </button>
          <button className="p-1.5 xl:p-2.5 rtl:rotate-180 disabled:cursor-not-allowed next-dish border hover:bg-primary hover:text-n0 duration-300 border-primary text-primary rounded-lg">
            <IconChevronRight />
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        loop
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 1200,
        }}
        pagination={{
          enabled: true,
          el: ".pagi-dish",
          clickable: true,
        }}
        navigation={{
          prevEl: ".prev-dish",
          nextEl: ".next-dish",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1400: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1500: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1900: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}>
        {popularDishes.map((dish) => (
          <SwiperSlide key={dish.id}>
            <SingleDish dish={dish} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pagi-dish justify-center flex gap-2 mt-6 lg:mt-10"></div>
    </div>
  );
};

export default Category;
