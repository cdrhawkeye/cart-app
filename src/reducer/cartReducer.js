export const cartReducer = (state, action) => {
    const { type, payload } = action;

    function getNewTotal(products){
        let total = 0;
        products.forEach(product => total += product.price);
        return total;
    }

    switch (type) {
        case "ADD_TO_CART":
        case "REMOVE_FROM_CART":
            return { ...state, cartList: payload.products, total: getNewTotal(payload.products) };
        default:
            throw new Error("cartReducer does not have the case " + type);
    }
};