import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoveShellService } from 'loveShell.service';
import { AppService, BaseTabComponent } from 'tabby-core';
export declare class LoveShellModalComponent {
    modalInstance: NgbActiveModal;
    private loveShell;
    private app;
    searchInput: string;
    appendCR: boolean;
    loading: boolean;
    suggestion: string;
    error: string;
    constructor(modalInstance: NgbActiveModal, loveShell: LoveShellService, app: AppService);
    ngOnInit(): void;
    refresh(): void;
    findSuggestion(): Promise<void>;
    close(): void;
    apply(): void;
    _send(tab: BaseTabComponent, cmd: string): void;
}
