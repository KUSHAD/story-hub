import * as Linking from "expo-linking";

export default {
	prefixes: [Linking.makeUrl("/")],
	config: {
		initialRouteName: "Login",
		screens: {
			Login: "auth",
			Write: {
				screens: {
					Fill: "fill-details",
					Write: "write-story",
					FinalView: "final-view",
				},
			},
			Read: {
				screens: {
					Stories: "read",
					Story: "story",
				},
			},
			NotFound: "*",
		},
	},
};
