export const calculateDeliveryDate = (remainingTimeInSeconds) => {
    const nowMilliseconds = Date.now(); // Hora actual en milisegundos
    const remainingMilliseconds = remainingTimeInSeconds * 1000; // Convertir a milisegundos
    const deliveryDateMilliseconds = nowMilliseconds + remainingMilliseconds;

    return deliveryDateMilliseconds;
};