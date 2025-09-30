import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import client from "../../../public/client.jpg";
const items = [
  {
    id: 1,
    img: client,
    name: "John Doe",
    Position: "Graphics Designer",
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolore et distinctio omnis consectetur fugit.",
  },
  {
    id: 2,
    img: client,
    name: "John Doe",
    Position: "Graphics Designer",
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolore et distinctio omnis consectetur fugit.",
  },
  {
    id: 3,
    img: client,
    name: "John Doe",
    Position: "Graphics Designer",
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolore et distinctio omnis consectetur fugit.",
  },
];
const Testimonial = () => {
  return (
    <div className="pt-20">
      <div className="bg-[url(/testimonials-bg.jpg)] relative py-20  bg-cover bg-no-repeat flex flex-col items-center justify-center ">
        {" "}
        <div className="absolute w-full h-full bg-[#000000a7] left-0 top-0"></div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-full"
        >
          {items?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col gap-4 items-center justify-center text-white relative z-10">
                <img src={item.img} alt="" />
                <p className="text-base op0">{item.comments}</p>
                <h1 className="text-2xl font-medium">{item.name}</h1>
                <h3 className="text-lg">{item.Position}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
