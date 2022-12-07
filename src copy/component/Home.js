import axios from "axios";
import Slider from "./slider";
import "../public/css/artist.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
     const [m, mf] = useState();
     const [n, nf] = useState();
     const [f, ff] = useState();
     let navigate = useNavigate();

     const findimg = async () => {
          const url = "http://localhost:3000/findimgdata";
          const r = await axios.get(url);
          try {
               const data = await r;
               if (data.status === 200) {
                    mf(data.data.filter((v) => {
                         return v.Imgtype === "Mother & Bady,Baby Paintings";
                    }));

                    ff(data.data.filter((v) => {
                         return v.Imgtype === "Fashion,Glamour Paintings";
                    }));

                    nf(data.data.filter((v) => {
                         return v.Imgtype === "Nature,Forest,Scenery Paintings";
                    }));

               }
               else {
                    console.log(data.data);
               }
          }

          catch (e) {
               console.log(e);
          }
     }
     useEffect(() => {
          findimg();
     }, []);

     return (<>
          <Slider />
          <div className="Home">
               <h3 style={{ "color": "blue", "textAlign": "center", "fontFamily": "serif", "marginTop": "60px" }}><b> Mother & Bady,Baby Paintings</b></h3>
               <div className="mother1">
                    {!m ? null : m.map((v, index) => {
                         return (<>
                              <div key={index}>
                                   <div className="Imgh">
                                        <NavLink to={'/imgDetail/' + v._id}> <img src={require('../public/uploadimg/' + v.Profile)} alt="not foud" /> </NavLink>
                                   </div>
                                   <div className="Imgtype">
                                        <span><i className="fa-solid fa-indian-rupee-sign" style={{ "color": "black", "padding": "0px 5px 0px 0px" }}></i>{v.Dprice}</span><span><b>Size:</b> {v.Size}</span>
                                   </div>
                                   <div className="Imgbuy">
                                        <button style={{ "color": "wheat", "textDecoration": "none" }} onClick={async () => {
                                             const url = `http://localhost:3000/Addcart/${v._id}`;
                                             const r = await axios.get(url);
                                             try {
                                                  const pd = await r;
                                                  if (pd.status === 200) {
                                                       console.log(pd.data);
                                                       navigate("/cart", { replace: true });
                                                       window.location.reload();
                                                  }
                                                  else {
                                                       navigate("/Clogin", { replace: true });
                                                  }
                                             }
                                             catch (e) {
                                                  console.log(e);
                                             }
                                        }}>buyNow</button>

                                   </div>
                              </div>
                         </>);
                    })

                    }
               </div>
               <h3 style={{ "color": "blue", "textAlign": "center", "fontFamily": "serif", "marginTop": "10px" }}><b>Nature,Forest,Scenery Paintings</b></h3>
               <div className="mother1">
                    {!n ? null : n.map((v, index) => {
                         return (<>
                              <div key={index}>
                                   <div className="Imgh">
                                        <NavLink to={'/imgDetail/' + v._id}>  <img src={require('../public/uploadimg/' + v.Profile)} alt="not foud" /></NavLink>
                                   </div>
                                   <div className="Imgtype">
                                        <span><i className="fa-solid fa-indian-rupee-sign" style={{ "color": "black", "padding": "0px 5px 0px 0px" }}></i>{v.Dprice}</span><span><b>Size:</b> {v.Size}</span>
                                   </div>
                                   <div className="Imgbuy">
                                        <button style={{ "color": "wheat", "textDecoration": "none" }} onClick={async () => {
                                             const url = `http://localhost:3000/Addcart/${v._id}`;
                                             const r = await axios.get(url);
                                             try {
                                                  const pd = await r;
                                                  if (pd.status === 200) {
                                                       console.log(pd.data);
                                                       navigate("/cart", { replace: true });
                                                       window.location.reload();
                                                  }
                                                  else {
                                                       navigate("/Clogin", { replace: true });
                                                  }
                                             }
                                             catch (e) {
                                                  console.log(e);
                                             }
                                        }}>buyNow</button>

                                   </div>
                              </div>
                         </>);
                    })
                    }
               </div>
               <h3 style={{ "color": "blue", "textAlign": "center", "fontFamily": "serif" }}> <b>Fashion,Glamour Paintings</b></h3>
               <div className="mother1">
                    {!f ? null : f.map((v, index) => {
                         return (<>
                              <div key={index}>
                                   <div className="Imgh">
                                        <NavLink to={'/imgDetail/' + v._id}>  <img src={require('../public/uploadimg/' + v.Profile)} alt="not foud" /></NavLink>
                                   </div>
                                   <div className="Imgtype">
                                        <span><i className="fa-solid fa-indian-rupee-sign" style={{ "color": "black", "padding": "0px 5px 0px 0px" }}></i>{v.Dprice}</span><span><b>Size:</b>  {v.Size}</span>
                                   </div>
                                   <div className="Imgbuy">
                                        <button style={{ "color": "wheat", "textDecoration": "none" }} onClick={async () => {
                                             const url = `http://localhost:3000/Addcart/${v._id}`;
                                             const r = await axios.get(url);
                                             try {
                                                  const pd = await r;
                                                  if (pd.status === 200) {
                                                       console.log(pd.data);
                                                       navigate("/cart", { replace: true });
                                                       window.location.reload();
                                                  }
                                                  else {
                                                       navigate("/Clogin", { replace: true });
                                                  }
                                             }
                                             catch (e) {
                                                  console.log(e);
                                             }
                                        }}>buyNow</button>

                                   </div>
                              </div>
                         </>);
                    })
                    }
               </div>
          </div>
     </>)
}

export default Home;