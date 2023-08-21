import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import { AuthProvider } from './provider/Auth.provider';
import { CartProvider } from './provider/Cart.provider';
import { OrderProvider } from './provider/Order.provider';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<AuthProvider>
				<OrderProvider>
					<CartProvider>
						<Router />
					</CartProvider>
				</OrderProvider>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
