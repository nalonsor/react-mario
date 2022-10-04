import { useEffect, useRef } from 'react';

import Video1 from '../assets/videos/video01.mp4';
import Video2 from '../assets/videos/video02.mp4';
import Coin from '../assets/images/coin.gif'

export default function Media() {

     const VideoPlay = useRef(null);
    const VideoPlay2 = useRef(null);

    const attemptPlay = () => {
        VideoPlay &&
        VideoPlay.current &&
        VideoPlay.current.play().catch(error => {
            console.error("Error attempting to play", error);
        });
    };
    
    const attemptPlay2 = () => {
        VideoPlay2 &&
        VideoPlay2.current &&
        VideoPlay2.current.play().catch(error => {
            console.error("Error attempting to play", error);
        });
    };

    useEffect(() => {
        attemptPlay();
        attemptPlay2();
    }, []);

    return(
        <section className="bg-patternCharactersRed py-28">
            <div className="lg:container 2xl:w-3/5 mx-auto md:flex gap-5 md:w-full p-3">
                <div className="left bg-characterMario bg-no-repeat bg-contain bg-top w-5/6 md:w-1/2 pt-52 mx-auto">
                    <div className="card  mt-72">
                        <div className="cover bg-black">
                            <video src={Video1} loop muted ref={VideoPlay}></video>
                        </div>
                        <div className="content bg-wavePattern bg-repeat-x relative -top-3">
                            <h3 className="font-black text-4xl py-10 z-10">Play Together</h3>
                            <p className="text-xl">
                                Work with (or against) your friends and family*
                            </p>

                            <a href="#0"  className="redBtn group">
                                Watch the Trailer
                                <span className="yellowArrow"></span>
                            </a>
                            <div className="dots flex justify-between p-4">
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right w-5/6 md:w-1/2 text-center mx-auto ">
                    <h2 className="font-black text-white text-6xl py-8">
                        Available Now
                    </h2>
                    <p className="font-bold text-white text-2xl mx-auto py-10 w-4/5">
                        Team up for paws-itively adorable adventure!
                    </p>


                    <p className="text-white mx-auto w-4/5">
                        Bowser is up to his old tricks again and only Mario and his friends can save the day! Use power-ups like the Super Bell, which grants catlike abilities like climbing and scratching, to overcome Bowser and his minions.
                    </p>

                    <div className="card mt-16">
                        <div className="cover bg-black">
                            <video src={Video2} loop muted ref={VideoPlay2}></video>
                        </div>
                        <div className="content bg-wavePattern bg-repeat-x relative -top-3">
                            <h3 className="font-black text-4xl py-10 z-10">Explore</h3>
                            <p className="text-xl">
                                Prowl through some popular places.
                            </p>

                            <a href="#0"  className="redBtn group">
                                Take a look!
                                <span className="yellowArrow"></span>
                            </a>
                            <div className="dots flex justify-between p-4">
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer text-center flex justify-center gap-9 pt-10">
                <img src={Coin} alt="coin" className="w-[50px] h-[50] sm:w-[80px] sm:h-[80px]" />
                <img src={Coin} alt="coin" className="w-[50px] h-[50] sm:w-[80px] sm:h-[80px]" />
                <img src={Coin} alt="coin" className="w-[50px] h-[50] sm:w-[80px] sm:h-[80px]" />
                <img src={Coin} alt="coin" className="w-[50px] h-[50] sm:w-[80px] sm:h-[80px] hidden sm:block" />
                <img src={Coin} alt="coin" className="w-[50px] h-[50] sm:w-[80px] sm:h-[80px] hidden sm:block" />
                <img src={Coin} alt="coin" className="w-[50px] h-[50] sm:w-[80px] sm:h-[80px] hidden sm:block" />
            </div>

        </section>
    );
}