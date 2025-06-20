import { createContext, useState } from "react";

const BookContext = createContext();

function BookContextProvider({ children }){
    const [count, setCount] = useState(5);

    const valueToShare = {
        count: count,
        incrementCount : () => {
            setCount(count + 1)
        }
    };

    return (
        <BookContext.Provider value={valueToShare}>
            {children}
        </BookContext.Provider>
    );
}

export { BookContextProvider, BookContext };
