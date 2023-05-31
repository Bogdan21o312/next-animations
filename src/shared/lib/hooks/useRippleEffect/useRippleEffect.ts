import { useEffect, useRef, RefObject } from 'react';
import { TypeRippleOptions } from "@/shared/lib/hooks/useRippleEffect/types";

export const useRippleEffect = ({ color = "white", centered = false }: TypeRippleOptions): RefObject<HTMLElement> => {
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

                if (centered) {
                    ripple.style.left = `${element.offsetWidth / 2 - halfSize}px`;
                    ripple.style.top = `${element.offsetHeight / 2 - halfSize}px`;
                } else {
                    ripple.style.left = `${offsetX - halfSize}px`;
                    ripple.style.top = `${offsetY - halfSize}px`;
                }

                ripple.style.width = `${size}px`;
                ripple.style.height = `${size}px`;

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

            if (!centered) {
                element.addEventListener('mousedown', handleMouseDown);

                return () => {
                    element.removeEventListener('mousedown', handleMouseDown);
                };
            } else {
                const interval = setInterval(() => {
                    const event = new MouseEvent('mousedown', {
                        clientX: element.offsetWidth / 2,
                        clientY: element.offsetHeight / 2
                    });
                    handleMouseDown(event);
                }, 800);

                return () => {
                    clearInterval(interval);
                };
            }
        }
    }, [color, centered]);

    return elementRef;
};
