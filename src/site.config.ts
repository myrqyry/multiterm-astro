import type { SiteConfig } from '@types'

const config: SiteConfig = {
  // Absolute URL to the root of your published site, used for generating links and sitemaps.
  site: 'https://example.com',
  // The name of your site, used in the title and for SEO.
  title: 'My Site',
  // The description of your site, used for SEO and RSS feed.
  description: 'A description of my site.',
  // The author of the site, used in the footer, SEO, and RSS feed.
  author: 'My Name',
  // Keywords for SEO, used in the meta tags.
  tags: ['some', 'tags'],
  // Path to the image used for generating social media previews.
  // Needs to be a square JPEG file due to limitations of the social card generator.
  // Try https://squoosh.app/ to easily convert images to JPEG.
  socialCardAvatarImage: './src/content/avatar.jpg',
  // Font imported from @fontsource or elsewhere, used for the entire site.
  // To change this see src/styles/global.css and import a different font.
  font: 'JetBrains Mono Variable',
  // For pagination, the number of posts to display per page.
  pageSize: 5,
  // The navigation links to display in the header.
  navLinks: [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Archive',
      url: '/posts',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/username/repo',
      external: true,
    }
  ],
  // The theming configuration for the site.
  themes: {
    // The theming mode. One of "single" | "select" | "light-dark-auto".
    mode: 'light-dark-auto',
    // The default theme identifier, used when themeMode is "select" or "light-dark-auto".
    // Make sure this is one of the themes listed in `themes` or "auto" for "light-dark-auto" mode.
    default: 'auto',
    // Shiki themes to bundle with the site.
    // https://expressive-code.com/guides/themes/#using-bundled-themes
    // These will be used to theme the entire site along with syntax highlighting.
    // To use light-dark-auto mode, only include a light and a dark theme in that order.
    include: [
      'github-light',
      'github-dark',
    ]
  },
  // Social links to display in the footer.
  socialLinks: {
    github: 'https://github.com/username/repo',
    mastodon: '',
    email: '',
    linkedin: '',
    bluesky: '',
    twitter: '',
  },
}

export default config
