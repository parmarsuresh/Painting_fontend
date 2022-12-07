import "../public/css/about.css";
import p1 from "../image/artpieces.png";
import p2 from "../image/associatedartist.png";
import p3 from "../image/exclusive.jfif";
import p4 from "../image/customizedsize.png";
import p5 from "../image/lowesprice.jfif";
import p6 from "../image/benevolent.jfif";
import p7 from "../image/mesum.png";
import p8 from "../image/packaging.png";
import p9 from "../image/suporiorframing.jfif";
import p10 from "../image/picture and painting.jfif";
import p11 from "../image/free shopping.jfif";
import p12 from "../image/15day returen.png";
import p13 from "../image/safe and secure.jfif";
import p14 from "../image/portraint.jfif";
import p15 from "../image/since2009.jfif";
import p16 from "../image/international shopping.jfif";
const About = () => {
     return (<>
          <div className="contain">
               <br />
               <br />
               <br />
               <br />
               <center>
                    <h1 style={{ color: "rgb(16, 19, 202)" }}>
                         {" "}
                         <u>About Us</u>
                    </h1>{" "}
               </center>
               <br />
               <br />
               <div className="s1sa">
                    "it is my relentless pursuit to offer you the most enchanting experience of
                    buying of selling art online."
                    <div className="titlesa">parmar suresh</div>
               </div>
               <p className="Psa">
                    Art Master.com was founded in 2009 with primary purpose of making modern,
                    high quality artworks accessible to everyone at affordable rates. We started
                    with a small team of 2, and few hundred artworks from handful of artists.
                    Today we are a proud team of 20, and our catalogue has grown to 25000+ from
                    over 10000 artists. We are among the very few who offer framing and
                    customizations online. We have served over 15000 customers from all over the
                    world. For us art is more than just a business - it's our passion, our grit,
                    our life !
                    This Project is a very usefull.
               </p>
               <center>
                    {" "}
                    <label htmlFor="" style={{ color: "blue" }}>
                         <h1> *WHO ARE YOU USE*</h1>
                    </label>
               </center>
               <div className="chosesa">
                    <div className="s31">

                         <img src={p1} alt="" />
                         <span>25000+ART PIECES</span>
                    </div>
                    <div className="s31">
                         <img src={p2} alt="" />
                         <span>1000+ASSOCIATED ARTISTS</span>
                    </div>
                    <div className="s31">
                         <img src={p3} alt="" />
                         <span>
                              EXCLUSIVE AND LATEST <br /> ART STYLES
                         </span>
                    </div>
                    <div className="s31">
                         <img src={p4} alt="" />
                         <span>CUSTOMIZED SIZES</span>
                    </div>
                    <div className="s31">
                         <img src={p5} alt="" />
                         <span>LOWEST PRICE GUARANTEE</span>
                    </div>
                    <div className="s31">
                         <img src={p6} alt="" />
                         <span>
                              BENEVOLENT <br />
                              CUSTOMER SERVICE
                         </span>
                    </div>
                    <div className="s31">
                         <img src={p7} alt="" />
                         <span> MUSEUM QUALITY ART</span>
                    </div>
                    <div className="s31">
                         <img src={p8} alt="" />
                         <span>MILITARY GRADE PACKAGING</span>
                    </div>
                    <div className="s31">
                         <img src={p9} alt="" />
                         <span>SUPERIOR FRAMING SERVICE</span>
                    </div>
                    <div className="s31">
                         <img src={p10} alt="" />
                         <span>PICTURE TO PAINTING</span>
                    </div>
                    <div className="s31">
                         <img src={p11} alt="" />
                         <span>FREE SHIPPING IN INDIA</span>
                    </div>
                    <div className="s31">
                         <img src={p12} alt="" />
                         <span>15-DAY RETURNS</span>
                    </div>
                    <div className="s31">
                         <img src={p13} alt="" />
                         <span>
                              SAFE AND SECURE <br />
                              SSL PROTECTION
                         </span>
                    </div>
                    <div className="s31">
                         <img src={p14} alt="" />
                         <span>PORIRAITS</span>
                    </div>
                    <div className="s31">
                         <img src={p15} alt="" />
                         <span>SINCE 2009</span>
                    </div>
                    <div className="s31">
                         <img src={p16} alt="" />
                         <span>
                              INTERNATIONAL SHIPPING
                              <br /> TO 150+COUNTRIES
                         </span>
                    </div>
               </div>
          </div>

     </>)
}

export default About;