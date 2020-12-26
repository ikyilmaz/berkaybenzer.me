import React from 'react';
import './App.scss';
import gsap, {Expo} from 'gsap';
import {Heading} from "./components/Heading/Heading";
import {AboutMe} from "./components/AboutMe/AboutMe";
import {NavBar} from "./components/NavBar/NavBar";

function App() {
    const firstSlideRef = React.useRef<HTMLDivElement>(null)
    const secondSlideRef = React.useRef<HTMLDivElement>(null)
    const [tl] = React.useState(gsap.timeline())

    React.useEffect(() => {
        tl
            .to([firstSlideRef.current], {scaleY: 0, ease: Expo.easeInOut, duration: 1.5})
            .to([secondSlideRef.current], {scaleY: 0, ease: Expo.easeInOut, duration: 1.5,}, "-=1.4")
    }, [tl])


    return (
        <div className={"container"}>
            <div className={"app"}>
                {/*Right Side Navigation*/}
                <NavBar/>
                {/*Right Side Navigation*/}

                {/*Animation*/}
                <div ref={secondSlideRef} className={"slide-out second-slide-out"}/>
                <div ref={firstSlideRef} className={"slide-out first-slide-out"}/>
                {/*Animation*/}

                {/*Heading*/}
                <Heading/>
                {/*Heading*/}

                {/*About Me*/}
                <AboutMe/>
                {/*About Me*/}
            </div>
            <div className={"nav-wrapper"}>
                <NavBar/>

            </div>

        </div>
    );
}

export default App;
