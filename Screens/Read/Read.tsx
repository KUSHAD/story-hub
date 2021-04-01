import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ReadScreenStackNavParams } from "../../types";
import NotFound from "../NotFound";
import Stories from "./Stories";
import Story from "./Story";
const Stack = createStackNavigator<ReadScreenStackNavParams>();
const Read = () => {
	return (
		<Stack.Navigator initialRouteName='Stories'>
			<Stack.Screen name='Stories' component={Stories} />
			<Stack.Screen name='Story' component={Story} />
			<Stack.Screen name='NotFound' component={NotFound} />
		</Stack.Navigator>
	);
};

export default Read;
