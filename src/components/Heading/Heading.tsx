import React from "react";
import "./Heading.scss"
import {SiInstagram, SiSoundcloud, SiTwitter} from "react-icons/all";
import gsap, {Power3} from "gsap";

export const Heading: React.FC = () => {
    const headingRef = React.useRef<HTMLHeadingElement>(null)
    const headingUnderlineRef = React.useRef<HTMLDivElement>(null)
    const instagramRef = React.useRef<HTMLAnchorElement>(null)
    const twitterRef = React.useRef<HTMLAnchorElement>(null)
    const soundCloudRef = React.useRef<HTMLAnchorElement>(null)

    const [tl] = React.useState(gsap.timeline({delay: .5}))

    React.useEffect(() => {
        tl
            .from([headingRef.current], {
                y: 30,
                opacity: 0,
                ease: Power3.easeInOut,
                duration: 1.5
            })
            .from([headingUnderlineRef.current], {
                y: 30,
                opacity: 0,
                delay: -1.4,
                ease: Power3.easeInOut,
                duration: 1.5,
            })
            .from([instagramRef.current, twitterRef.current, soundCloudRef.current], {
                y: 30,
                opacity: 0,
                ease: Power3.easeInOut,
                stagger: .2,
                delay: -1.2,
                duration: 1,
            },)
    }, [tl])

    return (
        <header className={"header"}>
            <div className="heading-box">
                <h1 ref={headingRef} className={"heading"}>
                    Berkay Benzer
                </h1>

                <div ref={headingUnderlineRef} className={"heading-underline"}/>
            </div>
            <div className={"social"}>

                <a
                    ref={instagramRef}
                    className={"social-link"}
                    href={"https://instagram.com/berkayybenzer"}
                    target={"_blank"}
                    rel={"noreferrer"}
                >
                    <div
                        className={"social-box"}
                    >
                        <SiInstagram/>
                    </div>
                </a>
                <a
                    ref={twitterRef}
                    className={"social-link"}
                    href={"https://twitter.com/BerkayBenzer262"}
                    target={"_blank"}
                    rel={"noreferrer"}
                >
                    <div
                        className={"social-box"}
                    >
                        <SiTwitter/>
                    </div>
                </a>
                <a
                    ref={soundCloudRef}
                    className={"social-link"}
                    href={"https://soundcloud.com/berkay-benzer-172219444"}
                    target={"_blank"}
                    rel={"noreferrer"}
                >
                    <div
                        className={"social-box"}
                    >
                        <SiSoundcloud/>
                    </div>
                </a>


            </div>
        </header>
    )
}