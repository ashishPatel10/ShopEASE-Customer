// import React from 'react';
// import { Button, View, Text,FlatList} from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// class ProductsOverview extends React.Component {
//   render() {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: ProductsOverview,
//   },
// });

// export default ProductsOverview;
import React from 'react';

import { FlatList,Text } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../js/store/actions/cart'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// import HeaderButton from '../../components/UI/HeaderButton';
const ProductsOverviewScreen = (props) => {
    const product = useSelector(state=>state.products.availableProducts)
    const dispatch = useDispatch();
    return ( 
        <FlatList 
        data={product} 
        keyExtractor={item => item.id} 
        renderItem={itemData => <ProductItem 
                                image={itemData.item.image} 
                                title={itemData.item.title} 
                                price={itemData.item.price} 
                                onViewDetail={() => {props.navigation.navigate('ProductDetail',
                                    {productId:itemData.item.id, productTitle : itemData.item.title})}}     
                                onAddToCart = {() => {dispatch(cartActions.addToCart(itemData.item))}}/>}/>
     );
}
ProductsOverviewScreen.navigationOptions = navData => {
    return{
        headerTitle:'All Products',
        headerRight:<HeaderButtons >
            <Item title='Cart' color='white' iconName='md-cart' onPress={()=>{navData.navigation.navigate('Cart')}}/>
        </HeaderButtons>
    }
   
}
 
export default ProductsOverviewScreen;