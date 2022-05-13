export declare enum contentType {
    URL_ENCODED = "application/x-www-form-urlencoded; charset=UTF-8",
    JSON = "application/json;charset=utf-8"
}
declare type Config = {
    hostUrl: string;
    contentType: contentType;
};
declare const Fetch: {
    install: (setting: Config) => void;
    post: (api: String | undefined, data: Object) => Promise<unknown>;
    get: (api?: String) => Promise<unknown>;
    setJWT: (jwt: string) => void;
};
export default Fetch;
