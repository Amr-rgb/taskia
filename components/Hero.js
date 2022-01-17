import Image from "next/image";
import Link from "next/link";

function Hero() {
    return (
        <header className="hero-section py-16 lg:py-24">
            <div className="container flex flex-col-reverse items-center gap-10 md:items-start lg:flex-row lg:justify-between lg:items-center">
                <div className="left text-center flex flex-col gap-4 md:text-left">
                    <h1 className="lg:w-max">Task management<br />and lists Tool</h1>
                    <p className="subhead max-w-lg">We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.</p>

                    <div className="email-input mt-10 lg:w-max">
                        <input className="w-full mb-2 md:w-auto md:mb-0 md:mr-4" type="text" placeholder="Name@company.com" />
                        <Link href='#'><a className="btn">Try it free</a></Link>
                    </div>
                </div>

                <div className="image w-11/12 md:max-w-sm lg:scale-150 lg:-z-10 2xl:scale-100 2xl:max-w-none">
                    <Image src='/hero-illustration.png' width={897} height={826} />
                </div>
            </div>
        </header>
    );
}

export default Hero;