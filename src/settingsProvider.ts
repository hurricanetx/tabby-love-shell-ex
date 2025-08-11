import { SettingsTabProvider } from 'tabby-settings'

/** @hidden */
export class LoveShellSettingsTabProvider extends SettingsTabProvider {
    id = 'love-shell'
    icon = 'fa fa-heart'
    title = 'Love Shell'

    getComponentType(): any {
        return require('./loveShellSettings.component').LoveShellSettingsComponent
    }
}