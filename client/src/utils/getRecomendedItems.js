export const getRecomendedItems = (items) => {
    const sortedItems = items.sort((a, b) => b.rating - a.rating);

    // Tomar los primeros 10 elementos del array ordenado
    const tenRecomendedItems = sortedItems.slice(0, 10);

    return tenRecomendedItems;
};