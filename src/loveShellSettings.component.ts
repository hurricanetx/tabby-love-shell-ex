import { Component } from '@angular/core'
import ConfigService from 'tabby-core'

@Component({
    template: require('./loveShellSettings.component.pug'),
})
export class LoveShellSettingsComponent {
    config: ConfigService

    constructor(config: ConfigService) {
        this.config = config
    }

    resetToDefaults() {
        this.config.store.loveShell = {
            apiKey: '',
            model: 'gpt-3.5-turbo',
            baseUrl: ''
        }
        this.config.save()
    }

    saveSettings() {
        this.config.save()
    }
}