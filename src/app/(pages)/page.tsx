"use client"

import {useParallaxMouseEffect, useRippleEffect, useScrollAnimation, useSmoothScroll} from "@/shared";
import {useRef} from "react";

export default function Home() {
    const parallaxRef = useParallaxMouseEffect({
        strength: 0.02,
        horizontal: true,
        vertical: true,
        reverse: false,
    });
    const parallaxRef2 = useParallaxMouseEffect({reverse: true,});
    const rippleRef = useRippleEffect({ centered: true });
    const elementRef = useScrollAnimation({});
    const scrollToElement = useSmoothScroll();
    const myElementRef = useRef(null);

    const handleClick = () => {
        scrollToElement('myElement'); // Плавна навігація до елемента з ідентифікатором 'myElement'
    };
    return (
        <>
            <header style={{background: 'red', height: '100px', position: "fixed"}}>
                header
            </header>
            <button onClick={handleClick}>Scroll to Element</button>
            <div id={"div"} ref={parallaxRef} className="parallax-element">
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
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div ref={elementRef}>Анімований елемент</div>;
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div ref={myElementRef} id="myElement">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi corporis cumque error in ipsum magni natus nesciunt nihil nobis quas ratione reiciendis, similique, suscipit, voluptatem. Dolorem nostrum officia quis!
            </div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
            <div><br/></div>
        </>
    )
}
