import Navbar from './Navbar';
import Header from './Header';

export default function Layout({children}) {
    return(
        <>
            <Navbar />
            <Header />
            {children}
        </>
    );
}