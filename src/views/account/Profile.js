import React, {useEffect, useState} from 'react';
import {
    Image,
    PermissionsAndroid,
    Platform,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {stylesProfile} from '../../assets/Styles';
import {Button, List} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {fontSize} from 'styled-system';


const Logout = () => {
    // const navigation = useNavigation();
    AsyncStorage.removeItem('full_name');
    AsyncStorage.removeItem('email');
    AsyncStorage.removeItem('isLogin');

    AsyncStorage.getItem('isLogin').then(value => console.log(value));

    // navigation.navigate('LoginPage');
};

export const Profile = () => {
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [filePath, setFilePath] = useState({});

    useEffect(() => {
        AsyncStorage.getItem('full_name').then(value => setFullName(value));
        AsyncStorage.getItem('email').then(value => setEmail(value));
    }, []);

    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    },
                );
                // If CAMERA Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else {
            return true;
        }
    };

    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    },
                );
                // If WRITE_EXTERNAL_STORAGE Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                alert('Write permission err', err);
            }
            return false;
        } else {
            return true;
        }
    };

    const chooseFile = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 550,
            maxHeight: 550,
            quality: 1,
            includeBase64: true,

        };

        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
            } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            setFilePath(response.assets[0]);
        });

    };

    return (
        <View style={stylesProfile.container}>
            <View style={stylesProfile.header}>
                <View style={stylesProfile.headerContent}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={stylesProfile.containerAvatar}
                        onPress={() => chooseFile('photo')}>
                        <Image style={stylesProfile.avatar}
                               source={{uri: 'data:image/jpeg;base64,' + filePath.base64}}
                        />
                    </TouchableOpacity>

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
                        onPress={Logout}
                >
                    Logout
                </Button>
            </View>
        </View>
    );
};


