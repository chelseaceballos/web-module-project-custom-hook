import {useLocalStorage} from './useLocalStorage';
// this isn't doing any actual logic on it's own, but if it were it would be checking the OS user preferences and change based on if the user has light or dark mode set.

export const useDarkMode = (initialValue) => {
    const [value, setValue] = useLocalStorage('darkmode', initialValue);
    return [value, setValue]
}