import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import firebase from "firebase";
import React from "react";
import { ActivityIndicator, Image } from "react-native";
import linking from "./linking";
import { ReadBookScreen, WriteBookDetailsScreen } from "./Screens";
import Login from "./Screens/Auth/Login.js";
import { BottomTabParams } from "./types";
const Tab = createMaterialBottomTabNavigator<BottomTabParams>();
const Stack = createStackNavigator();
export default class App extends React.Component {
	constructor(props: any) {
		super(props);

		this.state = {
			loaded: false,
		};
	}
	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if (!user) {
				this.setState({
					loaded: true,
					loggedIn: false,
				});
			} else if (user) {
				this.setState({
					loaded: true,
					loggedIn: true,
				});
			}
		});
	}
	render() {
		if (!this.state.loaded) {
			return <ActivityIndicator size='large' color='red' />;
		}
		return (
			<>
				<StatusBar style='auto' />
				<NavigationContainer linking={linking}>
					{this.state.loggedIn ? (
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
					) : (
						<Stack.Navigator>
							<Stack.Screen name='Login' component={Login} />
						</Stack.Navigator>
					)}
				</NavigationContainer>
			</>
		);
	}
}
