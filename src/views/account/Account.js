import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Profile} from './Profile';
import {Login} from './Login';
import {stylesAccount} from '../../assets/Styles';
import {ImageBackground, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import {BottomSheet} from 'react-native-btr';
import {Register} from './Register';
import {ForgotPassword} from './ForgotPassword';

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
    }
    const toggleForgotToLogin = () => {
        setLoginVisible(!loginVisible);
        setForgotVisible(!forgotVisible);
    }

    return (
        <SafeAreaView style={stylesAccount.container}>
            <View style={stylesAccount.container}>
                <BottomSheet visible={loginVisible}
                             onBackdropPress={toggleLoginView}
                >
                    <View style={stylesAccount.bottomViewLogin}>
                        <Login forgotView={toggleForgotView}/>
                    </View>
                </BottomSheet>
                <BottomSheet visible={registerVisible}
                             onBackdropPress={toggleRegisterView}
                >
                    <View style={stylesAccount.bottomViewRegister}>
                        <Register login={toggleRegisterToLogin}/>
                    </View>
                </BottomSheet>
                <BottomSheet visible={forgotVisible}
                             onBackdropPress={toggleForgotView}
                >
                    <View style={stylesAccount.bottomViewLogin}>
                        <ForgotPassword/>
                    </View>
                </BottomSheet>
                <ImageBackground source={require('../../assets/images/backgroundLogin.jpg')}
                                 resizeMode="cover"
                                 style={stylesAccount.imageContainer}
                >
                    <Text style={stylesAccount.logo}>SportZ</Text>
                    <Text style={stylesAccount.desc}>Get your cool wear right now</Text>
                    <TouchableOpacity style={stylesAccount.loginBtn} onPress={toggleLoginView}>
                        <Text style={stylesAccount.loginText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesAccount.registerBtn} onPress={toggleRegisterView}>
                        <Text style={stylesAccount.registerText}>Sign Up</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
};

export default function Account() {
    return (
        <ProfileStack.Navigator screenOptions={{
            headerShown: false,
            // contentStyle: {
            //     backgroundColor: '#b9bec9',
            // },
        }}>
            <ProfileStack.Screen name="LoginPage" component={PageAccount}/>
            <ProfileStack.Screen name="ProfilePage" component={Profile}/>
        </ProfileStack.Navigator>
    );
}
