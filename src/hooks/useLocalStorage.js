// INTO localStorage, JSON.Stringify (obj => string)
// OUT OF localStorage, JSON.parse (string => object)
import { useState } from 'react';
// this hook composes useState, providing the exact same format and functionality as useState, while also persisting the state value to localStorage.

 const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue
    });
//when setValue is called in addition to the normal useState behavior, also persist the new value to localStorage.
    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValue]
}

export default useLocalStorage;