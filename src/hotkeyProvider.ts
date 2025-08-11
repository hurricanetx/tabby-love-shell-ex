import HotkeyProvider from 'tabby-core'
import { HotkeyDescription } from 'tabby-core'
import { Injectable } from '@angular/core'

@Injectable()
/** @hidden */
export class LoveShellHotkeyProvider extends HotkeyProvider {
    async provide(): Promise<HotkeyDescription[]> {
        return [
            {
                id: 'love-shell',
                name: 'Love Shell',
                description: 'Open Love Shell modal',
            },
        ]
    }
}