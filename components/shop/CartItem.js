import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
const CartItem = (props) => {
    return ( 
        <View style={styles.cartItem}>
            <View style={styles.itemData}>
                <Text style={styles.quantity}>
               {props.quantity}  
                </Text> 
                <Text style={styles.title}>
                {props.title}  
                </Text> 
            
              <Text style={styles.amount}>
              ${props.amount} 
              </Text> 
              <Text style={styles.deleteButton} onPress={props.onRemove}>
                    delete
              </Text>
            </View>
        </View>
     );
}
const styles = StyleSheet.create({
cartItem:{
    padding:10,
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20
},
itemData:{
    flexDirection:'row',
    alignItems:'center',

},
quantity:{
    marginLeft:20,
    color:'#888',
    fontSize:16,
},
title:{
    marginLeft:20,
    fontSize:16
},
amount:{
    marginLeft:20,
    fontSize:16
},
deleteButton:{
    color:'red',
    marginLeft:20
}
})
export default CartItem;