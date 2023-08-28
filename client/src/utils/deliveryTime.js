export const calculateDeliveryDate = (remainingTimeInSeconds) => {
    const nowMilliseconds = Date.now();
    const remainingMilliseconds = remainingTimeInSeconds * 1000;
    const deliveryDateMilliseconds = nowMilliseconds + remainingMilliseconds;

    return deliveryDateMilliseconds;
};