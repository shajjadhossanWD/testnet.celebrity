import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CertificatModal from "./CertificatModal";

function AboutUs() {
    const [data, setData]= useState([])
    const [loading, setLoading]= useState(false)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get("https://dslegends.org/api/about-dsl")
            .then(res => {
                setData(res.data)
            })
            .finally(() => setLoading(false));
    }, [])

    const handelOnclik = ()=>{
        setOpen(true)
    }
    return (
        <div style={{  backgroundColor: '#1A1A25' }}>
            <div>
                <h3  className="text-gradient text-center pt-5 text-uppercase" style={{ marginTop: '80px' }}>About Us</h3>
                <div className="small-border bg-color-2"></div>
            </div>
            <div>
              <Container>
                    {
                        loading && <h3 className='text-white about_content'>Loading...</h3>
                    }
                    <div dangerouslySetInnerHTML={{ __html: data }} className="text-white about_content"></div>
                    <button onClick={handelOnclik} class="button-18" id="CertificatModalButton" role="button">  <span>FINTECH CERTIFICATE</span> </button> 
              </Container> 
            </div>
            <CertificatModal open={open } setOpen={setOpen} />
        </div>
    )
}

export default AboutUs
