import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {ActivityIndicator, Button, TextInput} from 'react-native-paper';
import {stylesAccount, stylesLoginRegister} from '../../assets/Styles';
import axios from 'axios';
import {REGISTER} from '../../components/api/Url';

export const Register = (props) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [icon, setIcon] = useState('eye');
    const [secureText, setSecureText] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const changeIcon = () => {
        setIcon(icon == 'eye' ? 'eye-off' : 'eye');
        setSecureText(secureText == false ? true : false);
    };

    let dataRegister = {
        'name': name,
        'email': email,
        'phone': phone,
        'password': password,
    };

    const submitRegister = () => {
        setIsLoading(true);

        axios.post(REGISTER, dataRegister).then(response => {
            console.log(response);
            if (response.data.success === true) {
                setIsLoading(false);
                setName('');
                setPhone('');
                setEmail('');
                setPassword('');
                Alert.alert(
                    'Register Success',
                    'Press OK to continue',
                    [
                        {text: 'OK', onPress: () => console.log('OK')},
                    ],
                );
            } else {
                setIsLoading(false);
                Alert.alert(
                    'Register Error',
                    response.data.message,
                    [
                        {text: 'OK'},
                    ],
                );
            }
        });
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
                keyboardType='numeric'
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
            <TouchableOpacity style={stylesLoginRegister.btn} onPress={submitRegister}>
                <Text style={stylesLoginRegister.textBtn}>
                    {isLoading == true ? <ActivityIndicator animating={true} color="white"/> : 'Sign Up'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};
