export default function Footer() {
    return(
        <>
        <section className="bg-black">
            <div className="bg-wavePattern bg-repeat-x h-6 relative -top-4"></div>
            <div className="container mx-auto text-center py-10 w-2/3">
                <div className="pb-5">
                    <a href="#0" className="redBtn group">
                        Customer Support
                        <span className="yellowArrow"></span>
                    </a>
                </div>

                <div class="text-white">
                    <p class="py-2">*Additional games, systems and/or accessories may be required for multiplayer mode</p> 

                    <p class="py-2">** Nintendo Switch Online membership (sold separately) and Nintendo Account required for online features. Not available in all countries. Internet access required for online features. A Nintendo Account is required to receive and redeem My Nintendo points. Terms apply. nintendo.com/switch-online. </p>

                    <p class="py-2">Game, systems, some accessories and amiibo sold separately. Visit amiibo.com for details on amiibo functionality. </p>

                    <p class="py-2">Nintendo Switch Lite plays all games that support handheld mode.</p>

                    <p class="py-2">©2013-2021 Nintendo. Super Mario and Nintendo Switch are trademarks of Nintendo.</p>
                </div>
            </div>
        </section>
        <section className="bg-white">
            <div className="bg-wavePattern bg-repeat-x h-6 relative -top-4"></div>
            <div className="text-black text-center mb-4">
                2022 - Tailwind & React by <a href="https://www.linkedin.com/in/noe-alonso-34437869/" className="hover:text-red-500 transition duration-500">Noé Alonso</a>
            </div>
        </section>
        </>
    );
}