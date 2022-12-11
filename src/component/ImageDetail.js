import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../public/css/stylesheet.css";

const ImageDetail = (props) => {
     const { id } = useParams();
     const [imd, imdf] = useState();
     let navigate = useNavigate();

     useEffect(() => {
          const getdata = async () => {
               const url = `http://127.0.0.1:3000/getimg/${id}`;
               const r = await axios.get(url);
               try {
                    const pd = await r;
                    if (pd.status === 200) {
                         console.log(pd.data);
                         imdf(pd.data);
                    }
                    else {
                         imdf("");
                    }
               }
               catch (e) {
                    console.log(e);
               }
          }
          getdata();

     }, [id]);

     const tom = setInterval(() => {
          console.log("jay");
          dom();
     }, 100);


     const dom = () => {
          var mydiv = document.getElementById("imgd");
          var image = document.getElementById("img");
          if (mydiv !== undefined) {
               clearTimeout(tom);
          }
          console.log(mydiv);
          mydiv.addEventListener("mousemove", function (event) {
               console.log(event);
               var clientX = event.clientX - mydiv.offsetLeft;
               var clientY = event.clientY - mydiv.offsetTop;
               var mwidth = mydiv.offsetWidth;
               var mheight = mydiv.offsetHeight;
               clientX = clientX / mwidth * 100;
               clientY = clientY / mheight * 100;
               image.style.transformOrigin = "left,top";
               image.style.transform = 'translate(-' + clientX + '%, -' + clientY + '%) scale(2)';
          })
          mydiv.addEventListener("mouseleave", function () {
               image.style.transform = "translate(-50%,-50%) scale(1)";
          });

     }




     return (<>
          {
               imd ? <div id="dmain">
                    <div className="dm1" id="imgd">
                         <img id="img" src={require('../public/uploadimg/' + imd.Profile)} alt="no" />
                    </div>
                    <div className="dm2">
                         <b style={{ "fontSize": "30px" }}>Image Name:</b><i style={{ "color": "black" }}>
                              {imd.Imgtype}
                         </i>
                         <span className="artistN">by Artist Name:-<i style={{ "color": "red" }}>
                              {imd.Artname}
                         </i></span><br />

                         <div className="price1">
                              <span><i className="fas fa-rupee-sign" style={{ "color": "black" }}></i>{imd.Dprice}</span>
                              <span><i className="fas fa-rupee-sign" style={{ "color": "black" }}></i><s>
                                   {imd.Rprice}
                              </s></span>
                              <span className="buy" style={{ "color": "wheat", "textDecoration": "none" }} onClick={async () => {
                                   const url = `http://127.0.0.1:3000/Addcart/${imd._id}`;
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
                              }}><NavLink to="#">buyNow</NavLink></span>
                         </div>

                         <div className="share1">
                              <label>SHARE ON </label>
                              <span><NavLink to="https:\www.facebook.com" > <i className="fab fa-facebook"></i></NavLink></span>
                              <span><NavLink to="https:\www.instagram.com" ><i className="fab fa-instagram"></i></NavLink></span>
                              <span><NavLink to="https:\www.whatsapp.com" ><i className="fab fa-whatsapp"></i></NavLink></span>
                         </div>

                         <div className="addc1">

                              <NavLink to="#" style={{ "color": "wheat", "textDecoration": "none" }} onClick={async () => {
                                   const url = `http://127.0.0.1:3000/Addcart/${id}`;
                                   const r = await axios.get(url);
                                   try {
                                        const pd = await r;
                                        if (pd.status === 200) {
                                             console.log(pd.data);
                                             props.cartf();
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
                    <div className="dm3">
                         <div className="specification">spacification</div>
                         <table>
                              <tr>
                                   <td style={{ "color": "mediumblue" }}>Size:</td>
                                   <td style={{ "color": "rgb(82, 82, 95)", "fontFmily": "monospace " }}>
                                        {imd.Size}
                                   </td>
                              </tr>

                              <tr>
                                   <td style={{ "color": "mediumblue" }}>Medium:</td>
                                   <td style={{ "color": "rgb(82, 82, 95)", "fontFamily": "monospace" }}>
                                        {imd.Medium}
                                   </td>
                              </tr>

                              <tr>
                                   <td style={{
                                        "color": "mediumblue"
                                   }}>Surface:</td>
                                   <td style={{ "color": "rgb(82, 82, 95)", "fontFamily": "monospace" }}>
                                        {imd.Surface}
                                   </td>
                              </tr>

                              <tr>
                                   <td style={{ "color": "mediumblue" }}>Artwork:</td>
                                   <td style={{ "color": "rgb(82, 82, 95)", "fontFamily": "monospace" }}>Original</td>
                              </tr>

                              <tr>
                                   <td style={{ "color": "mediumblue" }}>SKU:</td>
                                   <td style={{ "color": "rgb(82, 82, 95)", "fontFamily": "monospace" }}>GAL04531793</td>
                              </tr>

                              <tr>
                                   <td style={{ "color": "mediumblue" }}>Created in:</td>
                                   <td style={{ "color": "rgb(82, 82, 95)", "fontFamily": "monospace" }}>
                                        {imd.Year}
                                   </td>
                              </tr>

                              <tr>
                                   <td style={{ "color": "mediumblue" }}>Artist Sign and Certificate:</td>
                                   <td style={{ "color": "rgb(82, 82, 95)", "fontFamily": "monospace" }}>Provided</td>
                              </tr>

                              <tr>
                                   <td style={{ "color": "mediumblue" }}>Return Policy:</td>
                                   <td style={{ "color": "rgb(82, 82, 95)", "fontFamily": "monospace" }}>7 days applicable from delivery date.
                                   </td>
                              </tr>

                              <tr>
                                   <td style={{ "color": "mediumblue" }}>Quality:</td>
                                   <td style={{ "color": "rgb(82, 82, 95)", "fontFamily": "monospace" }}>Museum Quality -100% Handpainted</td>
                              </tr>

                              <tr>
                                   <td style={{ "color": "mediumblue" }}>To be delivered as:</td>
                                   <td style={{ "color": "rgb(82, 82, 95)", "fontFamily": "monospace" }}>Rolled</td>
                              </tr>

                              <tr>
                                   <td style={{ "color": "mediumblue" }}>International shipping available Tags:</td>
                                   <td style={{ "color": "rgb(82, 82, 95)", "fontFamily": "monospace" }}>Abstract Painting</td>
                              </tr>
                         </table>
                    </div>
                    <div className="dm4">
                         <div className="specification">Discription</div>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam vero, sunt harum vel ab expedita
                              blanditiis illum reiciendis? Nihil nostrum expedita numquam obcaecati, quaerat repudiandae tempora
                              non fuga sunt.
                              Eveniet dolor dolorum necessitatibus similique vero voluptatum minima neque ducimus qui deleniti,
                              impedit aut vitae mollitia nemo molestiae ab, quaerat ea hic quibusdam rerum. Quos asperiores itaque
                              quidem officiis quam.
                              Soluta adipisci quia fugit a optio aperiam laudantium, ratione, exercitationem ea enim explicabo
                              sequi quisquam vitae autem voluptatibus tempora quae magni laboriosam dolorum modi repellat
                              dignissimos placeat ipsum quibusdam! Iusto.
                              Ut optio odio distinctio perferendis est maiores sequi laborum nemo, rerum voluptatum earum natus
                              magnam mollitia, asperiores deserunt quis quia, omnis consectetur? Iste, rem officia alias doloribus
                              voluptatem ipsa commodi.
                              Voluptatum, laborum maiores? In hic voluptate fugit, ullam odio eos fuga dolor adipisci? Eum,
                              repudiandae perspiciatis culpa beatae dignissimos tempora amet cumque tempore sapiente numquam alias
                              recusandae quia delectus deserunt?
                              Dolorem, voluptatum! Assumenda perferendis aspernatur eligendi nobis. Adipisci quis odit nisi error
                              laboriosam perferendis illo aliquam repellendus dicta enim doloremque sint quaerat non quisquam,
                              praesentium molestiae nobis necessitatibus corrupti modi!
                              Veritatis tenetur animi quaerat eos repellendus tempore eum id rerum hic aperiam quae, quibusdam
                              voluptate ad beatae aliquid voluptas repellat! Porro repudiandae reprehenderit quae molestias
                              perferendis saepe sunt blanditiis inventore.
                              Omnis hic magni reprehenderit id sed perspiciatis non numquam aliquam. Deserunt illo commodi quia
                              cupiditate quod fugit. Odit itaque et consequatur nobis officiis distinctio in aliquam, facilis
                              corporis quis error!
                              Laboriosam velit illo vero tempora animi similique, quia aspernatur delectus et esse cupiditate rem
                              placeat aut ab autem ad non labore corporis impedit enim repudiandae. Amet nihil nobis dolorem
                              repellendus!
                              Ratione, nemo cum repudiandae eaque, aliquid ut velit, repellendus magnam doloribus odit enim.
                              Nostrum minus nam, officia esse eligendi perferendis reiciendis suscipit nemo fuga consectetur fugit
                              error voluptatem minima quibusdam.
                         </p>
                    </div>
               </div> : null

          }

     </>);

}

export default ImageDetail;