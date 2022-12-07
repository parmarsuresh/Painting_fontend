import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "../public/css/stylesheet.css";
import axios from 'axios';


const Find = () => {

     const { id } = useParams();
     const [co, cof] = useState(0);
     const [d, df] = useState(<select name="ptype" >
          <option value="" selected="">
               Figurative,People,Human Paintings
          </option>
          <option value="Couple,Romantic,Love Paintings">
               Couple,Romantic,Love Paintings
          </option>
          <option value="Women,Lady,feminine Paintings">
               Women,Lady,feminine Paintings
          </option>
          <option value="Fashion,Glamour Paintings">
               Fashion,Glamour Paintings
          </option>
          <option value="Tribal,African Paintings">
               Tribal,African Paintings
          </option>
          <option value="Mother & Bady,Baby Paintings">
               Mother &amp; Bady,Baby Paintings
          </option>
          <option value="Nude,Anatomy Paintings">
               Nude,Anatomy Paintings
          </option>
     </select>);
     const [imgtype, imgtypef] = useState();
     const [imgd, imgdf] = useState();
     const [imgd1, imgdf1] = useState();
     const [data, dataf] = useState(
          {
               ptype: "",
               price: "",
               material: "",
               surface: "",
          }
     );





     const tom = (t) => {
          if (id === '1') {
               imgtypef("Figurative, People, Human, Paintings");
               df(<>
                    <option value="Couple,Romantic,Love Paintings" >
                         Figurative, People, Human, Paintings
                    </option>
                    <option value="Couple,Romantic,Love Paintings">
                         Couple,Romantic,Love Paintings
                    </option>
                    <option value="Women,Lady,feminine Paintings">
                         Women,Lady,feminine Paintings
                    </option>
                    <option value="Fashion,Glamour Paintings">
                         Fashion,Glamour Paintings
                    </option>
                    <option value="Tribal,African Paintings">
                         Tribal,African Paintings
                    </option>
                    <option value="Mother & Bady,Baby Paintings">
                         Mother & Bady,Baby Paintings
                    </option>
                    <option value="Nude,Anatomy Paintings">
                         Nude,Anatomy Paintings
                    </option>
               </>
               );
          }
          else if (id === '2') {
               imgtypef("Landscape, Seascape & Cityscape Paintings");
               df(<>
                    <option value="Nature,Forest,Scenery Paintings">Landscape, Seascape & Cityscape Paintings</option>
                    <option value="Nature,Forest,Scenery Paintings">Nature,Forest,Scenery Paintings</option>
                    <option value="Ship,Sea,Beach Paintings">Ship,Sea,Beach Paintings</option>
                    <option value="City Paintings">City Paintings</option>
                    <option value="Tree,Botanical Paintings">Tree,Botanical Paintings</option>
                    <option value="Sunrise,Sunset,Rising Sun Paintings">Sunrise,Sunset,Rising Sun Paintings</option>
                    <option value="Walkway,Road Paintings">Walkway,Road Paintings</option>
               </>
               );
          }
          else if (id === '3') {
               imgtypef("Indian Paintings");
               df(<>
                    <option value="Rural,Village Paintings">Indian Paintings</option>
                    <option value="Rural,Village Paintings">Rural,Village Paintings</option>
                    <option value="Rajasthan,Rajasthani Paintings">Rajasthan,Rajasthani Paintings</option>
                    <option value="Traditional,Ethnic,Folk,Tribal Paintings">Traditional,Ethnic,Folk,Tribal Paintings</option>
                    <option value="Temples,Forts,Monuments Paintings">Temples,Forts,Monuments Paintings</option>

               </>);
          }
          else if (id === '4') {
               imgtypef("Animals, Birds, Fishes Paintings");
               df(<>
                    <option value="Horses Paintings">Animals, Birds, Fishes Paintings</option>
                    <option value="Horses Paintings">Horses Paintings</option>
                    <option value="Wildlife Paintings">Wildlife Paintings</option>
                    <option value="Elephant Paintings">Elephant Paintings</option>
                    <option value="Birds Paintings">Birds Paintings</option>
                    <option value="Fishes Paintings">Fishes Paintings</option>
                    <option value="Dog Paintings">Dog Paintings</option>

               </>);
          }
          else if (id === '5') {
               imgtypef("Religious, God, Goddess Paintings");
               df(<>
                    <option value="Buddha Paintings">Religious, God, Goddess Paintings</option>
                    <option value="Buddha Paintings">Buddha Paintings</option>
                    <option value="Shiva,Mahadev,Parvati Paintings">Shiva,Mahadev,Parvati Paintings</option>
                    <option value="Krishana,Radha Krishna Paintings">Krishana,Radha Krishna Paintings</option>
                    <option value="Ganesha,Ganpati Paintings">Ganesha,Ganpati Paintings</option>
                    <option value="Jesus christ,Last supper,Mother Mary Paintings">Jesus christ,Last supper,Mother Mary Paintings</option>


               </>);
          }
          else if (id === '6') {
               imgtypef("Abstract Paintings");
               df(<>
                    <option value="Pure Absract Paintings">Abstract Paintings</option>
                    <option value="Pure Absract Paintings">Pure Absract Paintings</option>
                    <option value="Geometric Absract Paintings">Geometric Absract Paintings</option>
                    <option value="Other Type">Other Type</option>
               </>);
          }
          else {
               console.log("no");
          }

     }
     const find = async () => {
          const url = `http://192.168.43.169:3000/findimg/${id}`;
          const res = await axios.get(url);
          try {
               const Limg = await res.data;
               if (Limg.length > 0) {
                    imgdf(Limg);
                    imgdf1(Limg);
               }
               else {
                    imgdf();
               }
          }
          catch (e) {
               console.log(e);
          }
          tom();
     }

     function ptype() {
          imgdf1(imgd.filter((v) => {
               return v.Imgtype === data.ptype;
          }));
     };
     function meterial() {
          imgdf1(imgd.filter((v) => {
               console.log(v.Medium);
               return v.Medium === data.material;
          }));

     }
     function price() {
          imgdf1(imgd.filter((v) => {
               if (data.price === "10000") {
                    return (v.Dprice <= data.price);
               }
               else if (data.price === "20000") {
                    return (v.Dprice > 10000 && v.Dprice <= data.price);
               }
               else if (data.price === "50000") {
                    return (v.Dprice > 20000 && v.Dprice <= data.price);
               }
               else if (data.price === "100000") {
                    return (v.Dprice > 100000 && v.Dprice <= data.price);
               }
               else if (data.price === "200000") {
                    return v.Dprice >= data.price;
               }
               else {
                    return (v.Dprice <= data.price);
               }
          }));
     }
     function surface() {
          imgdf1(imgd.filter((v) => {
               return v.Surface === data.surface;
          }));
     }

     function findimg() {
          console.log(data);
          console.log("findimg called");
          if (data.ptype !== "" && data.price === "" && data.surface === "" && data.material === "") {
               ptype();
          }
          else if (data.material !== "" && data.ptype === "" && data.price === "" && data.surface === "") {
               meterial();
          }
          else if (data.price !== "" && data.material === "" && data.ptype === "" && data.surface === "") {
               price();
          }
          else if (data.surface !== "" && data.material === "" && data.price === "" && data.ptype === "") {
               surface();
          }
          else if (data.ptype !== "" && data.price !== "" && data.material === "" && data.surface === "") {
               const va = imgd;
               imgdf1(va.filter((v) => {
                    return v.Imgtype === data.ptype;
               }).filter((v) => {
                    if (data.price === "10000") {
                         return (v.Dprice <= data.price);
                    }
                    else if (data.price === "20000") {
                         return (v.Dprice > 10000 && v.Dprice <= data.price);
                    }
                    else if (data.price === "50000") {
                         return (v.Dprice > 20000 && v.Dprice <= data.price);
                    }
                    else if (data.price === "100000") {
                         return (v.Dprice > 100000 && v.Dprice <= data.price);
                    }
                    else if (data.price === "200000") {
                         return (v.Dprice >= data.price);
                    }
                    else {
                         return (v.Dprice <= data.price);
                    }
               }));

          }
          else if (data.ptype !== "" && data.price !== "" && data.material !== "" && data.surface === "") {
               const va = imgd;
               imgdf1(va.filter((v) => {
                    return v.Imgtype === data.ptype;
               }).filter((v) => {
                    if (data.price === "10000") {
                         return (v.Dprice <= data.price);
                    }
                    else if (data.price === "20000") {
                         return (v.Dprice > 10000 && v.Dprice <= data.price);
                    }
                    else if (data.price === "50000") {
                         return (v.Dprice > 20000 && v.Dprice <= data.price);
                    }
                    else if (data.price === "100000") {
                         return (v.Dprice > 100000 && v.Dprice <= data.price);
                    }
                    else if (data.price === "200000") {
                         return v.Dprice >= data.price;
                    }
                    else {
                         return (v.Dprice <= data.price);
                    }
               }).filter((v) => {
                    return v.Medium === data.material;
               }));

          }
          else if (data.ptype !== "" && data.price !== "" && data.material !== "" && data.surface !== "") {
               const va = imgd;
               imgdf1(va.filter((v) => {
                    return v.Imgtype === data.ptype;
               }).filter((v) => {
                    if (data.price === "10000") {
                         return (v.Dprice <= data.price);
                    }
                    else if (data.price === "20000") {
                         return (v.Dprice > 10000 && v.Dprice <= data.price);
                    }
                    else if (data.price === "50000") {
                         return (v.Dprice > 20000 && v.Dprice <= data.price);
                    }
                    else if (data.price === "100000") {
                         return (v.Dprice > 100000 && v.Dprice <= data.price);
                    }
                    else if (data.price === "200000") {
                         return v.Dprice >= data.price;
                    }
                    else {
                         return (v.Dprice <= data.price);
                    }

               }).filter((v) => {
                    return v.Medium === data.material;
               }).filter((v) => {
                    return v.Surface === data.surface;
               }));

          }
          else if (data.ptype === "" && data.price !== "" && data.material !== "" && data.surface === "") {
               const va = imgd;
               imgdf1(va.filter((v) => {
                    if (data.price === "10000") {
                         return (v.Dprice <= data.price);
                    }
                    else if (data.price === "20000") {
                         return (v.Dprice > 10000 && v.Dprice <= data.price);
                    }
                    else if (data.price === "50000") {
                         return (v.Dprice > 20000 && v.Dprice <= data.price);
                    }
                    else if (data.price === "100000") {
                         return (v.Dprice > 100000 && v.Dprice <= data.price);
                    }
                    else if (data.price === "200000") {
                         return (v.Dprice >= data.price);
                    }
                    else {
                         return (v.Dprice <= data.price);
                    }

               }).filter((v) => {
                    return (v.Medium === data.material);
               }));

          }
          else if (data.ptype === "" && data.price !== "" && data.material !== "" && data.surface !== "") {
               const va = imgd;
               imgdf1(va.filter((v) => {
                    if (data.price === "10000") {
                         return (v.Dprice <= data.price);
                    }
                    else if (data.price === "20000") {
                         return (v.Dprice > 10000 && v.Dprice <= data.price);
                    }
                    else if (data.price === "50000") {
                         return (v.Dprice > 20000 && v.Dprice <= data.price);
                    }
                    else if (data.price === "100000") {
                         return (v.Dprice > 100000 && v.Dprice <= data.price);
                    }
                    else if (data.price === "200000") {
                         return (v.Dprice >= data.price);
                    }
                    else {
                         return (v.Dprice <= data.price);
                    }

               }).filter((v) => {
                    return v.Medium === data.material;
               }).filter((v) => {
                    return v.Surface === data.surface;
               }));

          }
          else if (data.material !== "" && data.surface !== "" && data.price === "" && data.ptype === "") {
               const va = imgd;
               imgdf1(va.filter((v) => {
                    return v.Medium === data.material;
               }).filter((v) => {
                    return v.Surface === data.surface;
               }));

          }
          else if (data.material !== "" && data.surface !== "" && data.price !== "" && data.ptype === "") {
               const va = imgd;
               imgdf1(va.filter((v) => {
                    return v.Medium === data.material;
               }).filter((v) => {
                    return v.Surface === data.surface;
               }).filter((v) => {
                    if (data.price === "10000") {
                         return (v.Dprice <= data.price);
                    }
                    else if (data.price === "20000") {
                         return (v.Dprice > 10000 && v.Dprice <= data.price);
                    }
                    else if (data.price === "50000") {
                         return (v.Dprice > 20000 && v.Dprice <= data.price);
                    }
                    else if (data.price === "100000") {
                         return (v.Dprice > 100000 && v.Dprice <= data.price);
                    }
                    else if (data.price === "200000") {
                         return (v.Dprice >= data.price);
                    }
                    else {
                         return (v.Dprice <= data.price);
                    }

               }));


          }
          else {
               ptype();
          }
     }


     const insert = (e) => {
          cof(1);
          const { value, name } = e.target;
          dataf((p) => {
               return ({
                    ...p,
                    [name]: value,
               });
          });

     }



     useEffect(() => {
          if (co === 0) {
               find();
          }
          else {
               findimg();
          }
          dom();
     }, [id, data]);
     const dom = () => {
          var l = document.getElementsByClassName('tw').length;
          if (l > 0) {
               clearTimeout(tom1);
          }

          console.log("length" + l);
          var r = document.getElementsByClassName('tw');

          for (let i = 0; i < l; i++) {
               r[i].onclick = () => {

                    if (r[i].style.color === "red") {
                         r[i].style.color = "white";
                    }
                    else {
                         r[i].style.color = "red";
                    }
               }

          }
     }

     var tom1 = setTimeout(() => {
          dom();
     }, 1000);
     return (<>
          <div className="contain">
               <div id="main">
                    <div className="title1">

                         {imgtype ? imgtype : null}

                    </div>

                    <div className="cons" >
                         <div className="select11s">
                              <div className="tss">
                                   <select name="ptype" onChange={insert} value={data.ptype} >
                                        {d}
                                   </select>
                              </div>
                              <div className="tss">
                                   <select name="price" onChange={insert} value={data.price}>
                                        <option value="" selected="" >
                                             Price
                                        </option>
                                        <option value={10000}>Below 10000</option>
                                        <option value={20000}>10,000 To 20,000</option>
                                        <option value={50000}>20,000 To 50,000</option>
                                        <option value={100000}>50,000 To 1,00,000</option>
                                        <option value={200000}>Above 2,00,000</option>
                                   </select>
                              </div>
                              <div className="tss">
                                   <select name="material" onChange={insert} value={data.material}>
                                        <option value="" selected="">
                                             Meterial
                                        </option>
                                        <option value="Acrylic Color">Acrylic Color</option>
                                        <option value="Ceramic">Ceramic</option>
                                        <option value="Charcoal">Charcoal</option>
                                        <option value="Enamel Color">Enamel Color</option>
                                        <option value="Fabric">Fabric</option>
                                        <option value="Ink Color">Ink Color</option>
                                        <option value="Instant Batik">Instant Batik</option>
                                        <option value="Mixed Media">Mixed Media</option>
                                        <option value="Natural Color">Natural Color</option>
                                        <option value="Oil Color">Oil Color</option>
                                        <option value="Pastel Color">Pastel Color</option>
                                        <option value="Pen Color">Pen Color</option>
                                        <option value="Pencil Color">Pencil Color</option>
                                        <option value="Photo Ink">Photo Ink</option>
                                        <option value="Poster Color">Poster Color</option>
                                        <option value="Watercolor">Watercolor</option>
                                        <option value="Ball Point Pen">Ball Point Pen</option>
                                        <option value="Graphite Pencil">Graphite Pencil</option>
                                        <option value="Coffee">Coffee</option>
                                        <option value="Sand">Sand</option>
                                        <option value="Glass">Glass</option>
                                        <option value="Wood">Wood</option>
                                        <option value="Brass">Brass</option>
                                        <option value="Marble">Marble</option>
                                        <option value="Metal">Metal</option>
                                        <option value="Bronze">Bronze</option>
                                        <option value="Paper">Paper</option>
                                   </select>
                              </div>
                              <div className="tss">
                                   <select name="surface" onChange={insert} value={data.surface}>
                                        <option value="" selected="" >
                                             Surface
                                        </option>
                                        <option value="Canvas">Canvas</option>
                                        <option value="Fabriano Sheet">Fabriano Sheet</option>
                                        <option value="Ivory Sheet">Ivory Sheet</option>
                                        <option value="Renaissance Watercolor paper">
                                             Renaissance Watercolor paper
                                        </option>
                                        <option value="Rice paper">Rice paper</option>
                                        <option value="Thick paper">Thick paper</option>
                                        <option value="Hardboard">Hardboard</option>
                                        <option value="Cloth">Cloth</option>
                                        <option value="Silk">Silk</option>
                                        <option value="WoodBoard">WoodBoard</option>
                                        <option value="Brustro Watercolor paper">
                                             Brustro Watercolor paper
                                        </option>
                                        <option value="Canson paper">Canson paper</option>
                                        <option value="Brazilian paper">Brazilian paper</option>
                                        <option value="Handmade paper">Handmade paper</option>
                                        <option value="Paper">Paper</option>
                                        <option value="canvas Board">canvas Board</option>
                                        <option value="Drawing paper">Drawing paper</option>
                                        <option value="Arches paper">Arches paper</option>
                                        <option value="Cartridge paper">Cartridge paper</option>
                                        <option value="Leaf">Leaf</option>
                                        <option value="Acrylic Glass">Acrylic Glass</option>
                                        <option value="OHP Plastic Sheets">OHP Plastic Sheets</option>
                                        <option value="Oil sheet">Oil sheet</option>
                                   </select>
                              </div>
                         </div>

                         <div className="art2s">
                              {(imgd1) ? imgd1.map((v, index) => {
                                   return (<>
                                        <div className="imgs1s" key={index}>
                                             <div className="image1s">
                                                  <div className="like1s">
                                                       <i
                                                            className="fas fa-heart tw"
                                                            style={{ textShadow: "2px 2px 10px black", "fontSize": "25px", "color": "white" }}
                                                       />
                                                  </div>
                                                  <NavLink to={'/imgDetail/' + v._id}>
                                                       <img src={require('../public/uploadimg/' + v.Profile)} alt="" />
                                                  </NavLink>
                                                  <div className="k1bs">
                                                       <label>
                                                            <a href="/Addcart" style={{ "fontSize": "15px" }}>buyNow</a>
                                                       </label>
                                                  </div>
                                             </div>
                                             <div className="detail1s">
                                                  <label><i class="fa-solid fa-indian-rupee-sign" style={{ "color": "black", "padding": "0px 5px 0px 0px" }}></i> {v.Dprice} </label>
                                                  <label><b>Size: </b>  {v.Size} </label>
                                             </div>
                                        </div>
                                   </>);
                              })
                                   : <label style={{ "color": "red" }}>Painting not uploaded</label>}

                         </div>
                    </div>
               </div>

          </div>

     </>)
}

export default Find;