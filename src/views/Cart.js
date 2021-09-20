import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {stylesCart, stylesProfile} from '../assets/Styles';
import {Button, Divider, List, Snackbar} from 'react-native-paper';
import {ScrollView} from 'native-base';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Shipping} from './detail_cart/Shipping';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {Payment} from './detail_cart/Payment';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, reduceItem, removeItem} from '../redux/Action';

function CartScreen({navigation}) {
    const [snackIncrease, setSnackIncrease] = useState(false);
    const [snackDecrease, setSnackDecrease] = useState(false);
    const [snackRemove, setSnackRemove] = useState(false);
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();

    const onToggleSnackIncrease = () => setSnackIncrease(!snackIncrease);
    const onDismissSnackIncrease = () => setSnackIncrease(false);

    const onToggleSnackDecrease = () => setSnackDecrease(!snackDecrease);
    const onDismissSnackDecrease = () => setSnackDecrease(false);

    const onToggleSnackRemove = () => setSnackRemove(!snackRemove);
    const onDismissSnackRemove = () => setSnackRemove(false);

    const shippingCost = 30000;

    const dispatch = useDispatch();
    const cartItems = useSelector(state => {
        const cartItem = [];
        for (const key in state.cart) {
            cartItem.push({
                productId: key,
                productName: state.cart[key].productName,
                productPrice: state.cart[key].productPrice,
                productImage: state.cart[key].productImage,
                quantity: state.cart[key].quantity,
                productSize: state.cart[key].productSize,
                sum: state.cart[key].sum,
            });
        }
        return cartItem;
    });
    const subTotal = useSelector(state => state.totalAmount);
    const totalPrice = Number(shippingCost) + Number(subTotal);

    AsyncStorage.getItem('address').then(value => {
        const data = JSON.parse(value);
        setStreet(data.street);
        setCity(data.city);
        setState(data.state);
    });

    return (
        <View style={stylesCart.container}>
            <View style={stylesCart.body}>
                <Snackbar
                    visible={snackIncrease}
                    onDismiss={onDismissSnackIncrease}
                    duration={1000}
                    style={{backgroundColor: '#2CBE3E'}}
                >
                    Product Added
                </Snackbar>
                <Snackbar
                    visible={snackDecrease}
                    onDismiss={onDismissSnackDecrease}
                    duration={1000}
                    style={{backgroundColor: '#FFC300'}}
                >
                    Product Decreased
                </Snackbar>
                <Snackbar
                    visible={snackRemove}
                    onDismiss={onDismissSnackRemove}
                    duration={1000}
                    style={{backgroundColor: '#D30404'}}
                >
                    Product Removed
                </Snackbar>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={stylesCart.bodyContent}>
                        <MaterialIcons style={stylesCart.iconTitle} name="shopping-cart" size={30} color="#88898D"/>
                        <Text style={stylesCart.textTitle}>My Cart</Text>
                        {cartItems.map(item => {
                            const dataMoreItem = {
                                'id': item.productId,
                                'product_name': item.productName,
                                'price': item.productPrice,
                                'product_image': item.productImage,
                                'size': item.productSize
                            }
                            return (
                                <View style={stylesCart.myCart} key={item.productId}>
                                    <View styles={stylesCart.containerImageCart}>
                                        <Image style={stylesCart.imageCart}
                                               source={{uri: item.productImage}}
                                        />
                                    </View>
                                    <View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center', marginLeft: 14}}>
                                        <Text numberOfLines={1}
                                              style={{fontSize: 15, fontWeight: 'bold'}}>{item.productName}</Text>
                                        <Text numberOfLines={1} style={{fontSize: 12}}>Size: {item.productSize}</Text>
                                        <Text numberOfLines={1}
                                              style={{fontSize: 14, marginTop: 10}}>Rp. {item.sum},00</Text>
                                        <View style={{flexDirection: 'row', marginTop: 20}}>
                                            <TouchableOpacity onPress={() => dispatch(reduceItem(item.productId))}
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
                                            onPress={() => dispatch(removeItem(item.productId))}>
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
                            <List.Item
                                title={street}
                                description={city + ',' + state}
                                titleStyle={stylesProfile.titleList}
                                descriptionStyle={stylesProfile.descList}
                                left={props => <List.Icon {...props} color="#114BFB" icon="map-marker-radius"/>}
                                right={props => <List.Icon {...props} color="#000000" icon="chevron-right"/>}
                                onPress={() => navigation.navigate('Shipping')}
                            />
                        </View>

                        <Text style={stylesCart.textTitle}>Payment Method</Text>
                        <View style={{
                            backgroundColor: 'white',
                            height: 70,
                            marginBottom: 20,
                        }}>
                            <List.Item
                                title="BCA"
                                description="Debit Card"
                                titleStyle={stylesProfile.titleList}
                                descriptionStyle={stylesProfile.descList}
                                left={props => <List.Icon {...props} color="#114BFB" icon="atm"/>}
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
                                    <Text>Rp. {subTotal},00</Text>
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
                                    <Text>Rp.{shippingCost},00</Text>
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
                                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Rp. {totalPrice},00</Text>
                                </View>
                            </View>
                        </View>
                        <Button mode="contained"
                                color="black"
                                style={{marginHorizontal: 60, marginVertical: 5, marginTop: 50, borderRadius: 15}}
                                onPress={() => console.log(cartItems)}
                                disabled={cartItems.length === 0}
                        >
                            CHECKOUT NOW
                        </Button>
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
