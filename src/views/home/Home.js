import {Button, Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Alert, Avatar, Container, Image, VStack} from 'native-base';
import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import HomeCarousel from '../../components/carousels/HomeCarousel';
import {stylesHome} from '../../assets/Styles';
import {useNavigation} from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {
    DetailBackpacks,
    DetailBalls,
    DetailCaps,
    DetailHoodies,
    DetailJackets,
    DetailJerseys,
    DetailLeggings,
    DetailPants,
    DetailShorts,
    DetailSleeves,
    DetailSocks,
    DetailSweaters,
    DetailTshirts,
} from '../products/Product';
import {
    TourGuideProvider,
    TourGuideZone,
    useTourGuideController,
    TourGuideZoneByPosition,
} from 'rn-tourguide';

const HomeScreen = ({navigation}) => {
    const [search, setSearch] = useState('');
    const [playing, setPlaying] = useState(false);
    const {
        canStart, // a boolean indicate if you can start tour guide
        start, // a function to start the tourguide
        eventEmitter,
        stop,// an object for listening some events
    } = useTourGuideController();

    useEffect(() => {
        if (canStart) {
            start();
        }
    }, [canStart]); // 👈 don't miss it!

    const handleOnStart = () => console.log('start');
    const handleOnStop = () => console.log('stop');
    const handleOnStepChange = () => console.log(`stepChange`);

    useEffect(() => {
        eventEmitter.on('start', handleOnStart);
        eventEmitter.on('stop', handleOnStop);
        eventEmitter.on('stepChange', handleOnStepChange);

        return () => {
            eventEmitter.off('start', handleOnStart);
            eventEmitter.off('stop', handleOnStop);
            eventEmitter.off('stepChange', handleOnStepChange);
        };
    }, []);

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

    return (
        <NativeBaseProvider>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={stylesHome.homeContainer}>
                    <Image style={{width: 130, height: 90, alignSelf: 'center'}} alt="logo"
                           source={require('../../assets/images/logo.png')}/>
                    <TourGuideZone
                        zone={1}
                        shape={'rectangle_and_keep'}
                        isTourGuide
                        text={'Swipe left to see other Sub Category'}
                        left={6}
                        style={{height: 130, marginTop: 12}}
                    >
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
                                                   categoryImage={require('../../assets/images/thumbnail/tshirt.jpg')}/>
                                    <ItemThumbnail urlCategory="Jersey"
                                                   categoryName="Jersey"
                                                   categoryImage={require('../../assets/images/thumbnail/jersey.jpg')}/>
                                    <ItemThumbnail urlCategory="Jacket"
                                                   categoryName="Jacket"
                                                   categoryImage={require('../../assets/images/thumbnail/jacket.jpg')}/>
                                    <ItemThumbnail urlCategory="Sweater"
                                                   categoryName="Sweater"
                                                   categoryImage={require('../../assets/images/thumbnail/sweater.jpg')}/>
                                    <ItemThumbnail urlCategory="Hoodie"
                                                   categoryName="Hoodie"
                                                   categoryImage={require('../../assets/images/thumbnail/hoodie.jpg')}/>
                                    <ItemThumbnail urlCategory="Shorts"
                                                   categoryName="Shorts"
                                                   categoryImage={require('../../assets/images/thumbnail/shorts.jpg')}/>
                                    <ItemThumbnail urlCategory="Pants"
                                                   categoryName="Pants"
                                                   categoryImage={require('../../assets/images/thumbnail/pants.jpg')}/>
                                    <ItemThumbnail urlCategory="Legging"
                                                   categoryName="legging"
                                                   categoryImage={require('../../assets/images/thumbnail/legging.jpg')}/>
                                    <ItemThumbnail urlCategory="Socks"
                                                   categoryName="Socks"
                                                   categoryImage={require('../../assets/images/thumbnail/socks.jpg')}/>
                                    <ItemThumbnail urlCategory="Cap"
                                                   categoryName="Cap"
                                                   categoryImage={require('../../assets/images/thumbnail/cap.jpg')}/>
                                    <ItemThumbnail urlCategory="Backpack"
                                                   categoryName="Backpack"
                                                   categoryImage={require('../../assets/images/thumbnail/backpack.jpg')}/>
                                    <ItemThumbnail urlCategory="Sleeve"
                                                   categoryName="Sleeve"
                                                   categoryImage={require('../../assets/images/thumbnail/sleeve.jpg')}/>
                                    <ItemThumbnail urlCategory="Ball"
                                                   categoryName="Ball"
                                                   categoryImage={require('../../assets/images/thumbnail/ball.jpg')}/>
                                </ScrollView>
                            </View>
                        </View>
                    </TourGuideZone>

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
                    {/*<TourGuideZoneByPosition*/}
                    {/*    zone={3}*/}
                    {/*    shape={'rectangle_and_keep'}*/}
                    {/*    isTourGuide*/}
                    {/*    labels={'asuuuu'}*/}
                    {/*    top={150}*/}
                    {/*    left={6}*/}
                    {/*    width={380}*/}
                    {/*    height={100}*/}
                    {/*/>*/}
                    {/*<TourGuideZoneByPosition*/}
                    {/*    zone={2}*/}
                    {/*    shape={'circle'}*/}
                    {/*    isTourGuide*/}
                    {/*    top={250}*/}
                    {/*    left={46}*/}
                    {/*    width={300}*/}
                    {/*    height={300}*/}
                    {/*/>*/}
                    {/*<TourGuideZoneByPosition*/}
                    {/*    zone={1}*/}
                    {/*    shape={'rectangle'}*/}
                    {/*    isTourGuide*/}
                    {/*    top={510}*/}
                    {/*    width={390}*/}
                    {/*    height={240}*/}
                    {/*/>*/}
                </View>
            </ScrollView>
        </NativeBaseProvider>
    );
};


const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
    return (
        <TourGuideProvider {...{
            backdropColor: 'rgba(0, 0, 0, 0.6)',
            labels: {
                finish: 'Continue to shop',
            },
        }}>
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
        </TourGuideProvider>
    );
}
