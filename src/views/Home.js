import {Button, Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Alert, Avatar, Container, Image, VStack} from 'native-base';
import * as React from 'react';
import {useCallback, useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import HomeCarousel from '../components/carousels/HomeCarousel';
import {Drawer} from 'react-native-paper';
import {stylesHome} from '../assets/Styles';
import {useNavigation} from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {
    DetailBackpacks, DetailBalls,
    DetailCaps,
    DetailHoodies,
    DetailJackets,
    DetailJerseys, DetailLeggings,
    DetailPants,
    DetailShorts, DetailSleeves, DetailSocks,
    DetailSweaters,
    DetailTshirts,
} from './Product';


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


const ItemThumbnail = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(props.urlCategory)}>
            <VStack>
                <Avatar size="md" style={stylesHome.thumbnail}
                        source={props.categoryImage}
                />
                <Text style={stylesHome.thumbnailText}>{props.categoryName}</Text>
            </VStack>
        </TouchableOpacity>
    );
};

const HomeScreen = ({navigation}) => {
    const [search, setSearch] = useState('');
    const [playing, setPlaying] = useState(false);

    const updateSearch = (search) => {
        setSearch(search);
    };

    const onStateChangeVideo = useCallback((state) => {
        if (state === 'ended') {
            setPlaying(false);
            Alert.alert('video has finished playing!');
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (
        <NativeBaseProvider>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={stylesHome.homeContainer}>
                    {/*<SearchBar*/}
                    {/*    inputStyle={{backgroundColor: '#f1f1f1'}}*/}
                    {/*    containerStyle={{*/}
                    {/*        backgroundColor: 'white',*/}
                    {/*        marginRight: 60,*/}
                    {/*        marginLeft: 60,*/}
                    {/*        marginTop: 20,*/}
                    {/*        marginBottom: 12,*/}
                    {/*        padding: 0,*/}
                    {/*        borderRadius: 10,*/}
                    {/*        borderBottomColor: 'transparent',*/}
                    {/*        borderTopColor: 'transparent',*/}
                    {/*    }}*/}
                    {/*    leftIconContainerStyle={{backgroundColor: '#f1f1f1'}}*/}
                    {/*    inputContainerStyle={{backgroundColor: '#f1f1f1'}}*/}
                    {/*    lightTheme={true}*/}
                    {/*    placeholder="Search Products..."*/}
                    {/*    onChangeText={updateSearch}*/}
                    {/*    value={search}*/}
                    {/*    round={true}*/}
                    {/*/>*/}
                    <Image style={{width: 150, height: 100, alignSelf: 'center'}} alt="logo"
                           source={require('../assets/images/logo.png')}/>
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
                                <ItemThumbnail urlCategory="Tshirt"
                                               categoryName="Tshirt"
                                               categoryImage={require('../assets/images/thumbnail/tshirt.jpg')}
                                />
                                <ItemThumbnail urlCategory="Jersey"
                                               categoryName="Jersey"
                                               categoryImage={require('../assets/images/thumbnail/jersey.jpg')}
                                />
                                <ItemThumbnail urlCategory="Jacket"
                                               categoryName="Jacket"
                                               categoryImage={require('../assets/images/thumbnail/jacket.jpg')}
                                />
                                <ItemThumbnail urlCategory="Sweater"
                                               categoryName="Sweater"
                                               categoryImage={require('../assets/images/thumbnail/sweater.jpg')}
                                />
                                <ItemThumbnail urlCategory="Hoodie"
                                               categoryName="Hoodie"
                                               categoryImage={require('../assets/images/thumbnail/hoodie.jpg')}
                                />
                                <ItemThumbnail urlCategory="Shorts"
                                               categoryName="Shorts"
                                               categoryImage={require('../assets/images/thumbnail/shorts.jpg')}
                                />
                                <ItemThumbnail urlCategory="Pants"
                                               categoryName="Pants"
                                               categoryImage={require('../assets/images/thumbnail/pants.jpg')}
                                />
                                <ItemThumbnail urlCategory="Legging"
                                               categoryName="legging"
                                               categoryImage={require('../assets/images/thumbnail/legging.jpg')}
                                />
                                <ItemThumbnail urlCategory="Socks"
                                               categoryName="Socks"
                                               categoryImage={require('../assets/images/thumbnail/socks.jpg')}
                                />
                                <ItemThumbnail urlCategory="Cap"
                                               categoryName="Cap"
                                               categoryImage={require('../assets/images/thumbnail/cap.jpg')}
                                />
                                <ItemThumbnail urlCategory="Backpack"
                                               categoryName="Backpack"
                                               categoryImage={require('../assets/images/thumbnail/backpack.jpg')}
                                />
                                <ItemThumbnail urlCategory="Sleeve"
                                               categoryName="Sleeve"
                                               categoryImage={require('../assets/images/thumbnail/sleeve.jpg')}
                                />
                                <ItemThumbnail urlCategory="Ball"
                                               categoryName="Ball"
                                               categoryImage={require('../assets/images/thumbnail/ball.jpg')}
                                />
                            </ScrollView>
                        </View>
                    </View>
                    <Text style={stylesHome.textNewArrivals}>
                        NEW ARRIVALS !
                    </Text>
                    <HomeCarousel/>
                    <Text style={stylesHome.textWinter}>Winter Collection</Text>
                    <View style={{paddingHorizontal: 20}}>
                        <YoutubePlayer
                            height={220}
                            play={playing}
                            videoId={'1mm5a7fFnaw'}
                            onChangeState={onStateChangeVideo}
                        />
                    </View>

                    <Text style={stylesHome.textSummer}>Summer Collection</Text>
                    <View style={{paddingHorizontal: 20}}>
                        <YoutubePlayer
                            height={220}
                            play={playing}
                            videoId={'3LMbSOku-Xc'}
                            onChangeState={onStateChangeVideo}
                        />
                    </View>

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
            contentStyle: {
                backgroundColor: 'white',
            },
        }}>
            <HomeStack.Screen name="Product" component={HomeScreen}/>
            <HomeStack.Screen name="Tshirt" component={DetailTshirts}/>
            <HomeStack.Screen name="Jersey" component={DetailJerseys}/>
            <HomeStack.Screen name="Jacket" component={DetailJackets}/>
            <HomeStack.Screen name="Sweater" component={DetailSweaters}/>
            <HomeStack.Screen name="Hoodie" component={DetailHoodies}/>
            <HomeStack.Screen name="Shorts" component={DetailShorts}/>
            <HomeStack.Screen name="Pants" component={DetailPants}/>
            <HomeStack.Screen name="Legging" component={DetailLeggings}/>
            <HomeStack.Screen name="Socks" component={DetailSocks}/>
            <HomeStack.Screen name="Cap" component={DetailCaps}/>
            <HomeStack.Screen name="Backpack" component={DetailBackpacks}/>
            <HomeStack.Screen name="Sleeve" component={DetailSleeves}/>
            <HomeStack.Screen name="Ball" component={DetailBalls}/>

        </HomeStack.Navigator>
    );
}
