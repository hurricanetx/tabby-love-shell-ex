import { ConfigProvider } from 'tabby-core'

/** @hidden */
export class LoveShellConfigProvider extends ConfigProvider {
    defaults = {
        loveShell: {
            apiKey: '',
            model: 'gpt-3.5-turbo',
            baseUrl: '',
        },
        hotkeys: {
            'love-shell': ['ctrl+shift+l'],
        },
    }
}