import styled from 'styled-components';

import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const StyledSecondaryHeader = styled.div`
display: flex;
	align-items: center;
	position: absolute;
	top: ${MEASUREMENTS.HEADER.MAIN.HEIGHT};
	height: ${({ url }) => {
		if (url) { return ` ${MEASUREMENTS.HEADER.SECONDARY.HEIGHT.DESKTOP}` } else { return ` ${MEASUREMENTS.HEADER.SECONDARY.HEIGHT.MOBILE}` }
	}}; 
	padding-top:1rem;
	background-color:${COLORS.WHITE};
	width: 100%;
	@media screen and (min-width:768px){
		height:  ${MEASUREMENTS.HEADER.SECONDARY.HEIGHT.DESKTOP};
	}
`;

const StyledSecondaryHeaderContainer = styled.div`
display: flex;
flex-wrap: wrap;
	align-items: center;

	justify-content: ${({ url }) => {

		if (url) { return 'space-between' } else { return 'space-evenly' }
	}};
	padding-left:calc(${MEASUREMENTS.PADDING.MOBILE_OUTSIDE} * 2);
	padding-right:calc(${MEASUREMENTS.PADDING.MOBILE_OUTSIDE} * 2);
	width: 100%;
 	max-width: 1080px;
    margin-left: auto;
    margin-right: auto;
`
export { StyledSecondaryHeader, StyledSecondaryHeaderContainer };
