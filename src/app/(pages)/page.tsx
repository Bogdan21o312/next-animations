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
    const rippleRef = useRippleEffect({ });
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
                <div ref={rippleRef}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias asperiores eius eveniet explicabo ipsam ipsum iusto laudantium mollitia neque, nihil officia praesentium quae quis repellat sint, temporibus, ullam ut?
                </div>
            </div>
        </>
    )
}
