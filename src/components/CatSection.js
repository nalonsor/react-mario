import Img3 from '../assets/images/activity_img3.png';

export default function CatSection() {
    return(
        <section className="bg-yellowDots">
            <div className="bg-wavePink bg-repeat-x h-6 relative -top-4 drop-shadow-xl"></div>
            <div className="xsm:w-full sm:container w-2/3 mx-auto md:flex justify-center items-center text-center py-6">

                <div className="left xl:w-1/3 lg:w-1/2 p-5">
                    <h3 className="text-yellow-900 font-black xsm:text-3xl sm:text-4xl">Cat Transformation Center</h3>
                    <p className="py-4 text-xl">
                        We’re not kitten—transform into a cat-tastic new you!
                    </p>

                    <p>
                        <a href="#0"  className="redBtn group">
                            Meow! <span className="yellowArrow"></span>
                        </a>
                    </p>
                </div>

                <div className="right xl:2/3 lg:w-1/2">
                    <img src={Img3} alt="meow!" className="md:w-full"/>
                </div>

            </div>
        </section>
    );
}