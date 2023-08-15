import { NavLink } from 'react-router-dom';
import { StyledForm } from './styles';
import { useForm } from 'react-hook-form';
import { useFetch } from '../../hooks/useFetch';

import { FORM_VALIDATIONS } from '../../constants/formValidations';

import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { fetchCoordinates } from '../../utils/fetchCoordinates';

const AddressForm = () => {
	const { currentUser } = useContext(AuthContext);
	const { data, setFetchInfo } = useFetch();
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });
	return (
		<StyledForm
			onSubmit={handleSubmit((formData, e) =>
				onSubmit(formData, e, setFetchInfo, data, currentUser)
			)}
		>
			<div>
				<label htmlFor='recipient'>Recipient</label>
				<input
					type='text'
					name='recipient'
					{...register('recipient', FORM_VALIDATIONS.recipient)}
				/>
				<p>{errors?.recipient?.message}</p>
			</div>
			<div>
				<label htmlFor='address'>Address</label>
				<input
					type='text'
					name='address'
					{...register('address', FORM_VALIDATIONS.address)}
					defaultValue={currentUser ? currentUser.address : undefined}
				/>
				<p>{errors?.address?.message}</p>
			</div>
			<p>If you want to save your order please register</p>
			<NavLink to={'/register'}>Here</NavLink>
			<button>Buy</button>
		</StyledForm>
	);
};

const onSubmit = async (formData, e, setFetchInfo, data, currentUser) => {
	e.preventDefault();
	const { recipient, address } = formData;
	const coordinates = await fetchCoordinates(address);

	console.log(coordinates);
};

export default AddressForm;
