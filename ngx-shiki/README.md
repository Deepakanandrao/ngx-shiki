# NgxShiki

Angular component library for beautiful syntax highlighting using [Shiki](https://shiki.style/). Compatible with Angular 18+.

## Features

- 🎨 **Multiple Themes**: Support for popular themes like GitHub Light/Dark, VS Code, Dracula, Material, and more
- 🌍 **25+ Languages**: Support for HTML, TypeScript, Python, Java, and many other programming languages
- 📋 **Copy to Clipboard**: Built-in copy button with success feedback
- 🔢 **Line Numbers**: Optional line numbers display
- 📁 **File Names**: Optional filename header display
- ⚡ **Standalone Component**: No module imports required (Angular 14+)
- 🔄 **Dynamic Content**: Supports both static and dynamic code content
- 📱 **Responsive**: Works great on all screen sizes

## Installation

```bash
npm install ngx-shiki shiki
```

## Basic Usage

Import the component in your Angular component:

```typescript
import { NgxShikiComponent } from 'ngx-shiki';

@Component({
  standalone: true,
  imports: [NgxShikiComponent],
  // ... rest of your component
})
export class MyComponent {}
```

Use in your template:

```html
<ngx-shiki>
  <div>
    <p>Hello World!</p>
  </div>
</ngx-shiki>
```

## Advanced Usage

### Specify Language and Theme

```html
<ngx-shiki 
  language="typescript" 
  theme="github-dark"
  [showLineNumbers]="true"
  [showFilename]="true"
  filename="example.ts">
  
  interface User {
    id: number;
    name: string;
    email: string;
  }

  function createUser(userData: User): User {
    return { ...userData };
  }
</ngx-shiki>
```

### Dynamic Content

```html
<ngx-shiki 
  [language]="selectedLanguage"
  [theme]="selectedTheme"
  [showLineNumbers]="showNumbers"
  [showCopyButton]="showCopy">
  {{ dynamicCode }}
</ngx-shiki>
```

## Input Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `language` | `BundledLanguage` | `'html'` | Programming language for syntax highlighting |
| `theme` | `BundledTheme` | `'github-light'` | Color theme for highlighting |
| `showLineNumbers` | `boolean` | `false` | Display line numbers |
| `showCopyButton` | `boolean` | `true` | Show copy to clipboard button |
| `showFilename` | `boolean` | `false` | Show filename in header |
| `filename` | `string` | `''` | Filename to display in header |

## Supported Languages

HTML, CSS, JavaScript, TypeScript, JSON, XML, Python, Java, C, C++, C#, PHP, Ruby, Go, Rust, Swift, Kotlin, Scala, Bash, PowerShell, SQL, Markdown, YAML, Dockerfile, Nginx, Apache

## Supported Themes

- `github-light` - GitHub Light
- `github-dark` - GitHub Dark  
- `vs-code-light` - VS Code Light
- `vs-code-dark` - VS Code Dark
- `dracula` - Dracula
- `material-theme-palenight` - Material Palenight
- `one-dark-pro` - One Dark Pro
- `slack-dark` - Slack Dark
- `tokyo-night` - Tokyo Night

## Examples

### HTML Code Block

```html
<ngx-shiki language="html" [showLineNumbers]="true">
  <div class="container">
    <h1>Welcome</h1>
    <p>This is a paragraph.</p>
  </div>
</ngx-shiki>
```

### TypeScript with Dark Theme

```html
<ngx-shiki 
  language="typescript" 
  theme="github-dark"
  filename="user.service.ts"
  [showFilename]="true"
  [showLineNumbers]="true">
  
  import { Injectable } from '@angular/core';
  
  @Injectable({
    providedIn: 'root'
  })
  export class UserService {
    getUsers(): Observable<User[]> {
      return this.http.get<User[]>('/api/users');
    }
  }
</ngx-shiki>
```

### Python Code

```html
<ngx-shiki language="python" theme="dracula">
  def fibonacci(n):
      if n <= 1:
          return n
      return fibonacci(n-1) + fibonacci(n-2)
  
  # Generate first 10 fibonacci numbers
  for i in range(10):
      print(fibonacci(i))
</ngx-shiki>
```

### JSON Data

```html
<ngx-shiki language="json" filename="config.json" [showFilename]="true">
  {
    "name": "my-app",
    "version": "1.0.0",
    "dependencies": {
      "@angular/core": "^18.0.0",
      "ngx-shiki": "^1.0.0"
    }
  }
</ngx-shiki>
```

## Styling Customization

The component uses CSS custom properties that you can override:

```css
ngx-shiki {
  --ngx-shiki-border-radius: 12px;
  --ngx-shiki-border-color: #e1e5e9;
  --ngx-shiki-background: #ffffff;
  --ngx-shiki-header-background: #f6f8fa;
}
```

## Development

### Building the Library

```bash
npm run build
```

### Testing

```bash
npm run test
```

### Publishing

```bash
npm run build:prod
npm run publish
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License. See [LICENSE](LICENSE) file for details.

## Changelog

### 1.0.0

- Initial release
- Support for 25+ programming languages
- 9 built-in themes
- Copy to clipboard functionality
- Line numbers support
- Filename display
- Dynamic content support
- Standalone Angular component
