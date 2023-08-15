import { StyledLogo } from './styles';

const Logo = ({ fontSize }) => {
	return (
		<StyledLogo fontSize={fontSize} to={'/'}>
			BITES
		</StyledLogo>
	);
};

export default Logo;
