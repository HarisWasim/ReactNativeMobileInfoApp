import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import OrderList from './OrderList'

export default class SearchFunction extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{ padding: 10 }}>
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Search By OrderID: 1234567 "
                        onChangeText={(text) => this.setState({ text })}
                    />
                    <Text
                        style={{
                            paddingTop: 10,
                            fontSize: 30
                        }}>
                        {/* {this.state.text.split(' ').map((word) => word && '🍕').join(' ')} */}
                        {`Order ID: ${this.state.text}`}
                    </Text>
                </View>
                <OrderList searchedOrder={this.state.text} />
            </View>
        )
    }
}