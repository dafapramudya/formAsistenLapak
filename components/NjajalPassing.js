import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default class NjajalPassing extends Component{
	render(){
		return(
			<View>
				<Text>{this.props.navigation.state.params.data.marketName}</Text>
				<Text>{this.props.navigation.state.params.data.slogan}</Text>
				<Text>{this.props.navigation.state.params.data.description}</Text>
				<Text>{this.props.navigation.state.params.data.fullAddress}</Text>
				<Text>{this.props.navigation.state.params.data.city}</Text>
				<Text>{this.props.navigation.state.params.data.postCode}</Text>
				<Text>{this.props.navigation.state.params.data.website}</Text>
				<Text>{this.props.navigation.state.params.data.phone}</Text>
				<Text>{this.props.navigation.state.params.data.email}</Text>
				<Text>{this.props.navigation.state.params.data.bankName}</Text>

				<TouchableOpacity onPress={()=> this.props.navigation.navigate("RouteTambahLapakProduk")}>
					<Text>Go to Produk</Text>
				</TouchableOpacity>
			</View>
		)
	}
}