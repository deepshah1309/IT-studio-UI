import "./Footer.css";
import LinkedIn from "../../Assets/linkedinsocial.svg";
import Instagram from "../../Assets/instagramsocial.svg";
import FaceBook from "../../Assets/facebooksocial.svg";
import Twitter from "../../Assets/twittersocial.svg";
const Footer=()=>{
    return (
        <div className="footer_part_it_studio">
                    <div className="footer_grid">
                            <div className="infoFooter">
                                <div className="footer_titles_head">IT STUDIO</div>
                                <div className="footer_item">
                                    115,salasar vatika,9Th
                                    <br></br>
                                    Nangal road
                                    <br></br>
                                    Jhotwara,Jaipur,Rajasthan,
                                    <br></br>
                                    India-302012
                                </div>
                            </div>
                            <div className="Sitemap">
                                <div className="footer_titles">SITE MAP</div>
                                <div className="footer_item">Home</div>
                                <div className="footer_item">About Us</div>
                                <div className="footer_item">Contact Us</div>
                                <div className="footer_item">Blog</div>
                                <div className="footer_item">Grow With Us</div>
                            </div>
                            <div className="footer_subscribe">
                                <div className="footer_titles">SUBSCRIBE</div>
                                <div className="footer_item">we will send our best strategies in juicy weekend newsletter</div>
                                <div >
                                    <div className="subscribepart">
                                        <div className="emailsubscription"><input type="email" placeholder="Email Address" ></input></div>
                                        <div className="sub_btn"><button >SUBSCRIBE</button></div>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                    <hr className="horline"></hr>
                    <div className="copyrightandmedia">
                            <div className="copyrightstatement">Copyright@ 2020 Theitstudio,  All Right Reserved By Redpositive Service OPC Pvt.Ltd</div>
                            <div className="social_flex">
                                <div><img src={LinkedIn} height="45" width="45" className="imageinsocialflex"/></div>
                                <div><img src={Instagram} heoight="45" width="45" className="imageinsocialflex"/></div>
                                <div><img src={FaceBook} height="45" width="45" className="imageinsocialflex"/></div>
                                <div><img src={Twitter} height="45" width="45" className="imageinsocialflex"/></div>
                                
                            </div>
                    </div>
        </div>
    )
}
export default Footer;