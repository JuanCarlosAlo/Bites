import styled from "styled-components";

const StyledPageColumnsContainer = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-template-rows: repeat(auto-fill, 250px);
gap: 1rem;
height: 100%;
width: 100%;
/* padding-left: 10px; */
overflow-y: scroll;
@media screen and (min-width: 788px){
    grid-template-columns: repeat(3, 1fr); 
}
`

export { StyledPageColumnsContainer }