import { useState } from 'react';

function useLocalStorage(key, initialValue) {
    const getStoredValue = () => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error('Error getting localStorage key “' + key + '”:', error);
            return initialValue;
        }
    };
   
    const [storedValue, setStoredValue] = useState(getStoredValue);
    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error('Error setting localStorage key “' + key + '”:', error);
        }
    };

    const removeValue = () => {
        try {
            localStorage.removeItem(key);
            setStoredValue(initialValue);
        } catch (error) {
            console.error('Error removing localStorage key “' + key + '”:', error);
        }
    };
    return [storedValue, setValue, removeValue]; 
}

export default useLocalStorage;
