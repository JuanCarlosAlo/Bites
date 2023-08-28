import { Navigate, useLocation } from 'react-router-dom';
import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import Stars from '../../components/stars/Stars';
import { useState } from 'react';
import { StyledReviewContainer, StyledReviewImg, SubmitButton } from './styles';
import Text from '../../components/text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import { useFetch } from '../../hooks/useFetch';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { REVIEW_URLS } from '../../constants/urls';
import Title from '../../components/title/Title';

const Review = () => {
	const { state } = useLocation();

	if (!state) return <Navigate to={'/'} />;
	const [reviwedItems, setReviwedItems] = useState([]);
	const { setFetchInfo } = useFetch();

	return (
		<PageComponent isBack={true}>
			<Secondaryheader url={'/'} />
			<Title
				align={MEASUREMENTS.ALIGN.CENTER}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
				text={'Review'}
			/>
			{state.items.map(item => (
				<StyledReviewContainer key={item._id}>
					<StyledReviewImg src={item.img} alt='' />
					<Text
						align={MEASUREMENTS.ALIGN.LEFT}
						color={COLORS.MAIN}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
						text={item.name}
						nofullwidth={true}
					/>
					<Stars
						setReviwedItems={setReviwedItems}
						item={item}
						reviwedItems={reviwedItems}
					/>
				</StyledReviewContainer>
			))}
			<SubmitButton onClick={() => handleClick(setFetchInfo, reviwedItems)}>
				<Text
					align={MEASUREMENTS.ALIGN.CENTER}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
					text={'Submit review'}
				/>
			</SubmitButton>
		</PageComponent>
	);
};

const handleClick = async (setFetchInfo, reviwedItems) => {
	try {
		await setFetchInfo({
			url: REVIEW_URLS.CREATE_REVIEW,
			options: {
				method: METHODS.POST,
				body: JSON.stringify({
					reviwedItems
				}),
				headers: HEADERS
			},
			navigateTo: '/'
		});
	} catch (error) {
		console.log(error);
	}
};

export default Review;
