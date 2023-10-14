import { useRef, useState, useEffect } from "react";
import "./Dialog.css";
import LoadingOpen from "../LoadingOpen";

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

const MODAL_AGE_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgba(6, 6, 6, 0.4)",
  padding: "50px",
  zIndex: 1000,
  borderRadius: "16px",
  maxWidth: "500px",
  fontWeight: "700",
};

const iframePath = "https://sunhorse.netlify.app/";

const Dialog = ({ setDialog, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  const refIframe = useRef(null);

  // useEffect(() => {
  //   const handleLoad = () => {
  //     refIframe.current.style.display = "block";
  //     setIsLoading(false);
  //   };

  //   refIframe.current.addEventListener("load", handleLoad);

  //   return () => {
  //     refIframe.current.removeEventListener("load", handleLoad);
  //   };
  // }, []);

  const handleLoad = () => {
    refIframe.current.style.display = "block";
    setIsLoading(false);
  };

  return (
    <>
      <iframe
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
        <div style={MODAL_AGE_STYLES}>
          <button
            onClick={onClose}
            type="button"
            className="close"
            aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <div className="checkAge-form">
            <h3>
              The SunGaming content is designed for individuals aged 18 years or
              above.
            </h3>
            <p>
              Please verify that you fulfill the legal age criteria to proceed.
            </p>
            <button
              type="button"
              className="confirmAge"
              onClick={() => {
                setDialog(true);
                localStorage.setItem("isDialog", true);
              }}>
              I&apos;m 18 or older
            </button>
            <button
              className="rejectAge"
              onClick={() => {
                setDialog(false);
                window.history.back();
              }}>
              No, go back.
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
