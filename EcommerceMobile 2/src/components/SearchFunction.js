import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import OrderList from './OrderList'

export default class SearchFunction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            outputArrowDecision: this.props.outputArrowDecision,
            isArrow: this.props.isArrow
        };
    }

    componentWillReceiveProps({ isArrow }) {
        this.setState({
            isArrow: isArrow
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ padding: 10 }}>
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Search By OrderID: "
                        onChangeText={(text) => this.setState({ text })}
                    />
                    <Text
                        style={{
                            paddingTop: 10,
                            fontSize: 30
                        }}>
                        {`Order ID: ${this.state.text}`}
                    </Text>
                </View>
                <OrderList searchedOrder={this.state.text} outputArrowDecision={this.state.outputArrowDecision} isArrow={this.state.isArrow} />
            </View>
        )
    }
}