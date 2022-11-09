

const initialState = {
    categories: [
        { name: 'Garden', purchases: 0 },
        { name: 'Sporting Goods', purchases: 0 },
        { name: 'Clothing', purchases: 0 },
    ],
    totalPurchases: 0,
}

function purchasesReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'Increment':
            return {
                ...state,
                categories: state.categories.map(category => {
                    if (category.name === payload.name) {
                        return {
                            name: category.name,
                            purchases: category.purchases + 1,
                        }
                    }
                    return category;
                }),
                totalPurchases: state.totalPurchases + 1,
            }

        case 'Decrement':
            return {
                ...state,
                totalPurchases: state.totalPurchases - 1,
                categories: state.categories.map(category =>
                    category.name === payload.name ?
                        { name: category.name, purchases: category.purchases - 1 } : category),
            }
        case 'Reset':
            return initialState;

        default: return state;
    }
}


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

export default purchasesReducer;