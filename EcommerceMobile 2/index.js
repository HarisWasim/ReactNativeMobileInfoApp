import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/Header';
import OrderList from './src/components/OrderList';
import SearchFunction from './src/components/SearchFunction';

const App = () => {
    return (
        <View style={{flex: 1}}>
            <Header />
            <SearchFunction />
        </View>
    )
}


AppRegistry.registerComponent('EcommerceMobile', () => App);
