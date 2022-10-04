import Hero from '../../assets/images/hero.jpg';

export default function Header() {

    return(
        <>
            <section className="header">
                <img src={ Hero } alt="hero" />
            </section>

            <section>
                <div className="bg-wavePattern h-6 bg-repeat-x relative -top-2"></div>
                <div className="bg-wavePatternDots text-center p-4 flex md:flex-row flex-col gap-3 justify-center">
                  <a href="#0"  className="inline-block py-3 px-16 bg-black text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-500">Buy Now</a>  
                  <a href="#0"  className="inline-block py-3 px-16 bg-red-500 text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-500">Watch the Trailer</a>  
                </div>
                <div className="bg-wavePattern h-6 bg-repeat-x relative top-2 drop-shadow-xl"></div>
            </section>

        </>
    );
}