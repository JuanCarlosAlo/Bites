import { useContext } from 'react';
import { StyledCartButton, StyledCartImg } from './styles';
import { CartContext } from '../../context/Cart.context';
import Text from '../text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import { useNavigate } from 'react-router-dom';
import Icon from '../icon/Icon';

const CartButton = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();
	return (
		<StyledCartButton onClick={() => navigate('/cart')}>
			<StyledCartImg src='/images/cart-shopping-solid.svg' alt='' />
			<Text
				align={MEASUREMENTS.ALIGN.CENTER}
				color={COLORS.WHITE}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
				text={cartItems.length}
			/>
		</StyledCartButton>
	);
};

export default CartButton;
