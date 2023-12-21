export interface UnsplashImage {
    description: string,
    user: {
        username: string,
        name: string,
    },
    urls: {
        raw: string,
    },
    width: number,
    height: number,
}

export interface UnsplashSearchResponse {
    results: UnsplashImage[],
}