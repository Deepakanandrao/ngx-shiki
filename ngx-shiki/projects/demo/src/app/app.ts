import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxShikiComponent, Theme, BUNDLED_THEMES } from 'ngx-shiki';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxShikiComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  supportedLanguages = ['html', 'typescript', 'javascript', 'css', 'json'];
  supportedThemes = BUNDLED_THEMES;

  selectedLanguage = 'html';
  selectedTheme: Theme = 'github-dark';
  showLineNumbers = true;
  showCopyButton = true;
  showFilename = false;
  filename = 'example.html';
  theme = 'github-dark';

  htmlExample = `<div class="container">
  <header>
    <h1>Welcome to My Website</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <p>This is the main content area.</p>
  </main>
</div>`;
}
