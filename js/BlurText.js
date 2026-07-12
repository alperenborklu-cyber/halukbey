const { useEffect, useRef, useState } = React;

function BlurText({ text, className }) {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, we can unobserve if we only want animate-once behavior
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const words = text.split(" ");

    return (
        <p
            ref={containerRef}
            className={className}
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                rowGap: "0.1em"
            }}
        >
            {words.map((word, i) => {
                const delay = i * 0.1; // (i * 100) / 1000 seconds
                return (
                    <Motion.motion.span
                        key={i}
                        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
                        animate={
                            isVisible
                                ? {
                                      filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
                                      opacity: [0, 0.5, 1],
                                      y: [50, -5, 0]
                                  }
                                : {}
                        }
                        transition={{
                            duration: 0.7,
                            times: [0, 0.5, 1],
                            ease: "easeOut",
                            delay: delay
                        }}
                        style={{
                            display: "inline-block",
                            marginRight: "0.28em"
                        }}
                    >
                        {word}
                    </Motion.motion.span>
                );
            })}
        </p>
    );
}

window.BlurText = BlurText;
