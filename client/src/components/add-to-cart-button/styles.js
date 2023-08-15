import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledAddToCartButton = styled.div`
position: absolute;
right: 0;
height: 40px;
width: 40px;
padding: 0.5rem;
background-color: ${COLORS.TERCIARY};
cursor: pointer;
z-index: 10;
`
const StyledAddToCartButtonDetails = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
height: 40px;
width:100%;
padding: 0.5rem;
background-color: ${COLORS.TERCIARY};
cursor: pointer;
`

const StyledImg = styled.img`
height: 30px;
width: 30px;
`


export { StyledAddToCartButton, StyledAddToCartButtonDetails, StyledImg }