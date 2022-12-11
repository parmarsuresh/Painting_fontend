import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Showd from "./Showd";
import { NavLink } from "react-router-dom";
import "../index.css";

const Caccount = (props) => {
     let navigate = useNavigate();
     const [path, setpath] = useState();
     const g = async () => {
          const url = "http://127.0.0.1:3000/caccount";
          const r = await axios.get(url);
          try {
               const res = await r;
               if (res.status === 201) {
                    console.log(res.data);
                    navigate("/Clogin", { replace: true });
               }
               else {
                    console.log("res =", res.data);
                    setpath(res.data[0]);

               }
          }
          catch (e) {
               console.log(e);
          }
     }

     const logout = async () => {
          console.log("logout");
          const url = 'http://127.0.0.1:3000/clogout';
          const r = await axios.get(url)
          try {
               const res = await r;
               if (res.status === 201) {
                    console.log(res.data);
                    console.log("yes i am logout");
                    navigate("/clogin", { replace: true });
                    props.cartf();
               }
               else {
                    navigate("/clogin", { replace: true });
                    props.cartf();
               }
          }
          catch (e) {
               console.log(e);
          }
     }

     useEffect(() => {
          console.log('customber account');
          g();
     }, []);



     return (<>

          <div className="Home">
               <div className="layout">
                    <button onClick={logout} className="up">Logout </button>
                    <br />

                    <NavLink to="/UprofileC" style={{ textDecoration: 'none' }} className="up">Update Profile</NavLink>
               </div>
               {
                    !path ? <p></p> : <Showd data={path} />
               }
          </div>
     </>)
}

export default Caccount;