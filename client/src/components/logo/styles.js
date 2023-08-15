import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled(NavLink)`
position: relative;
/* top:  ${({ fontSize }) => { return `calc(${fontSize} / 2.5)` }}; */
font-size: ${({ fontSize }) => fontSize};
font-family: Abnes;

`

export { StyledLogo }