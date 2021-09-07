import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {stylesLoginRegister} from '../../assets/Styles';

export const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    return (
        <View style={stylesLoginRegister.container}>
            <Text style={stylesLoginRegister.textTitle}>
                Reset Your Password
            </Text>
            <Text style={{marginTop: 40, fontSize: 11}}>
                Please enter your email address
            </Text>
            <TextInput
                mode="outlined"
                outlineColor="black"
                selectionColor="black"
                theme={{colors: {primary: 'black', underlineColor: 'transparent'}}}
                label="Email"
                value={email}
                onChangeText={email => setEmail(email)}
                style={stylesLoginRegister.textInput}
            >
            </TextInput>

            <TouchableOpacity style={stylesLoginRegister.btn} onPress={() => console.warn('SignIn Success !')}>
                <Text style={stylesLoginRegister.textBtn}>Submit</Text>
            </TouchableOpacity>
        </View>

    );
};


