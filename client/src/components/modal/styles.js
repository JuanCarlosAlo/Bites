import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../constants/colors';


const fadeIn = keyframes`
  0% {
    transform: translateY(-100%) translateX(-50%);
	opacity: 0;
  }
  20% {
	opacity: 1;
    transform: translateY(0)  translateX(-50%);
  }
  60% {
	opacity: 1;
    transform: translateY(0) translateX(-50%);
  }
  80% {
	opacity: 1;
    transform: translateY(0) translateX(-50%);
  }
  100% {
	opacity: 0;
    transform: translateY(-100%) translateX(-50%);
  }
`;

const StyledModal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: ${({ popup }) => {
		if (!popup) { return '0' } else { return '50%' }
	}};

	transform:${({ popup }) => {
		if (!popup) { return 'translateX(0)' } else { return 'translateX(-50%)' }
	}};
	height: ${({ popup }) => {
		if (!popup) { return '100vh' } else { return 'fit-content' }
	}};
	width: ${({ popup }) => {
		if (!popup) { return '100vw' } else { return 'fit-content' }
	}};
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 100;
  animation: ${fadeIn} 4.5s ease-in-out 1 forwards;


`;

const StyledModalContainer = styled.div`
background-color: ${COLORS.MAIN};
border: 2px solid ${COLORS.MAIN};
padding: 1rem;
`
export { StyledModal, StyledModalContainer };
