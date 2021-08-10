import CartItem from "../../../components/shop/CartItem";
import { ADD_TO_CART, REMOVE_FROM_CART} from "../actions/cart";

const initialState  = {
    items:[],
    totalAmount:0
};
export default (state=initialState,action)=>{
    switch(action.type)
    {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;
            // console.log(state.items)
            if(state.items[addedProduct.id]){
                const updatedCartItem = {
                    quantity:state.items[addedProduct.id].quantity+1,
                    prodPrice:prodPrice,
                    prodTitle:prodTitle,
                    sum: state.items[addedProduct.id].sum+prodPrice
                }
                 return {
                    ...state,
                    items:{...state.items,[addedProduct.id]:updatedCartItem},
                    totalAmount:state.totalAmount+prodPrice
                }
            }else{
                const newCartItem = {
                    quantity:1,
                    prodPrice:prodPrice,
                    prodTitle:prodTitle,
                    sum: prodPrice
                }
                return {
                    ...state,
                    items:{...state.items,[addedProduct.id]:newCartItem},
                    totalAmount:state.totalAmount+prodPrice
                }
            }
        case REMOVE_FROM_CART : 
            const currentQty = state.items[action.pid].quantity;
           let updatedCartItems;
        //    console.log(state.items[action.pid])
            if(currentQty>1)
            {
                const updatedCartItem = {
                    quantity:state.items[action.pid].quantity-1,
                    prodPrice:state.items[action.pid].prodPrice,
                    prodTitle:state.items[action.pid].prodTitle,
                    sum:state.items[action.pid].sum - state.items[action.pid].prodPrice
                }
                console.log(updatedCartItem)
                updatedCartItems = {...state.items, [action.pid]:updatedCartItem }
            }
            else{
                updatedCartItems = {...state.items};
                delete updatedCartItems[action.pid]
            }
            
            return {
                ...state,
                items:updatedCartItems,
                totalAmount:state.totalAmount - state.items[action.pid].prodPrice
            }
    }
    return state;
}
