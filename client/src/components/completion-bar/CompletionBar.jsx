import { getRemainingTime } from '../../utils/getRemainingTime';
import { StyledBar, StyledCompletionBar } from './styles';

import { useCompletionBar } from '../../hooks/useCompletionBar';

const CompletionBar = ({ initialDuration, userId, orderId }) => {
	console.log(initialDuration);
	const { remainingTime, completionPercentage } = useCompletionBar(
		initialDuration,
		userId,
		orderId
	);
	console.log(completionPercentage);
	return (
		<div>
			<p>
				{remainingTime === 0 ? 'Completed' : getRemainingTime(remainingTime)}
			</p>
			<StyledCompletionBar>
				<StyledBar completionPercentage={completionPercentage}></StyledBar>
			</StyledCompletionBar>
		</div>
	);
};

export default CompletionBar;
