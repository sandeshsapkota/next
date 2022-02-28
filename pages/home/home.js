import Banner from "./partials/Banner";
import Product from "./partials/Product";
import Testimonial from "./partials/Testimonial";
import News from "./partials/News";
import Service from "./partials/Service";

function Home() {
    return (
        <>
            <div>
                <Banner/>
                <Product/>
                <Service/>
                <News/>
                <Testimonial/>
            </div>
        </>
    )
}

export default Home