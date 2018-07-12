import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Entypo from './react-native-vector-icons/Entypo'
const chevron = (<Entypo name="chevron-thin-left" size={20} color="white" />)

const BackArrow = ({ isArrow, outputArrowDecision }) => {
    const { backArrow } = styles;
    if (isArrow) {
        return (
            <TouchableOpacity style={backArrow} onPress={() => {
                outputArrowDecision(!isArrow)
            }}>
                <View>
                    {chevron}
                </View>
            </TouchableOpacity>
        )
    } else {
        return (
            <View style={backArrow}>
            </View>
        )
    }

}

const styles = {
    backArrow: {
        paddingLeft: 10,
        alignSelf: "flex-start",
        flex: 1
    }
}

export default BackArrow