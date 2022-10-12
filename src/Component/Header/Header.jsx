import './header.css';
import Navbar from './navbar';
import Content from './main-content';
const Header = () =>{
    return(
        <>
            <header>
                <Navbar />
                <Content />
                
            </header>
        </>
    )
}

export default Header;