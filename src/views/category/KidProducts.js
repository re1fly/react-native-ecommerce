import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList, ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {GET_KIDS_PRODUCTS, NGROK} from '../../components/api/Url';
import {stylesDetailProducts} from '../../assets/Styles';

export default class KidProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [props.data],
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});
        axios.get(GET_KIDS_PRODUCTS).then(response => {
            const data = response.data.list;
            this.setState(
                {
                    data: data,
                    isLoading: false,
                },
            );
        });
    }


    clickEventListener(item) {
        Alert.alert(item.product_name);
    }

    render() {
        const {isLoading} = this.state;
        return isLoading ? (<ActivityIndicator style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                                               size="large"
                                               color="black"
                                               accessibilityHint="Please Wait"/>) :
            (
                <View style={stylesDetailProducts.container}>
                    <FlatList
                        style={stylesDetailProducts.list}
                        contentContainerStyle={stylesDetailProducts.listContainer}
                        data={this.state.data}
                        horizontal={false}
                        numColumns={2}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({item}) => {
                            let urlImage = item.product_image;
                            urlImage = urlImage.replace('localhost:8000', NGROK);
                            return (
                                <TouchableOpacity style={stylesDetailProducts.card} onPress={() => {
                                    this.clickEventListener(item);
                                }}>
                                    {/*<View style={stylesDetailProducts.cardHeader}>*/}
                                    {/*    <Image style={stylesDetailProducts.icon}*/}
                                    {/*           source={{uri: 'https://img.icons8.com/flat_round/64/000000/hearts.png'}}/>*/}
                                    {/*</View>*/}
                                    <Image style={stylesDetailProducts.userImage} source={{uri: urlImage}}/>
                                    <View style={stylesDetailProducts.cardFooter}>
                                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                            <Text style={stylesDetailProducts.name}>{item.product_name}</Text>
                                            <Text style={stylesDetailProducts.category}>{item.category}</Text>
                                            <Text style={stylesDetailProducts.price}>Rp. {item.price},00</Text>
                                            <TouchableOpacity style={stylesDetailProducts.cartButton}
                                                              onPress={() => this.clickEventListener(item)}>
                                                <Text style={stylesDetailProducts.cartButtonText}>Add to
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
}

