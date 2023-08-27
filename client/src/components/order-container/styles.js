import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledOrderContainer = styled.div`
width: 100%;
background-color: ${COLORS.MAIN};
padding: 1REM;
margin-bottom: 2rem;
`

const StyledOrderButtonsContainer = styled.div`
display: flex;
align-items: flex-end;
gap: 1rem;
margin-bottom: 2rem;
`

export { StyledOrderContainer, StyledOrderButtonsContainer }