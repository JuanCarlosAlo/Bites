import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const CompletionBarContainer = styled.div`
width: 100%;
`

const StyledCompletionBar = styled.div`
position: relative;
width: 100%;
height: 10px;
background-color: ${COLORS.WHITE};

`
const StyledBar = styled.div.attrs(props => ({
    style: {
        width: `${props.completionPercentage}%`,
    },
}))`
position: absolute;
left: 0;
top: 0;
height: 10px;
background-color: ${COLORS.TERCIARY};
`

export { StyledCompletionBar, StyledBar, CompletionBarContainer }