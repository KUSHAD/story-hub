import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ReadScreenStackNavParams } from "../../types";
import Stories from "./Stories";
const Stack = createStackNavigator<ReadScreenStackNavParams>();
const Read = () => {
	return (
		<Stack.Navigator initialRouteName='Stories'>
			<Stack.Screen name='Stories' component={Stories} />
		</Stack.Navigator>
	);
};

export default Read;
