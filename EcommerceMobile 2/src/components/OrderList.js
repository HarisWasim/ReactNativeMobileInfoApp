import { ScrollView, RefreshControl } from 'react-native'
import React, { Component } from 'react';
import axios from 'axios';
import MissingOrderDetail from './MissingOrderDetail';


export default class OrderList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            response: [],
            refreshing: false,
            searchedResponse: [],
            renderSearch: false
        }
        this.initializeRefresh();
    }

    componentWillMount() {
        this.initializeRefresh();
    }

    componentWillReceiveProps({ searchedOrder }) {
        if (searchedOrder !== '') {
            let searchedResponse = [];
            this.state.response.map((orderItem) => {
                let orderId = orderItem.orderId;
                if (orderId.toString().substr(0, (searchedOrder.toString().length)) === searchedOrder.toString()) {
                    searchedResponse.push(orderItem);
                }
            })
            this.setState({
                searchedResponse: searchedResponse,
                renderSearch: true
            })
        } else{
            this.setState({ renderSearch: false })
        }
    }

    //run when the app is refreshing
    _onRefresh = () => {
        this.setState({ refreshing: true });
        axios.get('http://localhost:3000/response')
            .then((response) => {
                this.setState({ response: response.data });
                this.setState({ refreshing: false });
            }
            )
            .catch(error => console.log(error))
    }

    // runs in constructor and componentWillMount to prevent
    // loading symbol from showing up when not pulling down
    initializeRefresh = () => {
        axios.get('http://localhost:3000/response')
            .then((response) => {
                this.setState({ response: response.data });
            }
)
            .catch(error => console.log(error))
    }

    // show all orders in order list through mapping function
    renderOrders() {
        if (!this.state.renderSearch) {
            return (
                this.state.response.map(object =>
                    <MissingOrderDetail key={object.orderId} order={object} />
                )
            )
        } else {
            return (
                this.state.searchedResponse.map(object =>
                    <MissingOrderDetail key={object.orderId} order={object} />
                )
            )
        }
    }

    render() {
        return (
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                />
            }>
                {this.renderOrders()}
            </ScrollView>
        )
    };
}



// send request to server to obtain the most updated data
    // //runs when swipe down on screen
    // sendRequest() {
    //     this.setState({ refreshing: true });
    //     axios.get('http://localhost:3000/response')
    //         .then((response) => {
    //             this.setState({ response: response.data });
    //             this.setState({ refreshing: false });
    //         }
    //         )
    //         .catch(error => console.log(error))
    // }

/* COULD GO IN ComponentWillMount()
        
        when a new piece of data is received
        let newOrder = //new order
        let updatedList = this.state.response.concat(newOrder);
        this.setState(response: updatedList); 


        this.setState(
            {
                response: [
                    {
                        Date: "6/26/2018",
                        Time: "11:48:00",
                        timeOfDay: "PM",
                        EOM: "Missing",
                        routePlanner: "Missing",
                        orderId: 1753692,
                        storeNumber: "17-0249"
                    },
                    {
                        Date: "6/26/2018",
                        Time: "03:27:00",
                        timeOfDay: "PM",
                        EOM: "Missing",
                        routePlanner: "Missing",
                        orderId: 1751151,
                        storeNumber: "25-3031"
                    },
                    {
                        Date: "6/26/2018",
                        Time: "11:48:00",
                        timeOfDay: "PM",
                        EOM: "Missing",
                        routePlanner: "Missing",
                        orderId: 1753693,
                        storeNumber: "17-0249"
                    },
                    {
                        Date: "6/26/2018",
                        Time: "03:27:00",
                        timeOfDay: "PM",
                        EOM: "Missing",
                        routePlanner: "Missing",
                        orderId: 1751154,
                        storeNumber: "25-3031"
                    },
                    {
                        Date: "6/26/2018",
                        Time: "11:48:00",
                        timeOfDay: "PM",
                        EOM: "Missing",
                        routePlanner: "Missing",
                        orderId: 1753699,
                        storeNumber: "17-0249"
                    },
                    {
                        Date: "6/26/2018",
                        Time: "03:27:00",
                        timeOfDay: "PM",
                        EOM: "Missing",
                        routePlanner: "Missing",
                        orderId: 1751158,
                        storeNumber: "25-3031"
                    },
                    {
                        Date: "6/26/2018",
                        Time: "11:48:00",
                        timeOfDay: "PM",
                        EOM: "Missing",
                        routePlanner: "Missing",
                        orderId: 1753697,
                        storeNumber: "17-0249"
                    },
                    {
                        Date: "6/26/2018",
                        Time: "03:27:00",
                        timeOfDay: "PM",
                        EOM: "Missing",
                        routePlanner: "Missing",
                        orderId: 1751156,
                        storeNumber: "25-3031"
                    }
                ]
            }
        ) */