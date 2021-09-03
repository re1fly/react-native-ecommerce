import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    ActivityIndicator,
    BackHandler,
} from 'react-native';
import axios from 'axios';
import {stylesListProducts} from '../../assets/Styles';
import {Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {NGROK} from '../../components/api/Url';

export default function DetailProducts(props) {
    const [data, setData] = useState([props.data]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        axios.get(props.url).then(response => {
            const data = response.data.list;
            setData(data);
            setIsLoading(false);
        });
    }, []);


    function clickEventListener(item) {
        Alert.alert(item.product_name);
    }

    const navigation = useNavigation();

    return isLoading ? (<ActivityIndicator style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                                           size="large"
                                           color="black"
                                           accessibilityHint="Please Wait"/>) :
        (
            <View style={stylesListProducts.container}>
                <Appbar.Header style={{backgroundColor: 'black'}}>
                    <Appbar.BackAction onPress={() => navigation.navigate('Product')}/>
                    <Appbar.Content title={props.title} />
                    <Appbar.Action icon="magnify" onPress={() => console.warn('search')} />

                </Appbar.Header>
                <FlatList
                    style={stylesListProducts.list}
                    contentContainerStyle={stylesListProducts.listContainer}
                    data={data}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({item}) => {
                        let urlImage = item.product_image;
                        urlImage = urlImage.replace('localhost:8000', NGROK);
                        return (
                            <TouchableOpacity style={stylesListProducts.card} onPress={() => {
                                clickEventListener(item);
                            }}>
                                {/*<View style={stylesListProducts.cardHeader}>*/}
                                {/*    <Image style={stylesListProducts.icon}*/}
                                {/*           source={{uri: 'https://img.icons8.com/flat_round/64/000000/hearts.png'}}/>*/}
                                {/*</View>*/}
                                <Image style={stylesListProducts.userImage} source={{uri: urlImage}}/>
                                <View style={stylesListProducts.cardFooter}>
                                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={stylesListProducts.name}>{item.product_name}</Text>
                                        <Text style={stylesListProducts.category}>{item.category}</Text>
                                        <Text style={stylesListProducts.price}>Rp. {item.price},00</Text>
                                        <TouchableOpacity style={stylesListProducts.cartButton}
                                                          onPress={() => clickEventListener(item)}>
                                            <Text style={stylesListProducts.cartButtonText}>Add to
                                                Cart</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    }}/>
            </View>
        );
}

