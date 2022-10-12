import React from 'react';
const Navbar = () =>{
    return(
        <>
            <nav>
               <ul>
                <img src={require('./Nav-Image/omega-copy-2.png')} alt="Omage" />
                 <div>
                    <a href="#" id ='Demo'>Demos</a>
                    <a href="#">Page</a>
                    <a href="#">Support</a>
                    <button className='heading-button'>Get Started</button>
                 </div>
                </ul>
            </nav>
        </>
    )
}
export default Navbar