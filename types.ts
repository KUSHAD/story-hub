export type BottomTabParams = {
	Read?: undefined;
	Write?: undefined;
};
export type MainWriteScreenStackNavigatorParams = {
	Fill?: undefined;
	Write?: WriteStoryStackScreenParams;
	FinalView?: WriteStoryFinalViewScreenParams;
};

export type WriteStoryStackScreenParams = {
	authorName?: string;
	bookTitle?: string;
};

export type WriteStoryFinalViewScreenParams = {
	authorName?: string;
	bookTitle?: string;
	bookContent?: string;
};

export type ReadScreenStackNavParams = {
	Stories?: undefined;
	Story?: ReadStoryNavParams;
};

export type ReadStoryNavParams = {
	storyTitle?: string;
};
