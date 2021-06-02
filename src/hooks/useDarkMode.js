import useLocalStorage from './useLocalStorage';

 const useDarkMode = (key, value) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, value);
    
// return value should be something like [darkMode, setDarkMode]
return [darkMode, setDarkMode]
};

export default useDarkMode;