import styled from "styled-components";
import { COLORS } from "../../constants/colors";


const StyledSecondaryItemContainer = styled.div`
display: flex;
justify-content: space-between;
gap: 1rem;
width: 100%;
background-color: ${COLORS.WHITE};
margin-bottom: 1REM;
padding-left: 0.5rem;
padding-right: 0.5rem;
border-radius: 0.5rem;
`

const StyledImg = styled.img`
height: 50px;
width: 50px;
`

export { StyledSecondaryItemContainer, StyledImg }