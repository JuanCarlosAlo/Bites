import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import { AuthProvider } from './provider/Auth.provider';
import { CartProvider } from './provider/Cart.provider';
import ModalProvider from './provider/Modal.provider';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<AuthProvider>
				<ModalProvider>
					<CartProvider>
						<Router />
					</CartProvider>
				</ModalProvider>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
