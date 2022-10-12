import './banner.css';
import CheckIcon from '@mui/icons-material/Check';
const Banner = () =>{
    return(
        <>
           <div id="banner">
            <div className='left-content'>
                <h2>Make beautiful landing pages easily</h2>
                <p>Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</p>
                <div className='banner-list'>
                    <div className='banner-inner-list'>
                        <CheckIcon className='icon'/>
                        <h2>50+ HTML Elements</h2>
                    </div>
                    <div className='banner-inner-list'>
                        <CheckIcon className='icon'/>
                        <h2>Bootstrap 4 Framework</h2>
                    </div>
                    <div className='banner-inner-list'>
                        <CheckIcon className='icon'/>
                        <h2>6 Month Support</h2>
                    </div>
                    <div className='banner-inner-list'>
                        <CheckIcon className='icon icon-list'/>
                        <h2>Lifetime Updates</h2>
                    </div>
                </div>
            </div>
            <div className='banner-img'>
                <img src={require('./Banner-image/bg.png')} alt="slack-chat" />
            </div>
           
            </div> 
        </>
    )
}
export default Banner;