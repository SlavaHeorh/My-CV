import Linkedin from "@/components/icons/linkedin";
import Github from "@/components/icons/github";

export default function Social() {
    return (
        <div className="social">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/viachaslaukazliakouski/">
                <Linkedin/>
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/SlavaHeorh">
                <Github/>
            </a>
        </div>
    )
}