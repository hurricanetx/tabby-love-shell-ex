import { Component } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { LoveShellService } from '../loveShell.service'

@Component({
    template: require('./loveShellModal.component.pug'),
    styles: [require('./loveShellModal.component.scss')],
})
export class LoveShellModalComponent {
    searchInput = ''
    suggestion = ''
    loading = false
    error = false

    constructor(
        public activeModal: NgbActiveModal,
        private loveShellService: LoveShellService
    ) {}

    async findSuggestion() {
        if (!this.searchInput.trim()) return

        this.loading = true
        this.error = false
        this.suggestion = ''

        try {
            this.suggestion = await this.loveShellService.findSuggestion(this.searchInput)
        } catch (error) {
            this.error = true
        } finally {
            this.loading = false
        }
    }

    apply() {
        if (this.suggestion) {
            this.activeModal.close(this.suggestion)
        }
    }

    close() {
        this.activeModal.dismiss()
    }

    refresh() {
        this.suggestion = ''
        this.error = false
    }
}