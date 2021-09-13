import React from 'react';
import {StyleSheet, View, Text, BackHandler, Image, ScrollView, TouchableOpacity} from 'react-native';
import {ActivityIndicator, Appbar, Button} from 'react-native-paper';
import {NGROK} from '../../components/api/Url';
import {Badge} from 'react-native-elements';
import {VStack} from 'native-base';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import {stylesLoginRegister} from '../../assets/Styles';


export default function DetailProduct({navigation, route}) {
    const {
        product_name,
        gender,
        price,
        product_image,
        sub_category,
    } = route.params;
    let image = product_image;
    image = image.replace('localhost:8000', NGROK);

    return (
        <NativeBaseProvider>
            <View style={{
                flex: 1,
                backgroundColor: '#FFFFFF',
            }}>
                <Appbar.Header style={{backgroundColor: 'black'}}>
                    <Appbar.BackAction
                        onPress={() => BackHandler.addEventListener('hardwareBackPress', navigation.goBack())}/>
                    <Appbar.Content title="Detail"/>
                </Appbar.Header>
                <View style={{
                    backgroundColor: '#f1f1f1',
                    borderBottomRightRadius: 60,
                    borderBottomLeftRadius: 60,
                    marginBottom: 10,
                    height: 260,
                    alignItems: 'center',
                }}>
                    <Image source={{uri: image}} style={{
                        width: 250,
                        height: 250,
                        marginTop: 10,
                    }}/>

                </View>
                <View style={{
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                    }}>
                        {product_name}
                    </Text>

                    <Badge value={sub_category}
                           textStyle={{
                               fontSize: 12,
                               textTransform: 'capitalize',
                               lineHeight: 14,
                           }}
                           badgeStyle={{
                               backgroundColor: 'black',
                               paddingHorizontal: 5,
                               paddingVertical: 2,
                               marginVertical: 4,
                           }}
                    />

                    <Text style={{
                        fontSize: 28,
                        fontWeight: '600',
                        marginVertical: 10,
                    }}>
                        Rp. {price},00
                    </Text>
                    <Text style={{
                        textAlign: 'center',
                        paddingHorizontal: 60,

                    }}>
                        NIKE, Inc., together with its subsidiaries, designs, develops, markets, and sells athletic
                        footwear,
                        apparel, equipment, and accessories worldwide.
                    </Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 30}}>
                    <View style={{
                        flexDirection: 'row',
                        flexGrow: 1,
                        flexShrink: 1,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 30,
                    }}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Size</Text>
                        <View style={{flexDirection: 'row', paddingRight: 5, alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => console.warn('clicked size guide')}>
                                <Text style={{fontSize: 12, color: '#8f8f8f'}}>Size Guide</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{flex: 3}}>
                    <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    marginTop: 20,
                                    paddingStart: 20,
                                    paddingEnd: 20,
                                }}
                    >
                        <TouchableOpacity>
                            <VStack>
                                <Text style={{
                                    backgroundColor: '#ececec',
                                    color: 'black',
                                    marginHorizontal: 8,
                                    borderRadius: 15,
                                    borderColor: 'black',
                                    overflow: 'hidden',
                                    paddingHorizontal: 30,
                                    paddingVertical: 24,
                                    fontWeight: 'bold',
                                }}
                                >
                                    XS
                                </Text>
                            </VStack>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <VStack>
                                <Text style={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    marginHorizontal: 8,
                                    borderRadius: 15,
                                    borderColor: 'black',
                                    overflow: 'hidden',
                                    paddingHorizontal: 30,
                                    paddingVertical: 24,
                                    fontWeight: 'bold',
                                }}
                                >
                                    S
                                </Text>
                            </VStack>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <VStack>
                                <Text style={{
                                    backgroundColor: '#ececec',
                                    color: 'black',
                                    marginHorizontal: 8,
                                    borderRadius: 15,
                                    borderColor: 'black',
                                    overflow: 'hidden',
                                    paddingHorizontal: 30,
                                    paddingVertical: 24,
                                    fontWeight: 'bold',
                                }}
                                >
                                    M
                                </Text>
                            </VStack>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <VStack>
                                <Text style={{
                                    backgroundColor: '#ececec',
                                    color: 'black',
                                    marginHorizontal: 8,
                                    borderRadius: 15,
                                    borderColor: 'black',
                                    overflow: 'hidden',
                                    paddingHorizontal: 30,
                                    paddingVertical: 24,
                                    fontWeight: 'bold',
                                }}
                                >
                                    L
                                </Text>
                            </VStack>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <VStack>
                                <Text style={{
                                    backgroundColor: '#ececec',
                                    color: 'black',
                                    marginHorizontal: 8,
                                    borderRadius: 15,
                                    borderColor: 'black',
                                    overflow: 'hidden',
                                    paddingHorizontal: 30,
                                    paddingVertical: 24,
                                    fontWeight: 'bold',
                                }}
                                >
                                    XL
                                </Text>
                            </VStack>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <VStack>
                                <Text style={{
                                    backgroundColor: '#ececec',
                                    color: 'black',
                                    marginHorizontal: 8,
                                    borderRadius: 15,
                                    borderColor: 'black',
                                    overflow: 'hidden',
                                    paddingHorizontal: 30,
                                    paddingVertical: 24,
                                    fontWeight: 'bold',
                                }}
                                >
                                    XXL
                                </Text>
                            </VStack>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: 'black',
                        borderRadius: 30,
                        height: 55,
                        marginHorizontal: 75,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 20,
                    }}
                    onPress={() => console.warn('add to cart')}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 13,
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}>
                        Add to Cart
                    </Text>
                </TouchableOpacity>

            </View>
        </NativeBaseProvider>

    );
}
