import * as React from 'react';
import {Box, Text, View} from 'native-base';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import {Image, ImageBackground, Platform, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {stylesProfile} from '../../assets/Styles';



const BoxBg = () => {
    return (
        <Box
            bg="#2F8E90"
            p={4}
            borderTopRadius={300 / 2}
            height="70%"
            justifyContent="flex-end"
            marginTop={80}
        />

    );
};


export default function Profile() {
    return (
        <NativeBaseProvider>
            <View>
                <View style={{
                    position: 'absolute',
                    bottom: 10,
                    left: 40,
                    right: 40,
                    top: 50,
                    elevation: 0,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 20,
                    height: 80,
                    paddingBottom: 5,

                }}>
                    <View style={stylesProfile.headerContainer}>
                        <ImageBackground
                            style={stylesProfile.headerBackgroundImage}
                            blurRadius={10}
                            borderRadius={30}
                            source={{uri: 'https://wallpaperaccess.com/full/1483382.jpg'}}
                        >
                            <View style={stylesProfile.headerColumn}>
                                <Image
                                    style={stylesProfile.userImage}
                                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLFWHmdN1j9ic82H4vgc2rBebhte_R5hWjA&usqp=CAU'}}
                                />
                                <Text style={stylesProfile.userNameText}>Refly</Text>
                                <Text style={stylesProfile.userMemberText}>
                                    Gold Member
                                </Text>
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
                        </ImageBackground>
                        <View>
                            <View style={{backgroundColor: 'black', height: 200}}>

                            </View>
                        </View>
                    </View>
                </View>
                {/*<BoxBg/>*/}
            </View>
        </NativeBaseProvider>

    );
}
