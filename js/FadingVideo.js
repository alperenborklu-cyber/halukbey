const { useEffect, useRef } = React;

function FadingVideo({ src, className, style }) {
    const videoRef = useRef(null);
    const rafIdRef = useRef(null);
    const fadingOutRef = useRef(false);
    const FADE_MS = 500;
    const FADE_OUT_LEAD = 0.55;

    const fadeTo = (targetOpacity, durationMs) => {
        if (rafIdRef.current) {
            cancelAnimationFrame(rafIdRef.current);
        }

        const video = videoRef.current;
        if (!video) return;

        const startOpacity = parseFloat(video.style.opacity) || 0;
        const opacityDiff = targetOpacity - startOpacity;
        
        const startTime = performance.now();

        const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / durationMs, 1);
            video.style.opacity = startOpacity + opacityDiff * progress;

            if (progress < 1) {
                rafIdRef.current = requestAnimationFrame(animate);
            }
        };

        rafIdRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Initialize opacity
        video.style.opacity = "0";

        const handleLoadedData = () => {
            video.style.opacity = "0";
            video.play().catch(err => console.log("Playback prevented:", err));
            fadeTo(1, FADE_MS);
        };

        const handleTimeUpdate = () => {
            const duration = video.duration;
            const currentTime = video.currentTime;
            
            if (duration && duration > 0) {
                const remaining = duration - currentTime;
                if (!fadingOutRef.current && remaining <= FADE_OUT_LEAD && remaining > 0) {
                    fadingOutRef.current = true;
                    fadeTo(0, FADE_MS);
                }
            }
        };

        const handleEnded = () => {
            video.style.opacity = "0";
            setTimeout(() => {
                if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play().catch(err => console.log("Playback prevented on loop:", err));
                    fadingOutRef.current = false;
                    fadeTo(1, FADE_MS);
                }
            }, 100);
        };

        video.addEventListener('loadeddata', handleLoadedData);
        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('ended', handleEnded);

        // If video already has loaded metadata (or is already loaded), trigger manually
        if (video.readyState >= 3) {
            handleLoadedData();
        }

        return () => {
            if (rafIdRef.current) {
                cancelAnimationFrame(rafIdRef.current);
            }
            video.removeEventListener('loadeddata', handleLoadedData);
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('ended', handleEnded);
        };
    }, [src]);

    return (
        <video
            ref={videoRef}
            src={src}
            className={className}
            style={style}
            autoPlay
            muted
            playsInline
            preload="auto"
        />
    );
}

window.FadingVideo = FadingVideo;
