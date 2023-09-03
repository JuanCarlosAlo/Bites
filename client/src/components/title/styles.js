import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const StyledTitle = styled.p`
	color: ${COLORS.WHITE};
	text-align: ${({ align }) => {
		if (align) {
			return align;
		} else {
			return 'left';
		}
	}};
	font-size: ${({ fontSize }) => MEASUREMENTS.FONTS_SIZE[fontSize].MOBILE};
	margin-top: ${({ margin }) => margin};
	margin-bottom: ${({ margin }) => margin};
	width: 100%;
	background-color: ${COLORS.MAIN};
	@media screen and (min-width: 768px) {
		font-size: ${({ fontSize }) => MEASUREMENTS.FONTS_SIZE[fontSize].TABLET};
	}
	@media screen and (min-width: 1024px) {
		font-size: ${({ fontSize }) => MEASUREMENTS.FONTS_SIZE[fontSize].DESKTOP};
	}
	@media screen and (min-width: 1400px) {
		font-size: ${({ fontSize }) => MEASUREMENTS.FONTS_SIZE[fontSize].HIGH_HD};
		margin-top:  ${({ fontSize }) => { return `calc(${MEASUREMENTS.FONTS_SIZE[fontSize].HIGH_HD} - 0.5rem)` }};
		margin-bottom:  ${({ fontSize }) => { return `calc(${MEASUREMENTS.FONTS_SIZE[fontSize].HIGH_HD} - 0.5rem)` }};
	}
`;

export { StyledTitle };
