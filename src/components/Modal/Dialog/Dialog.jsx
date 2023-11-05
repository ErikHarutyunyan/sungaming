import { useRef, useState } from 'react';
import LoadingOpen from '../../Loading/LoadingOpen';


const IFRAME_STYLES = {
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	width: '100vw',
	height: '100vh',
	display: 'none',
};

const iframePath = 'https://sunhorse.netlify.app/';

const Dialog = ({ setDialog }) => {
	const [isLoading, setIsLoading] = useState(true);

	const refIframe = useRef(null);

	const handleLoad = () => {
		refIframe.current.style.display = 'block';
		setIsLoading(false);
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
								localStorage.setItem('isDialog', true);
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
