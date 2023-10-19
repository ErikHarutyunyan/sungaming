import "./LazyImage.css";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({
                     src,
                     alt,
                     wrapperClassName = "default-img",
                     width,
                     height,
                     className,
                   }) => {
  return (
    <LazyImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      effect="blur"
      className={className}
      wrapperClassName={wrapperClassName}
    />
  );
};
export default LazyImage;
