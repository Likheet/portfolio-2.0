import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/data';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://likheet.is-a.dev';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const normalizedUrl = SITE_URL.endsWith('/')
        ? SITE_URL.slice(0, -1)
        : SITE_URL;

    const projectUrls: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
        url: `${normalizedUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: normalizedUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${normalizedUrl}/archive`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        ...projectUrls,
    ];
}
