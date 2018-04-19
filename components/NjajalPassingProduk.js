import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default class NjajalPassingProduk extends Component{
	render(){
		return(
			<View>
				<Text>{this.props.navigation.state.params.data.productName}</Text>
				<Text>{this.props.navigation.state.params.data.price}</Text>
				<Text>{this.props.navigation.state.params.data.request}</Text>
				<Text>{this.props.navigation.state.params.data.descProduct}</Text>
				<Text>{this.props.navigation.state.params.data.weight}</Text>
				<Text>{this.props.navigation.state.params.data.time}</Text>
			</View>
		)
	}
}