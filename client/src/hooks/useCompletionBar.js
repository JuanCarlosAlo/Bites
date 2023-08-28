import { useEffect, useState } from "react";
import { fetchOrderCompletion } from "../utils/fetchOrderCompletion";

export const useCompletionBar = (fullRemainingTime, userId, orderId, orderTime) => {
    const [remainingTime, setRemainingTime] = useState(fullRemainingTime);
    const [completionPercentage, setCompletionPercentage] = useState(
        ((orderTime - fullRemainingTime) / orderTime) * 100 || 100
    );

    useEffect(() => {
        setRemainingTime(fullRemainingTime);
    }, [fullRemainingTime, orderId]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => {

                if (prevRemainingTime > 0) {
                    const newRemainingTime = prevRemainingTime - 1;
                    const newCompletionPercentage = ((orderTime - newRemainingTime) / orderTime) * 100;


                    const safeCompletionPercentage = Math.min(newCompletionPercentage, 100);

                    setCompletionPercentage(safeCompletionPercentage);

                    return newRemainingTime;
                } else {
                    clearInterval(interval);
                    fetchOrderCompletion(userId, orderId);
                    setCompletionPercentage(100)
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [orderTime, userId, orderId]);

    return {
        remainingTime,
        completionPercentage,
    };
};


