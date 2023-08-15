import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Layout from '../layout/Layout';

import Appetizers from '../pages/Appetizers/Appetizers';

import Drinks from '../pages/Drinks/Drinks';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Snacks from '../pages/Snacks/Snacks';
import Main from '../pages/Main/Main';
import Cart from '../pages/Cart/Cart';
import ItemInfo from '../pages/ItemInfo/ItemInfo';
import Address from '../pages/Address/Address';
import Checkout from '../pages/Checkout/Checkout';

const Router = () => {
	return (
		<Routes>
			<Route>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path={'main'} element={<Main />} />
					<Route path={'appetizers'} element={<Appetizers />} />
					<Route path={'snacks'} element={<Snacks />} />
					<Route path={'drinks'} element={<Drinks />} />
					<Route path={'register'} element={<Register />} />
					<Route path={'login'} element={<Login />} />
					<Route path={'profile'} element={<Profile />} />
					<Route path={'cart'} element={<Cart />} />
					<Route path={'item/:id'} element={<ItemInfo />} />
					<Route path={'address'} element={<Address />} />
					<Route path={'checkout'} element={<Checkout />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default Router;
