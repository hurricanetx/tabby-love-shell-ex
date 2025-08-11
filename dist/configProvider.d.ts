import { ConfigProvider } from 'tabby-core';
/** @hidden */
export declare class LoveShellConfigProvider extends ConfigProvider {
    defaults: {
        loveShell: {
            apiKey: string;
            model: string;
            baseUrl: string;
        };
        hotkeys: {
            'love-shell': any[];
        };
    };
}
