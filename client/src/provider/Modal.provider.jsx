import { useState } from 'react';
import { ModalContext } from '../context/Modal.context';

const ModalProvider = ({ children }) => {
	const [content, setContent] = useState(null);
	const [popup, setPopup] = useState(false);

	return (
		<ModalContext.Provider value={{ content, setContent, popup, setPopup }}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
