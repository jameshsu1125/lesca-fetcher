export declare enum contentType {
    URL_ENCODED = "application/x-www-form-urlencoded; charset=UTF-8",
    JSON = "application/json;charset=utf-8"
}
export declare enum formatType {
    string = 0,
    JSON = 1
}
type Config = {
    hostUrl: string;
    contentType: contentType;
    formatType: formatType;
};
export declare const mergePath: (api?: String) => string;
declare const Fetcher: {
    install: (setting: Config) => void;
    post: (api: String | undefined, data: Object) => Promise<unknown>;
    get: (api?: String) => Promise<unknown>;
    setJWT: (jwt: string) => void;
};
export default Fetcher;
