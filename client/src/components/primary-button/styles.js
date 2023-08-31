import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const StyledPrimaryButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: ${({ bgcolor }) => bgcolor};
	border: 2px solid ${COLORS.WHITE};
	color:  ${({ color }) => color};
	width: 100%;
	font-size: 	 ${MEASUREMENTS.FONTS_SIZE.TITLE.MOBILE};
	margin-bottom: 1rem;
	cursor: pointer;
	&:hover {
		background-color: ${COLORS.WHITE};
		color: ${COLORS.MAIN};
		border: 2px solid ${COLORS.MAIN};
	}
	@media screen and (min-width: 780px){
		font-size:${MEASUREMENTS.FONTS_SIZE.TITLE.TABLET};
	}
	@media screen and (min-width: 1024px){
		font-size:${MEASUREMENTS.FONTS_SIZE.TITLE.DESKTOP};
	}
`;

export { StyledPrimaryButton };
