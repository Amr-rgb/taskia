import Link  from "next/link";

function Footer() {
    return (
        <footer className="my-16 mt-32 text-center">
            <div className="container">
                <h2>Get better work done</h2>
                <p className="mt-2 font-muli font-light text-xs">See why millions of people across 195<br />countries use Dash.</p>

                <div className="email-input mt-6">
                    <input className="w-full mb-2" type="text" placeholder="Name@company.com" />
                    <Link href='#'><a className="btn">Try it free</a></Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;