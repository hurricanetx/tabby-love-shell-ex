# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run build` - Build the plugin using webpack
- `npm run watch` - Build and watch for changes during development
- `npm run prepublishOnly` - Build before publishing to npm

## Architecture Overview

This is a Tabby terminal plugin that enables natural language shell command generation using OpenAI's API. The plugin integrates with the Tabby terminal emulator to provide AI-powered shell command suggestions.

### Core Components

1. **LoveShellService** (`dist/loveShell.service.d.ts`): Main service that handles OpenAI API integration and command suggestion generation
2. **LoveShellModalComponent** (`dist/components/loveShellModal.component.d.ts`): UI modal for natural language input and command preview
3. **ButtonProvider** (`dist/buttonProvider.d.ts`): Provides toolbar button integration in Tabby
4. **LoveShellConfigProvider** (`dist/configProvider.d.ts`): Manages configuration settings (API key, model selection)
5. **LoveShellHotkeyProvider** (`dist/hotkeyProvider.d.ts`): Handles keyboard shortcuts
6. **LoveShellSettingsTabProvider** (`dist/settingsProvider.d.ts`): Provides settings UI integration

### Key Dependencies

- **tabby-core**: Core Tabby terminal functionality
- **tabby-settings**: Settings management for Tabby plugins
- **tabby-terminal**: Terminal integration components
- **openai**: OpenAI API client for natural language processing
- **Angular**: Plugin is built with Angular framework

### Build System

- Uses **webpack** for bundling (webpack.config.js not visible in source, but referenced in package.json)
- **TypeScript** for type safety
- **SCSS** for styling (node-sass dependency)

### Plugin Integration

The plugin extends Tabby's functionality through several provider patterns:
- Config providers for settings management
- Toolbar button provider for UI access
- Hotkey provider for keyboard shortcuts
- Modal component for user interaction
- Settings tab provider for configuration UI

### Testing Locally

To test the plugin with Tabby:
1. Build the plugin: `npm run build`
2. Run Tabby with plugin path: `TABBY_PLUGINS=$(pwd) /path/to/Tabby.app/Contents/MacOS/Tabby --debug`