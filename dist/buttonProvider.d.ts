import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HotkeysService, ToolbarButtonProvider, NotificationsService, IToolbarButton, ConfigService } from 'tabby-core';
export declare class ButtonProvider extends ToolbarButtonProvider {
    private ngbModal;
    private config;
    private notifications;
    constructor(ngbModal: NgbModal, config: ConfigService, notifications: NotificationsService, hotkeys: HotkeysService);
    activate(): void;
    provide(): IToolbarButton[];
}
