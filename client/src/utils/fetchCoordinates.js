import { HEADERS } from "../constants/headers";
import { METHODS } from "../constants/methods";
import { OPEN_ROUTE_KEY } from "../constants/openRoute";

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

export const fetchCoordinates = async (address) => {
    const url = `https://api.openrouteservice.org/geocode/search?api_key=${OPEN_ROUTE_KEY}&text=${address}`;
    const options = {
        method: METHODS.POST,
        body: JSON.stringify({
            address
        }),
        headers: HEADERS
    };

    try {
        const responseData = await fetchData(url, options);
        const coordinates = responseData.features[0].geometry.coordinates;
        return coordinates;
    } catch (error) {
        console.error('Error al obtener coordenadas:', error);
        throw error;
    }
};
