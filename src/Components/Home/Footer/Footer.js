import "./Footer.css";
import LinkedIn from "../../../Assets/linkedinsocial.svg";
import Instagram from "../../../Assets/instagramsocial.svg";
import FaceBook from "../../../Assets/facebooksocial.svg";
import Twitter from "../../../Assets/twittersocial.svg";
const Footer = () => {
  return (
    <div className="footer_part_it_studio">
      <div className="footer_grid">
        <div className="infoFooter">
          <div className="footer_titles_head">IT STUDIO</div>
          <div className="footer_item">
            <p>
              115,salasar vatika,9Th Nangal road Jhotwara,Jaipur,Rajasthan,
              India-302012
            </p>
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
          <div className="footer_item">
            we will send our best strategies in juicy weekend newsletter
          </div>
          <div>
            <div className="subscribepart">
              <div className="emailsubscription">
                <input type="email" placeholder="Email Address"></input>
              </div>
              <div className="sub_btn">
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="horline"></hr>
      <div className="copyrightandmedia">
        <div className="copyrightstatement">
          Copyright@ 2020 Theitstudio, All Right Reserved By Redpositive Service
          OPC Pvt.Ltd
        </div>
        <div className="social_flex">
          <div>
            <img src={LinkedIn} className="imageinsocialflex" />
          </div>
          <div>
            <img src={Instagram} className="imageinsocialflex" />
          </div>
          <div>
            <img src={FaceBook} className="imageinsocialflex" />
          </div>
          <div>
            <img src={Twitter} className="imageinsocialflex" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
