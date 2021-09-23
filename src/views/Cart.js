import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {stylesCart, stylesLoginRegister, stylesProfile} from '../assets/Styles';
import {ActivityIndicator, Button, Divider, List, Snackbar} from 'react-native-paper';
import {ScrollView} from 'native-base';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Shipping} from './detail_cart/Shipping';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {Payment} from './detail_cart/Payment';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, reduceItem, removeItem, resetCart, resetShipping} from '../redux/Action';
import ProvinceList from '../components/api/Province.json';
import {SUBMIT_TRANSACTION} from '../components/api/Url';
import axios from 'axios';

function CartScreen({navigation}) {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);
    const shippingAddress = useSelector(state => state.shipping);
    const [isLoading, setIsLoading] = useState(false);
    let shippingCost;

    const provinceShipping = ProvinceList.province;

    if (shippingAddress != 0) {
        const shippingByProvince = provinceShipping.find(data => data.name === shippingAddress[0].province);
        if (shippingByProvince.timezone == 'WITA') {
            shippingCost = 50000;
        } else if (shippingByProvince.timezone == 'WIB') {
            shippingCost = 30000;
        } else if (shippingByProvince.timezone == 'WIT') {
            shippingCost = 100000;
        } else {
            shippingCost = 0;
        }
    } else {
        shippingCost = 0;
    }


    const subTotal = cartItems.reduce((total, arr) => {
        return total + arr.price * arr.quantity;
    }, 0);
    const totalFinal = subTotal + shippingCost;

    const dataCheckout = {
        customer_id: 1,
        item_customer: cartItems,
        payment_method: 'Cash On Delivery',
        shipping_address: shippingAddress[0],
        price: {
            'sub_total': subTotal,
            'shipping': shippingCost,
            'total_price': totalFinal,
        },
    };

    const submitTransaction = () => {
        setIsLoading(true);
        const currentdate = new Date();
        const orderId = 'SZ' +
            +currentdate.getFullYear()
            + (currentdate.getMonth() + 1)
            + currentdate.getDate()
            + currentdate.getHours()
            + currentdate.getMinutes()
            + currentdate.getSeconds()
            + JSON.stringify(dataCheckout.customer_id);

        const formData = new FormData();
        formData.append('order_id', orderId);
        formData.append('customer_id', JSON.stringify(dataCheckout.customer_id));
        formData.append('item_customer', JSON.stringify(dataCheckout.item_customer));
        formData.append('shipping_address', JSON.stringify(dataCheckout.shipping_address));
        formData.append('payment_method', dataCheckout.payment_method);
        formData.append('price', JSON.stringify(dataCheckout.price));

        axios.post(SUBMIT_TRANSACTION, formData, {
            'headers':
                {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
        }).then(response => {
            setIsLoading(false);
            if (response.data.success === true) {
                dispatch(resetCart());
                dispatch(resetShipping());
                Alert.alert(
                    'Checkout Success !',
                    response.data.message,
                    [
                        {text: 'OK'},
                    ],
                );
            } else {
                setIsLoading(false);
                Alert.alert(
                    'Checkout Failed !',
                    'Check your cart',
                    [
                        {text: 'OK'},
                    ],
                );
            }
        });

    };

    return (
        <View style={stylesCart.container}>
            <View style={stylesCart.body}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={stylesCart.bodyContent}>
                        <MaterialIcons style={stylesCart.iconTitle} name="shopping-cart" size={30} color="#88898D"/>
                        <Text style={stylesCart.textTitle}>My Cart</Text>
                        {cartItems.map((item, index) => {
                            const totalCostItem = item.price * item.quantity;
                            const dataMoreItem = {
                                'id': item.id,
                                'product_name': item.productName,
                                'price': item.price,
                                'product_image': item.image,
                                'size': item.size,
                                'quantity': 1,
                            };
                            return (
                                <View style={stylesCart.myCart} key={index}>
                                    <View styles={stylesCart.containerImageCart}>
                                        <Image style={stylesCart.imageCart}
                                               source={{uri: item.image}}
                                        />
                                    </View>
                                    <View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center', marginLeft: 14}}>
                                        <Text numberOfLines={1}
                                              style={{
                                                  fontSize: 15,
                                                  fontWeight: 'bold',
                                                  textTransform: 'capitalize',
                                              }}>{item.productName}</Text>
                                        <Text numberOfLines={1} style={{fontSize: 12}}>Size:
                                            <Text style={{fontWeight: 'bold'}}>{' ' + item.size}</Text>
                                        </Text>
                                        <Text numberOfLines={1}
                                              style={{
                                                  fontSize: 14,
                                                  marginTop: 10,
                                              }}>Rp. {totalCostItem.toLocaleString()}</Text>
                                        <View style={{flexDirection: 'row', marginTop: 20}}>
                                            <TouchableOpacity onPress={() => dispatch(reduceItem(item))}
                                                              style={{
                                                                  borderWidth: 0.5,
                                                                  borderColor: '#cccccc',
                                                                  borderRadius: 30,
                                                                  padding: 3,
                                                              }}>
                                                <MaterialIcons name="remove" size={13} color="#88898D"/>
                                            </TouchableOpacity>
                                            <Text style={{
                                                paddingHorizontal: 7,
                                                paddingTop: 1,
                                                color: '#A9A8AF',
                                                fontWeight: '600',
                                                fontSize: 14,
                                            }}>{item.quantity}</Text>
                                            <TouchableOpacity onPress={() => dispatch(addItem(dataMoreItem))}
                                                              style={{
                                                                  borderWidth: 0.5,
                                                                  borderColor: '#cccccc',
                                                                  borderRadius: 30,
                                                                  padding: 3,
                                                              }}>
                                                <MaterialIcons name="add" size={13} color="#88898D"/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{justifyContent: 'center', alignItems: 'center', width: 60}}>
                                        <TouchableOpacity
                                            style={{
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: 32,
                                                height: 32,
                                            }}
                                            onPress={() => dispatch(removeItem(item))}>
                                            <MaterialIcons name="delete-outline" size={25} color="black"/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            );
                        })}

                        <Text style={stylesCart.textTitle}>Shipping</Text>
                        <View style={{
                            backgroundColor: 'white',
                            height: 70,
                        }}>
                            {
                                shippingAddress != 0 ?
                                    shippingAddress.map((data) =>
                                        (
                                            <List.Item
                                                key={data.id}
                                                title={data.street}
                                                description={data.city + ', ' + data.state + ', ' + data.province}
                                                titleStyle={stylesProfile.titleList}
                                                descriptionStyle={stylesProfile.descList}
                                                left={props => <List.Icon {...props} color="#114BFB"
                                                                          icon="truck-delivery"/>}
                                                right={props => <List.Icon {...props} color="#000000"
                                                                           icon="chevron-right"/>}
                                                onPress={() => navigation.navigate('Shipping')}
                                            />
                                        ),
                                    )
                                    : <List.Item
                                        title="Fill the Form Shipping"
                                        description="Press Here"
                                        titleStyle={stylesProfile.titleList}
                                        descriptionStyle={stylesProfile.descList}
                                        left={props => <List.Icon {...props} color="#114BFB" icon="truck-delivery"/>}
                                        right={props => <List.Icon {...props} color="#000000" icon="chevron-right"/>}
                                        onPress={() => navigation.navigate('Shipping')}
                                    />
                            }
                        </View>

                        <Text style={stylesCart.textTitle}>Payment Method</Text>
                        <View style={{
                            backgroundColor: 'white',
                            height: 70,
                            marginBottom: 20,
                        }}>
                            <List.Item
                                title="Cash On Delivery (COD)"
                                description="You have to pay when your Item has been Arrived"
                                titleStyle={stylesProfile.titleList}
                                descriptionStyle={stylesProfile.descList}
                                left={props => <List.Icon {...props} color="#114BFB" icon="cash"/>}
                                right={props => <List.Icon {...props} color="#000000" icon="chevron-right"/>}
                                onPress={() => navigation.navigate('Payment')}
                            />
                        </View>

                        <Text style={stylesCart.textTitle}>Order Details</Text>
                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <View style={{
                                flexDirection: 'row',
                                flexGrow: 1,
                                flexShrink: 1,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <Text style={{color: '#8f8f8f'}}>Subtotal</Text>
                                <View style={{flexDirection: 'row', paddingRight: 5, alignItems: 'center'}}>
                                    <Text>Rp. {subTotal.toLocaleString()}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 8}}>
                            <View style={{
                                flexDirection: 'row',
                                flexGrow: 1,
                                flexShrink: 1,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <Text style={{color: '#8f8f8f'}}>Shipping Cost</Text>
                                <View style={{flexDirection: 'row', paddingRight: 5, alignItems: 'center'}}>
                                    <Text>Rp.{shippingCost.toLocaleString()}</Text>
                                </View>
                            </View>
                        </View>
                        <Divider style={{marginVertical: 15}}/>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{
                                flexDirection: 'row',
                                flexGrow: 1,
                                flexShrink: 1,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <Text style={{color: '#8f8f8f'}}>Total</Text>
                                <View style={{flexDirection: 'row', paddingRight: 5, alignItems: 'center'}}>
                                    <Text style={{
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                    }}>Rp. {totalFinal.toLocaleString()}</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{
                                width: '65%',
                                marginHorizontal: 60,
                                borderRadius: 25,
                                height: 45,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 50,
                                marginVertical: 5,
                                backgroundColor: cartItems.length == 0 || shippingAddress == 0 ? '#ececec' : 'black',
                            }}
                            onPress={submitTransaction}
                            disabled={cartItems.length === 0 || shippingAddress === 0}
                        >
                            <Text style={{
                                color: 'white',
                                fontSize: 14,
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                            }}>
                                {isLoading == true ?
                                    <ActivityIndicator animating={true} color="white"/> : 'CHECKOUT NOW'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const CartStack = createNativeStackNavigator();

export function CartStackScreen() {
    return (
        <NativeBaseProvider>
            <CartStack.Navigator screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: 'white',
                },
            }}>
                <CartStack.Screen name="Cart" component={CartScreen}/>
                <CartStack.Screen name="Shipping" component={Shipping}/>
                <CartStack.Screen name="Payment" component={Payment}/>
            </CartStack.Navigator>
        </NativeBaseProvider>
    );
}
