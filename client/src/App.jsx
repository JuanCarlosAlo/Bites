import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import { AuthProvider } from './provider/Auth.provider';
import { CartProvider } from './provider/Cart.provider';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<AuthProvider>
				<CartProvider>
					<Router />
				</CartProvider>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
