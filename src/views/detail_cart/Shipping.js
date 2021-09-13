import * as React from 'react';
import {Text, View} from 'react-native';
import {Appbar, Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {stylesShipping} from '../../assets/Styles';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Shipping = () => {
    const [name, setName] = useState();
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [phone, setPhone] = useState();
    const [zip, setZip] = useState();

    const navigation = useNavigation();

    const dataForm = {
        'name': name,
        'street': street,
        'city': city,
        'state': state,
        'phone': phone,
        'zip': zip,
    };

    const submitShipping = () => {
        const value = JSON.stringify(dataForm);
        AsyncStorage.setItem('address', value);
    };

    // AsyncStorage.getItem('address').then(value => {
    //     const data = JSON.parse(value);
    //     setName(data.name);
    //     setZip(data.zip);
    //     setPhone(data.phone);
    //     setStreet(data.street);
    //     setCity(data.city);
    //     setState(data.state);
    // });


    return (
        <View>
            <Appbar.Header style={{backgroundColor: 'black'}}>
                <Appbar.BackAction onPress={() => navigation.navigate('Cart')}/>
                <Appbar.Content title="Shipping"/>
            </Appbar.Header>
            <View style={stylesShipping.paper}>
                <View style={stylesShipping.containerForm}>
                    <View style={stylesShipping.containerInput}>
                        <Text style={stylesShipping.title}>Fill Your Shipping Form</Text>
                        <TextInput
                            label="Name"
                            theme={{colors: {primary: 'black', underlineColor: 'transparent'}}}
                            style={stylesShipping.input}
                            value={name}
                            defaultValue={name}
                            onChangeText={name => setName(name)}
                        />
                        <TextInput
                            label="Street Address"
                            theme={{colors: {primary: 'black', underlineColor: 'transparent'}}}
                            style={stylesShipping.input}
                            value={street}
                            onChangeText={street => setStreet(street)}
                        />
                        <TextInput
                            label="City"
                            theme={{colors: {primary: 'black', underlineColor: 'transparent'}}}
                            style={stylesShipping.input}
                            value={city}
                            onChangeText={city => setCity(city)}
                        />
                        <TextInput
                            label="State"
                            theme={{colors: {primary: 'black', underlineColor: 'transparent'}}}
                            style={stylesShipping.input}
                            value={state}
                            onChangeText={state => setState(state)}
                        />
                        <TextInput
                            label="Phone"
                            theme={{colors: {primary: 'black', underlineColor: 'transparent'}}}
                            style={stylesShipping.input}
                            keyboardType="numeric"
                            value={phone}
                            onChangeText={phone => setPhone(phone)}
                        />
                        <TextInput
                            label="ZIP Code"
                            theme={{colors: {primary: 'black', underlineColor: 'transparent'}}}
                            style={stylesShipping.input}
                            keyboardType="numeric"
                            value={zip}
                            onChangeText={zip => setZip(zip)}
                        />
                        <Button mode="contained"
                                color="black"
                                style={stylesShipping.btnSubmit}
                                onPress={submitShipping}
                        >
                            Submit
                        </Button>
                    </View>
                </View>
            </View>
        </View>

    );
};
