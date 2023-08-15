import { useEffect } from 'react';

const PopupModal = ({ setContent }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			setContent(null);
		}, 5000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div>
			<p>Your order has been completed!</p>
		</div>
	);
};

export default PopupModal;
