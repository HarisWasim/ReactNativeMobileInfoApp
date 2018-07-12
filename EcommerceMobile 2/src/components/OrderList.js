import { ScrollView, RefreshControl, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { Component } from 'react';
import axios from 'axios';
import MissingOrderDetail from './MissingOrderDetail';
import MoreDetails from './MoreDetails'


export default class OrderList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            response: [],
            refreshing: false,
            searchedResponse: [],
            clickedResponse: [],
            renderSearch: false,
            outputArrowDecision: this.props.outputArrowDecision,
            isArrow: this.props.isArrow,
            clicked: false,
            loading: true
        }
        this.initializeRefresh();
    }

    // runs in constructor and componentWillMount to prevent
    // loading symbol from showing up when not pulling down
    initializeRefresh = () => {
        axios.get('http://localhost:8888/response')
            .then((response) => {
                this.setState({ 
                response: response.data,
                loading: false });
            }
            )
            .catch(error => console.log(error))
    }

    //run when the app is refreshing
    _onRefresh = () => {
        this.setState({ refreshing: true });
        axios.get('http://localhost:8888/response')
            .then((response) => {
                this.setState({ response: response.data });
                this.setState({ refreshing: false });
            }
            )
            .catch(error => console.log(error))
    }

    // if something is searched in searched up
    componentWillReceiveProps({ searchedOrder, isArrow }) {
        if (!isArrow) {
            this.setState({
                clicked: false
            })
        }
        this.setState({
            isArrow: isArrow
        })
        if (searchedOrder !== '') {
            let searchedResponse = [];
            this.state.response.map((orderItem) => {
                let orderId = orderItem.OrderID;
                if (orderId.toString().substr(0, (searchedOrder.toString().length)) === searchedOrder.toString()) {
                    searchedResponse.push(orderItem);
                }
            })
            this.setState({
                searchedResponse: searchedResponse,
                renderSearch: true,
                isArrow: isArrow
            })
        } else if (searchedOrder === '' && !this.state.clicked) {
            this.setState({
                renderSearch: false,
                isArrow: isArrow
            })
        }
    }

    //order item clicked
    moreDetails = (order) => {
        //clicked for more info and now arrow is showing
        if (!this.state.isArrow) {
            let clickedObject = [order];
            this.state.outputArrowDecision(true);
            this.setState({
                clickedResponse: clickedObject,
                clicked: true
            })
        }
    }



    // show all orders in order list through mapping function
    renderOrders() {
        // console.log("Is there an arrow: " + this.state.isArrow)
        // console.log("Is there a render search: " + this.state.renderSearch)
        // console.log(" Is ther a clicked: " + this.state.clicked)
        if (!this.state.isArrow && !this.state.renderSearch && !this.state.clicked) {
            return (
                this.state.response.map(object =>
                    <TouchableOpacity onPress={() => this.moreDetails(object)} key={object.OrderID}>
                        <MissingOrderDetail key={object.OrderID} order={object} />
                    </TouchableOpacity>
                )
            )
        } else if (this.state.renderSearch && !this.state.clicked) {
            return (
                this.state.searchedResponse.map(object =>
                    <TouchableOpacity onPress={() => this.moreDetails(object)} key={object.OrderID}>
                        <MissingOrderDetail key={object.OrderID} order={object} />
                    </TouchableOpacity>
                )
            )
        } // make a new component that would be a child for this component to show more info about this object
        else if (this.state.isArrow && this.state.clicked) {
            return (this.state.clickedResponse.map(object =>
                <TouchableOpacity onPress={() => this.moreDetails(object)} key={object.OrderID}>
                    <MoreDetails key={object.OrderID} order={object} />
                </TouchableOpacity>
            )
            )
        }
    }

    render() {
        // console.log(`searchedResponse: ${this.state.searchedResponse}`)
        // console.log(`renderSearch: ${this.state.renderSearch}`)
        // console.log(`clicked: ${this.state.clicked}`)
        // console.log(`clickedResponse: ${this.state.clickedResponse}`)
        return (
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                />
            }>
            {this.state.loading && !this.state.refreshing ? <ActivityIndicator size="large" color="black" /> : this.renderOrders()}
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