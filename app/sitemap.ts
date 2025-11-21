import type { MetadataRoute } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://me.toinfinite.dev';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const normalizedUrl = SITE_URL.endsWith('/')
        ? SITE_URL.slice(0, -1)
        : SITE_URL;

    return [
        {
            url: normalizedUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
