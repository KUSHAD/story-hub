import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
	KeyboardAvoidingView,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { WriteStoryStackScreenParams } from "../../types";
const Write = (props: any) => {
	const [routerParams, setRouterParams] = useState<WriteStoryStackScreenParams>(
		{}
	);
	const [storyContent, setStoryContent] = useState<string>("");
	const router = useRoute();
	useEffect(() => {
		const routerParams: WriteStoryStackScreenParams = {
			authorName: router.params.authorName,
			bookTitle: router.params.storyTitle,
		};
		setRouterParams(routerParams);
	}, []);
	return (
		<ScrollView scrollsToTop>
			<KeyboardAvoidingView style={Styles.container}>
				<View style={Styles.innerContainer}>
					<View style={Styles.routerPropsContainer}>
						<Text selectable selectionColor='#10a3c4'>
							Author Name :- {routerParams.authorName}
						</Text>
						<Text selectable selectionColor='#10a3c4'>
							Book Title :- {routerParams.bookTitle}
						</Text>
					</View>

					<TextInput
						numberOfLines={10}
						placeholder='Story Content'
						textBreakStrategy='highQuality'
						style={Styles.input}
						multiline
						autoFocus
						value={storyContent}
						onChangeText={(text) => {
							setStoryContent(text);
						}}
						textAlign='left'
					/>
				</View>
				<TouchableOpacity
					disabled={!storyContent}
					style={!storyContent ? Styles.touchableDisabled : Styles.touchable}
					onPress={() => {
						props.navigation.navigate("FinalView", {
							authorName: router.params.authorName,
							storyTitle: router.params.storyTitle,
							bookContent: storyContent,
						});
					}}>
					<Text style={Styles.touchableText}>View Your Masterpiece</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default Write;

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	innerContainer: {
		width: "80%",
	},
	input: {
		borderWidth: 2,
		width: "100%",
		textAlignVertical: "top",
		borderRadius: 8,
	},
	touchable: {
		backgroundColor: "#10a3c4",
		borderWidth: 2,
		borderRadius: 8,
		borderColor: "#105ec4",
		textAlign: "center",
	},
	touchableText: {
		margin: 15,
		color: "#fff",
		textTransform: "uppercase",
		fontSize: 20,
	},
	touchableDisabled: {
		backgroundColor: "#9da2a3",
		borderWidth: 2,
		borderRadius: 8,
		borderColor: "#000000",
		textAlign: "center",
		margin: 15,
	},
	routerPropsContainer: {
		borderWidth: 2,
		margin: 15,
		borderRadius: 8,
	},
});
