import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledInfoContainer = styled.div`
display: flex;
align-items: center;
justify-content:flex-start;
gap: 1rem;
width: 100%;

`

const StyledOrderContainer = styled.div`
width: 100%;
background-color: ${COLORS.MAIN};
padding: 1REM;
margin-bottom: 2rem;
`

export { StyledInfoContainer, StyledOrderContainer }