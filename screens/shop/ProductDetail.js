import React from 'react';
import { Button, ScrollView,View, Image,StyleSheet,Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import {useSelector,useDispatch} from 'react-redux';
import * as cartActions from '../../js/store/actions/cart'
const ProductDetail = (props) => {
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId))
//    console.log(selectedProduct);
   const dispatch = useDispatch();
    // props.navigation.setParam('productTitle')
    return ( 
        <ScrollView>
            <Image style={styles.image} source={{uri:selectedProduct.image}}/>
            <View style={styles.actions}>
            <Button color={Colors.primary} title="Add to Cart" onPress={()=>{dispatch(cartActions.addToCart(selectedProduct))}}/>

            </View>
            <Text style={styles.price}>
                ${selectedProduct.price.toFixed(2)}
            </Text>
            <Text style={styles.descriptions}>
                {selectedProduct.description}
            </Text>
           
        </ScrollView>
     );
}
ProductDetail.navigationOptions = navData => {
    return {
        headerTitle:navData.navigation.getParam('productTitle')
    }
}
const styles = StyleSheet.create ({
    image:{
        width:'100%',
        height:300
    },
    actions:{
        marginVertical:10,
        alignItems:'center'
    },
    price:{
        fontSize:20,
        color:'#888',
        textAlign:'center',
        marginVertical:20
    },
    descriptions:{
        fontSize:14,
        textAlign:'center',
        marginHorizontal:20
    }
})
 
export default ProductDetail;