import { Navigate, useLocation } from 'react-router-dom';
import PageComponent from '../../components/page-component/PageComponent';
import ItemSecondaryContainer from '../../components/item-secondary-container/ItemSecondaryContainer';
import TotalPrice from '../../components/total-price/TotalPrice';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import BuyButton from '../../components/buy-button/BuyButton';

import { useFetch } from '../../hooks/useFetch';
import Text from '../../components/text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import { StyledInfoContainer, StyledOrderContainer } from './styles';
import Title from '../../components/title/Title';

import { ModalContext } from '../../context/Modal.context';
import { useContext } from 'react';

const Checkout = () => {
	const { state } = useLocation();
	const { setContent, setPopup } = useContext(ModalContext);
	const { setFetchInfo } = useFetch();
	if (!state) return <Navigate to={'/'} />;

	return (
		<>
			<PageComponent isBack={true}>
				<Secondaryheader url={'/cart'} />
				<Title
					align={MEASUREMENTS.ALIGN.CENTER}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
					text={'Checkout'}
				/>
				<StyledOrderContainer>
					<StyledInfoContainer>
						<Text
							align={MEASUREMENTS.ALIGN.LEFT}
							color={COLORS.WHITE}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
							text={'Recipient:'}
							nofullwidth={true}
						/>
						<Text
							align={MEASUREMENTS.ALIGN.LEFT}
							color={COLORS.WHITE}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
							text={state.recipient}
							nofullwidth={true}
						/>
					</StyledInfoContainer>
					<StyledInfoContainer>
						<Text
							align={MEASUREMENTS.ALIGN.LEFT}
							color={COLORS.WHITE}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
							text={'Address:'}
							nofullwidth={true}
						/>
						<Text
							align={MEASUREMENTS.ALIGN.LEFT}
							color={COLORS.WHITE}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
							text={state.address}
							nofullwidth={true}
						/>
					</StyledInfoContainer>
					{state.items.map(item => (
						<ItemSecondaryContainer
							key={item._id}
							item={item}
							setFetchInfo={setFetchInfo}
						/>
					))}
				</StyledOrderContainer>
				<TotalPrice data={state.items} />

				<BuyButton
					order={state}
					setContent={setContent}
					setPopup={setPopup}
					setFetchInfo={setFetchInfo}
				/>
			</PageComponent>
		</>
	);
};

export default Checkout;
