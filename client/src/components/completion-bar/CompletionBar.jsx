import { getRemainingTime } from '../../utils/getRemainingTime';
import {
	CompletionBarContainer,
	StyledBar,
	StyledCompletionBar
} from './styles';

import { useCompletionBar } from '../../hooks/useCompletionBar';
import Text from '../text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const CompletionBar = ({ fullRemainingTime, userId, orderId, orderTime }) => {
	const { completionPercentage, remainingTime } = useCompletionBar(
		fullRemainingTime,
		userId,
		orderId,
		orderTime
	);

	return (
		<CompletionBarContainer>
			<Text
				align={MEASUREMENTS.ALIGN.LEFT}
				color={COLORS.WHITE}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
				text={
					remainingTime <= 0 ? 'Completed' : getRemainingTime(remainingTime)
				}
			/>
			<StyledCompletionBar>
				<StyledBar completionPercentage={completionPercentage}></StyledBar>
			</StyledCompletionBar>
		</CompletionBarContainer>
	);
};

export default CompletionBar;
