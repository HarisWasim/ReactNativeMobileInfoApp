import React from 'react';
import { View, Text } from 'react-native'
import Card from './Card';
import CardSection from './CardSection'


const MoreDetails = ({ order }) => {
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
        //can create objects with column title, object.title value, then return all by 
        //running .map function on array of 6
        <Card style={{
            minHeight: 200
        }}>
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

                <View style={datePositioningStyle}>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={columnHeaderStyle}>
                            {`EOM`}
                        </Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={storeIdStyle}>
                            {`${EOM.toUpperCase()}`}
                        </Text>
                    </View>
                </View>

                <View style={datePositioningStyle}>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={columnHeaderStyle}>
                            {`Optimization Time`}
                        </Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={storeIdStyle}>
                            {`${OptimizationTime}`}
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

                <View style={datePositioningStyle}>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={columnHeaderStyle}>
                            {`RoutePlanner`}
                        </Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={storeIdStyle}>
                            {`${RoutePlanner.toUpperCase()}`}
                        </Text>
                    </View>
                </View>

                 <View style={datePositioningStyle}>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={columnHeaderStyle}>
                            {`Waving Time`}
                        </Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={storeIdStyle}>
                            {`${WavingTime}`}
                        </Text>
                    </View>
                </View>
            </CardSection>

            <CardSection>
                <View style={isolateContainers}>
                    <View style={{
                        paddingBottom: 20
                    }}>
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

        </Card>
    )
}


const styles = {
    isolateContainers: {
        display: 'flex',
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        height: 30,
        paddingTop: 20
        
    },
    datePositioningStyle: {
        display: 'flex',
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        height: 100
    },
    storeIdStyle: {
        fontSize: 24,
        fontWeight: '600',
        justifyContent: 'center'
    },
    dateStyle: {
        fontSize: 16,
        paddingRight: 20
    },
    columnHeaderStyle: {
        color: "#F05C5C",
        fontWeight: '800'
    }
}


export default MoreDetails;