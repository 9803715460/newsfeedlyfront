

export interface NewsFeed {
    source: {
        id: String,
        name: String
    };
    author: String;
    title: String;
    description: String;
    url: String;
    urlToImage: ImageData;
    publishedAt: String;
}