import { useState } from 'react';
import ReactPlayer from 'react-player';
import LoadingStep from '../../Loading/LoadingStep';

const VideoModal = ({ onClose, videoPath }) => {
	const [videoLoad, setVideoLoad] = useState(false);
	return (
		<div className="video-wrapper">
			<div className="player-wrapper">
				<button
					onClick={onClose}
					type="button"
					className="close"
					data-dismiss="modal"
					aria-label="Close">
					<span aria-hidden="true">×</span>
				</button>
				{!videoLoad ? <LoadingStep /> : null}
				<ReactPlayer
					playing={videoLoad}
					width="100%"
					height="100%"
					className="react-player"
					url={`${videoPath}`}
					controls
					onReady={() => setVideoLoad(true)}
				/>
			</div>
		</div>
	);
};
export default VideoModal;
