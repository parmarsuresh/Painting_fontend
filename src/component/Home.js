import axios from "axios";
import Slider from "./slider";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../public/css/allimgcss.css";


const Home = (props) => {
     const [m, mf] = useState();
     const [n, nf] = useState();
     const [f, ff] = useState();
     const [id, idf] = useState(0);
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

                    idf(id);
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
     const findimg = async () => {
          const url = "http://127.0.0.1:3000/findimgdata";
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

               <div className="Container">
                    <h3 className="title" > Mother & Bady,Baby Paintings</h3>
                    <div className="product-Container" onClick={add}>
                         {!m ? null : m.map((v, index) => {
                              return (<>

                                   <div className="product" data-name="p-1" id="dd" key={index}>
                                        <img src={require('../public/uploadimg/' + v.Profile)} alt="" className="getImg" />
                                        <h3 className="getName">size: {v.Size}</h3>
                                        <p className="getType">{v.Imgtype}</p>
                                        <div className="price getPrice"><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i> {v.Dprice}</div>
                                        <p hidden>{v._id}</p>
                                   </div>

                              </>);
                         })}
                    </div>
               </div>


               <div className="Container">
                    <h3 className="title"> Nature,Forest,Scenery Paintings </h3>
                    <div className="product-Container" onClick={add}>
                         {!n ? null : n.map((v, index) => {
                              return (<>

                                   <div className="product" data-name="p-1" id="dd" key={index}>
                                        <img src={require('../public/uploadimg/' + v.Profile)} alt="" className="getImg" />
                                        <h3 className="getName">size: {v.Size}</h3>
                                        <p className="getType">{v.Imgtype}</p>
                                        <div className="price getPrice"><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i> {v.Dprice}</div>
                                        <p hidden>{v._id}</p>
                                   </div>

                              </>);
                         })}
                    </div>
               </div>

               <div className="Container">
                    <h3 className="title"> Fashion,Glamour Paintings</h3>
                    <div className="product-Container" onClick={add}>
                         {!f ? null : f.map((v, index) => {
                              return (<>

                                   <div className="product" data-name="p-1" id="dd" key={index}>
                                        <img src={require('../public/uploadimg/' + v.Profile)} alt="" className="getImg" />
                                        <h3 className="getName">size: {v.Size}</h3>
                                        <p className="getType">{v.Imgtype}</p>
                                        <div className="price getPrice"><i className="fa-sharp fa-solid fa-indian-rupee-sign"></i> {v.Dprice}</div>
                                        <p hidden>{v._id}</p>
                                   </div>

                              </>);
                         })}
                    </div>
               </div>







               <div className="products-preview">
                    <div className="preview" id="pa" data-target="p-1">
                         <i className="fas fa-times" onClick={load}></i>
                         <NavLink to={'/imgDetail/' + id} id="setLink"><img src="" alt="" id="setImg" /></NavLink>

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
                              <a href="#" className="buy" id="buy" onClick={async () => {
                                   const url = `http://127.0.0.1:3000/Addcart/${id}`;
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
                                   const url = `http://127.0.0.1:3000/Addcart/${id}`;
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

     </>)
}

export default Home;