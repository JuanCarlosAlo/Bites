import { useContext } from 'react';
import { CartContext } from '../../context/Cart.context';
import { StyledCrossButton } from './styles';

const DeleteFromCartButton = ({ id }) => {
	const { removeFromCart } = useContext(CartContext);
	return (
		<StyledCrossButton onClick={() => removeFromCart(id)}>
			<img src='/images/cross.svg' alt='' />
		</StyledCrossButton>
	);
};

export default DeleteFromCartButton;
