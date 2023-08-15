import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';

const StyledTitle = styled.p`
	color: ${({ color }) => color};
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
	@media screen and (min-width: 768px) {
		font-size: ${({ fontSize }) => MEASUREMENTS.FONTS_SIZE[fontSize].TABLET};
	}
`;

export { StyledTitle };
