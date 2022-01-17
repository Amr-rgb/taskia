import Feature1 from "./Feature1";
import Feature2 from "./Feature2";

function Features() {
    return (
        <section className="features-section my-16 mt-24">
            <div className="container flex flex-col gap-24">
                <Feature1 />
                <Feature2 />
            </div>
        </section>
    );
}

export default Features;