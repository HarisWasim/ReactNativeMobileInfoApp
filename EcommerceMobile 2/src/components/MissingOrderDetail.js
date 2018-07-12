import React from 'react';
import { Text, View, onPress } from 'react-native';
import CardSection from './CardSection.js';
import Card from './Card.js';
import Entypo from './react-native-vector-icons/Entypo';

const chevron = (<Entypo name="chevron-thin-right" size={20} color="black" />)



const MissingOrderDetail = ({ order }) => {
    const {StoreNumber,
        OrderID,
        CreatedDate,
        CreatedTime,
        CreatedTimeOfDay,
        DeliveryTime,
        OptimizationTime,
        WavingTime,
        PCS,
        TMS,
        EOM,
        RoutePlanner} = order;
    const { isolateContainers,
        dateStyle,
        datePositioningStyle,
        storeIdStyle,
        columnHeaderStyle } = styles;
    return (
        <Card>
            <CardSection>
                <View style={datePositioningStyle}>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={columnHeaderStyle}>
                            {`Order ID`}
                        </Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={storeIdStyle}>
                            {`${OrderID}`}
                        </Text>
                    </View>
                </View>
            </CardSection>

            <CardSection>
                <View style={datePositioningStyle}>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={columnHeaderStyle}>
                            {`Store ID`}
                        </Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={storeIdStyle}>
                            {`${StoreNumber}`}
                        </Text>
                    </View>
                </View>
            </CardSection>

            <CardSection>
                <View style={isolateContainers}>
                    <View>
                        <Text style={dateStyle}>
                            {CreatedDate}
                        </Text>
                    </View>
                    <View>
                        <Text style={dateStyle}>
                            {`${CreatedTime} ${CreatedTimeOfDay}`}
                        </Text>
                    </View>
                </View>
            </CardSection>

            <CardSection>
                <View>
                    <View style={
                        {
                            paddingTop: 35,
                            paddingRight: 10
                        }
                    }>
                        {chevron}
                    </View>
                </View>

            </CardSection>

        </Card>
    )
}

const styles = {
    isolateContainers: {
        display: 'flex',
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        height: 30,
        paddingTop: 10,
        paddingBottom: 10
    },
    datePositioningStyle: {
        display: 'flex',
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        height: 30
    },
    storeIdStyle: {
        fontSize: 24,
        fontWeight: '600',
        justifyContent: 'center'
    },
    dateStyle: {
        fontSize: 16
    },
    columnHeaderStyle: {
        color: "#F05C5C",
        fontWeight: '800'
    }
}


export default MissingOrderDetail;