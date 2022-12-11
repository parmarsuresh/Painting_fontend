import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Showd from "./Showd";
import { NavLink } from "react-router-dom";
import Image from "./image";

const Paccount = () => {
     const [path, setpath] = useState();
     const [im, imf] = useState([]);
     let navigate = useNavigate();


     const listimg = async () => {
          console.log("listimg called");
          const url = "http://127.0.0.1:3000/imglist";
          const r = await axios.get(url);
          try {
               const d = await r;
               if (d.status === 200) {
                    console.log(d.data);
                    console.log(typeof d.data[0]);
                    imf(d.data);
               }
               else {
                    imf([]);
               }
          }
          catch (e) {
               console.log(e);
          }
     }

     const logout = async () => {
          console.log("deleted");
          const url = 'http://127.0.0.1:3000/plogout';;
          const r = await axios.get(url)
          try {
               const res = await r;
               if (res.status === 201) {
                    console.log(res.data);
                    navigate("/plogin", { replace: true });
               }
          }
          catch (e) {
               console.log(e);
          }
     }

     const deletf = async (id) => {

          console.log(id);
          const url = `http://127.0.0.1:3000/delimg/${id}`;
          const r = await axios.get(url);
          try {
               const data = await r;
               if (data.status === 200) {
                    console.log("yesss deleted");
                    listimg();
               }
          }
          catch (e) {
               console.log(e);
          }


     }


     useEffect(() => {

          const g = async () => {
               const url = "http://127.0.0.1:3000/paccount";
               const r = await axios.get(url);
               try {
                    const res = await r;
                    if (res.status === 201) {
                         console.log(res.data);
                         navigate("/Plogin", { replace: true });
                    }
                    else {
                         console.log("res =", res.data);
                         setpath(res.data[0]);
                         listimg();
                    }
               }
               catch (e) {
                    console.log(e);
               }
          }

          g();
     }, []);
     console.log("im ==>", im);

     return (<>
          <div className="Home">


               <div className="layout">
                    <button onClick={logout} className="up">Logout</button>
                    <NavLink to="/Uprofile" style={{ textDecoration: 'none' }} className="up">Update Profile</NavLink>
                    <NavLink to="/Addp" style={{ textDecoration: 'none' }} className="up">Add Painting</NavLink>
               </div>




               {
                    !path ? <p>hello</p> : <Showd data={path} />
               }
               <div>
                    {
                         im.length > 0 ? <div className="con"> {
                              im.map((v, index) => {
                                   return <Image key={index} value={v} dfun={deletf} />;
                              })}
                         </div> : <h4 style={{ "textAlign": "center", "marginTop": "300px", "color": "red" }}>image not found</h4>
                    }

               </div>
          </div>
     </>)
}

export default Paccount;