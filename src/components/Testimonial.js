import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import quoteImg from "../images/why-us/quote.png";

const Testimonial = () => {
  const [testimonial, settestimonial] = useState([]);

  useEffect(() => {
    axios.get("/testimonial").then((res) => settestimonial(res.data));
  }, []);

  return (
    <>
      <Carousel id="newTestimonial">
        {testimonial.map((value, index) => (
          <Carousel.Item pause="hover" interval={5000} key={index}>
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center why-us-testi-img-container">
                  <img
                    src={`/images/${value.img}`}
                    className={value.img}
                    alt={value.img}
                  />
                </div>
                <div className="col-md-6 m-auto">
                  <div className="carousel-caption" id="testomonial-txt">
                    <img
                      src={`/images/quote.png`}
                      className="why-us-qoute-img"
                      alt="quote"
                    />
                    <p>{value.desc}</p>
                    {/* <img
                      src={`/images/${value.logo}`}
                      className="company-logo-img"
                      alt="companyLogo"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Testimonial;
