import Link from "next/link";

function Header() {
    return (
        <header>
            <div className="container py-4 flex justify-between items-center">
                <Link href='/'><a className="font-poppins font-extrabold text-[26px] text-blue">Taskia</a></Link>
                <Link href='#'><a className="cta-btn">Try free</a></Link>
            </div>
        </header>
    );
}

export default Header;