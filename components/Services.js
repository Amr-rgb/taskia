import Image from "next/image";

function Services() {
    return (
        <section className="services-section my-16 md:my-24">
            <div className="container">
                <h2 className="text-center mb-16 md:mb-20">Featured Service that We Provide</h2>

                <div className="cards-container flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-center lg:flex-nowrap 2xl:gap-16">

                    <div className="card bg-blue text-white flex flex-col items-center text-center p-8 rounded-lg max-w-xs">
                        <div className="image">
                            <Image src='/tea.png' width={269} height={220} />
                        </div>

                        <h3 className="text-white -mt-8 mb-6">Keep tasks in<br />one place</h3>
                        <p className="font-muli font-bold text-xs md:text-sm">Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</p>
                    </div>

                    <div className="card bg-cyan flex flex-col items-center text-center p-8 rounded-lg max-w-xs lg:mt-32">
                        <div className="image">
                            <Image src='/wallet.png' width={260} height={209} />
                        </div>

                        <h3 className="-mt-6 mb-7">Keep tasks in<br />one place</h3>
                        <p className="font-muli font-bold text-xs md:text-sm">Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</p>
                    </div>

                    <div className="card bg-yellow flex flex-col items-center text-center p-8 rounded-lg max-w-xs lg:mt-12">
                        <div className="image">
                            <Image src='/pocket-knief.png' width={314} height={240} />
                        </div>

                        <h3 className="-mt-7 mb-6">Keep tasks in<br />one place</h3>
                        <p className="font-muli font-bold text-xs md:text-sm">Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Services;