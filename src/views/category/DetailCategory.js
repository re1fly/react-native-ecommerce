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
    AppRegistry,
} from 'react-native';
import axios from 'axios';
import {stylesListProducts} from '../../assets/Styles';
import {Appbar, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {NGROK} from '../../components/api/Url';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {addItem} from '../../redux/Action';

export default function DetailCategory(props) {
    const [data, setData] = useState([props.data]);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoading(true);
        axios.get(props.url).then(response => {
            const data = response.data.list;
            setData(data);
            setIsLoading(false);
        });
    }, []);

    BackHandler.addEventListener('hardwareBackPress', function () {
        navigation.goBack();
        return true;
    });


    function clickEventListener(item) {
        console.log(item.id);
    }

    const navigation = useNavigation();

    return isLoading ? (
            <View>
                <Appbar.Header style={{backgroundColor: 'black'}}>
                    <Appbar.BackAction onPress={() => navigation.navigate('Product')}/>
                    <Appbar.Content title={props.title}/>
                    <Appbar.Action icon="magnify" onPress={() => console.warn('search')}/>
                </Appbar.Header>
                <View style={{alignSelf: 'center', justifyContent: 'center', marginBottom: 100}}>
                    <ActivityIndicator style={{flex: 1}}
                                       size="large"
                                       color="black"
                                       accessibilityHint="Please Wait"/>
                </View>
            </View>
        ) :
        data == '' ? (
                <View>
                    <Appbar.Header style={{backgroundColor: 'black'}}>
                        <Appbar.BackAction onPress={() => navigation.navigate('Product')}/>
                        <Appbar.Content title={props.title}/>
                        <Appbar.Action icon="magnify" onPress={() => console.warn('search')}/>
                    </Appbar.Header>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 270}}>
                        <Button icon="emoticon-sad" color="black" labelStyle={{fontSize: 50}} style={{marginLeft: 20}}/>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Products Not Available</Text>
                    </View>
                </View>
            ) :
            (

                <View style={stylesListProducts.container}>
                    <Appbar.Header style={{backgroundColor: 'black'}}>
                        <Appbar.BackAction
                            onPress={() => BackHandler.addEventListener('hardwareBackPress', navigation.goBack())}/>
                        <Appbar.Content title={props.title}/>
                        <Appbar.Action icon="magnify" onPress={() => console.warn('search')}/>
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
                                <TouchableOpacity style={stylesListProducts.card} onPress={() =>
                                    navigation.navigate('DetailProduct', item)
                                }>
                                    <Image style={stylesListProducts.userImage} source={{uri: urlImage}}/>
                                    <View style={stylesListProducts.cardFooter}>
                                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                            <Text style={stylesListProducts.name}>{item.product_name}</Text>
                                            <Text style={stylesListProducts.category}>{item.category}</Text>
                                            <Text style={stylesListProducts.price}>Rp. {item.price},00</Text>
                                            <TouchableOpacity style={stylesListProducts.cartButton}
                                                              onPress={() => dispatch(addItem(item))}>
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

