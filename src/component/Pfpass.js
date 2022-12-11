
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "../index.css";

const Pfpass = () => {
     let navigate = useNavigate();
     const [e, ef] = useState('');
     const [v, vf] = useState({
          "Email": "",
          "Password": "",
          "CPassword": "",
     });

     const insert = (e) => {
          const { name, value } = e.target;
          vf((p) => {
               return (
                    {
                         ...p,
                         [name]: value,
                    }

               );
          });
     }
     const getdata = async () => {
          if (v.Password === v.CPassword) {
               const response = await axios.post("http://127.0.0.1:3000/Pfpass", v, {
                    headers: { "Content-Type": "application/json" },
               });
               try {
                    const d1 = await response;
                    console.log(d1);
                    if (d1.status === 202 || !d1) {
                         ef(d1.data);
                    }
                    else {
                         navigate("/Plogin", { replace: true });
                    }
               }
               catch (e) {
                    console.log("Invalid registation", e);
               }
          }
          else {
               ef("Password is not match");
          }
     }
     const submit = (e) => {
          e.preventDefault();
          getdata();
     }
     return (<>
          <div className='form1'>
               <h1>Forget Password P</h1>
               <form>
                    <span style={{ "fontSize": 20, "color": "red", "fontFamily": "monospace", "marginBottom": "5px" }}>{e}</span>
                    <div className="form-group">
                         <label >Enter Email</label>
                         <input type="email" className="form-control" onChange={insert} value={v.Email} name="Email" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                         <label >Password</label>
                         <input type="password" className="form-control" onChange={insert} value={v.Password} name="Password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                         <label >Confirm Password</label>
                         <input type="password" className="form-control" onChange={insert} value={v.CPassword} name="CPassword" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                         <input type="checkbox" className="form-check-input" />
                         <label className="form-check-label" >Check me out</label>
                    </div><br />
                    <NavLink to="/Plogin" style={{ textDecoration: 'none' }}>  Painter Login hear</NavLink><br /><br></br>
                    <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
               </form>
          </div>
     </>)
}

export default Pfpass;


