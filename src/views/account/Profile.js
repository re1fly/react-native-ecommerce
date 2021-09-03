import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {stylesProfile} from '../../assets/Styles';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, List} from 'react-native-paper';

const ProfilePage = () => {
    return (
        <View style={stylesProfile.container}>
            <View style={stylesProfile.header}>
                <View style={stylesProfile.headerContent}>
                    <Image style={stylesProfile.avatar}
                           source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3khQ9xMaJSsNpwHEea_FK4Aj9BdXZSaSBw&usqp=CAU'}}/>

                    <Text style={stylesProfile.name}>Travis Scott</Text>
                    <Text style={stylesProfile.userMemberText}>Gold Member </Text>
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
                        right={props => <List.Icon {...props} icon="arrow-right"/>}
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
                        right={props => <List.Icon {...props} icon="arrow-right"/>}
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
                        right={props => <List.Icon {...props} icon="arrow-right"/>}
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
                        right={props => <List.Icon {...props} icon="arrow-right"/>}
                        onPress={() => console.warn('pressed')}
                    />
                </View>

                <Button mode="contained"
                        color="black"
                        style={{marginHorizontal: 120, marginTop: 70, borderRadius: 15}}
                        onPress={() => console.warn('Logout Success !')}
                >
                    Logout
                </Button>
            </View>
            {/*<View style={stylesProfile.item}>*/}
            {/*    <View style={stylesProfile.iconContent}>*/}
            {/*        <Image style={stylesProfile.icon}*/}
            {/*               source={{uri: 'https://img.icons8.com/color/70/000000/cottage.png'}}/>*/}
            {/*    </View>*/}
            {/*    <View style={stylesProfile.infoContent}>*/}
            {/*        <Text style={stylesProfile.info}>Home</Text>*/}
            {/*    </View>*/}
            {/*</View>*/}

            {/*<View style={stylesProfile.item}>*/}
            {/*    <View style={stylesProfile.iconContent}>*/}
            {/*        <Image style={stylesProfile.icon}*/}
            {/*               source={{uri: 'https://img.icons8.com/color/70/000000/administrator-male.png'}}/>*/}
            {/*    </View>*/}
            {/*    <View style={stylesProfile.infoContent}>*/}
            {/*        <Text style={stylesProfile.info}>Settings</Text>*/}
            {/*    </View>*/}
            {/*</View>*/}

            {/*<View style={stylesProfile.item}>*/}
            {/*    <View style={stylesProfile.iconContent}>*/}
            {/*        <Image style={stylesProfile.icon}*/}
            {/*               source={{uri: 'https://img.icons8.com/color/70/000000/filled-like.png'}}/>*/}
            {/*    </View>*/}
            {/*    <View style={stylesProfile.infoContent}>*/}
            {/*        <Text style={stylesProfile.info}>News</Text>*/}
            {/*    </View>*/}
            {/*</View>*/}

            {/*<View style={stylesProfile.item}>*/}
            {/*    <View style={stylesProfile.iconContent}>*/}
            {/*        <Image style={stylesProfile.icon}*/}
            {/*               source={{uri: 'https://img.icons8.com/color/70/000000/facebook-like.png'}}/>*/}
            {/*    </View>*/}
            {/*    <View style={stylesProfile.infoContent}>*/}
            {/*        <Text style={stylesProfile.info}>Shop</Text>*/}
            {/*    </View>*/}
            {/*</View>*/}

        </View>
    );
};

const ProfileStack = createNativeStackNavigator();

export default function Profile() {
    return (
        <ProfileStack.Navigator screenOptions={{
            headerShown: false,
            contentStyle: {
                backgroundColor: '#b9bec9',
            },
        }}>
            <ProfileStack.Screen name="Page" component={ProfilePage}/>
        </ProfileStack.Navigator>
    );
}

