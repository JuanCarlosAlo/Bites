const BASE = 'https://bites-server.onrender.com/';

export const USERS_URLS = {
	ALL_USERS: BASE + 'users/all-users',
	GET_USER_BY_ID: BASE + 'users/userById/',
	CREATE_USER: BASE + 'users/create-user',
	EDIT_USER: BASE + 'users/edit-user/',
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
export const ORDERS_URLS = {
	ALL_ORDERS: BASE + 'orders/all-orders/',
	ORDER_BY_ID: BASE + 'orders/orderById/',
	CREATE_ORDER: BASE + 'orders/create-order/',
	COMPLETE_ORDER: BASE + 'orders/complete-order/'
}

export const REVIEW_URLS = {
	CREATE_REVIEW: BASE + 'reviews/create-review'
}
