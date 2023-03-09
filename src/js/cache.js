const writeToCache = (prompt, data) =>
    localStorage.setItem(prompt, JSON.stringify(data));

const readFromCache = prompt => JSON.parse(localStorage.getItem(prompt)) || null;

export { readFromCache, writeToCache };
