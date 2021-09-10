import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Profile} from './Profile';
import {Login} from './Login';
import {stylesAccount} from '../../assets/Styles';
import {ImageBackground, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import {BottomSheet} from 'react-native-btr';
import {Register} from './Register';
import {ForgotPassword} from './ForgotPassword';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image} from 'react-native-elements';

const ProfileStack = createNativeStackNavigator();

const PageAccount = () => {
    const [loginVisible, setLoginVisible] = useState(false);
    const [registerVisible, setRegisterVisible] = useState(false);
    const [forgotVisible, setForgotVisible] = useState(false);

    const toggleLoginView = () => {
        setLoginVisible(!loginVisible);
    };
    const toggleRegisterView = () => {
        setRegisterVisible(!registerVisible);
    };
    const toggleForgotView = () => {
        setLoginVisible(!loginVisible);
        setForgotVisible(!forgotVisible);
    };
    const toggleRegisterToLogin = () => {
        setLoginVisible(!loginVisible);
        setRegisterVisible(!registerVisible);
    };


    return (
        <SafeAreaView style={stylesAccount.container}>
            <View style={stylesAccount.container}>
                <ImageBackground source={require('../../assets/images/backgroundLogin.jpg')}
                                 resizeMode="cover"
                                 style={stylesAccount.imageContainer}
                >
                    <Image style={{width: 200, height: 200}} source={require('../../assets/images/logo.png')}/>
                    <Text style={stylesAccount.desc}>Get your cool wear right now</Text>
                    <TouchableOpacity style={stylesAccount.loginBtn} onPress={toggleLoginView}>
                        <Text style={stylesAccount.loginText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesAccount.registerBtn} onPress={toggleRegisterView}>
                        <Text style={stylesAccount.registerText}>Sign Up</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <BottomSheet visible={loginVisible}
                         onBackdropPress={toggleLoginView}
                         onBackButtonPress={toggleLoginView}
            >
                <View style={stylesAccount.bottomViewLogin}>
                    <Login forgotView={toggleForgotView}/>
                </View>
            </BottomSheet>
            <BottomSheet visible={registerVisible}
                         onBackdropPress={toggleRegisterView}
                         onBackButtonPress={toggleRegisterView}
            >
                <View style={stylesAccount.bottomViewRegister}>
                    <Register login={toggleRegisterToLogin}/>
                </View>
            </BottomSheet>
            <BottomSheet visible={forgotVisible}
                         onBackdropPress={toggleForgotView}
                         onBackButtonPress={toggleForgotView}
            >
                <View style={stylesAccount.bottomViewLogin}>
                    <ForgotPassword/>
                </View>
            </BottomSheet>
        </SafeAreaView>
    );
};

export default function Account() {
    const [isLogin, setIsLogin] = useState();

    useEffect(() => {
        AsyncStorage.getItem('isLogin').then(value => setIsLogin(JSON.parse(value)));
    }, []);

    return (
        <ProfileStack.Navigator screenOptions={{headerShown: false}}>
            {
                isLogin == null ?
                    (
                        <>
                            <ProfileStack.Screen name="LoginPage"
                                                 component={PageAccount}
                                                 options={{
                                                     animationTypeForReplace: 'push',
                                                 }}/>
                        </>

                    )
                    :
                    (
                        <>
                            <ProfileStack.Screen name="ProfilePage" component={Profile} options={{
                                animationTypeForReplace: 'pop',
                            }}/>
                        </>

                    )
            }
        </ProfileStack.Navigator>
    );

}
