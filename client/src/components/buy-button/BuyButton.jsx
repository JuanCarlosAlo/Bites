import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import Text from '../text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import { useNavigate } from 'react-router-dom';
import { StyledBuyButton } from './styles';
import PopupModal from '../popu-modal/PopoupModal';

import { ORDERS_URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';

import LoadingPage from '../loading-page/loading-page';

import Icon from '../icon/Icon';
import { fetchDuration } from '../../utils/fetchDuration';
import { calculateDeliveryDate } from '../../utils/deliveryTime';

const BuyButton = ({ order, setContent, setFetchInfo, initialDuration }) => {
	const navigate = useNavigate();
	const { currentUser, loadingFirebase } = useContext(AuthContext);

	if (loadingFirebase) return <LoadingPage />;
	console.log(order, initialDuration);
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
				nofullwidth={true}
			/>
			<Icon img={'/images/add-to-cart.svg'} />
		</StyledBuyButton>
	);
};

const handleClick = async (
	order,
	currentUser,
	navigate,
	setContent,
	setFetchInfo
) => {
	const remainingTime = await fetchDuration(order.coordinates, currentUser._id);
	const deliveryTime = calculateDeliveryDate(remainingTime);
	setContent(<PopupModal setContent={setContent} />);

	localStorage.removeItem('cartItems');
	if (currentUser) {
		try {
			await setFetchInfo({
				url: ORDERS_URLS.CREATE_ORDER,
				options: {
					method: METHODS.POST,
					body: JSON.stringify({
						_id: order._id,
						recipient: order.recipient,
						coordinates: order.coordinates,
						address: order.address,
						items: order.items,
						completed: false,
						userId: currentUser._id,
						deliveryTime,
						remainingTime
					}),
					headers: HEADERS
				},
				navigateTo: `/orders/${currentUser._id}`
			});
		} catch (error) {
			console.log(error);
		}
	} else {
		navigate('/');
	}
};

export default BuyButton;
