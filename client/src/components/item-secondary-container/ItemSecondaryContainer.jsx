import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import Text from '../text/Text';
import { StyledImg, StyledSecondaryItemContainer } from './styles';

const ItemSecondaryContainer = ({ item }) => {
	return (
		<StyledSecondaryItemContainer>
			<StyledImg src={item.img} alt='' />
			<Text
				align={MEASUREMENTS.ALIGN.LEFT}
				color={COLORS.MAIN}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
				text={item.name}
			/>
			<Text
				align={MEASUREMENTS.ALIGN.LEFT}
				color={COLORS.SECONDARY}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
				text={`${item.price}$`}
			/>
			<Text
				align={MEASUREMENTS.ALIGN.LEFT}
				color={COLORS.SECONDARY}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
				text={`X${item.amount}`}
			/>
		</StyledSecondaryItemContainer>
	);
};

export default ItemSecondaryContainer;
