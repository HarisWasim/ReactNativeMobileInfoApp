import React from 'react';
import { Text, View } from 'react-native';

const MissingOrder = ({ order }) => {
    return (
        <View>
            <Text>
                {order}
            </Text>
        </View>
    )
}

export default MissingOrder;