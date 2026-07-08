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
export declare const mergePath: (api?: string, hostOverride?: string) => string;
declare const Fetcher: {
    install: (setting: Config) => void;
    post: <T>(api: string | undefined, data: object) => Promise<T> | Promise<string>;
    get: <T>(api?: string) => Promise<string> | Promise<T>;
    setJWT: (jwt: string) => void;
    setHeader: (property: {
        [k: string]: string;
    }) => void;
    setOptions: (property: Record<string, string | number | boolean | object>) => void;
};
export default Fetcher;
