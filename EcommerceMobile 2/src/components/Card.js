import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    const { containerStyle } = styles
    return (
        <View style={containerStyle}>
            {props.children}
        </View >
    )
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        display: 'flex',
        elevation: 1,
        flexDirection: 'row',
        flex: 1,
        minHeight: 100,
        justifyContent: "space-between",
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    }
}

export default Card