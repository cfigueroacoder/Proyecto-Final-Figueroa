import { useState } from "react";

export const useCount = (initialValue = 1, min, max) => {
    
    if(initialValue < min || initialValue > max) {
        initialValue = min // limitar el valor inicial dentro del rango
    }

    const [count, setCount] = useState(initialValue)

    const incrementCounter = () => count < max && setCount(count + 1)
    const decrementCounter = () => count > min && setCount(count - 1)

    const resetCounter = () => setCount(initialValue)

    return {count, incrementCounter, decrementCounter, resetCounter}
}
