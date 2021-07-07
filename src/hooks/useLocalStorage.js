import {useState} from 'react';

 // GOAL: Set/Update localStorage -> Retrieve that value if user refreshes page
export const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {
                                    // if(localStorage.getItem(key)) {
                                    //     return JSON.parse(localStorage.getItem(key));
                                    // } else {
                                    //     localStorage.setItem(key, initialValue)
                                    //     return initialValue;
                                    // } // LONG HANDED VERSION OF WHAT IS BELOW
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse and return stored json or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;
    });

     const setValue = value => {
         // Save to local storage
        window.localStorage.setItem(key, value); // ?? I thought the value had to be stringify-ed 
        // Save state
        setStoredValue(value);
       
      };

     return [storedValue, setValue];
};