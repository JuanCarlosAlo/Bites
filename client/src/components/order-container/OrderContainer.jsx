import CompletionBar from '../completion-bar/CompletionBar';
import { getDate } from '../../utils/getDate';

import ItemSecondaryContainer from '../item-secondary-container/ItemSecondaryContainer';

import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import PrimaryButton from '../primary-button/PrimaryButton';
import { getRemainingTimeOrder } from '../../utils/getRemainingTimeOrder';
import { StyledOrderButtonsContainer, StyledOrderContainer } from './styles';
import Text from '../text/Text';

const OrderContainer = ({ order, currentUser }) => {
	const fullRemainingTime = getRemainingTimeOrder(order.deliveryTime);

	return (
		<StyledOrderContainer>
			<StyledOrderButtonsContainer>
				<Text
					align={MEASUREMENTS.ALIGN.LEFT}
					color={COLORS.WHITE}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
					text={getDate(order.date)}
				/>
				<CompletionBar
					fullRemainingTime={fullRemainingTime}
					orderTime={order.remainingTime}
					userId={currentUser._id}
					orderId={order._id}
				/>
			</StyledOrderButtonsContainer>
			{order.items.map(item => (
				<ItemSecondaryContainer key={item._id} item={item} />
			))}
			<PrimaryButton
				align={MEASUREMENTS.ALIGN.CENTER}
				bgcolor={COLORS.TERCIARY}
				color={COLORS.WHITE}
				text={'Review Items'}
				url={'/review'}
				state={order}
			/>
		</StyledOrderContainer>
	);
};

export default OrderContainer;
