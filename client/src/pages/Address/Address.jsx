import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import PageComponent from '../../components/page-component/PageComponent';
import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/formValidations';
import { fetchCoordinates } from '../../utils/fetchCoordinates';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { AuthContext } from '../../context/Auth.context';
import { useContext } from 'react';
import { v4 } from 'uuid';

const Address = () => {
	const { state } = useLocation();
	const { currentUser } = useContext(AuthContext);
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });

	const navigate = useNavigate();
	if (!state) return <Navigate to={'/'} />;
	return (
		<PageComponent isBack={true}>
			<Secondaryheader url={'/cart'} />
			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(formData, e, state, navigate)
				)}
			>
				<div>
					<label htmlFor='recipient'>Recipient</label>
					<input
						type='text'
						name='recipient'
						defaultValue={
							currentUser.userName !== 'none' ? currentUser.userName : ''
						}
						{...register('recipient', FORM_VALIDATIONS.recipient)}
					/>
					<p>{errors?.recipient?.message}</p>
				</div>
				<div>
					<label htmlFor='address'>Address</label>
					<input
						type='text'
						name='address'
						defaultValue={currentUser.address ? currentUser.address : ''}
						{...register('address', FORM_VALIDATIONS.address)}
					/>
					<p>{errors?.address?.message}</p>
				</div>

				<PrimaryButton
					align={MEASUREMENTS.ALIGN.CENTER}
					bgcolor={COLORS.MAIN}
					color={COLORS.WHITE}
					text={'Continue'}
				/>
			</form>
		</PageComponent>
	);
};

const onSubmit = async (formData, e, state, navigate) => {
	e.preventDefault();

	const { recipient, address } = formData;
	const coordinates = await fetchCoordinates(address);

	navigate('/checkout', {
		state: { _id: v4(), recipient, coordinates, address, items: [...state] }
	});
};

export default Address;
