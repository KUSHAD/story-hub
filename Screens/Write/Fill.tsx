import React, { useState } from "react";
import {
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
const Fill = (props: any) => {
	const [authorName, setAuthorName] = useState<string>("");
	const [storyTitle, setStoryTitle] = useState("");
	return (
		<KeyboardAvoidingView style={Styles.container}>
			<View style={Styles.innerContainer}>
				<View style={Styles.inputContainer}>
					<Text>Author Name :-</Text>
					<Text>{""}</Text>
					<TextInput
						value={authorName}
						onChangeText={(text) => setAuthorName(text)}
						placeholder='Author Name'
						style={Styles.textInput}
					/>
				</View>
				<View style={Styles.inputContainer}>
					<Text>Story Title :-</Text>
					<Text>{"      "}</Text>
					<TextInput
						value={storyTitle}
						onChangeText={(text) => setStoryTitle(text)}
						placeholder='Story Title'
						style={Styles.textInput}
					/>
				</View>
			</View>
			<TouchableOpacity
				onPress={() => {
					props.navigation.navigate("Write", {
						authorName: authorName,
						storyTitle: storyTitle,
					});
					setAuthorName("");
					setStoryTitle("");
				}}
				disabled={!authorName || !storyTitle}
				style={
					!authorName || !storyTitle
						? Styles.touchableDisabled
						: Styles.touchable
				}
				activeOpacity={0.5}>
				<Text style={Styles.touchableText}>Write Your Story</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};

export default Fill;
const Styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	innerContainer: {
		width: "80%",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",
	},
	inputContainer: {
		flexDirection: "row",
		margin: 15,
	},
	textInput: {
		borderWidth: 2,
		width: "100%",
		textAlign: "center",
		height: 50,
		borderRadius: 8,
	},
	touchable: {
		backgroundColor: "#10a3c4",
		borderWidth: 2,
		borderRadius: 8,
		borderColor: "#105ec4",
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
	},
});
