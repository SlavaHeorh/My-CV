'use client'

import Link from "next/link";
import Social from "@/components/Social";
import {usePathname} from "next/navigation";

export default function RightSideBar() {

    const pathname = usePathname()

    return (
        <div className="right-side-cv nav-bar">
            <Link
                className={pathname == "/" ? "nav-bar__home nav-bar__hover active" : "nav-bar__home nav-bar__hover"}
                href="/">
                Home
            </Link>
            <Link
                className={pathname == "/about-me" ? "nav-bar__about nav-bar__hover active" : "nav-bar__about nav-bar__hover"}
                href="/about-me">
                About me
            </Link>
            <Link
                className={pathname == "/skills" ? "nav-bar__skills nav-bar__hover active" : "nav-bar__skills nav-bar__hover"}
                href="/skills">
                Skills
            </Link>
            <Link
                className={pathname == "/experience" ? "nav-bar__exp nav-bar__hover active" : "nav-bar__exp nav-bar__hover"}
                href="/experience">
                Experience
            </Link>
            <Link
                className={pathname == "/education" ? "nav-bar__edu nav-bar__hover active" : "nav-bar__edu nav-bar__hover"}
                href="/education">
                Education
            </Link>
            <Link
                className={pathname == "/portfolio" ? "nav-bar__port nav-bar__hover active" : "nav-bar__port nav-bar__hover"}
                href="/portfolio">
                Portfolio
            </Link>
            <Link
                className={pathname == "/contact" ? "nav-bar__contact nav-bar__hover active" : "nav-bar__contact nav-bar__hover"}
                href="/contact">
                Contact
            </Link>
            <Link
                className={pathname == "/blog" ? "nav-bar__blog nav-bar__hover active" : "nav-bar__blog nav-bar__hover"}
                href="/blog">
                Blog
            </Link>
            <Link
                className={pathname == "/my-pdf" ? "nav-bar__pdf nav-bar__hover active" : "nav-bar__pdf nav-bar__hover"}
                href="/my-pdf">
                My resume.pdf
            </Link>
            <Social/>
        </div>
    )
}