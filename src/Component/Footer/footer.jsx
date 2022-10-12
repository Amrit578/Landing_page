import './footer.css'
const Footer = () =>{
    return(
        <>
            <div className='footer'>
                <div className='footer-content'>
                    <h2>Omega</h2>
                    <p>With lots of unique blocks, you can easily build a page without coding.</p>
                </div>
                <div className='footer-content'>
                    <h2>About</h2>
                    <li>Our Mission</li>
                    <li>Our Story</li>
                    <li>Team Members</li>
                </div>
                <div className='footer-content'>
                    <h2>Learn</h2>
                    <li>Tutorials</li>
                    <li>How it works</li>
                    <li>F.A.Q</li>
                </div>
                <div className='footer-content'>
                    <h2>Stories</h2>
                    <li>Blog</li>
                    <li>Tech stories</li>
                    <li>F.A.Q</li>
                </div>
                <div className='footer-content'>
                    <h2>Contact us</h2>
                    <a href="">support@grayic.com</a>
                    <a href="">+133-394-3439-1434</a>
                </div>
            </div>
        </>
    )
}

export default Footer;