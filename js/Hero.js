const ArrowUpRight = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M7 7h10v10"></path>
    </svg>
);

const PlayIcon = () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <polygon points="6,4 20,12 6,20"></polygon>
    </svg>
);

const ClockIcon = () => (
    <svg className="w-[28px] h-[28px] text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const GlobeIcon = () => (
    <svg className="w-[28px] h-[28px] text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.905 0-5.54-.782-7.843-2.14M21 14.25a15.621 15.621 0 01-18 0" />
    </svg>
);

function Hero() {
    return (
        <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col justify-between">
            {/* Background Looping Video with 120% scale */}
            <window.FadingVideo
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
                className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
                style={{ width: "120%", height: "120%" }}
            />

            {/* Navbar (fixed top) */}
            <header className="fixed top-4 left-0 right-0 px-8 lg:px-16 z-50 flex items-center justify-between pointer-events-none">
                {/* Logo */}
                <div className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center font-heading italic text-2xl text-white pointer-events-auto">
                    a
                </div>

                {/* Desktop Center Links */}
                <div className="hidden md:flex items-center gap-1 liquid-glass rounded-full p-1.5 pointer-events-auto">
                    {["Home", "Voyages", "Worlds", "Innovation", "Plan Launch"].map((link) => (
                        <a key={link} href="#" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">
                            {link}
                        </a>
                    ))}
                    <button className="flex items-center gap-1.5 px-4 py-2 bg-white text-black text-sm font-medium rounded-full whitespace-nowrap hover:bg-white/90 transition-colors ml-2">
                        Claim a Spot <ArrowUpRight />
                    </button>
                </div>

                {/* Right spacer */}
                <div className="w-12 h-12 opacity-0 pointer-events-none" />
            </header>

            {/* Hero Main Content */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-32 px-4 text-center">
                {/* Badge */}
                <Motion.motion.div
                    initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    className="liquid-glass rounded-full p-1 pr-3 flex items-center gap-3 max-w-md"
                >
                    <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full">New</span>
                    <span className="text-sm text-white/90 font-body">Maiden Crewed Voyage to Mars Arrives 2026</span>
                </Motion.motion.div>

                {/* Headline using BlurText */}
                <window.BlurText
                    text="Venture Past Our Sky Across the Universe"
                    className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl justify-center tracking-[-4px] mt-6"
                />

                {/* Subheading */}
                <Motion.motion.div
                    initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                    className="mt-6 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
                >
                    Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach—secure and extraordinary.
                </Motion.motion.div>

                {/* CTAs */}
                <Motion.motion.div
                    initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
                    className="flex items-center gap-6 mt-8"
                >
                    <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-colors">
                        <span>Start Your Voyage</span>
                        <ArrowUpRight />
                    </button>
                    <a href="#" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors text-sm font-medium font-body">
                        <span>View Liftoff</span>
                        <PlayIcon />
                    </a>
                </Motion.motion.div>

                {/* Stats Row */}
                <Motion.motion.div
                    initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 1.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
                >
                    {/* Card 1 */}
                    <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left flex flex-col justify-between h-[150px]">
                        <ClockIcon />
                        <div className="mt-4">
                            <div className="text-4xl font-heading italic text-white tracking-[-1px] leading-none">34.5 Min</div>
                            <div className="text-xs text-white font-body font-light mt-2">Average Videos Watch Time</div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left flex flex-col justify-between h-[150px]">
                        <GlobeIcon />
                        <div className="mt-4">
                            <div className="text-4xl font-heading italic text-white tracking-[-1px] leading-none">2.8B+</div>
                            <div className="text-xs text-white font-body font-light mt-2">Users Across the Globe</div>
                        </div>
                    </div>
                </Motion.motion.div>
            </div>

            {/* Partners footer */}
            <Motion.motion.div
                initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
                className="relative z-10 flex flex-col items-center gap-4 pb-8"
            >
                <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
                    Collaborating with top aerospace pioneers globally
                </div>
                <div className="flex items-center justify-center gap-8 md:gap-16 text-2xl md:text-3xl text-white font-heading italic tracking-tight">
                    <span>Aeon</span>
                    <span>·</span>
                    <span>Vela</span>
                    <span>·</span>
                    <span>Apex</span>
                    <span>·</span>
                    <span>Orbit</span>
                    <span>·</span>
                    <span>Zeno</span>
                </div>
            </Motion.motion.div>
        </section>
    );
}

window.Hero = Hero;
