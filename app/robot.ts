export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
        },
      ],
      sitemap: 'https://adamgonzo.com/sitemap.xml',
      host: 'https://adamgonzo.com',
    };
  }