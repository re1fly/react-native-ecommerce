import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View, StyleSheet} from 'react-native';
import {ScrollView} from 'native-base';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import {
    GET_BACKPACKS, GET_BALLS,
    GET_CAPS,
    GET_HOODIES,
    GET_JACKETS,
    GET_JERSEYS,
    GET_KIDS_PRODUCTS, GET_LEGGINGS,
    GET_MEN_PRODUCTS, GET_PANTS, GET_SHORTS, GET_SLEEVES, GET_SOCKS, GET_SWEATERS,
    GET_TSHIRTS,
    GET_WOMEN_PRODUCTS,
} from '../components/api/Url';
import DetailCategory from './category/DetailCategory';
import {ListGenderProducts} from './category/ListGenderProducts';
import DetailProduct from './category/DetailProduct';


export const DetailMens = () => (
        <DetailCategory url={GET_MEN_PRODUCTS} title="Men"/>
    );

export const DetailWomens = () => (
        <DetailCategory url={GET_WOMEN_PRODUCTS} title="Women"/>
    );

export const DetailKids = () => (
        <DetailCategory url={GET_KIDS_PRODUCTS} title="Kids"/>
    );

export const DetailTshirts = () => (
    <DetailCategory url={GET_TSHIRTS} title="Tshirts"/>
)

export const DetailJerseys = () => (
    <DetailCategory url={GET_JERSEYS} title="Jerseys"/>
)

export const DetailJackets = () => (
    <DetailCategory url={GET_JACKETS} title="Jackets"/>
)

export const DetailSweaters = () => (
    <DetailCategory url={GET_SWEATERS} title="Sweaters"/>
)

export const DetailHoodies = () => (
    <DetailCategory url={GET_HOODIES} title="Hoodies"/>
)

export const DetailShorts = () => (
    <DetailCategory url={GET_SHORTS} title="Shorts"/>
)

export const DetailPants = () => (
    <DetailCategory url={GET_PANTS} title="Pants"/>
)

export const DetailLeggings = () => (
    <DetailCategory url={GET_LEGGINGS} title="Leggings"/>
)

export const DetailSocks = () => (
    <DetailCategory url={GET_SOCKS} title="Socks"/>
)

export const DetailCaps = () => (
    <DetailCategory url={GET_CAPS} title="Caps"/>
)

export const DetailBackpacks = () => (
    <DetailCategory url={GET_BACKPACKS} title="Backpacks"/>
)

export const DetailSleeves = () => (
    <DetailCategory url={GET_SLEEVES} title="Sleeves"/>
)

export const DetailBalls = () => (
    <DetailCategory url={GET_BALLS} title="Balls"/>
)

const ProductScreen = ({navigation, props}) => (
    <NativeBaseProvider>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <ListGenderProducts title="Men"
                                    image="https://images.unsplash.com/photo-1475293831741-1b69e67acb72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                                    screenName="Men"
                />
                <ListGenderProducts title="Women"
                                    image="https://images.unsplash.com/photo-1617372591452-9adad3e8070e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=jose-mizrahi-OBbrmyAh-KI-unsplash.jpg"
                                    screenName="Women"
                />
                <ListGenderProducts title="Kids"
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
        <ProductStack.Navigator screenOptions={{
            headerShown: false,
            contentStyle: {
                backgroundColor: 'white',
            },
        }}>
            <ProductStack.Screen name="Product" component={ProductScreen}/>
            <ProductStack.Screen name="Men" component={DetailMens}/>
            <ProductStack.Screen name="Women" component={DetailWomens}/>
            <ProductStack.Screen name="Kids" component={DetailKids}/>
            <ProductStack.Screen name="DetailProduct" component ={DetailProduct} />
        </ProductStack.Navigator>
    );
}

