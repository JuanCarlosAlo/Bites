import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledCartButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap:  1rem;
background-color: ${COLORS.TERCIARY};
color: ${COLORS.WHITE};
padding-left: 1rem;
padding-right: 1rem;
z-index: 10;
cursor: pointer;
`

const StyledCartImg = styled.img`
height: 15px;
width: 15px;
`

export { StyledCartButton, StyledCartImg }