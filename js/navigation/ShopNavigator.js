
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import { Platform } from 'react-native'; 
import ProductsOverview from '../../screens/shop/ProductsOverview';
import ProductDetail from '../../screens/shop/ProductDetail';
import CartScreen from '../../screens/shop/CartScreen'
const ProductsNavigator = createStackNavigator({
    ProductsOverview : ProductsOverview,
    ProductDetail: ProductDetail,
    Cart: CartScreen
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === "android" ?  '#C2185B' : ''
        },
        headerTintColor :  Platform.OS === "android" ?  'white' : '#C2185B'
    }
})
export default createAppContainer(ProductsNavigator);