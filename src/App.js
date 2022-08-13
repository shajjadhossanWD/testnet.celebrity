import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ScrollToTop from "./components/ScrollToTop";
import Landing from "./components/layout/Landing";
import NotFound from './components/layout/NotFound/NotFound';
import Publiclayout from './components/layout/Publiclayout';
import Home from "./components/page/Home/Home";
import Connect_wallet from "./components/Connect_wallet";
import AboutUs from './components/page/AboutUs/AboutUs';
import HowItWorks from './components/page/HowItWorks/HowItWorks';
import India from "./components/page/India";
import Malaysia from "./components/page/Malaysia";
import MealDetails from "./components/page/MealNft/Details.Meal";
import MealNFT from "./components/page/MealNft/MealNFT";
import Singapore from "./components/page/Singapore";
import SouvenirDetails from "./components/page/Souvenir/Details.Souvenir";
import SouvenirNFT from "./components/page/Souvenir/SouvenirNFT";
import Dashboard from './components/page/Dashboard/Dashboard';
import DashboardAdmin from './components/page/Dashboard/DashboardAdmin';
import DashboardAdminEditProfile from './components/page/Dashboard/DashboardAdminEditProfile';
import DashboardNfts from './components/page/Dashboard/DashboardNfts';
import EditNft from "./components/page/Dashboard/EditNft";
import DashboardMenu from './components/page/Dashboard/DashboardMenu';
import Login from './components/page/Login/Login';
import Forgetpassword from './components/page/Login/Forgetpassword';
import Otp from './components/page/Login/Otp';
import WalletModal from './components/Shared/WalletModal';
import AdminRoute from './components/AdminRoute/AdminRoute';
import Profile from './components/page/Profile/Profile';
import ResetPassword from './components/page/Login/ResetPassword';
function App() {
  return (
    <div className="dark-scheme de-clivus">
      <div id="wrapper">
        <ScrollToTop />
        <WalletModal />
        <Routes>
          <Route path="/" element={<Publiclayout></Publiclayout>}>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/india" element={<India></India>} />
            <Route path="/malaysia" element={<Malaysia></Malaysia>} />
            <Route path="/singapore" element={<Singapore></Singapore>} />
            <Route path="/souvenirnft" element={<SouvenirNFT></SouvenirNFT>} />
            <Route path="/souvenirnft/:souvenirId" element={<SouvenirDetails />} />
            <Route path="/mealnft" element={<MealNFT></MealNFT>} />
            <Route path="/mealnft/:mealnId" element={<MealDetails />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/how_it_works" element={<HowItWorks />} />
            <Route path="/profile" element={<Profile></Profile>} />
          </Route>



          <Route path="/dashboard" element={
            // <AdminRoute>
            <Dashboard></Dashboard>
            // </AdminRoute>

          }>
            <Route index element={<DashboardMenu></DashboardMenu>} />
            <Route path="/dashboard/admin" element={<DashboardAdmin></DashboardAdmin>} />
            <Route path="/dashboard/adminprofile/:id" element={<DashboardAdminEditProfile></DashboardAdminEditProfile>} />
            <Route path="/dashboard/nfts" element={<DashboardNfts></DashboardNfts>} />
            <Route path="/dashboard/nfts/editNft/:id" element={<EditNft></EditNft>} />
          </Route>

          <Route path="/login" element={<Login></Login>} />
          <Route path="/forgetpassword" element={<Forgetpassword></Forgetpassword>} />
          <Route path="/otp/:token" element={<Otp></Otp>} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

