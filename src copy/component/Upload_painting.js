
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../index.css";


const UDPan = () => {
     let { id } = useParams();
     let navigate = useNavigate();
     const [pd, pdf] = useState();
     const [data, dataf] = useState();

     const getData = async () => {
          const url = `http://localhost:3000/getimg/${id}`;
          const r = await axios.get(url);
          try {
               const imd = await r;
               if (imd.status === 200) {
                    console.log(imd.data);
                    dataf(imd.data);
                    pdf(imd.data.Profile);
               }
          }
          catch (e) {
               console.log(e);
          }


     }

     const get = async () => {
          const res = await axios.get("http://localhost:3000/addP");
          try {
               var data = await res;
               console.log(data.data);
               if (data.status === 200) {
                    console.log(data.data);
                    getData();
               }
               else if (data.status === 201) {
                    navigate("/plogin", { replace: true });
               }
               else {
                    navigate("/plogin", { replace: true });
               }

          }
          catch (e) {
               console.log(e);
          }
     }

     const getdata = async () => {
          if (data.Profile === pd) {

               let url = "http://localhost:3000/upaintingD";
               const res = await axios.post(url, data);

               try {
                    var d = await res;
                    // console.log(d.data);
                    if (d.status === 200) {
                         console.log("res==>", d.data);
                         get();
                         navigate("/paccount", { replace: true });
                    }
                    else {
                         navigate("/paccount", { replace: true });
                    }

               }
               catch (e) {
                    console.log(e);
               }

          }
          else {

               let url = "http://localhost:3000/upaintingDP";
               const formdata = new FormData();
               formdata.append('myfile', data.Profile, data.Profile.name);
               formdata.append('Imgtype', data.Imgtype);
               formdata.append('Artname', data.Artname);
               formdata.append('Rprice', data.Rprice);
               formdata.append('Dprice', data.Dprice);
               formdata.append('Size', data.Size);
               formdata.append('Medium', data.Medium);
               formdata.append('Surface', data.Surface);
               formdata.append('Year', data.Year);
               formdata.append('_id', data._id);

               const response = await axios.post(url, formdata, {
                    headers: { "Content-Type": "multipart/form-data" },
               });

               try {
                    const d1 = await response;
                    console.log(d1.data);
                    if (d1.status === 200 || !d1) {
                         console.log(d1.data);
                         get();
                         navigate("/paccount", { replace: true });
                    }
                    else {
                         navigate("/paccount", { replace: true });
                    }


               }
               catch (e) {
                    window.alert("Invalid credention");
                    console.log("Invalid credention", e);
               }
          }
     }

     const insert = (e) => {
          const { name, value } = e.target;
          console.log(name);
          console.log(value);
          dataf((p) => {
               return (
                    {
                         ...p,
                         [name]: value,
                    }

               );
          });

     }
     const file = (e) => {
          const { name } = e.target;
          console.log(name);
          dataf((p) => {
               return (
                    {
                         ...p,
                         [name]: e.target.files[0],
                    }

               );
          });
     }


     function onclick(e) {
          e.preventDefault();
          getdata();

     }

     const cancle = () => {
          navigate("/paccount", { replace: true });
     }


     useEffect(() => {
          get();

     }, []);

     return (
          <>
               {!data ? null :
                    <div className="contain" >
                         <div className="tomup">

                              <form action="" method="post" className="uploadc" encType="multipart/form-data">

                                   <div className="m1a">
                                        <div class="m2a"><i className="fas fa-times" onClick={cancle} ></i></div>
                                        <div class="m2a"><i className="fas fa-check" onClick={onclick}></i></div>
                                   </div>

                                   <table>

                                        <tr>
                                             <td className="as">Upload image:</td>
                                             <td><input type="file" name="Profile" className="as1" onChange={file} /> </td>
                                        </tr>
                                        <tr>
                                             <td className="as">Type of Paintings:</td>
                                             <td><select name="Imgtype" className="as1" onChange={insert} value={data.Imgtype}   >
                                                  <option value="Couple,Romantic,Love Paintings">Couple,Romantic,Love Paintings</option>
                                                  <option value="Women,Lady,feminine Paintings">Women,Lady,feminine Paintings</option>
                                                  <option value="Fashion,Glamour Paintings">Fashion,Glamour Paintings</option>
                                                  <option value="Tribal,African Paintings">Tribal,African Paintings</option>
                                                  <option value="Mother & Bady,Baby Paintings">Mother & Bady,Baby Paintings</option>
                                                  <option value="Nude,Anatomy Paintings">Nude,Anatomy Paintings</option>
                                                  <option value="Nature,Forest,Scenery Paintings">Nature,Forest,Scenery Paintings</option>
                                                  <option value="Ship,Sea,Beach Paintings">Ship,Sea,Beach Paintings</option>
                                                  <option value="City Paintings">City Paintings</option>
                                                  <option value="Tree,Botanical Paintings">Tree,Botanical Paintings</option>
                                                  <option value="Sunrise,Sunset,Rising Sun Paintings">Sunrise,Sunset,Rising Sun Paintings</option>
                                                  <option value="Walkway,Road Paintings">Walkway,Road Paintings</option>
                                                  <option value="Rural,Village Paintings">Rural,Village Paintings</option>
                                                  <option value="Rajasthan,Rajasthani Paintings">Rajasthan,Rajasthani Paintings</option>
                                                  <option value="Traditional,Ethnic,Folk,Tribal Paintings">Traditional,Ethnic,Folk,Tribal Paintings</option>
                                                  <option value="Temples,Forts,Monuments Paintings">Temples,Forts,Monuments Paintings</option>
                                                  <option value="Horses Paintings">Horses Paintings</option>
                                                  <option value="Wildlife Paintings">Wildlife Paintings</option>
                                                  <option value="Elephant Paintings">Elephant Paintings</option>
                                                  <option value="Birds Paintings">Birds Paintings</option>
                                                  <option value="Fishes Paintings">Fishes Paintings</option>
                                                  <option value="Dog Paintings">Dog Paintings</option>
                                                  <option value="Buddha Paintings">Buddha Paintings</option>
                                                  <option value="Shiva,Mahadev,Parvati Paintings">Shiva,Mahadev,Parvati Paintings</option>
                                                  <option value="Krishana,Radha Krishna Paintings">Krishana,Radha Krishna Paintings</option>
                                                  <option value="Ganesha,Ganpati Paintings">Ganesha,Ganpati Paintings</option>
                                                  <option value="Jesus christ,Last supper,Mother Mary Paintings">Jesus christ,Last supper,Mother Mary Paintings</option>
                                                  <option value="Pure Absract Paintings">Pure Absract Paintings</option>
                                                  <option value="Geometric Absract Paintings">Geometric Absract Paintings</option>
                                                  <option value="Other Type">Other Type</option>
                                             </select>
                                             </td>
                                        </tr>

                                        <tr>
                                             <td className="as">Painter Name:</td>
                                             <td><input type="text" name="Artname" className="as1" onChange={insert} value={data.Artname} /></td>
                                        </tr>

                                        <tr>
                                             <td className="as">Real Price:</td>
                                             <td><input type="text" name="Rprice" className="as1" onChange={insert} value={data.Rprice} /></td>
                                        </tr>

                                        <tr>
                                             <td className="as">Discount:</td>
                                             <td><input type="text" name="Dprice" className="as1" onChange={insert} value={data.Dprice} /></td>
                                        </tr>


                                        <tr>
                                             <td className="as">Size:</td>
                                             <td><input type="text" name="Size" className="as1" onChange={insert} value={data.Size} /></td>
                                        </tr>


                                        <tr>
                                             <td className="as">Medium:</td>
                                             <td>
                                                  <select name="Medium" className="as1" onChange={insert} value={data.Medium}>
                                                       <option value="" selected >Meterial</option>
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


                                             </td>
                                        </tr>


                                        <tr>
                                             <td className="as">Surface:</td>
                                             <td>
                                                  <select name="Surface" className="as1" onChange={insert} value={data.Surface}>
                                                       <option value="" selected>Surface</option>
                                                       <option value="Canvas">Canvas</option>
                                                       <option value="Fabriano Sheet">Fabriano Sheet</option>
                                                       <option value="Ivory Sheet">Ivory Sheet</option>
                                                       <option value="Renaissance Watercolor paper">Renaissance Watercolor paper</option>
                                                       <option value="Rice paper">Rice paper</option>
                                                       <option value="Thick paper">Thick paper</option>
                                                       <option value="Hardboard">Hardboard</option>
                                                       <option value="Cloth">Cloth</option>
                                                       <option value="Silk">Silk</option>
                                                       <option value="WoodBoard">WoodBoard</option>
                                                       <option value="Brustro Watercolor paper">Brustro Watercolor paper</option>
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

                                             </td>
                                        </tr>

                                        <tr>
                                             <td className="as">Created In Your:</td>
                                             <td><input type="text" name="Year" className="as1" onChange={insert} value={data.Year} /></td>
                                        </tr>

                                   </table>
                              </form>
                         </div>



                    </div>
               }
          </>
     )
}
export default UDPan;