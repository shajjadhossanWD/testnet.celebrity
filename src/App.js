import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Connect_wallet from "./components/Connect_wallet";
import Footer from './components/Footer/Footer';
import Header from "./components/layout/Header";
import Landing from "./components/layout/Landing";
import NotFound from './components/layout/NotFound/NotFound';
import Publiclayout from './components/layout/Publiclayout';
import Dashboard from './components/page/Dashboard/Dashboard';
import DashboardAdmin from './components/page/Dashboard/DashboardAdmin';
import DashboardNfts from './components/page/Dashboard/DashboardNfts';
import Home from './components/page/Home/Home';
import India from './components/page/India';
import Malaysia from './components/page/Malaysia';
import MealNFT from './components/page/MealNFT';
import Singapore from './components/page/Singapore';
import SouvenirNFT from './components/page/SouvenirNFT';

function App() {
  return (
    <div className="dark-scheme de-clivus">
      <div id="wrapper">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Publiclayout></Publiclayout>}>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/connect_wallet" element={<Connect_wallet />} />
            <Route path="/india" element={<India></India>} />
            <Route path="/malaysia" element={<Malaysia></Malaysia>} />
            <Route path="/singapore" element={<Singapore></Singapore>} />
            <Route path="/souvenirnft" element={<SouvenirNFT></SouvenirNFT>} />
            <Route path="/mealnft" element={<MealNFT></MealNFT>} />
          </Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            <Route index element={<DashboardAdmin></DashboardAdmin>} />
            <Route path="/dashboard/dnfts" element={<DashboardNfts></DashboardNfts>} />

          </Route>
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
