import "swiper/css/bundle";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <>
      <div className="d-flex flex-row justify-content-center"></div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
