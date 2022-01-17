import Image from "next/image";
import Link from "next/link";

function Feature1() {
    return (
        <div className="flex flex-col items-center gap-8">
            <div className="image">
                <Image src='/screen.png' width={726} height={454} />
            </div>

            <div className="flex flex-col items-center gap-4 text-center">
                <h2>Why do you need<br />task management software?</h2>
                <p className="text">Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.</p>
                <Link href='#'><a className="btn mt-8">Learn more</a></Link>
            </div>
        </div>
    );
}

export default Feature1;