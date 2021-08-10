import React from 'react';

import {View, Text, FlatList, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CartItem from '../../components/shop/CartItem';
import * as cartActions from '../../js/store/actions/cart'
const CartScreen = () => {
    const cartTotalAmount = useSelector(state=>state.cart.totalAmount);
   
   const cartItems = useSelector(state => {
       const transformedCartItems = [];
       for(const key in state.cart.items)
       {
        // console.log(state.cart.items[key]);
        transformedCartItems.push({
            productId:key,
            prodTitle:state.cart.items[key].prodTitle,
            prodPrice:state.cart.items[key].prodPrice,
            quantity:state.cart.items[key].quantity,
            sum:state.cart.items[key].sum,
        });

       }
       return transformedCartItems.sort((a,b) => a.productId>b.productId ? 1 : -1);

   });
    console.log(cartItems);
   const dispatch = useDispatch();
    return ( 
        <View style={style.screen}>
            <View style={style.summary}>
                <Text style={style.summaryText}>
                    Total: <Text style={style.amount}>${cartTotalAmount.toFixed(2)}</Text>
                </Text>
                <Button title="Order Now" disabled={cartItems.length == 0}></Button>
            </View>
            
           <FlatList data={cartItems} keyExtractor={item => item.productId}  renderItem={itemData => <CartItem quantity={itemData.item.quantity} title={itemData.item.prodTitle}  amount={itemData.item.sum} onRemove={()=>{dispatch(cartActions.removeFromCart(itemData.item.productId))} }/>}/>
        </View>
     );
}
const style = StyleSheet.create({
    screen:{
        margin:20
    },
    summary:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
        padding:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        elevation:5,
        borderRadius:10,
        backgroundColor:'white',
         

    },
    summaryText:{
        fontSize:20
    },
    amount:{

    }
})
 
export default CartScreen;