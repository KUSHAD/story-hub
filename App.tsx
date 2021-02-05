import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image } from "react-native";
import { ReadBookScreen, WriteBookDetailsScreen } from "./Screens";
import { BottomTabParams } from "./types";
const Tab = createMaterialBottomTabNavigator<BottomTabParams>();
export default function App() {
	return (
		<>
			<StatusBar style='auto' />
			<NavigationContainer>
				<Tab.Navigator
					sceneAnimationEnabled
					shifting
					barStyle={{
						backgroundColor: "#fff",
					}}
					initialRouteName='Write'
					labeled>
					<Tab.Screen
						name='Write'
						options={{
							tabBarIcon: () => (
								<Image
									source={require("./assets/write.png")}
									style={{
										width: 40,
										height: 40,
									}}
								/>
							),
							tabBarLabel: "",
						}}
						component={WriteBookDetailsScreen}
					/>
					<Tab.Screen
						name='Read'
						options={{
							tabBarIcon: () => (
								<Image
									source={require("./assets/read.png")}
									style={{
										width: 40,
										height: 40,
									}}
								/>
							),
							tabBarLabel: "",
						}}
						component={ReadBookScreen}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</>
	);
}
