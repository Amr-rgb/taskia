import Link from "next/link";

function Header() {
    return (
        <header>
            <div className="container py-4 flex justify-between items-center md:py-6">
                <Link href='/'><a className="font-poppins font-extrabold text-[26px] text-blue md:text-[35px] 2xl:text-[47px] ">Taskia</a></Link>
                <Link href='#'><a className="cta-btn">Try free</a></Link>
            </div>
        </header>
    );
}

export default Header;