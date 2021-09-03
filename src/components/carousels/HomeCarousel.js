import React, {Component} from 'react';

import {SliderBox} from 'react-native-image-slider-box';
import axios from 'axios';
import {GET_MEN_NEW_ARRIVALS, NGROK} from '../api/Url';
import {View} from 'native-base';

export default class HomeCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
        };
    }

    componentDidMount() {
        axios.get(GET_MEN_NEW_ARRIVALS).then(response => {
            const data = response.data.new_arrivals;
            data.map(item => {
                let urlImage = item.product_image;
                urlImage = urlImage.replace('localhost:8000', NGROK);
                this.setState({images: [...this.state.images, urlImage]});
            });
        });
    }

    componentWillUnmount() {
        this.setState({images: []});
    }

    render() {
        return (
            <View
                style={{
                    width: '90%',
                    height: 200,
                    marginTop: 5,
                    border: 5,
                    borderRadius: 25,
                    borderWidth: 2,
                    borderColor: 'black',
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f1f1f1'
                }}>
                <SliderBox
                    images={this.state.images}
                    sliderBoxHeight={200}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="#FFFFFF"
                    inactiveDotColor="#90A4AE"
                    paginationBoxVerticalPadding={20}
                    autoplay
                    circleLoop
                    resizeMethod={'resize'}
                    resizeMode={'contain'}
                    paginationBoxStyle={{
                        position: 'absolute',
                        bottom: 0,
                        padding: 0,
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        paddingVertical: 10,
                    }}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        padding: 0,
                        margin: 0,
                        backgroundColor: 'rgba(128, 128, 128, 0.92)',
                    }}
                    ImageComponentStyle={{width: '100%'}}
                    imageLoadingColor="#000000"
                />
            </View>

        );
    }
}
