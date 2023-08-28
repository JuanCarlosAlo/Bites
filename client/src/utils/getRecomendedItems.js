export const getRecomendedItems = (items) => {
    const sortedItems = items.sort((a, b) => b.rating - a.rating);
    const tenRecomendedItems = sortedItems.slice(0, 10);

    return tenRecomendedItems;
};