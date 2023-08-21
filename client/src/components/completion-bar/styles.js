import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledCompletionBar = styled.div`
position: relative;
width: 350px;
height: 10px;
background-color: ${COLORS.MAIN};

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
background-color: ${COLORS.SECONDARY};
`

export { StyledCompletionBar, StyledBar }