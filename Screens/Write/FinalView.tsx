import { useRoute } from "@react-navigation/core";
import Filter from "bad-words";
import React, { useEffect, useState } from "react";
import {
	Alert,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	ToastAndroid,
	TouchableOpacity,
	View,
} from "react-native";
import { firebaseFirestore, firebaseFirestoreTimeStamp } from "../../firebase";
import { WriteStoryFinalViewScreenParams } from "../../types";
const FinalView = (props: any) => {
	const [
		routerParams,
		setRouterParams,
	] = useState<WriteStoryFinalViewScreenParams>({});
	const router = useRoute();
	useEffect(() => {
		const filter = new Filter();
		const filteredBookContent = filter.clean(router.params.bookContent);
		const routerParams: WriteStoryFinalViewScreenParams = {
			authorName: router.params.authorName,
			bookTitle: router.params.storyTitle,
			bookContent: filteredBookContent,
		};
		setRouterParams(routerParams);
	}, [router]);
	const submitStory = () => {
		firebaseFirestore
			.collection("User-Stories")
			.add({
				author: routerParams.authorName,
				storyTitle: routerParams.bookTitle,
				storyContent: routerParams.bookContent,
				createdAt: firebaseFirestoreTimeStamp,
			})
			.then((data) => {
				console.log(`Data added succesfully . Data -> ${data}`);
				firebaseFirestore
					.collection("User-Stories")
					.doc(data.id)
					.update({
						id: data.id,
					})
					.then(() => {
						{
							Platform.OS === "web"
								? alert(
										`Succesfully Added Data . Your Data Has Been Succesfully Added To Our Server`
								  )
								: Platform.OS !== "android"
								? Alert.alert(
										"Succesfully Added Data",
										"Your Data Has Been Succesfully Added To Our Server"
								  )
								: ToastAndroid.show(
										`Succesfully Added Data. Your Data Has Been Succesfully Added To Our Server`,
										6000
								  );
						}
						props.navigation.navigate("Fill");
					})
					.catch((err) => {
						console.log(`Error Entering The Data . Error -> ${err.message}`);
						{
							Platform.OS === "web"
								? alert(
										`Error !! There Has Been An Error Entering Your Content. Error - ${err.message}`
								  )
								: Platform.OS !== "android"
								? Alert.alert(
										"Error !!",
										`There Has Been An Error Entering Your Content. Error - ${err.message}`
								  )
								: ToastAndroid.show(
										`Error !!.There Has Been An Error Entering Your Content. Error - ${err.message}`,
										6000
								  );
						}
					});
				{
					Platform.OS === "web"
						? alert(
								`Succesfully Added Data . Your Data Has Been Succesfully Added To Our Server`
						  )
						: Platform.OS !== "android"
						? Alert.alert(
								"Succesfully Added Data",
								"Your Data Has Been Succesfully Added To Our Server"
						  )
						: ToastAndroid.show(
								`Succesfully Added Data. Your Data Has Been Succesfully Added To Our Server`,
								6000
						  );
				}
				props.navigation.navigate("Fill");
			})
			.catch((err) => {
				console.log(`Error Entering The Data . Error -> ${err.message}`);
				{
					Platform.OS === "web"
						? alert(
								`Error !! There Has Been An Error Entering Your Content. Error - ${err.message}`
						  )
						: Platform.OS !== "android"
						? Alert.alert(
								"Error !!",
								`There Has Been An Error Entering Your Content. Error - ${err.message}`
						  )
						: ToastAndroid.show(
								`Error !!.There Has Been An Error Entering Your Content. Error - ${err.message}`,
								ToastAndroid.SHORT
						  );
				}
			});
	};
	return (
		<ScrollView scrollsToTop>
			<View style={Styles.container}>
				<View style={Styles.innerContainer}>
					<View style={Styles.routerPropsContainer}>
						<View style={Styles.routerPropsContainerItem}>
							<Text selectable selectionColor='#10a3c4'>
								Author Name :- {routerParams.authorName}
							</Text>
						</View>
						<View style={Styles.routerPropsContainerItem}>
							<Text selectable selectionColor='#10a3c4'>
								Book Title :- {routerParams.bookTitle}
							</Text>
						</View>
						<View>
							<Text selectable selectionColor='#10a3c4'>
								Book Content :- {routerParams.bookContent}
							</Text>
						</View>
					</View>
				</View>
				<TouchableOpacity onPress={submitStory} style={Styles.touchable}>
					<Text style={Styles.touchableText}>Submit Your Story</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default FinalView;

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	innerContainer: {
		width: "80%",
	},
	routerPropsContainer: {
		borderWidth: 2,
		borderRadius: 8,
	},
	routerPropsContainerItem: {
		borderBottomWidth: 2,
	},
	touchable: {
		backgroundColor: "#10a3c4",
		borderWidth: 2,
		borderRadius: 8,
		borderColor: "#105ec4",
		textAlign: "center",
		margin: 15,
	},
	touchableText: {
		margin: 15,
		color: "#fff",
		textTransform: "uppercase",
		fontSize: 20,
	},
});
