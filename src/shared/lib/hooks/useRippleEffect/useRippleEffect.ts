import { useEffect, useRef, RefObject } from 'react';
import {TypeRippleOptions} from "@/shared/lib/hooks/useRippleEffect/types";

export const useRippleEffect = ({ color = "white" }: TypeRippleOptions): RefObject<HTMLElement> => {
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = elementRef.current;

        if (element) {
            const handleMouseDown = (event: MouseEvent) => {
                const elementRect = element.getBoundingClientRect();
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.backgroundColor = color;
                ripple.style.borderRadius = '50%';
                ripple.style.transform = 'scale(0)';
                ripple.style.pointerEvents = 'none';

                const { clientX, clientY } = event;
                const offsetX = clientX - elementRect.left;
                const offsetY = clientY - elementRect.top;
                const size = Math.max(element.offsetWidth, element.offsetHeight);
                const halfSize = size / 2;

                ripple.style.width = `${size}px`;
                ripple.style.height = `${size}px`;
                ripple.style.left = `${offsetX - halfSize}px`;
                ripple.style.top = `${offsetY - halfSize}px`;

                element.appendChild(ripple);

                ripple.animate(
                    [
                        { transform: 'scale(0)', opacity: '1' },
                        { transform: 'scale(1)', opacity: '0' }
                    ],
                    {
                        duration: 800,
                        easing: 'ease-out'
                    }
                );

                setTimeout(() => {
                    element.removeChild(ripple);
                }, 800);
            };

            element.addEventListener('mousedown', handleMouseDown);

            return () => {
                element.removeEventListener('mousedown', handleMouseDown);
            };
        }
    }, [color]);

    return elementRef;
};
