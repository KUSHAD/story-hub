export type BottomTabParams = {
	Read?: undefined;
	Write?: undefined;
};
export type MainWriteScreenStackNavigatorParams = {
	Fill?: undefined;
	Write?: WriteStoryStackScreenParams;
	FinalView?: WriteStoryFinalViewScreenParams;
	NotFound?: undefined;
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
	NotFound?: undefined;
};

export type ReadStoryNavParams = {
	storyTitle?: string;
};
