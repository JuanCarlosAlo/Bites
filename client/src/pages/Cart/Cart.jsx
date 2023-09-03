import { useContext, useEffect, useState } from 'react';
import ItemContainer from '../../components/item-container/ItemContainer';
import PageColumnsContainer from '../../components/page-columns-container/PageColumnsContainer';
import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { CartContext } from '../../context/Cart.context';

import { CART_URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import LoadingPage from '../../components/loading-page/loading-page';
import Text from '../../components/text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import TotalPrice from '../../components/total-price/TotalPrice';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import { NavLink } from 'react-router-dom';
import { StyledRegisterNoteContainer } from './styles';
import Title from '../../components/title/Title';

const Cart = () => {
	const { cartItems } = useContext(CartContext);
	const [data, setData] = useState();
	useEffect(() => {
		if (cartItems.length === 0) {
			setData([]);
			return;
		}

		const fetchData = async () => {
			const response = await fetch(CART_URLS.ALL_CART, {
				method: METHODS.POST,
				body: JSON.stringify({
					cartItems
				}),
				headers: HEADERS
			});
			const responseData = await response.json();

			const dataWithAmount = responseData.map(item => ({ ...item, amount: 1 }));
			setData(dataWithAmount);
		};

		fetchData();
	}, [cartItems]);

	if (!cartItems || !data) return <LoadingPage />;
	if (data.length === 0)
		return (
			<PageComponent isBack={true}>
				<Secondaryheader url={'/'} />
				<Title
					align={MEASUREMENTS.ALIGN.CENTER}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
					text={'Cart'}
				/>
				<Text
					align={MEASUREMENTS.ALIGN.CENTER}
					color={COLORS.MAIN}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
					text={'Your cart is empty'}
				/>
			</PageComponent>
		);

	return (
		<PageComponent isBack={true}>
			<Secondaryheader url={'/'} />
			<Title
				align={MEASUREMENTS.ALIGN.CENTER}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
				text={'Cart'}
			/>
			<PageColumnsContainer>
				{data.map(item => (
					<ItemContainer
						key={item._id}
						item={item}
						inCart={true}
						setData={setData}
						data={data}
					/>
				))}
			</PageColumnsContainer>
			<StyledRegisterNoteContainer>
				<Text
					align={MEASUREMENTS.ALIGN.CENTER}
					color={COLORS.MAIN}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
					text={'If you want to save your order please register'}
					nofullwidth={true}
				/>
				<NavLink to={'/register'}>
					<Text
						align={MEASUREMENTS.ALIGN.CENTER}
						color={COLORS.MAIN}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
						text={'Here'}
						nofullwidth={true}
					/>
				</NavLink>
			</StyledRegisterNoteContainer>
			<TotalPrice data={data} />
			<PrimaryButton
				align={MEASUREMENTS.ALIGN.CENTER}
				bgcolor={COLORS.TERCIARY}
				color={COLORS.WHITE}
				url={'/address'}
				state={data}
				text={'Checkout'}
			/>
		</PageComponent>
	);
};

export default Cart;
