import { useContext } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import SocialLogin from '../../components/social-logIn/SocialLogin';
import { AuthContext } from '../../context/Auth.context';
import { USERS_URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/formValidations';
import { METHODS } from '../../constants/methods';
import { getInitialUsername } from '../../utils/getInitialUsername';
import { auth } from '../../config/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { USER_DEFAULT_VALUES } from '../../constants/userDefaultValues';
import { HEADERS } from '../../constants/headers';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import Text from '../../components/text/Text';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import { COLORS } from '../../constants/colors';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';

import { MEASUREMENTS } from '../../constants/measurements';
import InputContainer from '../../components/InputContainer/InputContainer';
import ErrorPage from '../../components/error-page/ErrorPage';
import LoadingPage from '../../components/loading-page/loading-page';
import Title from '../../components/title/Title';
const Register = () => {
	const { currentUser } = useContext(AuthContext);

	const { data, loading, error, setFetchInfo } = useFetch({
		url: USERS_URLS.ALL_USERS
	});

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });

	if (currentUser) return <Navigate to={'/'} />;
	if (loading) return <LoadingPage />;
	if (error) return <ErrorPage />;

	return (
		<PageComponent isBack={true}>
			<Secondaryheader url={'/'} />
			<Title
				align={MEASUREMENTS.ALIGN.CENTER}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
				text={'Register'}
			/>
			<SocialLogin setFetchInfo={setFetchInfo} />
			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(formData, e, setFetchInfo, data)
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
				<InputContainer
					errors={errors}
					formValidation={FORM_VALIDATIONS.address}
					keyForm={'address'}
					label={'Address'}
					register={register}
					type={'address'}
				/>

				<PrimaryButton
					text={'Register'}
					bgcolor={COLORS.TERCIARY}
					color={COLORS.WHITE}
					align={MEASUREMENTS.ALIGN.CENTER}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
				/>
			</form>

			<Text
				color={COLORS.TERCIARY}
				text={'Already have an account?'}
				align={MEASUREMENTS.ALIGN.CENTER}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
			/>
			<SecondaryButton
				url={'/login'}
				text={'Login here'}
				color={COLORS.TERCIARY}
				align={MEASUREMENTS.ALIGN.CENTER}
			/>
		</PageComponent>
	);
};

const onSubmit = async (formData, e, setFetchInfo, data, setFirebaseErrors) => {
	e.preventDefault();
	const { email, password, address } = formData;
	const emailUsed = data.find(user => user.email === email);

	if (!emailUsed) {
		try {
			const userRegistered = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			const userName = getInitialUsername(email);

			await setFetchInfo({
				url: USERS_URLS.CREATE_USER,
				options: {
					method: METHODS.POST,
					body: JSON.stringify({
						_id: userRegistered.user.uid,
						userName,
						email,
						address,
						...USER_DEFAULT_VALUES
					}),
					headers: HEADERS
				},
				navigateTo: '/'
			});
		} catch (error) {
			console.log(error);
		}
	}
};

export default Register;
