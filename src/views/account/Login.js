import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {stylesLoginRegister} from '../../assets/Styles';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [icon, setIcon] = useState('eye')
    const [secureText, setSecureText] = useState(true)

    const changeIcon = () => {
        setIcon(icon == 'eye' ? 'eye-off' : 'eye')
        setSecureText( secureText == false ? true : false)
    }

    return (
        <View style={stylesLoginRegister.container}>
            <Text style={stylesLoginRegister.textTitle}>
                Login
            </Text>
            <TextInput
                mode="outlined"
                outlineColor="black"
                selectionColor="black"
                theme={{ colors: { primary: 'black',underlineColor:'transparent'}}}
                label="Email"
                value={email}
                onChangeText={email => setEmail(email)}
                style={stylesLoginRegister.textInput}
            >
            </TextInput>
            <TextInput
                mode="outlined"
                label="Password"
                secureTextEntry={secureText}
                theme={{ colors: { primary: 'black',underlineColor:'transparent'}}}
                right={<TextInput.Icon name={icon} onPress={changeIcon}/>}
                style={stylesLoginRegister.textInput}
            />
            <TouchableOpacity onPress={props.forgotView}>
                <Text style={stylesLoginRegister.textForgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <Button mode="contained"
                    color="black"
                    style={stylesLoginRegister.btn}
                    onPress={() => console.warn('SignIn Success !')}
            >
                Sign In
            </Button>
        </View>

    );
};


