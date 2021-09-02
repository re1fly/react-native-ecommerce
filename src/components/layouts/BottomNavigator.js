import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CartStackScreen} from '../../views/Cart';
import HomeStackScreen from '../../views/Home';
import {ProductStackScreen} from '../../views/Product';
import Profile from '../../views/account/Profile';
import {StyleSheet} from 'react-native';


const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});
export default function BottomNavigator() {
    return (
        <Tab.Navigator
            initialRouteName={'HomeBar'}
            screenOptions={{
                headerShown: false,
                // tabBarStyle: {
                //     position: 'absolute',
                //     bottom: 10,
                //     left: 20,
                //     right: 20,
                //     elevation: 0,
                //     backgroundColor: '#FFFFFF',
                //     borderRadius: 20,
                //     height: 60,
                //     paddingBottom: 5,
                //     ...styles.shadow,
                // },
            }}
            // tabBarOptions={{
            //     showLabel: false,
            // }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen
                name="WomenProduct"
                component={ProductStackScreen}
                options={{
                    tabBarLabel: 'Products',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="layers" color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen
                name="CartScreen"
                component={CartStackScreen}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarBadge: 5,
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="cart" color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={size}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );


}