import * as React from 'react';

import {Button, Card, Title} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View, StyleSheet} from 'react-native';
import {ScrollView} from 'native-base';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import WomenProducts from './category/WomenProducts';
import {useNavigation} from '@react-navigation/native';
import {stylesProducts} from '../assets/Styles';
import MenProducts from './category/MenProducts';
import KidProducts from './category/KidProducts';

const CardProduct = (props) => {
    const navigation = useNavigation();
    return (
        <Card style={stylesProducts.CardCategory}>
            <Card.Content style={stylesProducts.CardTitle}>
                <Title>{props.title} Products</Title>
            </Card.Content>
            <Card.Cover style={stylesProducts.ImageCard}
                        source={{uri: props.image}}/>
            <Card.Actions style={stylesProducts.ButtonDetail}>
                <Button icon="arrow-right"
                        onPress={() => navigation.navigate(props.screenName)}>See Products</Button>
            </Card.Actions>
        </Card>
    );
};


const DetailMens = () => {
    return (
        <MenProducts/>
    );
};
const DetailWomen = () => {
    return (
        <WomenProducts/>
    );
};
const DetailKids = () => {
    return (
        <KidProducts/>
    );
};

const ProductScreen = ({navigation}) => (
    <NativeBaseProvider>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <CardProduct title="Men"
                             image="https://images.unsplash.com/photo-1475293831741-1b69e67acb72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                             screenName="Men"
                />
                <CardProduct title="Women"
                             image="https://images.unsplash.com/photo-1617372591452-9adad3e8070e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=jose-mizrahi-OBbrmyAh-KI-unsplash.jpg"
                             screenName="Women"
                />
                <CardProduct title="Kids"
                             image="https://images.unsplash.com/photo-1601992991989-3b710b759094?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80r"
                             screenName="Kids"
                />
            </View>
        </ScrollView>
    </NativeBaseProvider>
);

const ProductStack = createNativeStackNavigator();

export function ProductStackScreen() {
    return (
        <ProductStack.Navigator screenOptions={{headerShown: false}}>
            <ProductStack.Screen name="Product" component={ProductScreen}/>
            <ProductStack.Screen name="Men" component={DetailMens}/>
            <ProductStack.Screen name="Women" component={DetailWomen}/>
            <ProductStack.Screen name="Kids" component={DetailKids}/>
        </ProductStack.Navigator>
    );
}

