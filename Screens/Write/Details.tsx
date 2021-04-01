import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { MainWriteScreenStackNavigatorParams } from "../../types";
import NotFound from "../NotFound";
import Fill from "./Fill";
import FinalView from "./FinalView";
import Write from "./Write";

const Stack = createStackNavigator<MainWriteScreenStackNavigatorParams>();
const Details = () => {
	return (
		<Stack.Navigator initialRouteName='Fill'>
			<Stack.Screen
				component={Fill}
				name='Fill'
				options={{
					headerTitle: "Fill Your Story Details",
					title: "Fill Your Story Details",
					animationEnabled: true,
				}}
			/>
			<Stack.Screen
				component={Write}
				name='Write'
				options={{
					headerTitle: "Write Your Story",
					title: "Write Your Story",
					animationEnabled: true,
				}}
			/>
			<Stack.Screen
				component={FinalView}
				name='FinalView'
				options={{
					animationEnabled: true,
					title: "View Your Masterpiece",
					headerTitle: "View Your Masterpiece",
				}}
			/>
			<Stack.Screen name='NotFound' component={NotFound} />
		</Stack.Navigator>
	);
};

export default Details;
