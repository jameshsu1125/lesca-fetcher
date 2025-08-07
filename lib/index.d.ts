export declare enum contentType {
    URL_ENCODED = "application/x-www-form-urlencoded; charset=UTF-8",
    JSON = "application/json;charset=utf-8"
}
export declare enum formatType {
    string = 0,
    JSON = 1
}
export type Config = {
    hostUrl: string;
    contentType: contentType;
    formatType: formatType;
};
export declare const mergePath: (api?: String) => string;
declare const Fetcher: {
    install: (setting: Config) => void;
    post: <T>(api: String | undefined, data: Object) => Promise<T> | Promise<string>;
    get: <T>(api?: String) => Promise<string> | Promise<T>;
    setJWT: (jwt: string) => void;
    setHeader: (property: {
        [k: string]: string;
    }) => void;
};
export default Fetcher;
