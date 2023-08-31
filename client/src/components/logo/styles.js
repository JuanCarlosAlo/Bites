import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MEASUREMENTS } from "../../constants/measurements";

const StyledLogo = styled(NavLink)`
position: relative;


font-family: Abnes;
font-size: ${({ fontSize }) => MEASUREMENTS.FONTS_SIZE[fontSize].MOBILE};
	margin-top:  ${({ fontSize }) => { return `calc(${MEASUREMENTS.FONTS_SIZE[fontSize].MOBILE} - 0.5rem)` }};
	margin-bottom:  ${({ fontSize }) => { return `calc(${MEASUREMENTS.FONTS_SIZE[fontSize].MOBILE} - 0.5rem)` }};
	@media screen and (min-width: 768px) {
		font-size: ${({ fontSize }) => MEASUREMENTS.FONTS_SIZE[fontSize].TABLET};
		margin-top:  ${({ fontSize }) => { return `calc(${MEASUREMENTS.FONTS_SIZE[fontSize].TABLET} - 0.5rem)` }};
		margin-bottom:  ${({ fontSize }) => { return `calc(${MEASUREMENTS.FONTS_SIZE[fontSize].TABLET} - 0.5rem)` }};
	}
	@media screen and (min-width: 1024px) {
		font-size: ${({ fontSize }) => MEASUREMENTS.FONTS_SIZE[fontSize].DESKTOP};
		margin-top:  ${({ fontSize }) => { return `calc(${MEASUREMENTS.FONTS_SIZE[fontSize].DESKTOP} - 0.5rem)` }};
		margin-bottom:  ${({ fontSize }) => { return `calc(${MEASUREMENTS.FONTS_SIZE[fontSize].DESKTOP} - 0.5rem)` }};
	}

`

export { StyledLogo }