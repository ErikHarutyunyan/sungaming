import LoadingOpen from "components/Loading/LoadingOpen";
import { useRef, useState } from "react";

const IFRAME_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "100vw",
  height: "100vh",
  display: "none",
};

const iframePath = "https://sunhorse.netlify.app/";

const Dialog = ({ setDialog }) => {
  const [isLoading, setIsLoading] = useState(true);

  const refIframe = useRef(null);

  const handleLoad = () => {
    refIframe.current.style.display = "block";
    setIsLoading(false);
  };

  const handleConfirm = () => {
    setDialog(true);
    localStorage.setItem("isDialog", true);
  };
  const handleReject = () => {
    setDialog(false);
    window.history.back();
  };

  return (
    <>
      <iframe
        title="hors load"
        ref={refIframe}
        seamless
        loading="eager"
        src={iframePath}
        allowFullScreen
        style={IFRAME_STYLES}
        onLoad={handleLoad}
      />
      {isLoading ? (
        <LoadingOpen />
      ) : (
        <div className="modal-age-styles">
          <div className="checkAge-form">
            <h3>
              The Sun Gaming content is designed for individuals aged 18 years
              or above.
            </h3>
            <p>
              Please verify that you fulfill the legal age criteria to proceed.
            </p>
            <button
              type="button"
              className="confirmAge"
              onClick={handleConfirm}
            >
              I&apos;m 18 or older
            </button>
            <button className="rejectAge" onClick={handleReject}>
              No, go back.
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
