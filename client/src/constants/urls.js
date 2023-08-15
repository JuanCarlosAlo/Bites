const BASE = 'http://localhost:3000/';

export const USERS_URLS = {
	ALL_USERS: BASE + 'users/all-users',
	GET_USER_BY_ID: BASE + 'users/userById/',
	CREATE_USER: BASE + 'users/create-user',
	DELETE_USER: BASE + 'users/delete-user/'
};

export const APPETIZERS_URLS = {
	ALL_APPETIZERS: BASE + 'appetizers/all-appetizers'
}

export const DRINKS_URLS = {
	ALL_DRINKS: BASE + 'drinks/all-drinks'
}

export const SNACKS_URLS = {
	ALL_SNACKS: BASE + 'snacks/all-snacks'
}
export const MAINS_URLS = {
	ALL_MAINS: BASE + 'main/all-mains'
}
export const CART_URLS = {
	ALL_CART: BASE + 'cart/all-cartItems'
}
export const RECOMENDED_URLS = {
	ALL_RECOMENDED: BASE + 'recomended/all-recomendedItems'
}

