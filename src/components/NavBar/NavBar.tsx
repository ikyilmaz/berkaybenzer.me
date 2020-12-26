import React from "react";
import "./NavBar.scss"
import {useTranslation} from "react-i18next";
import gsap, {Expo} from "gsap";

export const NavBar: React.FC = () => {
    const navRef = React.useRef<HTMLElement>(null)
    const [t] = useTranslation();
    const [tl] = React.useState(gsap.timeline())

    React.useEffect(() => {
        tl
            .from([navRef.current], {
                x: 200,
                ease: Expo.easeInOut,
                opacity: 0,
                duration: 1.5,
                delay: 1
            })
    }, [tl])


    return (
        <nav ref={navRef} id={"nav"} className={"nav"}>
            <ul className={"nav-list"}>
                <li className={"nav-list-item"}>
                    <a href="#">
                        {t('navigation.music')}
                    </a>

                </li>
                <li className={"nav-list-item"}>
                    <a href="#">
                        {t('navigation.aboutMe')}
                    </a>

                </li>
                <li className={"nav-list-item"}>
                    <a href="#">
                        {t('navigation.contact')}
                    </a>

                </li>
            </ul>
        </nav>
    )
}