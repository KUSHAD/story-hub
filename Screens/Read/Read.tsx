import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Read = () => {
	return (
		<View style={Styles.container}>
			<Text>Read Screen</Text>
		</View>
	);
};

export default Read;

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
