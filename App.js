import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from './src/components/layouts/BottomNavigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <BottomNavigator/>
            </NavigationContainer>
        </Provider>
    );
};



