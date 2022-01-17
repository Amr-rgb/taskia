import Image from "next/image";
import Link from "next/link";

function Feature2() {
    return (
        <div className="flex flex-col items-center gap-8">
            <div className="image">
                <Image src='/graphs.png' width={726} height={454} />
            </div>

            <div className="flex flex-col items-center gap-4 text-center">
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