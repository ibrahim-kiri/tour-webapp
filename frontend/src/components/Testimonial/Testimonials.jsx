import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {

    const settings= {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autolaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }
  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quidem
        ab veniam provident! Consectetur nihil ducimus dolores, modi quam iure
        non debitis iste amet corporis numquam voluptate fuga assumenda incidunt
        libero aperiam. Adipisci laudantium non deserunt voluptatibus
        aspernatur. Similique, eos?
      </p>

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
        <div>
          <h6 className="mb-0 mt-3">John Doe</h6>
        </div>
      </div>
    </div>
    <div className="testimonial py-4 px-3">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quidem
        ab veniam provident! Consectetur nihil ducimus dolores, modi quam iure
        non debitis iste amet corporis numquam voluptate fuga assumenda incidunt
        libero aperiam. Adipisci laudantium non deserunt voluptatibus
        aspernatur. Similique, eos?
      </p>

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
        <div>
          <h6 className="mb-0 mt-3">Katusiime Irene</h6>
        </div>
      </div>
    </div>
    <div className="testimonial py-4 px-3">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quidem
        ab veniam provident! Consectetur nihil ducimus dolores, modi quam iure
        non debitis iste amet corporis numquam voluptate fuga assumenda incidunt
        libero aperiam. Adipisci laudantium non deserunt voluptatibus
        aspernatur. Similique, eos?
      </p>

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
        <div>
          <h6 className="mb-0 mt-3">Bahati Fatumah</h6>
        </div>
      </div>
    </div>
    <div className="testimonial py-4 px-3">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quidem
        ab veniam provident! Consectetur nihil ducimus dolores, modi quam iure
        non debitis iste amet corporis numquam voluptate fuga assumenda incidunt
        libero aperiam. Adipisci laudantium non deserunt voluptatibus
        aspernatur. Similique, eos?
      </p>

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
        <div>
          <h6 className="mb-0 mt-3">Aminah Mziray</h6>
        </div>
      </div>
    </div>
  </Slider>
};

export default Testimonials;
