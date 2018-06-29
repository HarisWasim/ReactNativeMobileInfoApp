import React from 'react';
import { Text, View } from 'react-native';


const Header = () => {
    const { styleHeader, textStyle } = styles;
    return (
        <View style={styleHeader}>
            <Text style={textStyle}>Missing Orders</Text>
        </View>
    );
}

const styles = {
    styleHeader: {
        backgroundColor: "#F05C5C",
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        paddingTop: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: 'white'
    }
};

export default Header