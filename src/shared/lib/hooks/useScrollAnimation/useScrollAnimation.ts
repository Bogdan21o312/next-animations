import {useEffect, useRef} from 'react';
import {TypeScrollOptions} from "@/shared/lib/hooks/useScrollAnimation/types";

export const useScrollAnimation = ({className = 'fade-in', enableAnimation = true}: TypeScrollOptions) => {
    const elementRef = useRef<HTMLBaseElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = elementRef.current;
            if (!element) return;

            const {top, bottom} = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (top < windowHeight && bottom > 0) {
                element.classList.add(className);
            } else {
                if (!enableAnimation) {
                    element.classList.remove(className);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [className]);

    return elementRef;
};

