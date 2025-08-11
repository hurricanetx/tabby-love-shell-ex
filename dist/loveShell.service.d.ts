import { LogService, ConfigService } from 'tabby-core';
export declare class LoveShellService {
    private openai;
    private model;
    constructor(log: LogService, config: ConfigService);
    findSuggestion(input: string): Promise<string>;
}
