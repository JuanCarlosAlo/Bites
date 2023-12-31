const messages = {
	name: 'The name format is incorrect',
	recipient: 'The recipient format is incorrect',
	email: 'Use a valid email',
	requireEmail: 'The email is obligatory',
	password:
		'The email must be at least 6 digits long with 1 digit 1 uppercase word and 1 lowercase word',
	requirePassword: 'The password is obligatory',
	requireUserName: 'The username is obligatory',
	requireRecipient: 'The recipient is obligatory',
	requireAddress: 'The address is obligatory'
};

const patterns = {
	name: /^[A-Za-z0-9._-]+$/,
	email:
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
	password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/
};

export const FORM_VALIDATIONS = {
	name: {
		required: messages.requireName,
		pattern: {
			value: patterns.name,
			message: messages.name
		}
	},
	email: {
		required: messages.requireEmail,
		pattern: {
			value: patterns.email,
			message: messages.email
		}
	},
	password: {
		required: messages.requirePassword,
		pattern: {
			value: patterns.password,
			message: messages.password
		}
	},
	recipient: {
		required: messages.requireRecipient,
		pattern: {
			value: patterns.name,
			message: messages.recipient
		}
	},
	address: {
		required: messages.requireAddress,
		pattern: {

			message: messages.address
		}
	},

};
