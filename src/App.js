import Header from './Component/Header/Header';
import Card from './Component/Card/card'
import AppName from './Component/AppName/app_name';
import Banner from './Component/Banner/banner';
import SecondBanner from './Component/Second-banner/SecondBanner';
import ThirdBanner from './Component/Third-banner/thirdbanner';
import FBanner from './Component/Forth-banner/F-banner';
import Footer from './Component/Footer/footer';
import './App.css';
function App() {
  return (
    <>
      <Header />
      <Card />
      <AppName />
      <Banner />
      <SecondBanner />
      <ThirdBanner />
      <FBanner />
      <Footer />
    </> 
  );
}

export default App;
