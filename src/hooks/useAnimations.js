

// src/hooks/useAnimations.js

export default function useAnimations() {
    const bannerVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: 'easeOut' }
        }
    };

    const contactVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: 'easeInOut' }
        }
    };

    const aboutVariants = {
        hidden: { opacity: 0, rotateY: -90 },
        visible: {
            opacity: 1,
            rotateY: 0,
            transition: { duration: 0.9, ease: 'easeOut' }
        }
    };

    const forYouContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const forYouItem = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    const footerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: 'easeInOut' }
        }
    };

    return {
        bannerVariants,
        contactVariants,
        aboutVariants,
        forYouContainer,
        forYouItem,
        footerVariants
    };
}
