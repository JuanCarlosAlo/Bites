import { StyledHeader, StyledHeaderContainer, StyledMenu } from './styles';
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import LoadingPage from '../loading-page/loading-page';

const Header = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	if (loadingFirebase) return <LoadingPage />;
	console.log(currentUser);
	return (
		<StyledHeader>
			<StyledHeaderContainer>
				<Logo fontSize={'1rem'} />
				{currentUser ? (
					<nav>
						<StyledMenu>
							<Link to={'/profile'}>
								<li>{currentUser.userName}</li>
							</Link>
						</StyledMenu>
					</nav>
				) : (
					<nav>
						<StyledMenu>
							<Link to={'/register'}>
								<li>Register</li>
							</Link>
							<Link to={'/login'}>
								<li>Login</li>
							</Link>
						</StyledMenu>
					</nav>
				)}
			</StyledHeaderContainer>
		</StyledHeader>
	);
};

export default Header;
