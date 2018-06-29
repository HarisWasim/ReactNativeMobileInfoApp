import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/Header';
import OrderList from './src/components/OrderList';

const App = () => {
    return (
        <View style={{flex: 1}}>
            <Header />
            <OrderList />
        </View>
    )
}


AppRegistry.registerComponent('EcommerceMobile', () => App);
