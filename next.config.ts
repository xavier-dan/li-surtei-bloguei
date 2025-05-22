import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl({
  images: {
    domains: ['books.google.com', 'books.googleusercontent.com']
  },
  nextConfig
});
