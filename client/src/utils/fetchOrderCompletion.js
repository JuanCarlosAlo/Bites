import { HEADERS } from "../constants/headers";
import { METHODS } from "../constants/methods";

import { ORDERS_URLS } from "../constants/urls";

const fetchData = async (url, options) => {

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        throw error;
    }
};

export const fetchOrderCompletion = async (userId, orderId) => {
    if (!userId || !orderId) return
    const url = ORDERS_URLS.COMPLETE_ORDER + userId;
    const options = {
        method: METHODS.POST,
        body: JSON.stringify({
            id: orderId
        }),
        headers: HEADERS
    };

    try {
        const responseData = await fetchData(url, options);
        return responseData;
    } catch (error) {
        console.error('Error al obtener coordenadas:', error);
        throw error;
    }
};
