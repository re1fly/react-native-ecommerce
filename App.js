import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from './src/components/layouts/BottomNavigator';
import {Header} from 'react-native-elements';
import {Drawer} from 'react-native-paper';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';

const DrawerComponent = () => {
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

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                {/*<Header*/}
                {/*    barStyle="dark-content"*/}
                {/*    containerStyle={{*/}
                {/*        justifyContent: 'space-around',*/}
                {/*    }}*/}
                {/*    leftComponent={{icon: 'menu', color: '#fff', iconStyle: {color: '#fff'}, onPress: () => {*/}
                {/*            return (<DrawerComponent/>);*/}
                {/*        }}}*/}
                {/*    centerComponent={{text: 'SportZ', style: {color: '#fff'}}}*/}
                {/*    rightComponent={{icon: 'home', color: '#fff'}}*/}
                {/*>*/}
                {/*</Header>*/}
                <BottomNavigator/>
            </NavigationContainer>
        </Provider>
    );
};



