import { useEffect, useRef, RefObject } from 'react';

type ParallaxOptions = {
    strength?: number;
    horizontal?: boolean;
    vertical?: boolean;
    reverse?: boolean;
};

export const useParallaxMouseEffect = ({
                                           strength = 0.01,
                                           horizontal = true,
                                           vertical = true,
                                           reverse = false,
                                       }: ParallaxOptions): RefObject<HTMLDivElement> => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;

        if (element) {
            const handleMouseMove = (event: MouseEvent) => {
                const mouseX = event.clientX;
                const mouseY = event.clientY;

                let xTranslate = 0;
                let yTranslate = 0;

                if (horizontal) {
                    xTranslate = reverse ? -mouseX * strength : mouseX * strength;
                }

                if (vertical) {
                    yTranslate = reverse ? -mouseY * strength : mouseY * strength;
                }

                element.style.transform = `translate(${xTranslate}px, ${yTranslate}px)`;
            };

            document.addEventListener('mousemove', handleMouseMove);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, [strength, horizontal, vertical, reverse]);

    return elementRef;
};
