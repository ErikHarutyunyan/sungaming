import { useMemo } from "react";
import ReactDOM from "react-dom";
import Dialog from "../Dialog/Dialog";
import VideoModal from "../VideoModal/VideoModal";
import "./OnboardModal.css";

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

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 1000,
  backdropFilter: "blur(5px)",
};

const DefaultModal = ({ children, onClose }) => {
  return (
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        <button
          onClick={onClose}
          type="button"
          className="close default"
          data-dismiss="modal"
          aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        {children}
      </div>
    </>
  );
};

const OnboardModal = ({
  open,
  onClose,
  children,
  video = null,
  iframe = null,
  setDialog,
}) => {
  // Use useMemo unconditionally
  const componentToRender = useMemo(() => {
    if (!open) return null; // Early return if not open

    if (iframe) {
      return <Dialog setDialog={setDialog} onClose={onClose} />;
    } else if (video) {
      return (
        <>
          <div style={OVERLAY_STYLES} onClick={onClose} />
          <VideoModal videoPath={video} onClose={onClose} />
        </>
      );
    } else {
      return <DefaultModal onClose={onClose}>{children}</DefaultModal>;
    }
  }, [open, iframe, video, onClose, children, setDialog]);

  return ReactDOM.createPortal(
    <>{componentToRender}</>,
    document.getElementById("portal")
  );
};
export default OnboardModal;
