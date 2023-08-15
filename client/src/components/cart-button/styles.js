import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledCartButton = styled.div`
position: fixed;
bottom: 4rem;
left: 0;
background-color: ${COLORS.TERCIARY};
color: ${COLORS.WHITE};
padding-left: 1rem;
padding-right: 1rem;
z-index: 10;
cursor: pointer;
`

export { StyledCartButton }