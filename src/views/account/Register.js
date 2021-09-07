import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {stylesLoginRegister} from '../../assets/Styles';

export const Register = (props) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [icon, setIcon] = useState('eye');
    const [secureText, setSecureText] = useState(true);

    const changeIcon = () => {
        setIcon(icon == 'eye' ? 'eye-off' : 'eye');
        setSecureText(secureText == false ? true : false);
    };


    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 30,
                marginVertical: 20,
            }}>
                Register
            </Text>
            <TextInput
                mode="outlined"
                outlineColor="black"
                selectionColor="black"
                theme={{colors: {primary: 'black', underlineColor: 'transparent'}}}
                label="Name"
                value={name}
                onChangeText={name => setName(name)}
                style={stylesLoginRegister.textInput}
            >
            </TextInput>
            <TextInput
                mode="outlined"
                outlineColor="black"
                selectionColor="black"
                theme={{colors: {primary: 'black', underlineColor: 'transparent'}}}
                label="Phone"
                value={phone}
                keyboardType={'numeric'}
                onChangeText={phone => setPhone(phone)}
                style={stylesLoginRegister.textInput}
            >
            </TextInput>
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
            <TextInput
                mode="outlined"
                label="Password"
                outlineColor="black"
                selectionColor="black"
                theme={{colors: {primary: 'black', underlineColor: 'transparent'}}}
                secureTextEntry={secureText}
                value={password}
                onChangeText={password => setPassword(password)}
                right={<TextInput.Icon name={icon} onPress={changeIcon}/>}
                style={stylesLoginRegister.textInput}
            />
            <TouchableOpacity onPress={props.login}>
                <Text style={{
                    color: 'black',
                    fontSize: 11,
                }}>Already have an account? Sign in here</Text>
            </TouchableOpacity>
            <Button mode="contained"
                    color="black"
                    style={stylesLoginRegister.btn}
                    onPress={() => console.warn('Signup Success !')}
            >
                Sign Up
            </Button>
        </View>
    );
};
