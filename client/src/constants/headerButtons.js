import { v4 } from 'uuid';

export const HEADER_BUTTONS = {

	MAIN: [
		{
			TEXT: 'Recomended',
			URL: '/',
			_id: v4()
		},
		{
			TEXT: 'Appetizers',
			URL: '/appetizers',
			_id: v4()
		},
		{
			TEXT: 'Main',
			URL: '/main',
			_id: v4()
		},
		{
			TEXT: 'Snacks',
			URL: '/snacks',
			_id: v4()
		},
		{
			TEXT: 'Drinks',
			URL: '/drinks',
			_id: v4()
		}

	]
};
