import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Card, SearchBar } from "react-native-elements";
import { firebaseFirestore } from "../../firebase";
export default function Stories({ navigation }) {
	const [stories, setStories] = useState<any[]>([]);
	const [searchString, setSearchString] = useState<string>("");
	const searchStories = async (title: string) => {
		await firebaseFirestore
			.collection("User-Stories")
			.where("storyTitle", ">=", title)
			.get()
			.then((res) => {
				setStories(res.docs);
			});
	};
	useEffect(() => {
		fetchAllStories();
	}, [fetchAllStories]);
	function fetchAllStories() {
		firebaseFirestore
			.collection("User-Stories")
			.orderBy("createdAt")
			.get()
			.then((res) => {
				setStories(res.docs);
			});
	}
	return (
		<ScrollView>
			<SearchBar
				platform='default'
				searchIcon={{ size: 24 }}
				onChangeText={(text) => {
					searchStories(text);
					setSearchString(text);
				}}
				onClear={() => {
					searchStories("");
					setSearchString("");
					fetchAllStories();
				}}
				value={searchString}
			/>
			<FlatList
				renderItem={({ item, separators, index }) => (
					<TouchableOpacity
						onPress={() => {
							navigation.navigate("Story", {
								id: item.data().id,
							});
						}}
						activeOpacity={0.5}>
						<Card>
							<Card.Title
								h4
								h4Style={{
									textAlign: "left",
								}}>
								{item.data().storyTitle}
							</Card.Title>
							<Card.Title
								style={{
									textAlign: "left",
								}}
								textBreakStrategy='highQuality'>
								By {item.data().author}
							</Card.Title>
							<Card.Divider />
							<Card.Image
								source={{
									uri: `https://avatars.dicebear.com/4.5/api/identicon/${
										item.data().storyTitle
									}.svg`,
								}}
								style={{
									width: "100%",
									height: "100px",
								}}
							/>
						</Card>
					</TouchableOpacity>
				)}
				keyExtractor={(item: object, index: number) => item.data().id}
				data={stories}
			/>
		</ScrollView>
	);
}
