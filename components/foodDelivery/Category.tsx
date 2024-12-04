"use client";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const categories = [
  {
    id: 1,
    title: "Burger",
    icon: "/images/foodcategory/burger.png",
  },
  {
    id: 2,
    title: "Chicken",
    icon: "/images/foodcategory/chicken.png",
  },
  {
    id: 3,
    title: "Pizza",
    icon: "/images/foodcategory/pizza.png",
  },
  {
    id: 4,
    title: "Soup",
    icon: "/images/foodcategory/soup.png",
  },
  {
    id: 5,
    title: "Beef",
    icon: "/images/foodcategory/beef.png",
  },
  {
    id: 6,
    title: "Biryani",
    icon: "/images/foodcategory/biryani.png",
  },
  {
    id: 7,
    title: "Beef",
    icon: "/images/foodcategory/beef.png",
  },
];

const Category = () => {
  return (
    <div className="box mb-4 xxxl:mb-6">
      <div className="flex items-center justify-between bb-dashed pb-6 mb-6">
        <p className="font-medium">Category</p>
        <div className="flex gap-3">
          <button className="p-1.5 xl:p-2.5 rtl:rotate-180 disabled:cursor-not-allowed prev-cat border hover:bg-primary hover:text-n0 duration-300 border-primary text-primary rounded-lg">
            <IconChevronLeft />
          </button>
          <button className="p-1.5 xl:p-2.5 rtl:rotate-180 disabled:cursor-not-allowed next-cat border hover:bg-primary hover:text-n0 duration-300 border-primary text-primary rounded-lg">
            <IconChevronRight />
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        loop
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={true}
        pagination={{
          enabled: true,
          el: ".pagi-cat",
          clickable: true,
        }}
        navigation={{
          prevEl: ".prev-cat",
          nextEl: ".next-cat",
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          580: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 16,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
          1800: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
        }}>
        {categories.map(({ id, icon, title }) => (
          <SwiperSlide key={id}>
            <Link
              href="#"
              className="py-12 px-8 flex flex-col items-center text-center rounded-[90px] bg-primary/5 dark:bg-bg3 hover:bg-primary hover:text-white duration-300">
              <div className="px-3 py-6 bg-n0 dark:bg-bg4 rounded-[90px] shadow-[0px_6px_30px_0px_rgba(0,0,0,0.06)]">
                <Image
                  width={54}
                  height={54}
                  src={icon}
                  alt="food category icon"
                />
              </div>
              <p className="text-xl font-medium mt-5">{title}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pagi-cat justify-center flex gap-2 mt-6 lg:mt-10"></div>
    </div>
  );
};

export default Category;
