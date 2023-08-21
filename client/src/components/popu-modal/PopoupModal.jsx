import { useEffect } from 'react';
import Text from '../text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

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
			<Text
				align={MEASUREMENTS.ALIGN.CENTER}
				color={COLORS.WHITE}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
				text={'Your order has been completed'}
			/>
		</div>
	);
};

export default PopupModal;
