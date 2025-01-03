import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  env: {
    PAYLOAD_CMS_URL: process.env.PAYLOAD_CMS_URL,
    BASE_URL: process.env.BASE_URL
  },
  sassOptions: {
    prependData: `@use "./src/shared/assets/styles/core.scss";`
  }
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
