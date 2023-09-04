import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledCrossButton = styled.div`
position: absolute;
left: 0;
width: 30px;
height: 30px;
background-color: ${COLORS.TERCIARY};
padding: 0.5rem;
cursor: pointer;
`

export { StyledCrossButton }