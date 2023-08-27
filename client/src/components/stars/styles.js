import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledStarsContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0.5rem;
background-color: ${COLORS.TERCIARY};
`

const StyledStarImg = styled.img`
width: 30px;
height: 30px;
cursor: pointer;
`

export { StyledStarImg, StyledStarsContainer }