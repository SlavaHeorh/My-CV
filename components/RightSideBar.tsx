import Link from "next/link";
import Social from "@/components/Social";

export default function RightSideBar() {
    return (
        <div className="right-side-cv nav-bar">
            <Link
                className="nav-bar__home nav-bar__hover"
                href="/">
                Home
            </Link>
            <Link
                className="nav-bar__about nav-bar__hover"
                href="/about-me">
                About me
            </Link>
            <Link
                className="nav-bar__skills nav-bar__hover"
                href="/skills">
                Skills
            </Link>
            <Link
                className="nav-bar__exp nav-bar__hover"
                href="/experience">
                Experience
            </Link>
            <Link
                className="nav-bar__edu nav-bar__hover"
                href="/education">
                Education
            </Link>
            <Link
                className="nav-bar__port nav-bar__hover"
                href="/portfolio">
                Portfolio
            </Link>
            <Link
                className="nav-bar__contact nav-bar__hover"
                href="/contact">
                Contact
            </Link>
            <Link
                className="nav-bar__blog nav-bar__hover"
                href="/blog">
                Blog
            </Link>
            <Link
                className="nav-bar__pdf nav-bar__hover"
                href="/my-pdf">
                My resume.pdf
            </Link>
            <Social/>
        </div>
    )
}