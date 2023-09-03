import styled from "styled-components";
import { MEASUREMENTS } from "../../constants/measurements";
import { COLORS } from "../../constants/colors";

const StyledReviewContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 100%;
background-color: ${COLORS.MAIN};
padding: 1rem;
margin-bottom: 1rem;
border-radius: 0.5rem;
`

const StyledReviewInfo = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
width: 100%;
`

const StyledReviewImg = styled.img`
width: 40px;
height: 40px;
background-color: ${COLORS.WHITE};
border-radius: 0.5rem;
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

export { StyledReviewContainer, StyledReviewImg, SubmitButton, StyledReviewInfo }