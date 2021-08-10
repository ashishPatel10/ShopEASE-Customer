import React from 'react';
import {View, Text, Image,Button, StyleSheet,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native';
const ProductItem = (props) => {
    let touchableF = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21){
        touchableF = TouchableNativeFeedback;
    }
    return ( 
        
        <View style={styles.product}>
            <View style={styles.touchable}>
            <TouchableOpacity onPress={props.onViewDetail} useForeground>
            <View>
            <Image style={styles.image} source={{uri:props.image}}/>
            <View style={styles.details}>
            <Text style={styles.title}>
                {props.title}
            </Text>
            <Text style={styles.price}>
            ${props.price.toFixed(2)}
            </Text> 
            </View>
           
            <View style={styles.actions}>
                <Button title="View Details" onPress={props.onViewDetail} />

               
                <Button title="To cart" onPress={props.onAddToCart}/>
                    
               
            </View>
            </View>
            </TouchableOpacity>
            </View>
        </View>
       
     );
}
 const styles = StyleSheet.create({
     image:{
         width:'100%',
         height:'60%'
     },
    product:{
        padding:30,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        elevation:5,
        borderRadius:10,
        backgroundColor:'white',
        height:450,
        margin:20,
        // overflow:'hidden'
    },
    title:{
        fontSize:18,
        marginVertical:4
    },
    price:{
        fontSize:14,
        color:'#888',
        marginBottom:10
    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:'25%',
        paddingHorizontal:20
    },
    details:{
        alignItems:'center',
        // height:'15%',
        // padding:10
    },
    touchable:{
        borderRadius:10,
        // overflow:'hidden'
    }
 })
export default ProductItem;