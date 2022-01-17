import Image from "next/image";

function Services() {
    return (
        <section className="services-section my-16">
            <div className="container">
                <h2 className="text-center mb-16">Featured Service that We Provide</h2>

                <div className="cards-container flex flex-col items-center gap-8">

                    <div className="card bg-blue text-white flex flex-col items-center text-center p-8 rounded-lg max-w-xs">
                        <div className="image">
                            <Image src='/tea.png' width={269} height={220} />
                        </div>

                        <h3 className="text-white -mt-10 mb-4">Keep tasks in<br />one place</h3>
                        <p className="font-muli font-bold text-xs">Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</p>
                    </div>

                    <div className="card bg-cyan flex flex-col items-center text-center p-8 rounded-lg max-w-xs">
                        <div className="image">
                            <Image src='/wallet.png' width={260} height={209} />
                        </div>

                        <h3 className="-mt-8 mb-4">Keep tasks in<br />one place</h3>
                        <p className="font-muli font-bold text-xs">Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</p>
                    </div>

                    <div className="card bg-yellow flex flex-col items-center text-center p-8 rounded-lg max-w-xs">
                        <div className="image">
                            <Image src='/pocket-knief.png' width={314} height={240} />
                        </div>

                        <h3 className="-mt-8 mb-4">Keep tasks in<br />one place</h3>
                        <p className="font-muli font-bold text-xs">Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Services;