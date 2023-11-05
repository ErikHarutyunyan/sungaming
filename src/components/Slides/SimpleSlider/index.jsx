import Slider from "react-slick";

export default function SimpleSlider({ setting, children, className }) {
  let settings = setting;
  return (
    <Slider {...settings} className={className}>
      {children}
    </Slider>
  );
}
