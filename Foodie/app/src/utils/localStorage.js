export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];
export const saveToStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
