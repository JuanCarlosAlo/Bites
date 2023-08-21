import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import Text from '../text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import { useNavigate } from 'react-router-dom';
import { StyledBuyButton } from './styles';
import PopupModal from '../popu-modal/PopoupModal';
import { useFetch } from '../../hooks/useFetch';
import { ORDERS_URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';

const BuyButton = ({ order, setContent }) => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	const { setFetchInfo } = useFetch();
	const navigate = useNavigate();
	if (loadingFirebase) return;
	return (
		<StyledBuyButton
			onClick={() =>
				handleClick(order, currentUser, navigate, setContent, setFetchInfo)
			}
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

const handleClick = (
	order,
	currentUser,
	navigate,
	setContent,
	setFetchInfo
) => {
	setContent(<PopupModal setContent={setContent} />);
	localStorage.removeItem('cartItems');
	if (currentUser) {
		setFetchInfo({
			url: ORDERS_URLS.CREATE_ORDER,
			options: {
				method: METHODS.POST,
				body: JSON.stringify({
					recipient: order.recipient,
					coordinates: order.coordinates,
					address: order.address,
					items: order.items,
					completed: false,
					userId: currentUser._id
				}),
				headers: HEADERS
			},
			navigateTo: `orders/${currentUser._id}`
		});
	} else {
		navigate('/');
	}
};

export default BuyButton;
