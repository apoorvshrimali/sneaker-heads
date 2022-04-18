export function productReducer(state, { payload, action }) {
    switch (action) {
        case "CLEAR-FILTER":
            return { ...state, products: state.clonedProducts }
        case "CATEGORY-FILTER":
            return { ...state, products: state.clonedProducts.filter((product) => product.categoryName === payload) }
        case "LOW-TO-HIGH":
            return { ...state, products: state.products.sort((a, b) => Number(a.discountedPrice.replace(',', "")) - Number(b.discountedPrice.replace(',', ""))) }
        case "HIGH-TO-LOW":
            return { ...state, products: state.products.sort((a, b) => Number(b.discountedPrice.replace(',', "")) - Number(a.discountedPrice.replace(',', ""))) }
        case "RANGE":
            return { ...state, products: state.clonedProducts.filter((product) => Number(product.discountedPrice.replace(',', "")) < payload) }
        case "UPDATE-PRODUCTS":
            return { clonedProducts: payload, products: payload }
        default:
            return state
    }
}