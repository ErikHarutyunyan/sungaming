import "./OnboardModal.css";
import ReactDom from "react-dom";

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
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
  backdropFilter: "blur(5px)",
};

const OnboardModal = ({ open, onClose, children }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button
          onClick={onClose}
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};
export default OnboardModal;
