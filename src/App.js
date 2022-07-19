import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Connect_wallet from "./components/Connect_wallet";
import Landing from "./components/layout/Landing";
import NotFound from './components/layout/NotFound/NotFound';
import Publiclayout from './components/layout/Publiclayout';
import Dashboard from './components/page/Dashboard/Dashboard';
import DashboardAdmin from './components/page/Dashboard/DashboardAdmin';
import DashboardNfts from './components/page/Dashboard/DashboardNfts';
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
        <Routes>
          <Route path="/" element={<Publiclayout></Publiclayout>}>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/connect_wallet" element={<Connect_wallet />} />
            <Route path="/india" element={<India></India>} />
            <Route path="/malaysia" element={<Malaysia></Malaysia>} />
            <Route path="/singapore" element={<Singapore></Singapore>} />
            <Route path="/souvenirnft" element={<SouvenirNFT></SouvenirNFT>} />
            <Route path="/souvenirnft/:souvenirId" element={<SouvenirDetails/>} />
            <Route path="/mealnft" element={<MealNFT></MealNFT>} />
            <Route path="/mealnft/:mealnId" element={<MealDetails/>} />
          </Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            <Route index element={<DashboardAdmin></DashboardAdmin>} />
            <Route path="/dashboard/dnfts" element={<DashboardNfts></DashboardNfts>} />
          </Route>
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
