import {useNavigation} from '@react-navigation/native';
import {Button, Card, Title} from 'react-native-paper';
import {stylesProducts} from '../../assets/Styles';
import * as React from 'react';

export const ListGenderProducts = (props) => {
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
                        color="black"
                        labelStyle={{fontSize: 14, textTransform: 'capitalize', fontWeight: '700'}}
                        onPress={() => navigation.navigate(props.screenName)}
                        contentStyle={{flexDirection: 'row-reverse'}}
                >
                    See Products
                </Button>
            </Card.Actions>
        </Card>
    );
};
