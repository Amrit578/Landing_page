import './header.css';
const Content = () =>{
    return(
        <>
            <div className='content'>
                <div className='left-content'>
                    <h1>Get your next landing page.</h1>
                    <p>Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</p>
                    <button className='content-button'>Start 14 Days Free Trail</button>
                    <p className='credit'>No credit card required</p>
                </div>
                <div className='right-content'>
                    <img src={require('./Content-image/Tab-image.png')} alt="tab-image" />
                </div>
            </div>
        </>
    )
}
export default Content;