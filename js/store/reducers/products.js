import products_data from "../../data/dummy-data";

initialState = {
    availableProducts : products_data,
    userProducts : products_data.filter((product)=>product.ownerId == "1")
}

export default (state = initialState,action) =>{
    return state;
}