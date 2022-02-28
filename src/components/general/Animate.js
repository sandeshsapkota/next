import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



function Animate(props) {
    useEffect(() => {
        AOS.init({
            duration: 5000
        });
    }, []);

    return (
        <div data-aos='fade-up' duration={300}>
            {props.children}
        </div>
    )
}

export default Animate