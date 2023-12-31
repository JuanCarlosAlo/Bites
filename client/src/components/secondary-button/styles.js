import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const StyledButton = styled.button`
	background-color: transparent;
	color: ${({ color }) => color};
	border: ${({ border }) => {
		if (border) {
			return `2px solid ${COLORS.MAIN}`
		} else {
			return 'none'
		}
	}};
	background-color: ${({ bgcolor }) => bgcolor};
	width: 130px;
	padding-top : 0.5rem;
	padding-bottom : 0.5rem;
	font-weight: ${MEASUREMENTS.FONTS_WEIGHT.BOLD};
	font-size:${MEASUREMENTS.FONTS_SIZE.TEXT.MOBILE};
	margin-bottom:1rem;
	cursor: pointer;
	&:hover{
		background-color: ${COLORS.MAIN};
		color: ${COLORS.WHITE};
		border: none
	}
	@media screen and (min-width: 468px){
		font-size:${MEASUREMENTS.FONTS_SIZE.TEXT.TABLET};
		width: 200px;
	}
	@media screen and (min-width: 1024px){
		font-size:${MEASUREMENTS.FONTS_SIZE.TEXT.DESKTOP};
	}
`;

const StyledButtonContainer = styled.div`
display: flex;
justify-content: ${({ align }) => {

		if (align === 'CENTER') {
			return 'center'
		}
		if (align === 'LEFT') {
			return 'flex start'
		}
		if (align === 'RIGHT') {
			return 'flex end'
		}
	}};
`

export { StyledButton, StyledButtonContainer };
