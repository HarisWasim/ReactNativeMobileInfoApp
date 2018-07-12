import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import SearchFunction from './src/components/SearchFunction';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backArrow: false
        }
    }

    // callback function to pass to header to see if 
    // we should render back arrow
    getBackArrowBool = (arrowResult) => {
        this.setState({
            backArrow: arrowResult
        });
    }

    render() {
        // console.log(`INDEX Should we show back arrow? ${this.state.backArrow}`)
        return (
            <View style={{ flex: 1 }}>
                <Header isArrow={this.state.backArrow} outputArrowDecision={this.getBackArrowBool} />
                <SearchFunction outputArrowDecision={this.getBackArrowBool} isArrow={this.state.backArrow} />
            </View>
        )
    }
}


AppRegistry.registerComponent('EcommerceMobile', () => App);
