import styled from "styled-components";
import { MEASUREMENTS } from "../../constants/measurements";
import { COLORS } from "../../constants/colors";

const StyledItemInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-left: ${MEASUREMENTS.PADDING.MOBILE_OUTSIDE};
margin-right: ${MEASUREMENTS.PADDING.MOBILE_OUTSIDE};
`

const StyledDescription = styled.div`
background-color: ${COLORS.MAIN};
padding: 1rem;
`

const StyledPrice = styled.div`
background-color: ${COLORS.SECONDARY};

margin-bottom: 4rem;

`

export { StyledItemInfo, StyledDescription, StyledPrice }