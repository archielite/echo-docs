import { DefaultTheme } from 'vitepress'

export default [
  { text: 'Overview', link: '/echo/' },
  {
    text: 'Prologue',
    items: [
      { text: 'Release Notes', link: '/echo/releases' },
      { text: 'Upgrade Guide', link: '/echo/upgrade' },
    ]
  },
  {
    text: 'Getting Started',
    items: [
      { text: 'Installation', link: '/echo/installation' },
      { text: 'SSL', link: '/echo/ssl' },
      { text: 'License', link: '/echo/license' },
    ],
  },
  {
    text: 'Usage',
    items: [
      { text: 'Setup homepage',  link: '/echo/usage-homepage' },
      { text: 'Setup menus',  link: '/echo/usage-menus' },
      { text: 'Setup theme options',  link: '/echo/usage-theme-options' },
      { text: 'Widgets', link: '/echo/usage-widgets' },
      { text: 'Custom CSS/JS', link: '/echo/usage-custom-css-js' },
      { text: 'Translation', link: '/echo/usage-translation' },
      { text: 'Google Analytics', link: '/echo/usage-analytics' },
      { text: 'Multi-language', link: '/echo/usage-multi-language' },
      { text: 'Media - Setup Amazon S3', link: '/echo/usage-media-s3' },
      { text: 'Media - Setup BunnyCDN', link: '/echo/usage-media-bunnycdn' },
      { text: 'Media - Setup Wasabi', link: '/echo/usage-media-wasabi' },
      { text: 'Setup email', link: '/echo/usage-email' },
      { text: 'Backup', link: '/echo/plugin-backup' },
      { text: 'Newsletter', link: '/echo/usage-newsletter' },
    ],
  },
  {
    text: 'Development',
    items: [
      { text: 'Rename theme', link: '/echo/theme-rename' },
    ]
  }
] satisfies DefaultTheme.SidebarItem[]
