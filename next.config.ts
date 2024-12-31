import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  sassOptions: {
    prependData: `@use "./src/shared/assets/styles/core.scss";`
  }
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
