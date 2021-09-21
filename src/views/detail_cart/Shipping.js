import * as React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Appbar, Button, Snackbar, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {stylesShipping} from '../../assets/Styles';
import {useEffect, useState} from 'react';
import {Select, VStack} from 'native-base';
import ProvinceList from '../../components/api/Province.json';
import {useDispatch, useSelector} from 'react-redux';
import {addShipping} from '../../redux/Action';


export const Shipping = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const dataProvince = ProvinceList;
    const shippingAddress = useSelector(state => state.shipping);

    const [name, setName] = useState();
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [province, setProvince] = useState();
    const [phone, setPhone] = useState();
    const [zip, setZip] = useState();

    const [snackSubmit, setSnackSubmit] = React.useState(false);
    const onToggleSnackSubmit = () => setSnackSubmit(!snackSubmit);
    const onDismissSnackSubmit = () => setSnackSubmit(false);

    useEffect(() => {
        if (shippingAddress != 0) {
            setName(shippingAddress[0].name);
            setStreet(shippingAddress[0].street);
            setCity(shippingAddress[0].city);
            setState(shippingAddress[0].state);
            setProvince(shippingAddress[0].province);
            setPhone(shippingAddress[0].phone);
            setZip(shippingAddress[0].zip);
        }
    }, [shippingAddress]);

    const dataShipping = {
        'id': 1,
        'name': name,
        'street': street,
        'city': city,
        'state': state,
        'province': province,
        'phone': phone,
        'zip': zip,
    };
    console.log(dataProvince)

    return (
        <View>
            <Appbar.Header style={{backgroundColor: 'black'}}>
                <Appbar.BackAction onPress={() => navigation.navigate('Cart')}/>
                <Appbar.Content title="Shipping"/>
            </Appbar.Header>
            <Snackbar
                visible={snackSubmit}
                onDismiss={onDismissSnackSubmit}
                duration={1000}
                style={{backgroundColor: '#2CBE3E', marginBottom: 30}}
            >
                Success Update Shipping
            </Snackbar>
            <View style={stylesShipping.paper}>
                <ScrollView>
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
                            <VStack alignItems="center" space={2}>
                                <Select
                                    variant="styled"
                                    placeholder="Province"
                                    selectedValue={province}
                                    _placeholder={{color: 'blue', fontSize: 8}}
                                    _selectedItem={{color: 'white'}}
                                    minWidth={310}
                                    onValueChange={(itemValue: string) => setProvince(itemValue)}
                                >
                                    {[].concat(dataProvince.province)
                                        .sort((a, b) => a.name > b.name ? 1 : -1)
                                        .map(data => {
                                        return (
                                            <Select.Item key={data.id} label={data.name} value={data.name}/>
                                        );
                                    })

                                    }

                                </Select>
                            </VStack>
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
                                    onPress={() => {
                                        dispatch(addShipping(dataShipping));
                                        onToggleSnackSubmit();
                                    }}
                            >
                                Submit
                            </Button>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>

    );
};
