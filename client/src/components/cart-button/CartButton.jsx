import { useContext } from 'react';
import { StyledCartButton } from './styles';
import { CartContext } from '../../context/Cart.context';
import Text from '../text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import { useNavigate } from 'react-router-dom';

const CartButton = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();
	return (
		<StyledCartButton onClick={() => navigate('/cart')}>
			{/* <Text
				align={MEASUREMENTS.ALIGN.CENTER}
				color={COLORS.WHITE}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
				text={`Cart ${cartItems.length}`}
			/> */}
			<Icon img={'/images/add/to/cart.svg'} />
		</StyledCartButton>
	);
};

export default CartButton;
