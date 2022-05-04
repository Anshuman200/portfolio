import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import profilePic5 from "../../img/profile5.jpg";

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi atque, pariatur perferendis recusandae animi rerum cum voluptatibus voluptas expedita itaque esse tempora veniam a veritatis aliquam quam dolore. Culpa pariatur repellendus voluptates nisi nesciunt? Blanditiis aliquam harum accusamus doloremque amet.`,
    },
    {
      img: profilePic2,
      review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi atque, pariatur perferendis recusandae animi rerum cum voluptatibus voluptas expedita itaque esse tempora veniam a veritatis aliquam quam dolore. Culpa pariatur repellendus voluptates nisi nesciunt? Blanditiis aliquam harum accusamus doloremque amet.`,
    },
    {
      img: profilePic3,
      review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi atque, pariatur perferendis recusandae animi rerum cum voluptatibus voluptas expedita itaque esse tempora veniam a veritatis aliquam quam dolore. Culpa pariatur repellendus voluptates nisi nesciunt? Blanditiis aliquam harum accusamus doloremque amet.`,
    },
    {
      img: profilePic4,
      review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi atque, pariatur perferendis recusandae animi rerum cum voluptatibus voluptas expedita itaque esse tempora veniam a veritatis aliquam quam dolore. Culpa pariatur repellendus voluptates nisi nesciunt? Blanditiis aliquam harum accusamus doloremque amet.`,
    },
    {
      img: profilePic5,
      review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi atque, pariatur perferendis recusandae animi rerum cum voluptatibus voluptas expedita itaque esse tempora veniam a veritatis aliquam quam dolore. Culpa pariatur repellendus voluptates nisi nesciunt? Blanditiis aliquam harum accusamus doloremque amet.`,
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>

        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* Slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="img" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
