import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import Text from '../text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import { useNavigate } from 'react-router-dom';
import { StyledBuyButton } from './styles';
import PopupModal from '../popu-modal/PopoupModal';

const BuyButton = ({ order, setContent }) => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);

	const navigate = useNavigate();
	if (loadingFirebase) return;
	return (
		<StyledBuyButton
			onClick={() => handleClick(order, currentUser, navigate, setContent)}
		>
			<Text
				align={MEASUREMENTS.ALIGN.CENTER}
				color={COLORS.WHITE}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
				text={'Buy'}
			/>
		</StyledBuyButton>
	);
};

const handleClick = (order, currentUser, navigate, setContent) => {
	setContent(<PopupModal setContent={setContent} />);
	if (currentUser) {
		console.log(currentUser);
	} else {
		// navigate('/');
	}
};

export default BuyButton;
