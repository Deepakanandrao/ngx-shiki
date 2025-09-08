import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { getHighlighter, type Highlighter } from 'shiki';
import { Theme } from './ngx-shiki.types';

@Component({
  selector: 'ngx-shiki',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngx-shiki.component.html',
  styleUrls: ['./ngx-shiki.component.scss'],
})
export class NgxShikiComponent implements OnInit, OnChanges {
  @Input() code = '';
  @Input() language = 'typescript';
  @Input() theme: Theme = 'github-dark';
  @Input() filename?: string;
  @Input() showFilename = false;
  @Input() showCopyButton = true;

  copySuccess = false;
  highlightedCode: SafeHtml = '';
  private highlighter: Highlighter | null = null;

  constructor(
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    await this.initializeHighlighter();
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['theme'] && !changes['theme'].firstChange) {
      await this.initializeHighlighter();
    }
    if (changes['code'] || (changes['language'] && this.highlighter)) {
      await this.highlightCode();
    }
  }

  private async initializeHighlighter() {
    try {
      this.highlighter = await getHighlighter({
        themes: [this.theme],
        langs: [this.language],
      });
      await this.highlightCode();
    } catch (error) {
      console.error('Failed to initialize Shiki:', error);
    }
  }

  private async highlightCode() {
    if (this.code && this.highlighter) {
      try {
        const html = this.highlighter.codeToHtml(this.code, {
          lang: this.language,
          theme: this.theme,
        });
        this.highlightedCode = this.sanitizer.bypassSecurityTrustHtml(html);
        this.cdr.detectChanges();
      } catch (error) {
        console.error('Failed to highlight code:', error);
      }
    }
  }

  copyCode() {
    navigator.clipboard
      .writeText(this.code)
      .then(() => {
        this.copySuccess = true;
        this.cdr.detectChanges();
        setTimeout(() => {
          this.copySuccess = false;
          this.cdr.detectChanges();
        }, 2000);
      })
      .catch((err) => console.error('Failed to copy code:', err));
  }

  trackByFn(index: number): number {
    return index;
  }
}
