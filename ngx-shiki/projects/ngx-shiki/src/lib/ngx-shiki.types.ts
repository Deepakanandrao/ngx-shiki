export interface NgxShikiConfig {
  defaultTheme?: string;
  defaultLanguage?: string;
  showLineNumbers?: boolean;
  showCopyButton?: boolean;
  showFilename?: boolean;
}

export const BUNDLED_THEMES = [
  'css-variables',
  'dark-plus',
  'dracula',
  'dracula-soft',
  'github-dark',
  'github-dark-dimmed',
  'github-light',
  'hc_light',
  'light-plus',
  'material-theme',
  'material-theme-darker',
  'material-theme-lighter',
  'material-theme-ocean',
  'material-theme-palenight',
  'min-dark',
  'min-light',
  'monokai',
  'nord',
  'one-dark-pro',
  'poimandres',
  'rose-pine',
  'rose-pine-dawn',
  'rose-pine-moon',
  'slack-dark',
  'slack-ochin',
  'solarized-dark',
  'solarized-light',
  'vitesse-dark',
  'vitesse-light',
] as const;

export type Theme = (typeof BUNDLED_THEMES)[number];

// Theme metadata for documentation and UI purposes
export interface ThemeMetadata {
  name: Theme;
  type: 'dark' | 'light';
  description?: string;
}

export const THEME_METADATA: ThemeMetadata[] = [
  {
    name: 'css-variables',
    type: 'dark',
    description: 'Theme that uses CSS variables for customization',
  },
  {
    name: 'dark-plus',
    type: 'dark',
    description: "VS Code's default dark theme",
  },
  { name: 'dracula', type: 'dark', description: 'Classic Dracula theme' },
  {
    name: 'dracula-soft',
    type: 'dark',
    description: 'Softer variant of Dracula',
  },
  { name: 'github-dark', type: 'dark', description: "GitHub's dark theme" },
  {
    name: 'github-dark-dimmed',
    type: 'dark',
    description: "GitHub's dimmed dark theme",
  },
  { name: 'github-light', type: 'light', description: "GitHub's light theme" },
  { name: 'hc_light', type: 'light', description: 'High contrast light theme' },
  {
    name: 'light-plus',
    type: 'light',
    description: "VS Code's default light theme",
  },
  { name: 'material-theme', type: 'dark', description: 'Material theme' },
  {
    name: 'material-theme-darker',
    type: 'dark',
    description: 'Darker variant of Material theme',
  },
  {
    name: 'material-theme-lighter',
    type: 'light',
    description: 'Lighter variant of Material theme',
  },
  {
    name: 'material-theme-ocean',
    type: 'dark',
    description: 'Ocean variant of Material theme',
  },
  {
    name: 'material-theme-palenight',
    type: 'dark',
    description: 'Palenight variant of Material theme',
  },
  { name: 'min-dark', type: 'dark', description: 'Minimalistic dark theme' },
  { name: 'min-light', type: 'light', description: 'Minimalistic light theme' },
  { name: 'monokai', type: 'dark', description: 'Classic Monokai theme' },
  { name: 'nord', type: 'dark', description: 'Nord theme' },
  { name: 'one-dark-pro', type: 'dark', description: 'One Dark Pro theme' },
  { name: 'poimandres', type: 'dark', description: 'Poimandres theme' },
  { name: 'rose-pine', type: 'dark', description: 'Rosé Pine theme' },
  {
    name: 'rose-pine-dawn',
    type: 'light',
    description: 'Rosé Pine Dawn theme',
  },
  { name: 'rose-pine-moon', type: 'dark', description: 'Rosé Pine Moon theme' },
  { name: 'slack-dark', type: 'dark', description: 'Slack dark theme' },
  { name: 'slack-ochin', type: 'dark', description: 'Slack Ochin theme' },
  { name: 'solarized-dark', type: 'dark', description: 'Solarized dark theme' },
  {
    name: 'solarized-light',
    type: 'light',
    description: 'Solarized light theme',
  },
  { name: 'vitesse-dark', type: 'dark', description: 'Vitesse dark theme' },
  { name: 'vitesse-light', type: 'light', description: 'Vitesse light theme' },
];

export const SUPPORTED_LANGUAGES = [
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
] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
