import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-dark text-white relative">
            <div className="grain-overlay" />

            <header className="relative z-10 px-6 lg:px-10 py-6 flex items-center justify-between">
                <Link to="/" className="font-display font-bold text-xl text-text-primary tracking-tight">
                    BRNNO
                </Link>
                <Link to="/" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                    Back to home
                </Link>
            </header>

            <main className="relative z-10 px-6 lg:px-10 pb-20 pt-8">
                <div className="max-w-4xl mx-auto">
                    <p className="label-mono text-text-secondary mb-4">ABOUT</p>
                    <h1 className="headline-lg text-white mb-6">About BRNNO</h1>

                    <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                        <p>
                            BRNNO was built on a simple idea — getting your car professionally detailed shouldn&apos;t be
                            complicated.
                        </p>
                        <p>
                            We connect car owners with vetted, professional detailers who come to them. No driving across
                            town, no waiting rooms, no guesswork. Just a clean car at your door.
                        </p>
                        <p>
                            We&apos;re building the platform that makes on-demand detailing effortless for customers and
                            gives detailers the tools to run and grow a real business — all in one place.
                        </p>
                    </div>

                    <div className="mt-12 glass-card p-8 border border-white/5">
                        <p className="label-mono text-text-secondary mb-3">OUR MISSION</p>
                        <p className="text-white text-xl leading-relaxed">
                            To make professional auto detailing accessible, reliable, and completely on your terms.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AboutPage;
