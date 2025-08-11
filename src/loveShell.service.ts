import { Injectable } from '@angular/core'
import ConfigService from 'tabby-core'
import * as OpenAI from 'openai'

@Injectable()
export class LoveShellService {
    private openai: any
    private model: string = ''

    constructor(private config: ConfigService) {
        this.initializeOpenAI()
    }

    private initializeOpenAI() {
        const apiKey = this.config.store.loveShell.apiKey
        const baseUrl = this.config.store.loveShell.baseUrl
        this.model = this.config.store.loveShell.model || 'gpt-3.5-turbo'

        if (!apiKey) {
            console.warn('Love Shell: No API key configured')
            return
        }

        // Debug logging
        console.log('Love Shell Configuration:', {
            apiKey: apiKey ? '[REDACTED]' : 'NOT SET',
            baseUrl: baseUrl || 'DEFAULT',
            model: this.model
        })

        const openaiConfig: any = {
            apiKey: apiKey,
        }

        if (baseUrl) {
            openaiConfig.baseOptions = {
                baseURL: baseUrl,
            }
            console.log('Using custom baseURL:', baseUrl)
        } else {
            console.log('Using default OpenAI API')
        }

        this.openai = new (OpenAI as any)(openaiConfig)
    }

    async findSuggestion(input: string): Promise<string> {
        if (!this.openai) {
            throw new Error('OpenAI not initialized. Please check your API key.')
        }

        try {
            const response = await this.openai.chat.completions.create({
                model: this.model,
                messages: [
                    {
                        role: 'system',
                        content: 'You are a shell command expert. Convert natural language requests to accurate shell commands. Respond only with the command, no explanations.',
                    },
                    {
                        role: 'user',
                        content: input,
                    },
                ],
                max_tokens: 100,
                temperature: 0.1,
            })

            return response.choices[0]?.message?.content?.trim() || ''
        } catch (error) {
            console.error('Love Shell API error:', error)
            throw error
        }
    }
}