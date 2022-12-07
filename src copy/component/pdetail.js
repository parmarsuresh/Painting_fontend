import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import { useNavigate } from "react-router-dom";



const Pdetail = () => {
     let { id } = useParams();
     const [pdata, pdataf] = useState();
     const [pimg, pimgf] = useState([]);
     let navigate = useNavigate();



     const getPD = async () => {
          const url = `http://localhost:3000/p_detail/${id}`;
          const r = await axios.get(url);
          try {
               const pd = await r;
               if (pd.status === 200) {
                    console.log(pd.data);
                    pdataf(pd.data);
               }
               else {
                    pdataf("");
               }
          }
          catch (e) {
               console.log(e);
          }
          getPimg();
     }


     const getPimg = async () => {
          const url = `http://localhost:3000/p_imgdetail/${id}`;
          const r = await axios.get(url);
          try {
               const pd = await r;
               if (pd.status === 200) {
                    console.log(pd.data);
                    pimgf(pd.data);
               }
               else {
                    pimgf([]);
               }
          }
          catch (e) {
               console.log(e);
          }
     }

     useEffect(() => {
          getPD();

     }, []);
     return (<>
          <div classNameName="contain">
               <div className="art1">Artists info</div>
               {
                    pdata ? <div classNameName="pro">
                         <div className="im">
                              <img src={require('../public/uploads/' + pdata.Profile)} alt="" />
                         </div>
                         <div className="info">
                              <table className="tab">
                                   <tr>
                                        <td> <i className="fas fa-paint-brush" style={{ "color": "blue" }}></i>  <label>{pdata.FirstName}  {pdata.LastName}</label></td>
                                   </tr>
                                   <tr>
                                        <td><i className="fas fa-phone-alt" style={{ "color": "blue" }}></i>  <label for="">{pdata.PhoneNumber}</label></td>
                                   </tr>
                                   <tr>
                                        <td><i className="fas fa-at" style={{ "color": "blue" }}> </i> <label for="">{pdata.Email}</label></td>
                                   </tr>
                              </table>
                         </div>
                    </div> : null
               }

               <div className="art22">
                    {
                         pimg.length > 0 ? pimg.map((v, index) => {
                              return (<>
                                   <div className="card" style={{ "width": "250px", "padding": "10px", "boxShadow": "3px 5px 20px rgb(233,33,43)", "border": "0px solid blue" }} key={index}>
                                        <NavLink to={'/imgDetail/' + v._id}>
                                             <img src={require('../public/uploadimg/' + v.Profile)} clasNames="card-img-top" alt="..." style={{ "height": "200px", "width": "100%", "padding": "10px", "borderRadius": "20px" }} />
                                        </NavLink>
                                        <div clasNames="card-body" style={{ "textAlign": "center" }}>
                                             <h5 clasNames="card-title">{v.Imgtype}</h5>
                                             <p clasNames="card-text"><i class="fa-solid fa-indian-rupee-sign" style={{ "color": "black", "padding": "0px 5px 0px 0px" }}></i>{v.Dprice}  </p>
                                             <p clasNames="card-text">  <b>Size:</b> {v.Size}</p>

                                             <button type="button" className="btn btn-danger" style={{ "width": "200px", 'fontWeight': "bold" }} onClick={async () => {
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
                              </>)
                         }) : <label style={{ "color": "red" }}>Painting not uploaded</label>

                    }
               </div>


          </div>





     </>);

}

export default Pdetail;