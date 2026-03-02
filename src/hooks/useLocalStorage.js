import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        console.log(
            `[useLocalStorage/useState] Se leyo '${key}' desde LocalStorage:`,
            stored !== null ? "encontrado" : "no encontrado, usando valor inicial"
        );
        return stored ? JSON.parse(stored) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
        console.log(
            `[useLocalStorage/useEffect] Se guardo '${key}' en LocalStorage.`
        );
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;
