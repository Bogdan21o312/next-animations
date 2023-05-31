import { useEffect, useRef, RefObject } from 'react';

type RippleOptions = {
    color: string;
};

export const useRippleEffect = ({ color }: RippleOptions): RefObject<HTMLButtonElement> => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const button = buttonRef.current;

        if (button) {
            const handleMouseDown = (event: MouseEvent) => {
                const buttonRect = button.getBoundingClientRect();
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.backgroundColor = color;
                ripple.style.borderRadius = '50%';
                ripple.style.transform = 'scale(0)';
                ripple.style.pointerEvents = 'none';

                const { clientX, clientY } = event;
                const offsetX = clientX - buttonRect.left;
                const offsetY = clientY - buttonRect.top;
                const size = Math.max(button.offsetWidth, button.offsetHeight);
                const halfSize = size / 2;

                ripple.style.width = `${size}px`;
                ripple.style.height = `${size}px`;
                ripple.style.left = `${offsetX - halfSize}px`;
                ripple.style.top = `${offsetY - halfSize}px`;

                button.appendChild(ripple);

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
                    button.removeChild(ripple);
                }, 800);
            };

            button.addEventListener('mousedown', handleMouseDown);

            return () => {
                button.removeEventListener('mousedown', handleMouseDown);
            };
        }
    }, [color]);

    return buttonRef;
};
