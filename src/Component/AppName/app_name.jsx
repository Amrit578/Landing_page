import './app-card.css';
const AppName = () =>{
    return (
        <>
            <hr />
            <div className='app-card'>
               
                <img src={require('./App_image/GeekWire.png')} alt="GeekWire" />
                <img src={require('./App_image/Slack.png')} alt="slack" />
                <img src={require('./App_image/envato.png')} alt="envato" />
                <img src={require('./App_image/UsaToday.png')} alt="usaToday" />
                <img src={require('./App_image/Forbes.png')} alt="Forbes" />
            </div>
        </>
    )
} 

export default AppName;