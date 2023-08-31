import { useContext } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import SocialLogin from '../../components/social-logIn/SocialLogin';
import { AuthContext } from '../../context/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import { Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/formValidations';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import Text from '../../components/text/Text';
import { COLORS } from '../../constants/colors';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';

import { MEASUREMENTS } from '../../constants/measurements';
import InputContainer from '../../components/InputContainer/InputContainer';
import Title from '../../components/title/Title';

const Login = () => {
	const { currentUser } = useContext(AuthContext);

	const { setFetchInfo } = useFetch();
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });
	const navigate = useNavigate();
	if (currentUser) return <Navigate to={'/'} />;

	return (
		<PageComponent isBack={true}>
			<Secondaryheader url={'/'} />
			<Title
				align={MEASUREMENTS.ALIGN.CENTER}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
				text={'Login'}
			/>
			<SocialLogin setFetchInfo={setFetchInfo} />
			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(formData, e, navigate)
				)}
			>
				<InputContainer
					errors={errors}
					formValidation={FORM_VALIDATIONS.email}
					keyForm={'email'}
					label={'Email'}
					register={register}
					type={'text'}
				/>
				<InputContainer
					errors={errors}
					formValidation={FORM_VALIDATIONS.password}
					keyForm={'password'}
					label={'Password'}
					register={register}
					type={'password'}
				/>

				<PrimaryButton text={'Login'} />
				<Text
					color={COLORS.SECONDARY}
					text={'Dont have an account?'}
					align={MEASUREMENTS.ALIGN.CENTER}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
				/>
				<SecondaryButton
					url={'/register'}
					text={'Register here'}
					color={COLORS.WHITE}
					bgcolor={COLORS.TERCIARY}
					align={MEASUREMENTS.ALIGN.CENTER}
				/>
			</form>
		</PageComponent>
	);
};

const onSubmit = async (formData, e, navigate) => {
	e.preventDefault();
	const { email, password } = formData;

	try {
		await signInWithEmailAndPassword(auth, email, password);
		navigate('/');
	} catch (error) {
		console.log(error);
	}
};

export default Login;
