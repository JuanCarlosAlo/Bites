import { useEffect, useState } from "react";
import { fetchOrderCompletion } from "../utils/fetchOrderCompletion";

export const useCompletionBar = (initialDuration, userId, orderId) => {


    const [duration, setDuration] = useState(initialDuration);
    const [remainingTime, setRemainingTime] = useState(
        localStorage.getItem(`remainingTime_${orderId}`) || duration
    );
    const [completionPercentage, setCompletionPercentage] = useState(
        ((duration - remainingTime) / duration) * 100 || 100
    );

    useEffect(() => {
        setDuration(initialDuration);
        setRemainingTime(
            localStorage.getItem(`remainingTime_${orderId}`) || initialDuration
        );
    }, [initialDuration, orderId]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!remainingTime) return
            if (remainingTime > 0) {
                setRemainingTime(prevRemainingTime => prevRemainingTime - 1);
                setCompletionPercentage(((duration - remainingTime) / duration) * 100);
                localStorage.setItem(`remainingTime_${orderId}`, remainingTime - 1);
            } else {
                clearInterval(interval);
                localStorage.removeItem(`remainingTime_${orderId}`);
                fetchOrderCompletion(userId, orderId);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [remainingTime, duration, userId, orderId]);

    return {
        remainingTime,
        completionPercentage,
    };
}
