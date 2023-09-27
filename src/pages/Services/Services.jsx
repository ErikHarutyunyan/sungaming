// Styles
import "./Services.css";

import serviceBanner from "../../assets/img/services-banner.png";
import BannerPages from "../../components/BannerPages/BannerPages";

const Services = () => {
  return (
    <>
      <BannerPages
        classNames={"services"}
        page={"Services"}
        bg={serviceBanner}
        title={"Our"}
        titleSecond={"Services"}
        desc={
          "Our systematic approach to art development ensures high delivery standards for games and game-based solutions, from look development to engine integration."
        }
      />
    </>
  );
};

export default Services;
