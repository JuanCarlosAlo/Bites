import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';

const StyledPage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: calc(
		${MEASUREMENTS.PAGES.HEIGHT} -
			calc(${MEASUREMENTS.HEADER.MAIN.HEIGHT} + ${MEASUREMENTS.FOOTER.HEIGHT} )
	);
	padding-top:  ${({ isBack }) => {
		if (isBack) { return `${MEASUREMENTS.PADDING.SECONDARY_HEADER.DESKTOP};` } else { return ` ${MEASUREMENTS.PADDING.SECONDARY_HEADER.MOBILE}` }
	}}; 
	padding-left: 10px;

	max-width: 1080px;
    margin-left: auto;
    margin-right: auto;
	overflow-y: scroll;
	@media screen and (min-width: 768px){
		padding-top: ${MEASUREMENTS.PADDING.SECONDARY_HEADER.DESKTOP};
	}

`;


export { StyledPage };
