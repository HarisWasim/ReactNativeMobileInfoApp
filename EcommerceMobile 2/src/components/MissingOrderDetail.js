import React from 'react';
import { Text, View } from 'react-native';
import CardSection from './CardSection.js';
import Card from './Card.js'

const MissingOrderDetail = ({ order }) => {
    const { Date,
        timeOfDay,
        Time,
        EOM,
        routePlanner,
        orderId,
        storeNumber } = order;
    const { isolateContainers } = styles;
    return (
        <Card>
            <CardSection>
                <View style={isolateContainers}>
                    <View>
                        <Text>
                            {Date}
                        </Text>
                    </View>
                    <View>
                        <Text>
                            {`${Time} ${timeOfDay}`}
                        </Text>
                    </View>
                </View>
            </CardSection>

            <CardSection>
                <View style={isolateContainers}>
                    <Text>
                        {`EOM: ${EOM}`}
                    </Text>
                    <Text>
                        {`Route Planner: ${routePlanner}`}
                    </Text>
                </View>
            </CardSection>

            <CardSection>
                <View style={isolateContainers}>
                    <Text>
                        {`Order ID: ${orderId}`}
                    </Text>
                    <Text>
                        {`Store Number: ${storeNumber}`}
                    </Text>
                </View>
            </CardSection>
        </Card>
    )
}

const styles = {
    isolateContainers: {
        display: 'flex',
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 20
    },
    textBold: {
        fontWeight: 'bold'
    }
}


export default MissingOrderDetail;