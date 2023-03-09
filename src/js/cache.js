const writeToCache = (prompt, data) =>
    localStorage.setItem(prompt, JSON.stringify(data));

const readFromCache = promt => JSON.parse(localStorage.getItem(promt)) || null;

export { readFromCache, writeToCache };
