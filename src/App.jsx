import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import OnboardModal from './components/OnboardModal/OnboardModal';
import router from './router';

const dialogStatus = localStorage.getItem('isDialog');

function App() {
	const [isDialog, setDialog] = useState(dialogStatus);
	const [isOpen, setIsOpen] = useState(true);
	return (
		<>
			{isDialog !== null && isDialog ? (
				<RouterProvider router={router} />
			) : (
				<OnboardModal
					open={isOpen}
					iframe={true}
					setDialog={setDialog}
					onClose={() => setIsOpen(false)}
				/>
			)}
		</>
	);
}

export default App;
