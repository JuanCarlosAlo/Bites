import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import AddToCartButton from '../add-to-cart-button/AddToCartButton';
import DeleteFromCartButton from '../delete-from-cart-button/DeleteFromCartButton';
import Text from '../text/Text';
import {
	StyledCuantityButton,
	StyledImgItem,
	StyledItem,
	StyledNumberItem,
	StyledPrice,
	StyledTitle
} from './styles';
import { updateAmount } from '../../utils/updateAmount';
import { useNavigate } from 'react-router-dom';

const ItemContainer = ({ item, inCart, data, setData }) => {
	const navigate = useNavigate();
	return (
		<StyledItem>
			<StyledPrice>
				<Text
					align={MEASUREMENTS.ALIGN.RIGHT}
					color={COLORS.WHITE}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
					text={`${item.price} $`}
				/>
			</StyledPrice>
			{!inCart ? (
				<AddToCartButton itemId={item._id} />
			) : (
				<>
					<DeleteFromCartButton id={item._id} />
					<StyledNumberItem>
						<Text
							align={MEASUREMENTS.ALIGN.CENTER}
							color={COLORS.WHITE}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
							text={item.amount}
						/>
					</StyledNumberItem>
				</>
			)}

			<StyledImgItem
				src={item.img}
				alt=''
				inCart={inCart}
				onClick={() => {
					if (!inCart) navigate(`/item/${item._id}`, { state: item });
				}}
			/>
			<StyledTitle>
				{inCart && (
					<StyledCuantityButton
						onClick={() =>
							updateAmount(item._id, item.amount - 1, data, setData)
						}
					>
						<Text
							align={MEASUREMENTS.ALIGN.CENTER}
							color={COLORS.WHITE}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
							text={'-'}
						/>
					</StyledCuantityButton>
				)}
				<Text
					align={MEASUREMENTS.ALIGN.CENTER}
					color={COLORS.WHITE}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
					text={item.name}
				/>
				{inCart && (
					<StyledCuantityButton
						onClick={() =>
							updateAmount(item._id, item.amount + 1, data, setData)
						}
					>
						<Text
							align={MEASUREMENTS.ALIGN.CENTER}
							color={COLORS.WHITE}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
							text={'+'}
						/>
					</StyledCuantityButton>
				)}
			</StyledTitle>
		</StyledItem>
	);
};

export default ItemContainer;
