import React from 'react';
import {View, Text, BackHandler, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Appbar} from 'react-native-paper';
import {NGROK} from '../../components/api/Url';
import {Badge} from 'react-native-elements';
import {VStack} from 'native-base';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import {stylesDetailProducts} from '../../assets/Styles';


export default function DetailProduct({navigation, route}) {
    const {
        product_name,
        gender,
        price,
        product_image,
        sub_category,
    } = route.params;
    const [selected, setSelected] = React.useState(null);
    const size = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

    let image = product_image;
    image = image.replace('localhost:8000', NGROK);

    const ButtonSize = () =>
        size.map(item => (
            <TouchableOpacity
                key={item}
                onPress={() => setSelected(item)}>
                <VStack>
                    <Text style={[
                        stylesDetailProducts.buttonSize,
                        {
                            backgroundColor: item === selected ? 'black' : '#ececec',
                            color: item === selected ? 'white' : 'black',
                        },
                    ]}
                    >
                        {item}
                    </Text>
                </VStack>
            </TouchableOpacity>
        ));

    return (
        <NativeBaseProvider>
            <View style={stylesDetailProducts.container}>
                <Appbar.Header style={stylesDetailProducts.appbar}>
                    <Appbar.BackAction
                        onPress={() => BackHandler.addEventListener('hardwareBackPress', navigation.goBack())}/>
                    <Appbar.Content title="Detail"/>
                </Appbar.Header>
                <View style={stylesDetailProducts.containerImage}>
                    <Image source={{uri: image}} style={stylesDetailProducts.productImage}/>
                </View>
                <View style={stylesDetailProducts.containerDetail}>
                    <Text style={stylesDetailProducts.productName}>
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

                    <Text style={stylesDetailProducts.textPrice}>
                        Rp. {price},00
                    </Text>
                    <Text style={stylesDetailProducts.textDesc}>
                        NIKE, Inc., together with its subsidiaries, designs, develops, markets, and sells athletic
                        footwear,
                        apparel, equipment, and accessories worldwide.
                    </Text>
                </View>
                <View style={stylesDetailProducts.containerSize}>
                    <View style={stylesDetailProducts.rowSize}>
                        <Text style={stylesDetailProducts.textSize}>Size</Text>
                        <View style={stylesDetailProducts.containerSizeGuide}>
                            <TouchableOpacity onPress={() => console.warn('clicked size guide')}>
                                <Text style={stylesDetailProducts.textSizeGuide}>Size Guide</Text>
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
                        <ButtonSize/>
                    </ScrollView>
                </View>
                <TouchableOpacity
                    style={stylesDetailProducts.buttonCart}
                    onPress={() => console.warn('add to cart')}
                >
                    <Text style={stylesDetailProducts.textButtonCart}>
                        Add to Cart
                    </Text>
                </TouchableOpacity>
            </View>
        </NativeBaseProvider>

    );
}
