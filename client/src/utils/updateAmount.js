export const updateAmount = (itemId, newAmount, data, setData) => {
    if (newAmount >= 1) {
        const updatedData = data.map(item =>
            item._id === itemId ? { ...item, amount: newAmount } : item
        );
        setData(updatedData);
    }
};
