"use client"

import {useParallaxMouseEffect, useRippleEffect} from "@/shared";

export default function Home() {
    const parallaxRef = useParallaxMouseEffect({
        strength: 0.02,
        horizontal: true,
        vertical: true,
        reverse: false,
    });
    const parallaxRef2 = useParallaxMouseEffect({reverse: true,});
    const rippleRef = useRippleEffect({ centered: false });
    return (
        <>
            <div ref={parallaxRef} className="parallax-element">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam at consectetur, distinctio dolores
                dolorum eum expedita harum hic illum iste nobis nulla optio quia, quidem rerum temporibus velit, voluptates.
            </div>
            <div ref={parallaxRef2} className="parallax-element">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam at consectetur, distinctio dolores
                dolorum eum expedita harum hic illum iste nobis nulla optio quia, quidem rerum temporibus velit, voluptates.
            </div>
            <div style={{ position: 'relative' }}>
                <div >
                    <span ref={rippleRef}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto assumenda aut consequatur deserunt eius harum ipsum labore magni minus modi nam necessitatibus nostrum praesentium qui quos rerum, totam voluptatem.</span>
                </div>
            </div>
        </>
    )
}
