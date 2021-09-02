import React, {Component} from 'react';

import {SliderBox} from 'react-native-image-slider-box';
import axios from 'axios';
import {GET_WOMEN_NEW_ARRIVALS, NGROK} from '../api/Url';

export default class WomenCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
        };
    }

    componentDidMount() {
        axios.get(GET_WOMEN_NEW_ARRIVALS).then(response => {
            const data = response.data.new_arrivals;

            data.map(item => {
                let urlImage = item.product_image;
                urlImage = urlImage.replace('localhost:8000', NGROK);
                this.setState({images: [...this.state.images, urlImage]});
            });
        });
    }

    render() {
        return (
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
                ImageComponentStyle={{borderRadius: 15, width: '100%', marginTop: 5}}
                imageLoadingColor="#000000"
            />
        );
    }
}
