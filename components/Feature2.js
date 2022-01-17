import Image from "next/image";
import Link from "next/link";

function Feature2() {
    return (
        <div className="flex flex-col items-center gap-8 lg:flex-row-reverse lg:gap-0 2xl:gap-16 2xl:justify-end">
            <div className="image lg:translate-x-1/3 2xl:translate-x-0">
                <Image src='/graphs.png' width={717} height={547} />
            </div>

            <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left lg:flex-1 lg:-mr-48 2xl:mr-0">
                <h2>Seamless Team Workflow & Efficient Task Management</h2>
                <p className="text">Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.</p>
                <div className="apps flex items-center gap-4 mt-6">
                    <Link href='#'><a>
                        <div className="image w-8">
                            <Image src='/apple.png' width={46} height={55} />
                        </div>
                    </a></Link>
                    <Link href='#'><a>
                        <div className="image w-20">
                            <Image src='/play.png' width={122} height={81} />
                        </div>
                    </a></Link>
                </div>
            </div>
        </div>
    );
}

export default Feature2;