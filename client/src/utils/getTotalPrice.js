export const getTotalPrice = (data) => {
    const totalPrice = data.reduce((total, item) => total + (item.price * item.amount), 0);
    return totalPrice.toFixed(2);
};