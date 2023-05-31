import {useEffect, useRef} from "react";

export const useSmoothScroll = () => {
    const targetRef = useRef<HTMLElement | null>(null);

    const scrollToElement = (id: string) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetRef.current = targetElement;
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (targetRef.current) {
                targetRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };

        window.addEventListener('hashchange', handleScroll);

        return () => {
            window.removeEventListener('hashchange', handleScroll);
        };
    }, []);

    return scrollToElement;
};
