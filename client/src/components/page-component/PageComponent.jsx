import { StyledPage } from './styles';

const PageComponent = ({ children, isBack }) => {
	console.log(isBack);
	return <StyledPage isBack={isBack}>{children}</StyledPage>;
};

export default PageComponent;
