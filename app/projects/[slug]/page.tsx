import { notFound } from 'next/navigation';
import ProjectDetails from './_components/ProjectDetails';
import { PROJECTS } from '@/lib/data';
import { Metadata } from 'next';

export const generateStaticParams = async () => {
    return PROJECTS.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const project = PROJECTS.find((project) => project.slug === slug);

    const title = `${project?.title} - ${project?.techStack
        .slice(0, 3)
        .join(', ')}`;
    // The opening sentence, without the description's HTML list.
    const description = project?.description
        .split('<ul>')[0]
        .replace(/<[^>]+>/g, '')
        .trim();
    const image = project?.longThumbnail || project?.thumbnail;

    return {
        title,
        description,
        openGraph: {
            type: 'website',
            url: `/projects/${slug}`,
            title,
            description,
            images: image ? [{ url: image }] : undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: image ? [image] : undefined,
        },
    } as Metadata;
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) {
        return notFound();
    }

    return <ProjectDetails project={project} />;
};

export default Page;
