import { useState } from 'react';
import Logo from '../../assets/images/logo.png';

export default function Navbar(){

    const [state, setState] = useState({
        menuMobile: false,
    });

    const showMenuMobile = (e) => {
        e.preventDefault();
        setState({
            menuMobile: !state.menuMobile,
        });
    }

    const menuItems = ['Home', 'Play Together', 'Explore'];
    const menu = menuItems.map(m =>  <li key={m}><a href="#0" className="navbar_link">{m}</a></li> ); 

    return(
        <nav className="bg-gray-800 flex justify-between lg:justify-start items-center">
            <div className="logo p-2 w-1/6">
                <img src={ Logo } width="100" alt="logo" />
            </div>

            { /* Menu full width */}
            <div className="links lg:block hidden w-1/6 md:w-4/6 text-slate-400">
                <ul className="menu flex items-center justify-center gap-5">
                    {menu}

                    <li><a href="#0" className="navbar_link_bowser">Bowser Fury</a></li>
                    <li><a href="#0" className="navbar_link_buy">Buy Now</a></li>

                </ul>
            </div> 


            { /* Menu full mobil */}
            <div className="links block lg:hidden w-1/6 lg:w-4/6 text-slate-400 text-right">
                <a href="#0" onClick={ showMenuMobile } className="link p-2 m-2 font-bold border-2 border-gray-400 rounded-md" id="mobile-menu">Menu</a>
                <ul className={ state.menuMobile ? 'links mt-4 w-full absolute z-50 left-0 text-center bg-gray-800' : 'hidden' }>
                    {menu}

                    <li><a href="#0" className="my-4 inline-block navbar_link_bowser">Bowser Fury</a></li>
                    <li><a href="#0" className="my-4 inline-block navbar_link_buy">Buy Now</a></li>

                </ul>
            </div>

        </nav>
    );
}