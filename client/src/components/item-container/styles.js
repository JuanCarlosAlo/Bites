import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledItem = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 230px;
width: 100%;
max-width: 250px;
margin-left: auto;
margin-right: auto;
`

const StyledStar = styled.img`

width: 15px;
height: 15px;

`

const StyledImgItem = styled.img`

width: 150px;
height: 150px;
margin-left: auto;
margin-right: auto;
cursor: ${({ inCart }) => {
        if (!inCart) return 'pointer'
    }};
`
const StyledStarsContainer = styled.div`
position: absolute;
top: 55%;
left: 0;
display: flex;
align-items: center;
justify-content: center;
gap: 0.2rem;
padding: 0.2rem;
background-color: ${COLORS.MAIN};
@media screen and (min-width: 1024px){
    top: 60%;
}
`

const StyledPrice = styled.div`
position: absolute;
width: 70px;
padding-RIGHT: 1rem;
top: 55%;
right: 0;
background-color: ${COLORS.SECONDARY};
`


const StyledTitle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 3rem;
padding-left: 0.5rem;
padding-right: 0.5rem;
background-color: ${COLORS.MAIN};
`

const StyledNumberItem = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
right: 0;
width: 30px;
height: 30px;
background-color: ${COLORS.MAIN};

`

const StyledCuantityButton = styled.div`
cursor: pointer;
`

export { StyledImgItem, StyledPrice, StyledItem, StyledTitle, StyledNumberItem, StyledCuantityButton, StyledStar, StyledStarsContainer }