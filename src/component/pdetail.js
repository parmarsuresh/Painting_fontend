import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import { useNavigate } from "react-router-dom";
import "../public/css/allimgcss.css";



const Pdetail = (props) => {
     let { id } = useParams();
     const [Id, Idf] = useState();
     const [pdata, pdataf] = useState();
     const [pimg, pimgf] = useState([]);
     let navigate = useNavigate();


     const add = () => {
          var E = document.querySelectorAll(".product");
          var len = E.length;
          for (let i = 0; i < len; i++) {
               E[i].onclick = () => {
                    console.log(E[i])
                    var Nimg = E[i].children[0].getAttribute("src");
                    var Size = E[i].children[1].innerHTML;
                    var Name = E[i].children[2].innerHTML;
                    var price = E[i].children[3].innerHTML;
                    var id = E[i].children[4].innerHTML;

                    Idf(id);
                    document.querySelector('#setImg').src = Nimg;
                    document.querySelector('#setName').innerHTML = Name;
                    document.querySelector('#setPrice').innerHTML = price;
                    document.querySelector('#setSize').innerHTML = Size;


                    document.getElementById("pa").classList.add("active");
                    document.querySelector('.products-preview').style.display = "flex";
               }

          }


     }

     const load = () => {
          document.getElementById("pa").classList.remove("active");
          document.querySelector('.products-preview').style.display = "none";
     }


     const getPD = async () => {
          const url = `http://192.168.43.169:3000/p_detail/${id}`;
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
          const url = `http://192.168.43.169:3000/p_imgdetail/${id}`;
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
                    <div className="Container">
                         <div className="product-Container" onClick={add}>
                              {pimg.length > 0 ? pimg.map((v, index) => {
                                   return (<>
                                        <div className="product" data-name="p-1" id="dd" key={index}>
                                             <img src={require('../public/uploadimg/' + v.Profile)} alt="" className="getImg" />
                                             <h3 className="getName">size: {v.Size}</h3>
                                             <p className="getType">{v.Imgtype}</p>
                                             <div className="price getPrice"><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i> {v.Dprice}</div>
                                             <p hidden>{v._id}</p>
                                        </div>

                                   </>);
                              }) : <label style={{ "color": "red" }}>Painting not uploaded</label>
                              }
                         </div>
                    </div>
               </div>

               <div className="products-preview">
                    <div className="preview" id="pa" data-target="p-1">
                         <i className="fas fa-times" onClick={load}></i>
                         <NavLink to={'/imgDetail/' + Id} id="setLink"><img src="" alt="" id="setImg" /></NavLink>

                         <h4 id="setName"></h4>
                         <div className="stars">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                              <span id="setSize"></span>
                         </div>
                         <p id="d">Lorem ipsum dolor, sit amet consectetur adipisicing rem maiores consequuntur fugit!</p>
                         <div className="price" id="setPrice"></div>
                         <div className="buttons">
                              <a href="#" className="buy" onClick={async () => {
                                   const url = `http://192.168.43.169:3000/Addcart/${Id}`;
                                   const r = await axios.get(url);
                                   try {
                                        const pd = await r;
                                        if (pd.status === 200) {
                                             console.log(pd.data);
                                             navigate("/cart", { replace: true });
                                             props.cartf();
                                        }
                                        else {
                                             navigate("/Clogin", { replace: true });
                                        }
                                   }
                                   catch (e) {
                                        console.log(e);
                                   }
                              }}>buy now</a>

                              <NavLink to="#" className="cart" onClick={async () => {
                                   const url = `http://192.168.43.169:3000/Addcart/${Id}`;
                                   const r = await axios.get(url);
                                   try {
                                        const pd = await r;
                                        if (pd.status === 200) {
                                             console.log(pd.data);
                                             props.cartf();
                                             load();
                                        }
                                        else {
                                             navigate("/Clogin", { replace: true });
                                        }
                                   }
                                   catch (e) {
                                        console.log(e);
                                   }
                              }}>Add cart</NavLink>
                         </div>
                    </div>
               </div>
          </div>
     </>);

}

export default Pdetail;