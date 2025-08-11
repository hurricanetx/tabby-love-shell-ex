import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HotkeyProvider, ToolbarButtonProvider, ConfigProvider } from 'tabby-core'
import { SettingsTabProvider } from 'tabby-settings'

import { LoveShellService } from './loveShell.service'
import { LoveShellConfigProvider } from './configProvider'
import { LoveShellButtonProvider } from './buttonProvider'
import { LoveShellHotkeyProvider } from './hotkeyProvider'
import { LoveShellSettingsTabProvider } from './settingsProvider'
import { LoveShellSettingsComponent } from './loveShellSettings.component'
import { LoveShellModalComponent } from './components/loveShellModal.component'

@NgModule({
    imports: [NgbModule, CommonModule, FormsModule],
    providers: [
        LoveShellService,
        {
            provide: HotkeyProvider,
            useClass: LoveShellHotkeyProvider,
            multi: true,
        },
        {
            provide: ToolbarButtonProvider,
            useClass: LoveShellButtonProvider,
            multi: true,
        },
        {
            provide: ConfigProvider,
            useClass: LoveShellConfigProvider,
            multi: true,
        },
        {
            provide: SettingsTabProvider,
            useClass: LoveShellSettingsTabProvider,
            multi: true,
        },
    ],
    entryComponents: [LoveShellSettingsComponent, LoveShellModalComponent],
    declarations: [LoveShellSettingsComponent, LoveShellModalComponent],
})
export class LoveShellModule {}