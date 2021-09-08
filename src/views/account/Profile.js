import React, {Component, useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {stylesProfile} from '../../assets/Styles';
import {Button, List} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';


// const Logout = () => {
//     const navigation = useNavigation();
//
//     AsyncStorage.removeItem('full_name')
//     AsyncStorage.removeItem('email')
//
//     navigation.navigate('LoginPage');
// }

export const Profile = () => {
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();

    AsyncStorage.getItem('full_name').then(value => setFullName(value));
    AsyncStorage.getItem('email').then(value => setEmail(value));

    return (
        <View style={stylesProfile.container}>
            <View style={stylesProfile.header}>
                <View style={stylesProfile.headerContent}>
                    <Image style={stylesProfile.avatar}
                           source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3khQ9xMaJSsNpwHEea_FK4Aj9BdXZSaSBw&usqp=CAU'}}/>

                    <Text style={stylesProfile.name}>{fullName}</Text>
                    <Text style={stylesProfile.userMemberText}>{email}</Text>
                    <View style={stylesProfile.userAddressRow}>
                        <View>
                            <Icon
                                name="place"
                                underlayColor="transparent"
                                iconStyle={stylesProfile.placeIcon}
                                onPress={() => console.warn('clicked')}
                            />
                        </View>
                        <View style={stylesProfile.userCityRow}>
                            <Text style={stylesProfile.userCityText}>
                                Bali, Indonesia
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={stylesProfile.body}>
                <View style={{
                    backgroundColor: '#f8f8f8',
                    height: 70,
                    marginTop: 20,
                    marginHorizontal: 25,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                }}>
                    <List.Item
                        title="Account Details"
                        description="Username, Password, and many more..."
                        titleStyle={stylesProfile.titleList}
                        descriptionStyle={stylesProfile.descList}
                        left={props => <List.Icon {...props} icon="account"/>}
                        right={props => <List.Icon {...props} icon="chevron-right"/>}
                        onPress={() => console.warn('pressed')}
                    />
                </View>
                <View style={{
                    backgroundColor: '#f8f8f8',
                    height: 70,
                    marginTop: 3,
                    marginHorizontal: 25,
                }}>
                    <List.Item
                        title="My Wallet"
                        description="Credit Card, Debit Card, SportZ Wallet."
                        titleStyle={stylesProfile.titleList}
                        descriptionStyle={stylesProfile.descList}
                        left={props => <List.Icon {...props} icon="wallet"/>}
                        right={props => <List.Icon {...props} icon="chevron-right"/>}
                        onPress={() => console.warn('pressed')}
                    />
                </View>
                <View style={{
                    backgroundColor: '#f8f8f8',
                    height: 70,
                    marginTop: 3,
                    marginHorizontal: 25,
                }}>
                    <List.Item
                        title="History"
                        description="Checkout your history purchase"
                        titleStyle={stylesProfile.titleList}
                        descriptionStyle={stylesProfile.descList}
                        left={props => <List.Icon {...props} icon="note-text"/>}
                        right={props => <List.Icon {...props} icon="chevron-right"/>}
                        onPress={() => console.warn('pressed')}
                    />
                </View>
                <View style={{
                    backgroundColor: '#f8f8f8',
                    height: 70,
                    marginTop: 3,
                    marginHorizontal: 25,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                }}>
                    <List.Item
                        title="Help"
                        description="Contact our support 24/7"
                        titleStyle={stylesProfile.titleList}
                        descriptionStyle={stylesProfile.descList}
                        left={props => <List.Icon {...props} icon="headset"/>}
                        right={props => <List.Icon {...props} icon="chevron-right"/>}
                        onPress={() => console.warn('pressed')}
                    />
                </View>

                <Button mode="contained"
                        color="black"
                        style={{marginHorizontal: 120, marginTop: 70, borderRadius: 15}}
                        onPress={() => {console.warn('logout')}}
                >
                    Logout
                </Button>
            </View>
        </View>
    );
};


