import './Second-Banner.css';
const SecondBanner = () =>{
    return(
        <>
            <div id='s-banner'>
                <div className='s-image'>
                    <img src={require('./S-image/bg.png')} alt="" />
                </div>
                <div className='s-banner-content'>
                    <h2>Fits everything on all your devices.</h2>
                    <p>Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</p>
                </div>
            </div>
        </>
    )
}
export default SecondBanner;