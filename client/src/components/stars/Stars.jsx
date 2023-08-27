import { v4 } from 'uuid';
import { StyledStarImg, StyledStarsContainer } from './styles';
import { useState } from 'react';

const Stars = ({ setReviwedItems, item, reviwedItems }) => {
	const starsArray = Array.from({ length: 5 });
	const [selectedStars, setSelectedStars] = useState([]);

	return (
		<StyledStarsContainer>
			{starsArray.map((star, index) => {
				const isSelected = selectedStars[index];
				const starImgSrc = isSelected
					? '/images/star-solid.svg'
					: '/images/star-regular.svg';

				return (
					<StyledStarImg
						onClick={() =>
							handleStarClick(
								index,
								setSelectedStars,
								setReviwedItems,
								reviwedItems,
								item
							)
						}
						key={v4()}
						src={starImgSrc}
					/>
				);
			})}
		</StyledStarsContainer>
	);
};

const handleStarClick = (
	index,
	setSelectedStars,
	setReviwedItems,
	reviwedItems,
	item
) => {
	const updatedSelectedStars = Array.from({ length: 5 }, (_, i) => i <= index);

	const updatedReview = { id: item._id, rating: index + 1 };
	const existingReviewIndex = reviwedItems.findIndex(
		review => review.id === item._id
	);

	if (existingReviewIndex !== -1) {
		const updatedReviews = [...reviwedItems];
		updatedReviews[existingReviewIndex] = updatedReview;
		setReviwedItems(updatedReviews);
	} else {
		setReviwedItems([...reviwedItems, updatedReview]);
	}

	setSelectedStars(updatedSelectedStars);
};

export default Stars;
