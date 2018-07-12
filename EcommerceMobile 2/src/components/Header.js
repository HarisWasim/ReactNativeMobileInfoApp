import React, { Component } from 'react';
import { Text, View } from 'react-native';
import BackArrow from './BackArrow'
import Entypo from './react-native-vector-icons/Entypo';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isArrow: this.props.isArrow,
            outputArrowDecision: this.props.outputArrowDecision
        }
    };
    componentWillReceiveProps({ isArrow }) {
        this.setState({
            isArrow: isArrow
        })
    }
    render() {
        return (
            <View style={
                {
                    backgroundColor: "#F05C5C",
                    height: 65,
                    paddingTop: 30,
                    alignItems: "center",
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    elevation: 2,
                    position: 'relative',
                    flexDirection: 'row'
                }
            }>
                <BackArrow isArrow={this.state.isArrow} outputArrowDecision={this.state.outputArrowDecision} />
                <View style={{
                    alignSelf: "baseline",
                    justifyContent: "center",
                    flex: 2.2
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: 'white',
                    }}>Missing Orders</Text>
                </View>
            </View>
        );
    }
}