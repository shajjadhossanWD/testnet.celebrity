import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Connect_wallet from "./components/Connect_wallet";
import Footer from './components/Footer/Footer';
import Header from "./components/layout/Header";
import Landing from "./components/layout/Landing";
import NotFound from './components/layout/NotFound/NotFound';
import Home from './components/page/Home/Home';
import India from './components/page/India';
import Malaysia from './components/page/Malaysia';
import MealDetails from './components/page/MealNft/Details.Meal';
import MealNFT from './components/page/MealNft/MealNFT';
import Singapore from './components/page/Singapore';
import SouvenirDetails from './components/page/Souvenir/Details.Souvenir';
import SouvenirNFT from './components/page/Souvenir/SouvenirNFT';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className="dark-scheme de-clivus">
      <div id="wrapper">
        <ScrollToTop/>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/connect_wallet" element={<Connect_wallet />} />
          <Route path="/india" element={<India/>} />
          <Route path="/malaysia" element={<Malaysia/>} />
          <Route path="/singapore" element={<Singapore/>} />
          <Route path="/souvenirnft" element={<SouvenirNFT/>} />
          <Route path="/souvenirnft/:souvenirId" element={<SouvenirDetails/>} />
          <Route path="/mealnft" element={<MealNFT/>} />
          <Route path="/mealnft/:mealnId" element={<MealDetails/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
