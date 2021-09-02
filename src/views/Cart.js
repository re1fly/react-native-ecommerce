import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';

function DetailsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Details!</Text>
        </View>
    );
}

function CartScreen({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

const CartStack = createNativeStackNavigator();

export function CartStackScreen() {
    return (
        <CartStack.Navigator screenOptions={{headerShown: false}}>
            <CartStack.Screen name="Cart" component={CartScreen}/>
            <CartStack.Screen name="Details" component={DetailsScreen}/>
        </CartStack.Navigator>
    );
}
