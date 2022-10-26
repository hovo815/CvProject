import React, {useEffect, useState} from "react";
import Activated from "../../components/Prcicing/Activated/Activated";
import PricingBtn from "../../components/Prcicing/PrcicingBtn/PricingBtn";
import Cards from "../../components/Prcicing/Cards/Cards"
import AXIOS from "../../services/axios";
import Vector from "../../assets/img/pricing/vector-ptichka.svg";
import Crown from "../../assets/img/crown.svg"
import "./pricing.scss";
import Wrapper from "../../components/Wrapper/Wrapper";


const Pricing: React.FC = () => {
    const [getStarted, setGetStarted] = useState(false)
    const [Social, setSocial] = useState(true);
    const [Personal, setPersonal] = useState(true);
    const [Business, setBusiness] = useState(true);
    const [DataPersonalBusiness, setDataPersonalBusiness] = useState("");

    // const setSubscriptionPost = async () => {
    //     const body = {
    //         // subscription: ,
    //         endData: DataPersonalBusiness,
    //     }
    //     try {
    //         await BaseURL.post(`subscription/buy`, {body}).then((item) => {
    //             console.log(item, "subscription")
    //         })
    //     } catch (e) {
    //         console.log(e, "Error")
    //     }
    // }

    useEffect(() => {
        const setSubscriptionPost = async () => {
            await AXIOS.get(`permission`, {})
                .then((item) => {
                    console.log(item.data, "permishion");

                })
                .catch((error) => {
                    console.log(error, "post.error");
                })
        }
        setSubscriptionPost()
    }, [])

    useEffect(() => {
        const setSubscriptionPost = async () => {
            try {
                await AXIOS.post(`subscription`, {
                    name: "Personal",
                    permissions: [],
                    cost: '6.99',
                    perYearCost: "6.99",
                }).then((res) => {
                        console.log(res.data , "subscription");

                    })
            }
            catch (e){
                console.log(e, "post.error");
            }


        }
        setSubscriptionPost()
    }, [])

    useEffect(() => {
        const setSubscriptionGet = async () => {
            await AXIOS.get(`subscription`)
                .then((item) => {
                    console.log(item.data, "res");
                })
                .catch((error) => {
                    console.log(error, "get.error");
                })
        }
        setSubscriptionGet()
    }, [])

    function dataSetPersonal() {
        let dt = new Date();
        const dt1 = dt.setMonth(dt.getMonth() + 1);
        const endData1 = JSON.stringify(dt1)
        setDataPersonalBusiness(endData1)
        setPersonal(false)
    }

    function dataSetBusiness() {
        let dt = new Date();
        const dt2 = dt.setMonth(dt.getMonth() + 1);
        const endData2 = JSON.stringify(dt2)
        setDataPersonalBusiness(endData2)
        setBusiness(false)
    }

    return (
        <Wrapper>
            <div className="pricing-main">
                <div className="pricing-main-content">
                    <div className="pricing-main-content-container">
                        <div className="pricing-main-content-container-text">
                            <h1 className="pricing-main-content-container-text-h1">Ready to get started</h1>
                            <p className="pricing-main-content-container-text-p">Choose a plan tailored to your
                                needs</p>
                        </div>
                    </div>
                    <div className="pricing-main-content-social">
                        {Social ? <div className="pricing-main-content-social-container">
                            <div className="pricing-main-content-social-container-suma">
                                <h1 className="pricing-main-content-social-container-suma-h1">Free</h1>
                                <h2 className="pricing-main-content-social-container-suma-h2">Social</h2>
                            </div>
                            <div className="pricing-main-content-social-customization">
                                <div className="pricing-main-content-social-customization-True">
                                    <img src={Vector} alt="vector"/>
                                    <p>True customization</p>
                                </div>
                                <div className="pricing-main-content-social-customization-Template">
                                    <img src={Vector} alt="vector"/>
                                    <p>Social Template</p>
                                </div>
                                <div className="pricing-main-content-social-customization-links">
                                    <img src={Vector} alt="vector"/>
                                    <p>3 social links</p>
                                </div>
                            </div>
                            <div className="pricing-main-content-ButtonPricing1">
                                <PricingBtn setGetStarted={setGetStarted}/>
                            </div>
                                {getStarted ? <Cards setSocial={setSocial}/> : null}
                        </div> : <Activated title="Social" active="Already activated"/>}
                        {Business ? <div className="pricing-main-content-Business">
                            <div className="pricing-main-content-Business-container">
                                <div className="pricing-main-content-Business-container-suma">
                                    <h1 className="pricing-main-content-Business-container-suma-h1">$9.99/m</h1>
                                    <div className="pricing-main-content-Business-container-suma-day">
                                        <img src={Crown} style={{marginTop: "15px"}} alt="crown"/>
                                        <h2 className="pricing-main-content-Business-container-suma-day-h2">Business</h2>
                                        <p className="pricing-main-content-Business-container-suma-day-p">7 day free trial</p>
                                    </div>
                                </div>
                                <div>
                                    <button className="pricing-main-content-Business-button" onClick={() => {
                                        dataSetBusiness()
                                    }}>Get Started
                                    </button>
                                </div>
                                <div>
                                    <div className="pricing-main-content-Business-vectorPtichka">
                                        <img src={Vector} alt="vector"/>
                                        <p>Business template</p>
                                    </div>
                                    <div className="pricing-main-content-Business-vectorPtichkaName">
                                        <img src={Vector} alt="vector"/>
                                        <p>Hidden company name</p>
                                    </div>
                                    <div className="pricing-main-content-Business-vectorPtichkaQr">
                                        <img src={Vector} alt="vector"/>
                                        <p>QR code</p>
                                    </div>
                                    <div className="pricing-main-content-Business-vectorPtichkaSoclink">
                                        <img src={Vector} alt="vector"/>
                                        <p>Social links</p>
                                    </div>
                                </div>
                            </div>
                        </div> : <Activated title="Business" active="Already activated"/>}
                        {Personal ? <div className="pricing-main-content-Personal">
                            <div>
                                <h1 className="pricing-main-content-Personal-h1">$6.99/m</h1>
                                <div className="pricing-main-content-Personal-day">
                                    <img src={Crown} style={{marginTop: "15px"}} alt="crown"/>
                                    <h2 className="pricing-main-content-Personal-day-h2">Personal</h2>
                                    <p className="pricing-main-content-Personal-day-p">7 day free trail</p>
                                </div>
                            </div>
                            <div>
                                <button className="pricing-main-content-Personal-button" onClick={() => {
                                    dataSetPersonal()
                                }}>Get Started
                                </button>
                            </div>
                            <div>
                                <div className="pricing-main-content-Personal-vectorPtichka1">
                                    <img src={Vector} alt="vector"/>
                                    <p>Personal Template</p>
                                </div>

                                <div className="pricing-main-content-Personal-vectorPtichka2">
                                    <img src={Vector} alt="vector"/>
                                    <p>Hidden company name</p>
                                </div>

                                <div className="pricing-main-content-Personal-vectorPtichka3">
                                    <img src={Vector} alt="vector"/>
                                    <p>QR code</p></div>
                            </div>
                        </div> : <Activated title="Personal" active="Already activated"/>}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Pricing;
