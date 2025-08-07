import { Config } from './type';
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
