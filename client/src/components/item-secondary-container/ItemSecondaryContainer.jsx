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
				color={COLORS.MAIN}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
				text={`${item.price}$`}
				nofullwidth={true}
			/>
			<Text
				align={MEASUREMENTS.ALIGN.LEFT}
				color={COLORS.MAIN}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
				text={`X${item.amount}`}
				nofullwidth={true}
			/>
		</StyledSecondaryItemContainer>
	);
};

export default ItemSecondaryContainer;
