/* eslint-disable react-refresh/only-export-components */
import {MdOutlineArrowBack, MdOutlineArrowForward} from "react-icons/md";
import {memo} from "react";

const PrevArrow = memo(function PrevArrow(props) {
  const {onClick} = props;
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="Slide Prev"
      className="arafat-prev slick-arrow box-style">
      <MdOutlineArrowBack/>
    </button>
  );
})

const NextArrow = memo(function NextArrow(props) {
  const {onClick} = props;
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="Slide Next"
      className="arafat-next slick-arrow box-style">
      <MdOutlineArrowForward/>
    </button>
  );
})

const ServicePrevArrow = memo(function ServicePrevArrow(props) {
  const {onClick} = props;
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="Slide Prev"
      className="arafat-prev slick-arrow box-style top-right">
      <MdOutlineArrowBack/>
    </button>
  );
})

const ServiceNextArrow = memo(function ServiceNextArrow(props) {
  const {onClick} = props;
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="Slide Next"
      className="arafat-next slick-arrow box-style top-right">
      <MdOutlineArrowForward/>
    </button>
  );
})

const BlogPrevArrow = memo(function BlogPrevArrow(props) {
  const {onClick} = props;

  return (
    <button
      onClick={onClick}
      type="button"
      className="arafat-prev slick-arrow box-style bottom-right">
      <MdOutlineArrowBack/>
    </button>
  );
})

const BlogNextArrow = memo(function BlogNextArrow(props) {
  const {onClick} = props;

  return (
    <button
      onClick={onClick}
      type="button"
      className="arafat-next slick-arrow box-style bottom-right">
      <MdOutlineArrowForward/>
    </button>
  );
})

export const settingsFeatured = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow/>,
};
export const settingsServices = {
  // dots: true,
  infinite: true,
  // autoplay: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  adaptiveHeight: false,
  nextArrow: <ServiceNextArrow/>,
  prevArrow: <ServicePrevArrow/>,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export const settingsBlog = {
  dots: true,
  infinite: true,
  // autoplay: true,
  // speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveHeight: false,
  dotsClass: "section-dots",
  appendDots: (dots) => <ul style={{display: "block"}}>{dots}</ul>,
  customPaging: (i) => (
    <span className="dot" role="button" title={`${i}`}>
      <span className="string">{i} </span>
    </span>
  ),
  nextArrow: <BlogNextArrow/>,
  prevArrow: <BlogPrevArrow/>,
};


export const settingsGameSingle = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1500,
  cssEase: "ease-in-out",
  speed: 600,
  pauseOnHover: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveHeight: false,
  dotsClass: "section-dots",
  appendDots: (dots) => <ul style={{display: "block"}}>{dots}</ul>,
  customPaging: (i) => (
    <span className="dot" role="button" title={`${i}`}>
      <span className="string">{i} </span>
    </span>
  ),
  nextArrow: <BlogNextArrow/>,
  prevArrow: <BlogPrevArrow/>,
};

export const settingsAbout = {
  infinite: true,
  autoplay: true,
  speed: 600,
  slidesToShow: 6,
  slidesToScroll: 1,
  adaptiveHeight: false,
  nextArrow: <BlogNextArrow/>,
  prevArrow: <BlogPrevArrow/>,
};
