let initialState = [
    { name: 'Rake', category: 'Garden', price: 15.99, inStock: 10 },
    { name: 'Football', category: 'Sporting Goods', price: 25.00, inStock: 5},
    { name: 'Windbreaker', category: 'Clothing', price: 50.00, inStock: 8},
    { name: 'Garden hose', category: 'Garden', price: 26.99, inStock: 5 },
    { name: 'Mouth-guard', category: 'Sporting Goods', price: 35.00, inStock: 75},
    { name: 'Wool socks', category: 'Clothing', price: 12.00, inStock: 18},
    { name: 'Shovel', category: 'Garden', price: 32.00, inStock: 12},

];

function productsReducer(state = initialState, action) {
    switch (action.type) {
        case 'Select_Category':
            return initialState.filter(product => product.category === action.payload)
        default:
            return state;
    }
}


export default productsReducer;
