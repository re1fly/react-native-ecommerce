import {Button, Text, View, StyleSheet, ScrollView} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Avatar, Container, Image, VStack} from 'native-base';
import * as React from 'react';
import {useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import HomeCarousel from '../components/carousels/HomeCarousel';
import {Drawer} from 'react-native-paper';
import {stylesHome} from '../assets/Styles';



const DrawerItem = () => {
    const [active, setActive] = React.useState('');
    return (
        <Drawer.Section title="Some title">
            <Drawer.Item
                label="First Item"
                active={active === 'first'}
                onPress={() => setActive('first')}
            />
            <Drawer.Item
                label="Second Item"
                active={active === 'second'}
                onPress={() => setActive('second')}
            />
        </Drawer.Section>
    );
};


const HomeScreen = ({navigation}) => {
    const [search, setSearch] = useState('');

    const updateSearch = (search) => {
        setSearch(search);
    };
    return (
        <NativeBaseProvider>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: '20%'}}>
                <View style={stylesHome.homeContainer}>
                    <SearchBar
                        inputStyle={{backgroundColor: 'white'}}
                        containerStyle={{
                            backgroundColor: 'white',
                            marginRight: 30,
                            marginLeft: 30,
                            marginTop: 20,
                            marginBottom: 12,
                            padding: 0,
                            borderRadius: 10,
                            borderBottomColor: 'transparent',
                            borderTopColor: 'transparent',
                        }}
                        leftIconContainerStyle={{backgroundColor: 'white'}}
                        inputContainerStyle={{backgroundColor: 'white'}}
                        lightTheme={true}
                        placeholder="Search Products..."
                        onChangeText={updateSearch}
                        value={search}
                        round={true}
                    />
                    <View style={stylesHome.categoriesContainer}>
                        <View style={stylesHome.categories}>
                            <Text>Categories</Text>
                        </View>
                        <View style={stylesHome.categories2}>
                            <ScrollView horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={{
                                            alignItems: 'center',
                                            paddingStart: 5,
                                            paddingEnd: 5,
                                        }}
                            >
                                <VStack>
                                    <Avatar size="md" style={stylesHome.thumbnail}
                                            source={require('../assets/images/thumbnail/men.jpg')}
                                    />
                                </VStack>
                                <VStack onPress={() => console.warn('nice')}>
                                    <Avatar size="md" style={stylesHome.thumbnail}
                                            source={require('../assets/images/thumbnail/women.jpg')}/>
                                </VStack>
                                <VStack>
                                    <Avatar size="md" style={stylesHome.thumbnail}
                                            source={require('../assets/images/thumbnail/kids.jpg')}/>
                                </VStack>
                                <VStack>
                                    <Avatar size="md" style={stylesHome.thumbnail}
                                            source={require('../assets/images/thumbnail/top.jpg')}/>
                                </VStack>
                                <VStack>
                                    <Avatar size="md" style={stylesHome.thumbnail}
                                            source={require('../assets/images/thumbnail/bottom.jpg')}/>
                                </VStack>
                                <VStack>
                                    <Avatar size="md" style={stylesHome.thumbnail}
                                            source={require('../assets/images/thumbnail/acc.jpg')}/>
                                </VStack>

                            </ScrollView>
                        </View>
                    </View>
                    <Text style={stylesHome.textNewArrivals}>
                        NEW ARRIVALS !
                    </Text>
                    <HomeCarousel/>
                </View>
            </ScrollView>
        </NativeBaseProvider>

    );
};


const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false,
            // contentStyle: {backgroundColor: 'white'},
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen}/>
        </HomeStack.Navigator>
    );
}
