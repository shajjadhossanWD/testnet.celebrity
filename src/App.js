import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
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
import NftDetailsPage from './components/page/Dashboard/NftDetailsPage';
import DashboardAddNft from './components/page/Dashboard/DashboardAddNft';
import MintDetails from './components/page/MintDetails/MintDetails';
import CoinbaseModal from './components/Shared/CoinbaseModal';
import EditDraftNft from './components/page/Dashboard/EditDraftNft';
import News from './components/page/News/News';
import DetailsPayNow from './components/page/MealNft/DetailsPayNow';
import PayNowPayment from './components/page/MealNft/PayNowPayment';
import ProfileProtected from './components/AdminRoute/ProfileProtected';
import MealSearchedNFT from './components/page/MealNft/MealSearchedNFT';
function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 180);
  return (
    <div className="dark-scheme de-clivus">
      <div id="wrapper">
        <ScrollToTop />
        <WalletModal />
        <CoinbaseModal />
        <Routes>
          <Route path="/" element={<Publiclayout></Publiclayout>}>
            <Route path="/" element={<Landing />} />
            <Route path="/:affiliate" element={<Landing />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/india" element={<India></India>} />
            <Route path="/malaysia" element={<Malaysia></Malaysia>} />
            <Route path="/singapore" element={<Singapore></Singapore>} />
            <Route path="/souvenirnft" element={<SouvenirNFT></SouvenirNFT>} />
            <Route path="/souvenirnft/:souvenirId" element={<SouvenirDetails />} />
            <Route path="/mealnft" element={<MealNFT></MealNFT>} />
            <Route path="/mealsearchednft" element={<MealSearchedNFT />} />
            <Route path="/mealnft/:mealnId/:addressImg" element={<MealDetails expiryTimestamp={time} />} />
            <Route path="/paynow/:mealnId/:addressImg" element={<DetailsPayNow expiryTimestamp={time} />} />
            <Route path="/payNowPayment/:email/:price" element={<PayNowPayment />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/how_it_works" element={<HowItWorks />} />
            <Route path="/news" element={<News />} />
            <Route path="/profile" element={
              <ProfileProtected>
                <Profile />
              </ProfileProtected>
            } />
            <Route path="/mintednft/:id/:address" element={<MintDetails />} />
          </Route>

          <Route path="/dashboard" element={
            <AdminRoute>
              <Dashboard></Dashboard>
            </AdminRoute>

          }>
            <Route index element={<DashboardMenu></DashboardMenu>} />
            <Route path="/dashboard/admin" element={<DashboardAdmin></DashboardAdmin>} />
            <Route path="/dashboard/nftDetails" element={<NftDetailsPage />} />
            <Route path="/dashboard/adminprofile/:id" element={<DashboardAdminEditProfile></DashboardAdminEditProfile>} />
            <Route path="/dashboard/nfts" element={<DashboardNfts></DashboardNfts>} />
            <Route path="/dashboard/addnfts" element={<DashboardAddNft></DashboardAddNft>} />
            <Route path="/dashboard/nfts/editNft/:id" element={<EditNft></EditNft>} />
            <Route path="/dashboard/nfts/editDraftNft/:id" element={<EditDraftNft></EditDraftNft>} />
          </Route>

          <Route path="/login" element={<Login></Login>} />
          <Route path="/forgetpassword" element={<Forgetpassword></Forgetpassword>} />
          <Route path="/otp" element={<Otp expiryTimestamp={time}></Otp>} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          {/* /:token */}
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </div>
    </div >
  );
}

export default App;

