


export const incrementPurchases = (category) => {
    return {
        type: 'Increment',
        payload: category,
    }
}

export const decrementPurchases = (category) => {
    return {
        type: 'Decrement',
        payload: category,
    }
}

export const reset = () => {
    return {
        type: 'Reset',
    }
}
