import './pricing-card.css'
import CheckIcon from '@mui/icons-material/Check';
const PricingCard = () =>{
    return (
        <>
        <div className='main-price-heading'>
            <div className="price-card">
               <div className='price-heading'>
                   
                    <h3 className='price-start'>Starter</h3>
                    <p className='price-para'>$19/mo</p>
                    <p>Per User</p>
                    <div className='price-list'>
                        <CheckIcon className='icon'/>
                        <h3>5 Responsive landing page</h3>
                    </div>
                    <div className='price-list'>
                        <CheckIcon className='icon'/>
                        <h3>50+ HTML Elements</h3>
                    </div>
                    <div className='price-list'>
                        <CheckIcon className='icon'/>
                        <h3>Unlimited domains</h3>
                    </div>
                    <div className='price-list'>
                        <CheckIcon className='icon'/>
                        <h3>6 months premium support</h3>
                    </div>
                    <div className='price-list'>
                        <CheckIcon className='icon'/>
                        <h3>Lifetime updates</h3>
                    </div>
                    <div className='card-trail'>Start 14 Days trails</div>
               </div>


            </div>

            <div className="price-card-2">
               <div className='price-heading'>
                   
                    <h3 className='price-start'>Starter</h3>
                    <p className='price-para'>$19/mo</p>
                    <p>Per User</p>
                    <div className='price-list'>
                        <CheckIcon className='icon'/>
                        <h3>5 Responsive landing page</h3>
                    </div>
                    <div className='price-list'>
                        <CheckIcon className='icon'/>
                        <h3>50+ HTML Elements</h3>
                    </div>
                    <div className='price-list'>
                        <CheckIcon className='icon'/>
                        <h3>Unlimited domains</h3>
                    </div>
                    <div className='price-list'>
                        <CheckIcon className='icon'/>
                        <h3>6 months premium support</h3>
                    </div>
                    <div className='price-list'>
                        <CheckIcon className='icon'/>
                        <h3>Lifetime updates</h3>
                    </div>
                    <div className='card-trail'>Start 14 Days trails</div>

               </div>

               

               
            </div>
           
        </div>
           
        
        </>
    )
}
export default PricingCard;