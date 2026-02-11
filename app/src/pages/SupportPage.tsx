import { Link } from 'react-router-dom';

const SupportPage = () => {
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
                <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
                    <div>
                        <p className="label-mono text-text-secondary mb-4">SUPPORT</p>
                        <h1 className="headline-lg text-white mb-6">How can we help?</h1>
                        <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-xl">
                            Tell us what you need and our team will get back to you. This form opens your email client and sends to
                            support@brnno.com.
                        </p>

                        <div className="glass-card p-6 border border-white/5">
                            <p className="text-sm text-text-secondary mb-2">Prefer email?</p>
                            <a
                                href="mailto:support@brnno.com"
                                className="text-white font-medium hover:text-yellow transition-colors"
                            >
                                support@brnno.com
                            </a>
                            <p className="text-sm text-text-secondary mt-4">
                                Typical response time: within 1 business day.
                            </p>
                        </div>
                    </div>

                    <form
                        className="glass-card p-8 border border-white/5 space-y-5"
                        action="mailto:support@brnno.com"
                        method="post"
                        encType="text/plain"
                    >
                        <div className="space-y-2">
                            <label className="text-sm text-text-secondary" htmlFor="name">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="Your full name"
                                className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-text-secondary focus:border-yellow/60 focus:outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-text-secondary" htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="you@email.com"
                                className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-text-secondary focus:border-yellow/60 focus:outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-text-secondary" htmlFor="topic">Topic</label>
                            <input
                                id="topic"
                                name="topic"
                                type="text"
                                placeholder="Booking, billing, service, other"
                                className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-text-secondary focus:border-yellow/60 focus:outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-text-secondary" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                placeholder="Tell us how we can help."
                                className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-text-secondary focus:border-yellow/60 focus:outline-none"
                            />
                        </div>

                        <button type="submit" className="btn-accent w-full py-3 text-base">
                            Send message
                        </button>
                        <p className="text-xs text-text-secondary">
                            Submitting opens your email client with the message ready to send.
                        </p>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default SupportPage;
