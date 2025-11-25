import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center pb-5">
            <div className="container">
                <p className="text-lg">Have an AI idea worth prototyping?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="flex justify-center gap-8 items-center">
                    {SOCIAL_LINKS.filter(link => link.name !== 'Resume').map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-portfolio-red transition-colors duration-300 text-sm uppercase tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
