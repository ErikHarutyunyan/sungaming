import "./LazyImage.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({
  src,
  alt,
  wrapperClassName = "default-img",
  width,
  height,
  className,
  fetchpriority,
  onClick,
}) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      effect="blur"
      className={className}
      wrapperClassName={wrapperClassName}
      fetchpriority={fetchpriority}
      onClick={onClick}
    />
  );
};
export default LazyImage;
