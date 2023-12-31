import { useEffect, useState } from 'react';
import { CartContext } from '../context/Cart.context';

const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const storedCart = localStorage.getItem('cartItems');
		if (storedCart) {
			setCartItems(JSON.parse(storedCart));
		}
	}, []);

	// Guardar el carrito en el localStorage al actualizarse el componente
	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);

	const addToCart = itemId => {
		const itemExists = cartItems.some(cartItem => cartItem === itemId);

		if (!itemExists) {
			setCartItems([...cartItems, itemId]);
		}
	};
	const removeFromCart = itemId => {
		const updatedCart = cartItems.filter(item => item !== itemId);
		setCartItems(updatedCart);
	};

	return (
		<CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
};

export { CartProvider };
