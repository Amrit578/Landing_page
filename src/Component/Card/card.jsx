import './card.css'
const Card = () =>{
    return(
        <>
            <div className="card">
                <div className='first-card'>
                    <img src={require('./Card-image/layout-11.png')} alt="first-card-image" />
                    <h2>Multiple Modern Layouts</h2>
                    <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.</p>
                </div>

                <div className='first-card'>
                    <img src={require('./Card-image/layers-3.png')} alt="first-card-image" />
                    <h2>Built with Bootstrap 4</h2>
                    <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.</p>
                </div>

                <div className='first-card'>
                    <img src={require('./Card-image/icon.png')} alt="first-card-image" />
                    <h2>Fully Responsive</h2>
                    <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.</p>
                </div>
                
            </div>

          
        </>
    )
}

export default Card;