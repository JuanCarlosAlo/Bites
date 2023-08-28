import styled from "styled-components";
import { MEASUREMENTS } from "../../constants/measurements";
import { COLORS } from "../../constants/colors";

const StyledReviewContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
margin-bottom: 1rem;
`

const StyledReviewImg = styled.img`
width: 40px;
height: 40px;
`

const SubmitButton = styled.div`
display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${COLORS.TERCIARY};
	border: 2px solid ${COLORS.WHITE};
	color:  ${COLORS.WHITE};
	width: 100%;
	font-size: 	 ${MEASUREMENTS.FONTS_SIZE.TITLE.DESKTOP};
	margin-bottom: 1rem;
	cursor: pointer;
	&:hover {
		background-color: ${COLORS.WHITE};
		color: ${COLORS.MAIN};
		border: 2px solid ${COLORS.MAIN};
	}
`

export { StyledReviewContainer, StyledReviewImg, SubmitButton }