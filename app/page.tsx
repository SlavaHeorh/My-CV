import Image from 'next/image';
import MePhoto from '/public/images/kvg.webp'

export default function Home() {
    return (
        <section className="left-side-cv">
        <h1 className="home-cv-title">Hello there!</h1>
            <div className="home-cv-left">
                <div className="home-cv-left__image-wrapper">
                    <Image
                    className="home-cv-left__image"
                    src={MePhoto}
                    width={250}
                    height={250}
                    alt="main photo CV"/>
                </div>
                <div>
                    <h2 className="home-cv-left__second-name">Viachaslau</h2>
                    <h2 className="home-cv-left__first-name">Kazliakouski</h2>
                    <p className="home-cv-left__job-title">Front-end developer</p>
                </div>
            </div>
            <div className="home-cv-right">
                <p className="home-cv-right__text-resume">I am trying to create a resume <br/> that shows what <br/> I am capable of.</p>
                <p className="home-cv-right__text-motivated">Extremely motivated <br/> to be a part of your company <br/> to make projects together with your team.</p>
            </div>
        </section>
    )
}
