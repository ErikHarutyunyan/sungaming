import ReactPlayer from "react-player";
import "./VideoModal.css";

const VideoModal = ({ onClose, videoPath }) => {
  return (
    <div className="player-wrapper">
      <button
        onClick={onClose}
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
      <ReactPlayer className="react-player" url={`${videoPath}`} controls />
    </div>
  );
};
export default VideoModal;
