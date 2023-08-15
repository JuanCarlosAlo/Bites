import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';


const StyledInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	width: 100%;
	max-width: 350px;

`;

const StyledInput = styled.input`
width: 100%;
`

const StyledErrorText = styled.p`
	margin: 0;
	font-weight: ${MEASUREMENTS.FONTS_WEIGHT.BOLD};
`;
const StyledSelect = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  &:focus

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
	&:hover{
		box-shadow: 0 0 10px 100px ${COLORS.MAIN} inset;
		color: ${COLORS.WHITE};
	}
  }
`;
export { StyledInputContainer, StyledErrorText, StyledSelect, StyledInput };
