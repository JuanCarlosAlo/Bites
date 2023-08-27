import { useContext } from 'react';
import {
	StyledAddToCartButton,
	StyledAddToCartButtonDetails,
	StyledImg
} from './styles';
import { CartContext } from '../../context/Cart.context';
import Text from '../text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const AddToCartButton = ({ itemId, details }) => {
	const { addToCart } = useContext(CartContext);
	if (details) {
		return (
			<StyledAddToCartButtonDetails onClick={() => addToCart(itemId)}>
				<Text
					align={MEASUREMENTS.ALIGN.CENTER}
					color={COLORS.WHITE}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
					text={'Add to cart'}
					nofullwidth={true}
				/>
				<StyledImg src='/images/add-to-cart.svg' alt='' />
			</StyledAddToCartButtonDetails>
		);
	} else {
		return (
			<StyledAddToCartButton onClick={() => addToCart(itemId)}>
				<img src='/images/add-to-cart.svg' alt='' />
			</StyledAddToCartButton>
		);
	}
};

export default AddToCartButton;
