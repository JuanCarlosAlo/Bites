
import { OPEN_ROUTE_API } from "../constants/headers";
import { MAIN_COORDENATES } from "../constants/mainCoordenates";
import { METHODS } from "../constants/methods";


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

export const fetchDuration = async (coordinates, id) => {

    const url = 'https://api.openrouteservice.org/v2/matrix/driving-car';
    const options = {
        method: METHODS.POST,
        body: JSON.stringify({
            locations: [coordinates, MAIN_COORDENATES],
            id,
            metrics: ['duration'],
            resolve_locations: false
        }),
        headers: OPEN_ROUTE_API
    }

    try {
        const responseData = await fetchData(url, options);
        const remainingTime = responseData.durations[0][1]
        return remainingTime;
    } catch (error) {
        console.error('Error al obtener coordenadas:', error);
        throw error;
    }
};

