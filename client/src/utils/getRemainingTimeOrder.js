export const getRemainingTimeOrder = (targetTimeMilliseconds) => {
    const currentTimeMilliseconds = Date.now();
    const timeRemainingMilliseconds = targetTimeMilliseconds - currentTimeMilliseconds;
    const timeRemainingSeconds = Math.floor(timeRemainingMilliseconds / 1000);

    return timeRemainingSeconds;
};