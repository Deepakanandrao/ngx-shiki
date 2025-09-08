import { Injectable } from '@angular/core';
import {
  createHighlighter,
  Highlighter,
} from 'shiki';
import { NgxShikiConfig, Theme, SupportedLanguage } from './ngx-shiki.types';

@Injectable({
  providedIn: 'root',
})
export class NgxShikiService {
  private highlighter: Highlighter | null = null;
  private initialized = false;

  private readonly defaultConfig: NgxShikiConfig = {
    defaultTheme: 'github-light',
    defaultLanguage: 'html',
    showLineNumbers: false,
    showCopyButton: true,
    showFilename: false,
  };

  async initializeHighlighter(): Promise<void> {
    if (this.initialized) return;

    try {
      this.highlighter = await createHighlighter({
        themes: [
          'github-light',
          'github-dark',
          'vs-code-light',
          'vs-code-dark',
          'dracula',
          'material-theme-palenight',
          'one-dark-pro',
          'slack-dark',
          'tokyo-night',
        ],
        langs: [
          'html',
          'css',
          'javascript',
          'typescript',
          'json',
          'xml',
          'python',
          'java',
          'c',
          'cpp',
          'csharp',
          'php',
          'ruby',
          'go',
          'rust',
          'swift',
          'kotlin',
          'scala',
          'bash',
          'powershell',
          'sql',
          'markdown',
          'yaml',
          'dockerfile',
          'nginx',
          'apache',
        ],
      });
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize Shiki highlighter:', error);
    }
  }

  async highlight(
    code: string,
    language: SupportedLanguage = 'html',
    theme: Theme = 'github-light'
  ): Promise<string> {
    await this.initializeHighlighter();

    if (!this.highlighter) {
      throw new Error('Highlighter not initialized');
    }

    try {
      return this.highlighter.codeToHtml(code, {
        lang: language,
        theme: theme,
      });
    } catch (error) {
      console.error('Failed to highlight code:', error);
      // Fallback to plain text with basic HTML escaping
      return `<pre><code>${this.escapeHtml(code)}</code></pre>`;
    }
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  getDefaultConfig(): NgxShikiConfig {
    return { ...this.defaultConfig };
  }
}
