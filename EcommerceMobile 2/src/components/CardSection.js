import React from 'react';
import { View } from 'react-native';

const CardSection = ({children}) => {
    const { containerStyle } = styles;

    return (
        <View style={containerStyle}>
            {children}
        </View>
    );
}

const styles = {
    containerStyle: {
        position: 'relative',
    }
};

export default CardSection;