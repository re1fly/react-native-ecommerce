import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {ActivityIndicator, Button, TextInput} from 'react-native-paper';
import {stylesLoginRegister} from '../../assets/Styles';
import axios from 'axios';
import {LOGIN} from '../../components/api/Url';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = (props) => {
    const [email, setEmail] = useState('refly@globalxtreme.net');
    const [password, setPassword] = useState('adminadmin');
    const [icon, setIcon] = useState('eye');
    const [secureText, setSecureText] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const changeIcon = () => {
        setIcon(icon == 'eye' ? 'eye-off' : 'eye');
        setSecureText(secureText == false ? true : false);
    };

    const dataLogin = {
        'email': email,
        'password': password,
    };
    const navigation = useNavigation();

    const submitLogin = () => {
        setIsLoading(true);
        axios.post(LOGIN, dataLogin).then(async (response) => {
            setIsLoading(false);
            if (response.data.success == true) {
                await AsyncStorage.setItem('full_name', response.data.data.full_name);
                await AsyncStorage.setItem('id', JSON.stringify(response.data.data.id));
                await AsyncStorage.setItem('email', response.data.data.email);
                await AsyncStorage.setItem('isLogin', JSON.stringify(true));
                navigation.navigate('ProfilePage');
            } else {
                setIsLoading(false);
                Alert.alert(
                    'Login Failed !',
                    response.data.message,
                    [
                        {text: 'OK'},
                    ],
                );
            }
            AsyncStorage.getItem('isLogin').then(value => console.log(value));
        });
    };

    return (
        <View style={stylesLoginRegister.container}>
            <Text style={stylesLoginRegister.textTitle}>
                Login
            </Text>
            <TextInput
                mode="outlined"
                outlineColor="black"
                selectionColor="black"
                theme={{colors: {primary: 'black', underlineColor: 'transparent'}}}
                label="Email"
                value={email}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                onChangeText={email => setEmail(email)}
                style={stylesLoginRegister.textInput}
            >
            </TextInput>
            <TextInput
                mode="outlined"
                label="Password"
                secureTextEntry={secureText}
                theme={{colors: {primary: 'black', underlineColor: 'transparent'}}}
                value={password}
                onChangeText={password => setPassword(password)}
                right={<TextInput.Icon name={icon} onPress={changeIcon}/>}
                style={stylesLoginRegister.textInput}
            />
            <TouchableOpacity onPress={props.forgotView}>
                <Text style={stylesLoginRegister.textForgot}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylesLoginRegister.btn} onPress={submitLogin}>
                <Text style={stylesLoginRegister.textBtn}>
                    {isLoading == true ? <ActivityIndicator animating={true} color="white"/> : 'Sign In'}
                </Text>
            </TouchableOpacity>
        </View>

    );
};


