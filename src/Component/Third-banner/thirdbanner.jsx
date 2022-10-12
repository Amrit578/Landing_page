import './Thirdbanner.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CircleIcon from '@mui/icons-material/Circle';
import ToggleOffSharpIcon from '@mui/icons-material/ToggleOffSharp';
const ThirdBanner = () =>{
    return(
        <>
            <div className="t-banner">
                <div className='t-heading'>
                    <h2>Customers love us</h2>
                    <p>Create custom landing pages with Omega that converts more visitors than any website.</p>
                </div>
                <div className='t-card'>
                    
                    <img src={require('./Man.png')} alt="Man-image" />
                    <div className='t-card-content'>
                        <img src={require('./t-image/shape.png')} alt="" />
                        <h2>OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.</h2>
                        <h4>Jonathan Taylor</h4>
                        <h6>CEO at Creativex</h6>
                    </div>
                    <ArrowBackIcon className='left-arrow'/>
                    <ArrowForwardIcon className='right-arrow'/>
                </div>
                <div className='t-list'>
                    <div className='t-inner-list'>
                        <h2>1M+</h2>
                        <p>Customers visit Omega every month to get their service done.</p>
                    </div>

                    <div className='t-inner-list'>
                        <h2>92%</h2>
                        <p>Satisfaction rate comes from our awesome customers.</p>
                    </div>

                    <div className='t-inner-list'>
                        <h2>4.9/5.0</h2>
                        <p>Average customer ratings we have got all over internet.</p>
                    </div>
                </div>

                <div className='t-pricing-list'>
                    <h2>Pricing & Plans</h2>
                    <p>Create custom landing pages with Omega that converts more visitors than any website.</p>
                </div>
                <div className='t-check-plan'>
                    <h4 className='check-m'>Monthly</h4>
                    <ToggleOffSharpIcon />
                    <h4 className='check-m'>Yearly</h4>

                    <button className='check-m'>Save 25%</button>
                </div>
                
            </div>
        </>
    )
}
export default ThirdBanner;