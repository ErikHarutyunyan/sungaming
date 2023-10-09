import "./OnboardModal.css";
import ReactDom from "react-dom";
import ReactPlayer from "react-player";
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#161829",
  padding: "50px",
  zIndex: 1000,
  borderRadius: "16px",
};

const MODAL_AGE_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgb(34 36 52 / 33%)",
  padding: "50px",
  zIndex: 1000,
  borderRadius: "16px",
  maxWidth: "500px",
  fontWeight: "700",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
  backdropFilter: "blur(5px)",
};

const IFRAME_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "100vw",
  height: "100vh",
};

const OnboardModal = ({
  open,
  onClose,
  children,
  iframePath = "",
  videoPath = "",
  poster,
}) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      {iframePath && (
        <iframe
          seamless
          loading="eager"
          src={iframePath}
          allowFullScreen
          style={IFRAME_STYLES}
        />
      )}
      <div style={iframePath ? null : OVERLAY_STYLES} />

      {!iframePath && videoPath !== "" ? (
        <>
          <div className="player-wrapper">
            <button
              onClick={onClose}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <ReactPlayer
              className="react-player"
              url={`${videoPath}`}
              controls
            />
          </div>
        </>
      ) : (
        <div style={iframePath ? MODAL_AGE_STYLES : MODAL_STYLES}>
          <button
            onClick={onClose}
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            >
            <span aria-hidden="true">×</span>
          </button>
          {children}
        </div>
      )}
    </>,
    document.getElementById("portal")
  );
};
export default OnboardModal;
