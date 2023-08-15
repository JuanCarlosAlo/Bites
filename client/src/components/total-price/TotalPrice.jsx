import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import { getTotalPrice } from '../../utils/getTotalPrice';
import Text from '../text/Text';
import { StyledTotalPrice } from './styles';

const TotalPrice = ({ data }) => {
	return (
		<StyledTotalPrice>
			<Text
				align={MEASUREMENTS.ALIGN.CENTER}
				color={COLORS.WHITE}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
				text={`Total: ${getTotalPrice(data)}$`}
			/>
		</StyledTotalPrice>
	);
};

export default TotalPrice;
