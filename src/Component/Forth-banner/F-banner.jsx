import './f-banner.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PricingCard from '../Pricing-card/Pricing-card';
const FBanner = () =>{
    return(
        <>
            
            <div className='main-f-banner'>
                <div className='f-banner'>
                <div>
                     <div className='f-banner-list'>
                        <div className='arrow'>
                         <ArrowForwardIcon className='right-arrow'/>
                         <h2>Can I use Omega for my clients?</h2>
                    </div>
                    <p>Absolutely. The Envato Theme license allows you to build a websites for personal use or for a client. User Omega for your clients.</p>
                </div>
                <div className='f-banner-list'>
                    <div className='arrow'>
                         <ArrowForwardIcon className='right-arrow'/>
                         <h2>Can I use Omega for my clients?</h2>
                    </div>
                    <p>Absolutely. The Envato Theme license allows you to build a websites for personal use or for a client. User Omega for your clients.</p>
                </div>
                
                </div>

                <div>
                <div className='f-banner-list'>
                <div className='arrow'>
                         <ArrowForwardIcon className='right-arrow'/>
                         <h2>Can I use Omega for my clients?</h2>
                    </div>
                    <p>Absolutely. The Envato Theme license allows you to build a websites for personal use or for a client. User Omega for your clients.</p>
                </div>
                <div className='f-banner-list'>
                    <div className='arrow'>
                         <ArrowForwardIcon className='right-arrow'/>
                         <h2>Can I use Omega for my clients?</h2>
                    </div>
                        <p>Absolutely. The Envato Theme license allows you to build a websites for personal use or for a client. User Omega for your clients.</p>
                </div>
                </div>

                <div>
                </div>
                </div>
                <div className='f-heading'>
                    <h2>Build Fast, Launch Faster</h2>
                    <p>Create custom landing pages with Omega that converts more visitors than any website.</p>
                    <button>Start 14 Days Free Trails</button>
                    <p className='credit'>No credit card required</p>
                </div>
                <PricingCard />
                <PricingCard />
            </div>
            
         
            
           
        </>
    )
}
export default FBanner;