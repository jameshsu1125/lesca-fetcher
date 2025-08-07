export declare enum contentType {
    URL_ENCODED = "application/x-www-form-urlencoded; charset=UTF-8",
    JSON = "application/json;charset=utf-8"
}
export declare enum formatType {
    string = 0,
    JSON = 1
}
export type Headers = {
    'Content-Type': contentType;
    Authorization?: string;
};
export type Config = {
    hostUrl: string;
    contentType: contentType;
    formatType: formatType;
};
