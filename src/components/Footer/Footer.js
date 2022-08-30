import { FaFacebook, FaInstagram, FaLinkedin, FaMedium, FaPinterest, FaTelegram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    // const [link, setLink] = useState({});
    // useEffect(() => {
    //     fetch("https://dslegends.org/api/social-links.php")
    //         .then(res => res.json())
    //         .then(data => {
    //             setLink(data)
    //         })
    // }, [])

    return (
        <>
            <div className='footerBody'>
                <div className='mainPartFooter text-center'>
                    {/* <h4 className='pb-4'>Marketplace</h4> */}
                    <div className=''>
                        <a href="https://dsl.sg/contact" target="_any" className='text-decoration-none'><span className='handleSpace text-decoration-none' style={{paddingTop: '50px'}}>Contact Us</span></a>
                        <p className='text-decoration-none made-love text-gradient'>Made with ❤ by <a href="https://dsl.sg/" target="_any" className='text-decoration-none made-love' style={{cursor: 'pointer'}}>DS Legends Pte Ltd.</a></p>
                        {/* <Link to="/souvenirnft" className='text-decoration-none'><p className='handleSpace text-decoration-none'>Celebrity Souvenir NFT</p></Link> */}
                        {/* <Link to="/mealnft" className='text-decoration-none'><p className='handleSpace text-decoration-none'>Celebrity Meal NFT</p></Link> */}
                    </div>
                </div>

                <div className='secondPartFooter'>
                    <div className='d-flex justify-content-around align-items-center flex-lg-row pt-3 pb-3 handleFlex'>
                        <div>
                            &copy; Copyright 2022 celebrity.sg
                        </div>
                        <div className='handleForWidth'>
                            <a href="https://www.facebook.com/dslsingapore" target={"_blank"} className='text-light me-3 fs-4'><FaFacebook></FaFacebook></a>
                            <a href="https://twitter.com/dslsingapore" target={"_blank"} className='text-light me-3 fs-4'><FaTwitter></FaTwitter></a>
                            <a href="https://www.instagram.com/dslsingapore" target={"_blank"} className='text-light me-3 fs-4'><FaInstagram></FaInstagram></a>
                            <a href="https://www.tiktok.com/@dslsingapore" target={"_blank"} className='text-light me-3 fs-4'><FaTiktok></FaTiktok></a>
                            <a href="https://www.linkedin.com/company/dslsingapore" target={"_blank"} className='text-light me-3 fs-4'><FaLinkedin></FaLinkedin></a>
                            <a href="https://www.pinterest.com/dslsingapore" target={"_blank"} className='text-light me-3 fs-4'><FaPinterest></FaPinterest></a>
                            <a href="https://medium.com/@dslsingapore" target={"_blank"} className='text-light me-3 fs-4 handleingCenterforSmall'><FaMedium></FaMedium></a>
                            <a href="https://t.me/dslsg" target={"_blank"} className='text-light me-3 fs-4 '><FaTelegram></FaTelegram></a>
                            <a href="https://www.youtube.com/c/DSLIVE13" target={"_blank"} className='text-light me-3 fs-4 '><FaYoutube></FaYoutube></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;