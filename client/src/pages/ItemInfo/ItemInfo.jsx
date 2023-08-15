import { Navigate, useLocation } from 'react-router-dom';
import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import Text from '../../components/text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import AddToCartButton from '../../components/add-to-cart-button/AddToCartButton';
import { StyledDescription, StyledItemInfo, StyledPrice } from './styles';
import CartButton from '../../components/cart-button/CartButton';

const ItemInfo = () => {
	const { state } = useLocation();
	if (!state) return <Navigate to={'/'} />;
	return (
		<PageComponent isBack={true}>
			<Secondaryheader url={'/'} />
			<StyledItemInfo>
				<div>
					<img src={state.img} alt='' />
					<Text
						align={MEASUREMENTS.ALIGN.CENTER}
						color={COLORS.MAIN}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
						text={state.name}
					/>
					<StyledPrice>
						<Text
							align={MEASUREMENTS.ALIGN.CENTER}
							color={COLORS.WHITE}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
							text={`${state.price}$`}
						/>
					</StyledPrice>
				</div>
				<StyledDescription>
					<Text
						align={MEASUREMENTS.ALIGN.CENTER}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
						text={state.description}
						color={COLORS.WHITE}
					/>
				</StyledDescription>
				<AddToCartButton itemId={state._id} details={true} />
			</StyledItemInfo>
			<CartButton />
		</PageComponent>
	);
};

export default ItemInfo;
