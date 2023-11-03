import ReactPlayer from 'react-player';
import LoadingForm from '../../Loading/LoadingForm';
import './VideoModal.css';

const VideoModal = ({ onClose, videoPath }) => {
console.log('videoPath :', videoPath);
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
			<ReactPlayer onLoad={LoadingForm} className="react-player" url={`${videoPath}`} controls />
			{/* <iframe
				className="modal__video-style"
				onLoad={LoadingForm}
				loading="lazy"
				width="800"
				height="500"
				src={videoPath}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen></iframe> */}
		</div>
	);
};
export default VideoModal;
