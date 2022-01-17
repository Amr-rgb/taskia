import Image from "next/image";
import Link from "next/link";

function Hero() {
    return (
        <header className="hero-section py-16">
            <div className="container flex flex-col-reverse items-center gap-10">
                <div className="left text-center flex flex-col gap-4">
                    <h1>Task management<br />and lists Tool</h1>
                    <p className="subhead">We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.</p>

                    <div className="email-input mt-10">
                        <input className="w-full mb-2" type="text" placeholder="Name@company.com" />
                        <Link href='#'><a className="btn">Try it free</a></Link>
                    </div>
                </div>

                <div className="image w-11/12">
                    <Image src='/hero-illustration.png' width={897} height={826} />
                </div>
            </div>
        </header>
    );
}

export default Hero;